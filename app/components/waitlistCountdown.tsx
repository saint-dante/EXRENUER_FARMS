"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaSeedling } from "react-icons/fa6"

const LAUNCH_DATE = new Date("2027-01-01T00:00:00Z")

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = LAUNCH_DATE.getTime() - Date.now()
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}

export default function WaitlistCountdown() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-sm text-black font-medium border border-black/15 rounded-full px-4 py-1.5">
          <FaSeedling size={13} className="text-[#035925]" />
          The Clock is Running
        </span>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-medium text-black leading-tight">
          Your Window to Join<br />the First Wave is Closing
        </h2>

        {/* Description */}
        <p className="text-base text-black/55 leading-relaxed max-w-lg">
          The waitlist is open. The projects are ready. The land is being prepared. But the first wave of farmers and investors who get in early will have an advantage that latecomers simply cannot access. Do not wait until the fields are full.
        </p>

        {/* Waitlist closes in */}
        <p className="text-[#035925] text-[17px] font-medium mt-2">Waitlist closes in</p>

        {/* Countdown */}
        <div className="flex items-start gap-4 md:gap-6">
          {[
            { value: days, label: "DAYS" },
            { value: hours, label: "HOURS" },
            { value: minutes, label: "MINUTES" },
            { value: seconds, label: "SECONDS" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-start gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <span className="text-[36px] md:text-[48px] font-medium text-black leading-none tabular-nums">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-[10px] tracking-widest text-black/40 mt-2">{label}</span>
              </div>
              {i < 3 && <span className="text-[36px] md:text-[48px] font-light text-black leading-none mt-1">:</span>}
            </div>
          ))}
        </div>

        {/* Avatars + social proof */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative">
                <Image
                  src={`/avatars/avatar${n}.jpg`}
                  alt={`Community member ${n}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-black/60">Join 100+ farmers and investors already on the waitlist</p>
        </div>

        {/* CTA */}
        <Link
          href="/waitlist"
          className="inline-flex items-center gap-2 bg-[#035925] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#024a1e] transition-colors mt-2"
        >
          <FaSeedling size={13} />
          Let&apos;s work together
        </Link>

        <p className="text-xs text-black/40">Free to join. No commitment required. Be first in line.</p>

      </div>
    </section>
  )
}
