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

    const SPACING = 38
    const cols = Math.ceil(canvas.width / SPACING) + 2
    const rows = Math.ceil(canvas.height / SPACING) + 2

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.035

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING
          const y = j * SPACING

          // Distance to mouse cursor
          const dx = x - mouseX
          const dy = y - mouseY
          const dist = Math.sqrt(dx * dx + dy * dy)
          const mouseEffect = Math.max(0, 1 - dist / 280)

          // High visibility breathing motion
          const phaseOffset = i * 0.45 + j * 0.55
          const breatheOpacity = 0.45 + Math.sin(time * 2.2 + phaseOffset) * 0.30 + mouseEffect * 0.25
          const baseSize = 2.8 + Math.cos(time * 2.0 + phaseOffset) * 1.2
          const finalSize = baseSize + mouseEffect * 3.5

          ctx.beginPath()
          ctx.arc(x, y, Math.max(1.2, finalSize), 0, Math.PI * 2, false)

          // High-contrast color palette: Deep Navy (#0A2540) to Glowing Electric Cyan (#00E5FF)
          const alpha = Math.min(0.95, Math.max(0.20, breatheOpacity))
          
          if (mouseEffect > 0.05) {
            ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`
            ctx.shadowColor = 'rgba(0, 229, 255, 0.8)'
            ctx.shadowBlur = 8
          } else {
            ctx.fillStyle = `rgba(10, 37, 64, ${alpha})`
            ctx.shadowColor = 'transparent'
            ctx.shadowBlur = 0
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
