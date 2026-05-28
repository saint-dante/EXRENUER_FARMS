import Link from "next/link"
import Image from "next/image"
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Farms", href: "/farms" },
  { label: "Why Nigeria", href: "/why-nigeria" },
  { label: "Seeds of Knowledge", href: "/seeds-of-knowledge" },
  { label: "Contact", href: "/contact" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#035925] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 lg:px-6 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12">
          {/* Left: Brand */}
          <div className="w-full lg:max-w-xs space-y-6">
            {/* Logo */}
            <Image src="/linkimage.png" alt="The Harvest Initiative logo" width={68} height={56} />

            <div>
              <p className="text-lg font-semibold leading-snug">
                Restoring the land.<br />
                Building generational wealth.
              </p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              A biblical agricultural movement calling farmers and investors into the greatest land opportunity of our generation — Anambra State, Nigeria.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:opacity-70 transition-opacity">
                <FaXTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                <FaFacebookF size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-70 transition-opacity">
                <FaYoutube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Right: Nav columns */}
          <div className="grid grid-cols-2 w-full gap-y-8 lg:flex lg:w-auto lg:gap-16">
            {/* Navigate */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white/50 tracking-wide">Navigate</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white hover:opacity-70 transition-opacity">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div className="space-y-4 justify-self-end lg:justify-self-auto">
              <h3 className="text-sm font-semibold text-white/50 tracking-wide">Get Involved</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/waitlist" className="text-sm text-white hover:opacity-70 transition-opacity">
                    Join The Waitlist
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white/50 tracking-wide">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white hover:opacity-70 transition-opacity">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/60 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <span>© 2026 The Harvest Initiative. All rights reserved.</span>
          <span>Built with purpose. Planted with vision..</span>
        </div>
      </div>
    </footer>
  )
}
