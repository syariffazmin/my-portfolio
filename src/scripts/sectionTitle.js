// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export function initSectionReveal() {
  const sections = document.querySelectorAll(".section-title");

  sections.forEach((section) => {
    const elements = section.querySelectorAll("h6, h2, p");

    gsap.from(elements, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom center",
        scrub: true,
      },
      x: 30,
      opacity: 0.05,
      stagger: 0.5,
      ease: "none",
    });
  });
}
