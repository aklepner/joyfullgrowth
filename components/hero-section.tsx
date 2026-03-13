"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showForever, setShowForever] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForever(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let mounted = true

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    let progress = 0
    const animationSpeed = 0.003
    let heartPulseTime = 0
    
    const drawHeart = (x: number, y: number, size: number) => {
      ctx.save()
      ctx.translate(x, y)
      const scale = size / 10
      
      ctx.fillStyle = "rgba(239, 68, 68, 0.9)"
      ctx.strokeStyle = "rgba(239, 68, 68, 1)"
      ctx.lineWidth = 2
      
      ctx.beginPath()
      const topCurveHeight = scale * 2.5
      
      ctx.moveTo(0, scale)
      ctx.bezierCurveTo(0, scale - topCurveHeight / 2, -scale * 2, scale - topCurveHeight / 2, -scale * 2, scale)
      ctx.bezierCurveTo(-scale * 2, scale + topCurveHeight / 2, 0, scale + topCurveHeight * 1.5, 0, scale * 3)
      ctx.bezierCurveTo(0, scale + topCurveHeight * 1.5, scale * 2, scale + topCurveHeight / 2, scale * 2, scale)
      ctx.bezierCurveTo(scale * 2, scale - topCurveHeight / 2, 0, scale - topCurveHeight / 2, 0, scale)
      
      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      if (!mounted) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      progress += animationSpeed
      if (progress > 1) progress = 1

      const padding = 80
      const startX = padding
      const endX = canvas.width - padding
      const startY = canvas.height - padding
      const endY = padding

      ctx.strokeStyle = "rgba(255, 255, 255, 0.9)"
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.shadowColor = "rgba(20, 184, 166, 0.5)"
      ctx.shadowBlur = 10

      ctx.beginPath()

      for (let i = 0; i <= progress; i += 0.01) {
        const x = startX + (endX - startX) * i
        const t = i
        const exponentialCurve = Math.pow(t, 2.5)
        const y = startY - (startY - endY) * exponentialCurve

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      if (progress >= 0.95) {
        const heartX = startX + (endX - startX) * progress
        const heartT = progress
        const heartY = startY - (startY - endY) * Math.pow(heartT, 2.5)

        heartPulseTime += 0.05
        const heartScale = 20 + Math.sin(heartPulseTime) * 3
        drawHeart(heartX, heartY, heartScale)
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setTimeout(() => {
          if (mounted) {
            progress = 0
            heartPulseTime = 0
            animate()
          }
        }, 2000)
      }
    }

    animate()

    return () => {
      mounted = false
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 md:pt-20 pb-16 md:pb-20 min-h-screen grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-balance">
              Dentistry Changed{" "}
              <span
                className={`inline-block bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent transition-all duration-700 ${
                  showForever ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Forever
              </span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed text-pretty">
              Building the alternative to selling out. Where legacy, love, and sustainability replace extraction and
              exit.
            </p>
          </div>

          <div className="pt-2 md:pt-4">
            <a href="#vision" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
              Explore Our Vision
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="relative h-[250px] md:h-[400px] rounded-2xl bg-slate-900/50 border border-teal-500/20 overflow-hidden backdrop-blur-sm">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <div className="space-y-1 md:space-y-2 text-center">
              <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                $1B+
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide">In Coached DSO Revenue</div>
            </div>
            <div className="space-y-1 md:space-y-2 text-center">
              <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                1,000+
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide">Dentists Developed</div>
            </div>
            <div className="space-y-1 md:space-y-2 text-center">
              <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
                100 Year
              </div>
              <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide">Mindset, Not Quarterly Returns</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
