import Link from "next/link"
import Image from "next/image"
import { FaSeedling } from "react-icons/fa6"
import { FaArrowRight, FaArrowDown } from "react-icons/fa6"

const badges = [
  { label: "5 farm projects" },
  { label: "$7.5M portfolio" },
  { label: "Launching 2027" },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Aerial view of farmland"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Spacer for navbar */}
      <div className="relative z-10 h-24" />

      {/* Bottom content */}
      <div className="relative z-10 px-8 pb-10 flex flex-col gap-6">
        {/* Two-column bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex flex-wrap items-center gap-4">
              {badges.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-1.5 text-xs text-white/80">
                  <FaSeedling size={11} className="text-white/60" />
                  {b.label}
                </span>
              ))}
            </div>
            <h1 className="text-lg md:text-xl font-medium text-white leading-snug">
              Building Africa&apos;s next generation of smart, sustainable agribusiness.
            </h1>
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-3 text-sm text-white border-b border-white/40 pb-1 hover:border-white transition-colors w-fit"
            >
              Join The Harvest
              <FaArrowRight size={12} />
            </Link>
          </div>

          {/* Right: large tagline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white text-right leading-tight">
            The Land is<br />
            Ready.<br />
            Are You?
          </h2>
        </div>

        {/* Footer bar */}
        <div className="flex justify-between items-center pt-4 border-t border-white/15 text-xs text-white/50">
          <span>Nigeria · Est · 2026</span>
          <Link href="#fields" className="inline-flex items-center gap-2 hover:text-white/80 transition-colors">
            Explore Our Fields
            <FaArrowDown size={11} />
          </Link>
        </div>
      </div>
    </section>
  )
}
