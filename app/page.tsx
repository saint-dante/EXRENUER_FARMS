import Hero from "./components/hero"
import Scale from "./components/scale"
import OurFields from "./components/ourFields"
import MidCta from "./components/mid-cta"
import WhyNigeria from "./components/why-nigeria"
import Stats from "./components/stats"
import GreenCta from "./components/green-cta"
import Faq from "./components/faq"
import SeedsOfKnowledge from "./components/seeds-of-knowledge"
import WaitlistCountdown from "./components/waitlist-countdown"
import PreFooterCta from "./components/pre-footer-cta"
import FadeIn from "./components/fade-in"

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><Scale /></FadeIn>
      <FadeIn><OurFields /></FadeIn>
      <FadeIn><MidCta /></FadeIn>
      <FadeIn><WhyNigeria /></FadeIn>
      <FadeIn><Stats /></FadeIn>
      <FadeIn><GreenCta /></FadeIn>
      <FadeIn><Faq /></FadeIn>
      <FadeIn><SeedsOfKnowledge /></FadeIn>
      <FadeIn><WaitlistCountdown /></FadeIn>
      <FadeIn><PreFooterCta /></FadeIn>
    </>
  )
}
