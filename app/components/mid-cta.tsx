import Link from "next/link"
import { FaSeedling } from "react-icons/fa6"

export default function MidCta() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="max-w-5xl flex flex-col gap-8">
        <p className="text-[23px] md:text-[32px] font-medium text-black leading-snug">
          &ldquo;The fields are many. The harvest is certain. The question is which one you will plant in.&rdquo;
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
