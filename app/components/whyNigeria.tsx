import Link from "next/link"
import { FaLeaf } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa6"

export default function WhyNigeria() {
  return (
    <section id="why-nigeria" className="bg-[#FAFAFA] px-8 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div className="flex flex-col justify-between gap-10">
          <span className="inline-flex items-center gap-2 text-sm text-black font-medium">
            <FaLeaf size={14} className="text-[#035925]" />
            Why Nigeria
          </span>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium text-black tracking-tight">
              Why Nigeria?
            </h2>
            <p className="text-base text-black/60 leading-relaxed max-w-sm">
              The greatest agricultural opportunity on earth is not in Silicon Valley. It is right here in West Africa.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between gap-10">
          <p className="text-base text-black/70 leading-relaxed">
            Nigeria has 84 million hectares of arable land. A population of 220 million hungry people. Two growing seasons every year. Ancient river systems that have fed communities for centuries. And yet — less than 40% of that land is being farmed today. That gap is not a problem. That gap is the opportunity.
          </p>
          <Link
            href="/why-nigeria"
            className="inline-flex items-center gap-3 text-base font-medium text-black hover:opacity-60 transition-opacity"
          >
            Read the Full Case for Nigeria
            <FaArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  )
}
