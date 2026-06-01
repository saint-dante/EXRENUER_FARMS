import Image from "next/image"
import { FaSeedling } from "react-icons/fa6"

const stats = [
  {
    prefix: "$",
    to: 7.5,
    suffix: "M",
    decimals: 1,
    label: "Total Portfolio",
    description: "Across five biblical farm projects, we cultivate, grow, and transform all lands to fit in.",
  },
  {
    prefix: "",
    to: 5,
    suffix: "",
    decimals: 0,
    label: "Farm Projects",
    description: "Garden of Eden, Boaz Field, Land of Canaan, Land of Goshen, The New Jerusalem",
  },
  {
    prefix: "",
    to: 2027,
    suffix: "",
    decimals: 0,
    label: "Launch Year",
    description: "First harvest and first investment returns strategically targeted for maximum profit.",
  },
  {
    prefix: "",
    to: 1,
    suffix: "",
    decimals: 0,
    label: "Vision",
    description: "Restoring the land while building generational wealth through agriculture and innovation.",
  },
]

export default function Scale() {
  return (
    <section id="about">
      {/* White top */}
      <div className="bg-white px-8 pt-16 pb-0">
        {/* Header */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-sm text-black font-medium border border-black/15 rounded-full px-4 py-1.5 w-fit">
              <FaSeedling size={13} className="text-[#035925]" />
              By The Numbers
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-black leading-tight">
              The Scale of What<br />We Are Building
            </h2>
          </div>
          <p className="text-base text-black/60 leading-relaxed self-end">
            Our mission is to redefine what&apos;s possible in modern farming — creating lasting value for communities, ecosystems, and future generations. Rooted in tradition, driven by innovation — we grow more than crops, we grow impact.
          </p>
        </div>

        {/* Stats card — overlaps the image below via negative margin */}
        <div className="max-w-7xl mx-auto relative z-10 bg-white rounded-2xl border border-black/8 shadow-sm mb-[-80px]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-8 space-y-3">
                <p className="text-5xl font-medium text-black leading-none">
                  {stat.prefix}{stat.decimals > 0 ? stat.to.toFixed(stat.decimals) : stat.to}{stat.suffix}
                </p>
                <p className="text-sm font-bold text-black">{stat.label}</p>
                <p className="text-xs text-black/50 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="relative h-48 md:h-64 w-full">
        <Image
          src="/thescaleimage.jpg"
          alt="The scale of our farmland"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
