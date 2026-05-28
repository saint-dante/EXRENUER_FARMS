"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { FaSeedling, FaBars, FaXmark } from "react-icons/fa6"

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

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Farms", href: "/#farms" },
  { label: "Why Nigeria", href: "/#why-nigeria" },
  { label: "Insight", href: "/#insight" },
]

export default function Navbar() {
  const { days, hours, minutes, seconds } = useCountdown()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* Main pill */}
      <nav className="bg-[#035925] rounded-full flex items-center justify-between px-6 py-3 shadow-lg">

        {/* Logo + Nav links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src="/linkimage.png" alt="The Harvest Initiative" width={40} height={32} />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors group
                    ${active ? "text-white font-semibold" : "text-white/70 hover:text-white"}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-white transition-all duration-300
                      ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Countdown */}
        <div className="hidden lg:flex items-center gap-3 text-white">
          {[
            { value: days, label: "DAYS" },
            { value: hours, label: "HOURS" },
            { value: minutes, label: "MINUTES" },
            { value: seconds, label: "SECONDS" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-xl font-medium leading-none tabular-nums">
                  {String(value).padStart(2, "0")}
                </p>
                <p className="text-[8px] text-white/50 tracking-widest mt-1">{label}</p>
              </div>
              {i < 3 && <span className="text-white/30 text-base">:</span>}
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="text-sm text-white/80 hover:text-white transition-colors hidden md:block"
          >
            Contact Us
          </a>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 bg-white text-[#035925] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            <FaSeedling size={13} />
            Join The Harvest
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
          </button>
        </div>

      </nav>

      {/* Drop-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="md:hidden mt-2 bg-[#035925] rounded-2xl shadow-xl overflow-hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }, hidden: {} }}
              className="flex flex-col py-3"
            >
              {[...navLinks, { label: "Contact Us", href: "/#contact" }].map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
