import { FaSeedling } from "react-icons/fa6"
import CountUp from "./count-up"

const stats = [
  {
    prefix: "",
    to: 84,
    suffix: "M",
    decimals: 0,
    label: "Hectares of Arable Land",
    description: "Less than 40% currently farmed",
  },
  {
    prefix: "",
    to: 220,
    suffix: "M",
    decimals: 0,
    label: "People to Feed",
    description: "Africa's most populous nation",
  },
  {
    prefix: "$",
    to: 4.3,
    suffix: "B",
    decimals: 1,
    label: "Spent on Food Imports",
    description: "Every single year — food Nigeria could grow itself",
  },
]

export default function Stats() {
  return (
    <section className="bg-white px-8 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-3">
            <FaSeedling size={20} className="text-[#035925]" />
            <CountUp
              to={stat.to}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.decimals}
              className="text-[56px] font-medium text-black leading-none"
            />
            <p className="text-sm font-bold text-black">{stat.label}</p>
            <p className="text-sm text-black/50">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
