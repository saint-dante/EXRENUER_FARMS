import Link from "next/link"
import { FaSeedling } from "react-icons/fa6"

export default function PreFooterSection() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">
        <p className="text-[23px] md:text-[32px] font-medium text-black leading-snug">
          &ldquo;The harvest starts in the mind<br />before it starts in the soil.&rdquo;
        </p>
        <Link
          href="/waitlist"
          className="inline-flex items-center gap-2 bg-[#035925] text-white text-sm font-medium px-6 py-4 rounded-full w-fit hover:bg-[#024a1e] transition-colors"
        >
          <FaSeedling size={14} />
          Join The Harvest
        </Link>
      </div>
    </section>
  )
}
