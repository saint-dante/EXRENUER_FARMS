"use client"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaSeedling } from "react-icons/fa6"

const categories = [
  {
    id: "investors",
    label: "For Investors",
    description: "Learn how to grow wealth through agricultural investment.",
    questions: [
      {
        q: "What is this initiative about?",
        a: "We are a biblical agricultural movement building five commercial farm projects in Anambra State, Nigeria. We connect farmers and investors to real land, real crops and real returns — rooted in a prophetic mandate to restore Nigerian agriculture.",
      },
      {
        q: "How do I invest?",
        a: "You join our waitlist, select your preferred farm project, choose an investment tier, and complete onboarding. Our team walks you through every step.",
      },
      {
        q: "How much do I need to invest?",
        a: "Investment tiers vary by farm project. Minimum entry points are designed to be accessible while ensuring meaningful participation in farm operations.",
      },
      {
        q: "What returns can I expect?",
        a: "Returns are projected based on crop yield and market prices. Exact figures are shared during onboarding. We target competitive annual returns tied to harvest cycles.",
      },
      {
        q: "Is my investment safe?",
        a: "Every investment is backed by real land, real crops, and formal agreements. We operate with full transparency and provide regular farm updates to all investors.",
      },
      {
        q: "When is the first harvest?",
        a: "The first harvest is projected for 2027, aligned with the natural growth cycles of each crop across our five farm projects.",
      },
      {
        q: "Can I invest from outside Nigeria?",
        a: "Yes. We welcome diaspora and international investors. Our onboarding process accommodates foreign currency transfers and remote participation.",
      },
    ],
  },
  {
    id: "farmers",
    label: "For Farmers",
    description: "Understand how to join and operate within the initiative.",
    questions: [
      {
        q: "How do I become a farm operator?",
        a: "Submit an application through our waitlist. We review your background, land access, and experience before pairing you with a suitable farm project.",
      },
      {
        q: "Do I need land to participate?",
        a: "Not necessarily. We work with both farmers who have land and those who will operate on initiative-secured plots in Anambra State.",
      },
      {
        q: "What support will I receive?",
        a: "Farmers receive training, inputs, agronomy guidance, and access to our investor network — plus a share of harvest revenue.",
      },
    ],
  },
  {
    id: "general",
    label: "General",
    description: "General questions about the initiative and our mission.",
    questions: [
      {
        q: "Why Nigeria? Why Anambra?",
        a: "Nigeria has 84 million hectares of arable land with less than 40% in use. Anambra offers fertile soil, two growing seasons, and proximity to major markets.",
      },
      {
        q: "Is this a registered organisation?",
        a: "Yes. The Harvest Initiative operates as a formally registered entity. Legal and compliance documentation is available upon request during onboarding.",
      },
      {
        q: "How do I contact the team?",
        a: "Reach us through the Contact page or join the waitlist to speak directly with a member of our team.",
      },
    ],
  },
]

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState("investors")
  const [openQuestion, setOpenQuestion] = useState(0)

  const current = categories.find((c) => c.id === activeCategory)!

  return (
    <section id="insight" className="bg-white px-6 py-16">
      <div className="bg-[#f5f5f3] rounded-2xl max-w-6xl mx-auto p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left */}
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
              Frequently<br />Asked<br />Questions
            </h2>
            <p className="text-sm text-black/50">Everything you need to know before you plant with us.</p>
          </div>

          {/* Categories */}
          <div className="flex flex-col">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenQuestion(0) }}
                className={`text-left py-4 border-b border-black/10 transition-colors ${i === 0 ? "border-t" : ""}`}
              >
                <p className={`text-sm font-bold ${activeCategory === cat.id ? "text-black" : "text-black/30"}`}>
                  {cat.label}
                </p>
                <p className={`text-xs mt-0.5 ${activeCategory === cat.id ? "text-black/50" : "text-black/25"}`}>
                  {cat.description}
                </p>
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#035925] text-white text-sm font-medium px-6 py-4 rounded-full w-fit hover:bg-[#024a1e] transition-colors"
          >
            <FaSeedling size={13} />
            Let&apos;s work together
          </Link>
        </div>

        {/* Right: Accordion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            {current.questions.map((item, i) => (
              <div key={i} className="bg-white rounded-xl px-5">
                <button
                  onClick={() => setOpenQuestion(openQuestion === i ? -1 : i)}
                  className="w-full flex justify-between items-center py-4 text-left gap-4"
                >
                  <span className="text-sm font-bold text-black">{item.q}</span>
                  <span className={`text-lg flex-shrink-0 font-light transition-colors ${openQuestion === i ? "text-[#035925]" : "text-black/40"}`}>
                    {openQuestion === i ? "×" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openQuestion === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-black/60 leading-relaxed pb-4">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
