import Hero from "./components/hero"
import Scale from "./components/scale"
import OurFields from "./components/ourFields"
import MidSection from "./components/midSection"
import WhyNigeria from "./components/whyNigeria"
import Stats from "./components/stats"
import GreenSection from "./components/greenSection"
import Faq from "./components/faq"
import SeedsOfKnowledge from "./components/seedsOfKnowledge"
import WaitlistCountdown from "./components/waitlistCountdown"
import PreFooterSection from "./components/preFooterSection"
import FadeIn from "./components/fadeIn"

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><Scale /></FadeIn>
      <FadeIn><OurFields /></FadeIn>
      <FadeIn><MidSection /></FadeIn>
      <FadeIn><WhyNigeria /></FadeIn>
      <FadeIn><Stats /></FadeIn>
      <FadeIn><GreenSection /></FadeIn>
      <FadeIn><Faq /></FadeIn>
      <FadeIn><SeedsOfKnowledge /></FadeIn>
      <FadeIn><WaitlistCountdown /></FadeIn>
      <FadeIn><PreFooterSection /></FadeIn>
    </>
  )
}
