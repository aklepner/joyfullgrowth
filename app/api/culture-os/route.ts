import { NextResponse } from "next/server"

const NOTION_API = "https://api.notion.com/v1"
const NOTION_VERSION = "2022-06-28"

function notionHeaders() {
  return {
    "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  }
}

async function getDbSchema(databaseId: string): Promise<Record<string, string>> {
  try {
    const res = await fetch(`${NOTION_API}/databases/${databaseId}`, {
      headers: notionHeaders(),
    })
    const data = await res.json()
    if (!res.ok) {
      console.error("[v0] Schema fetch error:", JSON.stringify(data))
      return {}
    }
    const schema: Record<string, string> = {}
    if (data.properties && typeof data.properties === "object") {
      for (const [name, prop] of Object.entries(data.properties as Record<string, Record<string, unknown>>)) {
        if (prop?.type && typeof prop.type === "string") {
          schema[name] = prop.type
        }
      }
    }
    console.log("[v0] Schema entries:", Object.keys(schema).length)
    return schema
  } catch (err) {
    console.error("[v0] getDbSchema failed:", err)
    return {}
  }
}

// Build a Notion property value based on the actual column type
function buildProp(type: string, value: string | string[] | number) {
  if (value === undefined || value === null || value === "") return null

  switch (type) {
    case "title":
      return { title: [{ text: { content: String(value).slice(0, 2000) } }] }
    case "rich_text":
      return { rich_text: [{ text: { content: String(value).slice(0, 2000) } }] }
    case "select":
      return { select: { name: String(value).slice(0, 100) } }
    case "multi_select": {
      const arr = Array.isArray(value) ? value : String(value).split(",").map(s => s.trim())
      return arr.length > 0 ? { multi_select: arr.map((v: string) => ({ name: String(v).slice(0, 100) })) } : null
    }
    case "number":
      return { number: typeof value === "number" ? value : parseFloat(String(value)) || 0 }
    case "email":
      return { email: String(value) }
    case "phone_number":
      return { phone_number: String(value) }
    case "url":
      return { url: String(value) }
    default:
      // Fallback to rich_text for unknown types
      return { rich_text: [{ text: { content: String(value).slice(0, 2000) } }] }
  }
}

export async function POST(req: Request) {
  try {
    console.log("[v0] Culture OS API called")

    const apiKey = process.env.NOTION_API_KEY
    const databaseId = process.env.NOTION_CULTURE_OS_DATABASE_ID
    if (!apiKey || !databaseId) {
      return NextResponse.json({ error: "Notion not configured" }, { status: 500 })
    }

    const body = await req.json()
    // Null-guard all three top-level objects
    const ans: Record<string, string> = body?.ans || {}
    const multi: Record<string, string[]> = body?.multi || {}
    const spec: Record<string, number> = body?.spec || {}

    console.log("[v0] Received body keys:", body ? Object.keys(body) : "EMPTY BODY")
    console.log("[v0] ans keys:", Object.keys(ans))
    console.log("[v0] multi keys:", Object.keys(multi))
    console.log("[v0] spec keys:", Object.keys(spec))
    console.log("[v0] ans.name:", ans.name)

    if (!ans.name) {
      console.log("[v0] REJECTED: Name is missing")
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    // Fetch actual database schema using raw fetch (bypasses SDK typing issues)
    console.log("[v0] Fetching Notion database schema...")
    const schema = await getDbSchema(databaseId)
    const schemaIsEmpty = Object.keys(schema).length === 0
    console.log("[v0] Database schema properties:", JSON.stringify(schema, null, 2))
    if (schemaIsEmpty) {
      console.log("[v0] WARNING: Schema is empty. Will use fallback type mapping.")
    }

    // Map of desired property name -> value to send
    const dataMap: Record<string, string | string[] | number> = {
      // Identity
      "Name": ans.name || "",
      "Email": ans.email || "",
      "Phone": ans.phone || "",
      "Location": ans.location || "",
      "Role": ans.role || "",
      "Enneagram": ans.enneagram || "",
      "Myers-Briggs": ans.mbti || "",
      "Human Design": ans.hd || "",
      "Superpower": multi.superpower || [],
      "Dollar Bill": ans.in_trust || "",
      "One Trait": ans.one_trait || "",
      "Most Admired": ans.admire_who ? `${ans.admire_who}${ans.admire_why ? ` — ${ans.admire_why}` : ""}` : "",
      "Inspired By": multi.inspired || [],
      "Outraged By": multi.outraged || [],
      // Clarity
      "Initiatives": multi.initiatives || [],
      "Involve Me When": multi.involve || [],
      "Successful When": multi.successful || [],
      "JTBD": ans.jtbd || "",
      "Zone of Genius": multi.genius || [],
      "Drains Me": multi.dontdo || [],
      "Quarterly Rocks": ans.rocks || "",
      // Communication
      "Decision Style": ans.decision_style || "",
      "Learning Style": ans.learning_style || "",
      "Favorite Tool": multi.tools || [],
      "Slack Response": ans.slack_response || "",
      "Email Response": ans.email_response || "",
      "Frustrated When": multi.frustrated || [],
      "At My Best When": multi.best || [],
      // Spectrum
      "Heads-Down vs Collab": spec.headsDown_collab,
      "Structure vs Flow": spec.structure_flow,
      "Context vs Bullets": spec.context_bullets,
      "Talk vs Think": spec.talk_think,
      "1:1 vs Group": spec.zoom_size,
      "Productivity Time": spec.prod_time,
      "Meeting Time": spec.meet_time,
      "Quick Chat Style": spec.quick_chat,
      "Energy Boost": spec.energy_boost,
      // Coherence
      "I Contribute": multi.icontribute || [],
      "I Need": multi.need || [],
      "Key Handoffs": ans.handoffs || "",
      "Friction Pattern": ans.friction_type || "",
      // Coordination
      "Ideal Cadence": multi.cadence || [],
      "Weekly Rhythm": ans.weekly_rhythm || "",
      "Accountability Style": ans.accountability || "",
      "Feedback Preference": ans.feedback || "",
      "Decisions I Own": multi.own_decisions || [],
      "Anything Else": ans.anything || "",
    }

    // Only include properties that exist in the database, with the correct type
    const properties: Record<string, unknown> = {}
    const skippedProps: string[] = []
    const includedProps: string[] = []

    for (const [propName, value] of Object.entries(dataMap)) {
      if (value === undefined || value === null || value === "") {
        skippedProps.push(`${propName} (empty value)`)
        continue
      }
      if (Array.isArray(value) && value.length === 0) {
        skippedProps.push(`${propName} (empty array)`)
        continue
      }

      let dbType = schema[propName]
      if (!dbType && !schemaIsEmpty) {
        skippedProps.push(`${propName} (not in DB schema)`)
        continue
      }

      // If schema is empty, use a sensible fallback type
      if (!dbType) {
        if (propName === "Name") dbType = "title"
        else if (typeof value === "number") dbType = "number"
        else if (Array.isArray(value)) dbType = "multi_select"
        else dbType = "rich_text"
      }

      const built = buildProp(dbType, value)
      if (built) {
        properties[propName] = built
        includedProps.push(`${propName} (${dbType})`)
      }
    }

    console.log("[v0] Included properties:", includedProps)
    console.log("[v0] Skipped properties:", skippedProps)
    console.log("[v0] Final properties count:", Object.keys(properties).length)

    if (Object.keys(properties).length === 0) {
      console.log("[v0] ERROR: No properties matched the database schema!")
      return NextResponse.json({ error: "No properties matched database schema", schema, dataMapKeys: Object.keys(dataMap) }, { status: 400 })
    }

    console.log("[v0] Creating Notion page...")
    const createRes = await fetch(`${NOTION_API}/pages`, {
      method: "POST",
      headers: notionHeaders(),
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties,
      }),
    })
    const createData = await createRes.json()

    if (!createRes.ok) {
      console.error("[v0] Notion create error:", JSON.stringify(createData))
      return NextResponse.json({ error: "Failed to save to Notion", details: createData.message }, { status: 500 })
    }

    console.log("[v0] Notion page created:", createData.id)
    return NextResponse.json({ success: true, pageId: createData.id })
  } catch (error: unknown) {
    const err = error as { message?: string }
    console.error("[v0] Notion API error:", err.message)
    return NextResponse.json(
      { error: "Failed to save to Notion", details: err.message },
      { status: 500 }
    )
  }
}
