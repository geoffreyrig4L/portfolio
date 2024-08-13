import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

const ScrollableItems = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // gsap.to(".scroll-item", {
    //   scrollTrigger: {
    //     trigger: ".scroll-item",
    //     toggleActions: "restart none reverse pause",
    //     start: "left center",
    //     end: "center right",
    //     markers: true,
    //     horizontal: true,
    //     scrub: 1,
    //     onUpdate: (self) => {
    //       gsap.to(".scroll-item", {
    //         scale: 1 + 0.5 * self.progress,
    //         ease: "power2.inOut",
    //       })
    //     },
    //   },
    // })
  }, [])

  return (
    <div className="panel w-full">
      <div className="scroll-container bg-tertiary overflow-auto w-full">
        <div className="scroll-item">Élément 1</div>
        <div className="scroll-item">Élément 2</div>
        <div className="scroll-item">Élément 3</div>
      </div>
    </div>
  )
}

export default ScrollableItems
