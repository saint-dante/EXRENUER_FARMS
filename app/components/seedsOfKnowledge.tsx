"use client"
import { useRef, useState } from "react"
import Link from "next/link"
import { FaSeedling, FaArrowLeft, FaArrowRight } from "react-icons/fa6"

const articles = [
  {
    category: "Biblical",
    readTime: "6 min read",
    title: "The Original Mandate — Why Farming is a Kingdom Assignment",
    description:
      "Long before markets and margins, the call to cultivate was written into creation itself. We explore what scripture reveals about farming as a divine commission.",
  },
  {
    category: "Market Insights",
    readTime: "7 min read",
    title: "Why Nigeria's Agricultural Sector is the Greatest Untapped Investment Opportunity Right Now",
    description:
      "With over 84 million hectares of arable land, a young population, and rising food demand, Nigeria sits at the intersection of need and possibility.",
  },
  {
    category: "Farmer Resources",
    readTime: "5 min read",
    title: "From Soil to Sale — A Practical Guide for the Nigerian Farmer",
    description:
      "Understanding the full value chain is the difference between subsistence and sustainability. A ground-level look at what it takes to farm profitably in Nigeria.",
  },
]

export default function SeedsOfKnowledge() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.75
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" })
  }

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }

  return (
    <section className="bg-white px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top row: badge + heading + arrows */}
        <div className="flex items-start justify-between gap-6 mb-4">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm text-black font-medium border border-black/15 rounded-full px-4 py-1.5 w-fit">
              <FaSeedling size={13} className="text-[#035925]" />
              Seeds of Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-medium text-black leading-tight">
              Insights to Grow Your<br />Understanding
            </h2>
          </div>

          {/* Arrow buttons */}
          <div className="hidden md:flex items-center gap-3 pt-4 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors disabled:opacity-30 disabled:cursor-default"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors disabled:opacity-30 disabled:cursor-default"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-black/55 leading-relaxed max-w-xl mb-10">
          Whether you are a farmer, an investor or simply someone answering a call — knowledge is the seed that makes everything else possible. Here is where we plant it.
        </p>

        {/* Scrollable card row */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 -mx-6 px-6 md:-mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex-none w-[85vw] sm:w-[380px] md:w-[410px] rounded-2xl border border-black/8 overflow-hidden flex flex-col"
            >
              {/* Image placeholder */}
              <div className="h-52 bg-black/6 w-full" />

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#035925] bg-[#035925]/8 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-black/40">{article.readTime}</span>
                </div>

                <h3 className="text-sm font-semibold text-black leading-snug line-clamp-3">
                  {article.title}
                </h3>

                <p className="text-xs text-black/50 leading-relaxed line-clamp-3 flex-1">
                  {article.description}
                </p>

                <Link
                  href="#"
                  className="text-xs font-medium text-[#035925] hover:underline mt-1 w-fit"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center gap-3 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors disabled:opacity-30 disabled:cursor-default"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors disabled:opacity-30 disabled:cursor-default"
          >
            <FaArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  )
}
