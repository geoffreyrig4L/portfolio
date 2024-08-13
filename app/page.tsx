"use client"

import AcademicExperience from "@/components/AcademicExperience"
import Education from "@/components/Education"
import Hobbies from "@/components/Hobbies"
import Introduction from "@/components/Introduction"
import ProfessionalExperience from "@/components/ProfessionalExperience"
import Skills from "@/components/skills/Skills"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Contact from "@/components/Contact"
import { useEffect } from "react"
import Test from "@/components/Test"

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".title",
      {
        x: "0",
      },
      {
        duration: 3,
        x: "+5vw",
      },
    )
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="container">
        <section className="panel p-[4rem]">
          <div className="text-[150px] whitespace-nowrap title">
            Hello world !
          </div>
        </section>
        {/* <Test /> */}
        {/* <Contact />
        <Introduction />
        <ProfessionalExperience />
        <AcademicExperience /> */}
        <Education />
        <Hobbies />
        <Skills />
      </div>
    </main>
  )
}
