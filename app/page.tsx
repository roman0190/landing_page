import Image from "next/image";
import AppHeader from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Testimonials from "../components/Testimonials"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import CourseSection from "../components/CourseSection"


export default function Home() {
  return (
    <div>
      <AppHeader />
      <Hero />
      <Features />
      <CourseSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
