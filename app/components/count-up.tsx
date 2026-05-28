"use client"
import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  to: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className,
}: CountUpProps) {
  const [value, setValue] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValue(0)
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setValue(parseFloat((eased * to).toFixed(decimals)))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    if (spanRef.current) observer.observe(spanRef.current)
    return () => observer.disconnect()
  }, [to, duration, decimals])

  return (
    <span ref={spanRef} className={className}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  )
}
