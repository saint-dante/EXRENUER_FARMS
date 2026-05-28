import Link from "next/link"
import { FaSeedling } from "react-icons/fa6"

export default function GreenCta() {
  return (
    <section className="bg-[#035925] px-20 pt-16 pb-10 flex flex-col justify-end min-h-[240px]">
      <div className="max-w-5xl flex flex-col gap-4">
        <p className="text-[23px] md:text-[32px] font-medium text-white leading-snug">
          &ldquo;The land is here. The need is here. The time is now.&rdquo;
        </p>
        <Link
          href="/waitlist"
          className="inline-flex items-center gap-2 bg-white text-[#035925] text-sm font-medium px-6 py-4 rounded-full w-fit hover:bg-white/90 transition-colors"
        >
          <FaSeedling size={14} />
          Join The Harvest
        </Link>
      </div>
    </section>
  )
}
