"use client"
import Link from "next/link"
import Image from "next/image"
import { FaSeedling } from "react-icons/fa6"

const farms = [
  {
    name: "Garden of Eden",
    type: "Rice Farm",
    description: "Lush paddy fields feeding communities and investors alike.",
    budgetPrefix: "$",
    budgetTo: 1.5,
    budgetSuffix: "M",
    budgetDecimals: 1,
    launchDate: "2027",
    returns: "TBA Returns",
    image: "/ourfields/img1.png",
  },
  {
    name: "Boaz Field",
    type: "Palm Oil Plantation",
    description: "Towering palm trees yielding one of Nigeria's most powerful crops.",
    budgetPrefix: "$",
    budgetTo: 1,
    budgetSuffix: "M",
    budgetDecimals: 0,
    launchDate: "2027",
    returns: "TBA Returns",
    image: "/ourfields/img2.png",
  },
  {
    name: "Land of Canaan",
    type: "Rubber Plantation",
    description: "Industrial-scale latex tapping with strong export potential.",
    budgetPrefix: "$",
    budgetTo: 1.8,
    budgetSuffix: "M",
    budgetDecimals: 1,
    launchDate: "2027",
    returns: "TBA Returns",
    image: "/ourfields/img3.png",
  },
]

export default function OurFields() {

  return (
    <section id="farms" className="bg-white px-10 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 mb-24">

        {/* Left */}
        <div className="flex flex-col justify-between gap-8">
          <span className="inline-flex items-center gap-2 text-sm text-black font-medium border border-black/15 rounded-full px-4 py-1.5 w-fit">
            <FaSeedling size={13} className="text-[#035925]" />
            Our Fields
          </span>
          <h2 className="text-2xl md:text-3xl font-medium text-black leading-tight">
            Five Biblical Farmlands.<br />
            One Unified Vision.
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between gap-7">
          <p className="text-base text-black/70 leading-relaxed">
            Each project is named after a land of abundance in Scripture — because we believe the same God who blessed those fields is blessing these ones. Every farm is a specific territory, a specific crop and a specific invitation to be part of something historic in Anambra State, Nigeria.
          </p>
          <Link
            href="/farms"
            className="inline-flex items-center gap-2 bg-[#035925] text-white text-sm font-medium px-6 py-4 rounded-full w-fit hover:bg-[#024a1e] transition-colors"
          >
            <FaSeedling size={14} />
            Explore Our Fields
          </Link>
        </div>

      </div>

      {/* Farm Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto w-full">
        {farms.map((farm) => (
          <div
            key={farm.name}
            className="relative rounded-xl overflow-hidden min-h-[400px] flex flex-col justify-between cursor-pointer"
          >
            {/* Background image */}
            <Image
              src={farm.image}
              alt={farm.name}
              fill
              className="object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(128,128,128,0.9) 0%, rgba(128,128,128,0.7) 20%, rgba(128,128,128,0.2) 70%, transparent 90%)' }} />

            {/* Type badge */}
            <div className="relative z-10 p-5">
              <span className="inline-flex items-center text-xs font-medium bg-white/80 backdrop-blur-sm text-[#035925] px-3 py-1.5 rounded-full">
                {farm.type}
              </span>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 p-5 space-y-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <div className="space-y-1">
                <h3 className="text-2xl font-medium text-white">{farm.name}</h3>
                <p className="text-xs text-white/75 leading-relaxed">{farm.description}</p>
              </div>

              {/* Stats */}
              <div className="flex items-start justify-center divide-x divide-white/20 text-white">
                <div className="pr-4 space-y-0.5">
                  <p className="text-sm font-semibold">
                    {farm.budgetPrefix}{farm.budgetDecimals > 0 ? farm.budgetTo.toFixed(farm.budgetDecimals) : farm.budgetTo}{farm.budgetSuffix}
                  </p>
                  <p className="text-[11px] text-white/60">Farm Budget</p>
                </div>
                <div className="px-4 space-y-0.5">
                  <p className="text-sm font-semibold">{farm.launchDate}</p>
                  <p className="text-[11px] text-white/60">Launch Date</p>
                </div>
                <div className="pl-4 space-y-0.5">
                  <p className="text-sm font-semibold">{farm.returns}</p>
                  <p className="text-[11px] text-white/60">Returns</p>
                </div>
              </div>

              {/* Button */}
              <Link
                href="/waitlist"
                className="block w-full text-center no-underline bg-[#035925] hover:bg-[#024a1e] transition-colors text-white text-sm font-medium py-3 rounded-3xl"
              >
                Join waitlist
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
