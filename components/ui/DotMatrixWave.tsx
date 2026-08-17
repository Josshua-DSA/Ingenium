'use client'

import { useEffect, useRef } from 'react'

export function DotMatrixWave() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let mouseX = -1000
    let mouseY = -1000

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || 600
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)

    const SPACING = 34
    const cols = Math.ceil(canvas.width / SPACING) + 2
    const rows = Math.ceil(canvas.height / SPACING) + 2

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.025

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING
          const y = j * SPACING

          // Distance to mouse cursor
          const dx = x - mouseX
          const dy = y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const mouseEffect = Math.max(0, 1 - dist / 240)

          // High contrast breathing opacity & size
          const phaseOffset = i * 0.4 + j * 0.6
          const breatheOpacity = 0.28 + Math.sin(time * 1.8 + phaseOffset) * 0.18 + mouseEffect * 0.45
          const baseSize = 2.2 + Math.cos(time * 1.5 + phaseOffset) * 0.8
          const finalSize = baseSize + mouseEffect * 2.8

          ctx.beginPath()
          ctx.arc(x, y, Math.max(1.0, finalSize), 0, Math.PI * 2, false)

          // High Contrast Dual-Tone Color Mapping (Cyan Glow on Mouse, Deep Blue Ambient)
          const opacity = Math.min(0.85, Math.max(0.15, breatheOpacity))
          if (mouseEffect > 0.1) {
            // Bright Vibrant Cyan when mouse is near
            ctx.fillStyle = `rgba(0, 150, 199, ${opacity})`
          } else {
            // High contrast Arctic Deep Blue
            ctx.fillStyle = `rgba(26, 90, 150, ${opacity})`
          }

          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
    />
  )
}
