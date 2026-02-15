<template>
  <section id="works" class="work-section bg-dark-100 text-white-100">
    <EmptyGap base="40px" lg="70px" />
    <div class="container">
      <!-- Section Header -->
      <div class="section-title text-center">
        <h6 class="text-uppercase text-red-500 mb-0 word-animate">Portfolio</h6>
        <h2 class="fw-bold text-red-500 word-animate">Work Highlights</h2>
        <p class="text-grey-300 word-animate">
          Real-world campaigns & production-ready projects.
        </p>
      </div>
      <EmptyGap base="20px" lg="20px" />
      <!-- Projects -->
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="row align-items-center project-row"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }">
        <!-- Image -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="project-image-wrapper">
            <img
              :src="project.image"
              :alt="project.title"
              class="img-fluid rounded shadow" />

            <!-- Overlay -->
            <div
              class="project-overlay d-flex align-items-center justify-content-center">
              <div class="text-center">
                <a
                  :href="project.live"
                  target="_blank"
                  class="btn btn-danger me-2">
                  Live Demo
                </a>
                <!-- <a
                  :href="project.code"
                  target="_blank"
                  class="btn btn-outline-light">
                  Source Code
                </a> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="col-lg-6">
          <h3 class="fw-bold mb-3">{{ project.title }}</h3>

          <p class="text-grey-300">
            {{ project.description }}
          </p>

          <!-- Tech Tags -->
          <div class="mt-3">
            <span
              v-for="(tech, i) in project.tech"
              :key="i"
              class="badge bg-red-500 me-2 mb-2">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <EmptyGap base="40px" lg="70px" />
  </section>
</template>

<script>
import EmptyGap from "./EmptyGap.vue";
import car2 from "@/assets/japan/image-1.jpeg";
import car3 from "@/assets/japan/image-5.jpeg";
import car4 from "@/assets/japan/image-3.jpeg";
import car5 from "@/assets/japan/image-6.jpeg";

export default {
  name: "WorkSection",
  data() {
    return {
      projects: [
        {
          title: "Maxis Sustainability Brand Experience",
          description:
            "Corporate sustainability brand page developed for Maxis, highlighting their environmental commitments and ESG initiatives. Built under a tight deadline using HTML, CSS, JavaScript, and CMS integration. Implemented custom animations and seamless overlay background effects to enhance storytelling and create an engaging, immersive user experience aligned with the brand identity.",
          image: car2,
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "CMS Integration",
            "Web Animations",
          ],
          live: "https://www.maxis.com.my/sustainability",
          code: "#",
        },
        {
          title: "Hotlink x Hausboom Interactive Campaign Page",
          description:
            "Interactive campaign microsite developed for Hotlink x Hausboom, featuring sticky Lottie animations to visually connect campaign sections and enhance storytelling. Built using HTML, CSS, JavaScript, and CMS integration under tight timelines. Implemented seamless overlay transitions and scroll-based effects to create an engaging, high-energy brand experience aligned with the campaign identity.",
          image: car3,
          tech: ["HTML5", "CSS3", "JavaScript", "Lottie", "CMS Integration"],
          live: "https://www.hotlink.com.my/en/campaigns/hotlink-hausboom/",
          code: "#",
        },
        {
          title: "Maxis Chinese New Year 2026 Digital Campaign",
          description:
            "Festive promotional microsite developed for Maxis Chinese New Year 2026 campaign, designed to deliver a vibrant and conversion-focused user journey. Engineered a fully responsive card grid system that dynamically adapts across devices using HTML, CSS, JavaScript, Bootstrap, and CMS integration. Optimized layout structure, visual hierarchy, and seamless overlay transitions to ensure engaging storytelling and smooth browsing under tight campaign deadlines.",
          image: car4,
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "CMS Integration",
            "Responsive Grid System",
          ],
          live: "https://www.maxis.com.my/en/campaigns/chinese-new-year-deals/",
          code: "#",
        },
        {
          title: "iPhone 16e Launch – Maxis Store",
          description:
            "High-impact product launch page developed for the surprise release of iPhone 16e on Maxis Store in 2025. Adapted Apple’s microsite HTML structure into Maxis CMS under tight, last-minute deadlines while carefully refactoring class names and isolating styles to prevent conflicts within the existing ecosystem. Removed and restructured Apple’s native JavaScript to ensure compatibility and avoid breaking core Maxis functionalities. Delivered a seamless, brand-aligned product overview experience optimized for stability and performance.",
          image: car5,
          tech: [
            "HTML5",
            "CSS3",
            "JavaScript Refactoring",
            "CMS Integration",
            "Cross-System Compatibility",
          ],
          live: "https://store.maxis.com.my/pages/product-details/phones/apple/iphone-16e",
          code: "#",
        },
      ],
    };
  },

  mounted() {
    gsap.utils.toArray(".project-row").forEach((row, index) => {
      gsap.from(row, {
        scrollTrigger: {
          trigger: row,
          start: "top 70%",
          end: "+=200",
          scrub: true,
          markers: false,
        },
        // x: -30,
        scale: 0.95,
        opacity: 0.05,
        stagger: 0.5, // Adjusts the stagger effect for each row's animation (it adds a delay between each row's animation)
        ease: "none",
      });
    });
  },
};
</script>

<style scoped>
/* Section Background (using your theme system) */
.work-section {
  background-color: var(--dark-100);
}

/* Project Hover Effect */
.project-image-wrapper {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-image-wrapper:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(255, 0, 0, 0.2);
}

/* Overlay */
.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image-wrapper:hover .project-overlay {
  opacity: 1;
}

/* Slight image zoom */
.project-image-wrapper img {
  width: 100%;
  height: 400px; /* fixed height for all images */
  object-fit: cover; /* ensures image fills area without stretching */
  border-radius: 0.5rem;
  transition: transform 0.4s ease;
}

.project-image-wrapper:hover img {
  transform: scale(1.05);
}

/* Smooth row spacing */
.project-row {
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--dark-300);
}

.project-row:last-child {
  border-bottom: none;
}
</style>
