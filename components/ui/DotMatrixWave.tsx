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
    let count = 0

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || 450
    }

    resize()
    window.addEventListener('resize', resize)

    const SEPARATION = 35
    const AMOUNT_X = 45
    const AMOUNT_Y = 25

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      count += 0.04

      const startX = (canvas.width - AMOUNT_X * SEPARATION) / 2
      const startY = (canvas.height - AMOUNT_Y * SEPARATION) / 2 + 50

      for (let ix = 0; ix < AMOUNT_X; ix++) {
        for (let iy = 0; iy < AMOUNT_Y; iy++) {
          const x = startX + ix * SEPARATION
          const y = startY + iy * SEPARATION + Math.sin((ix + count) * 0.3) * 15 + Math.sin((iy + count) * 0.5) * 15

          const size = (Math.sin((ix + count) * 0.3) + 1) * 1.8 + (Math.sin((iy + count) * 0.5) + 1) * 1.5

          ctx.beginPath()
          ctx.arc(x, y, Math.max(0.8, size), 0, Math.PI * 2, false)

          // Color gradient from cyan (#00f2fe) to violet (#7c2596)
          const ratio = ix / AMOUNT_X
          if (ratio < 0.5) {
            ctx.fillStyle = `rgba(0, 242, 254, ${0.25 + ratio * 0.4})`
          } else {
            ctx.fillStyle = `rgba(124, 37, 150, ${0.3 + (1 - ratio) * 0.4})`
          }

          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  )
}
