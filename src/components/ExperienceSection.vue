<template>
  <section id="career" class="experience-section bg-grey-500 text-dark-100">
    <EmptyGap base="40px" lg="60px" />

    <div class="container">
      <div class="section-title">
        <h6 class="text-uppercase text-red-500 text-center mb-0">Career</h6>
        <h2 class="fw-bold text-red-500 text-center mb-4">Experience</h2>
      </div>

      <EmptyGap base="20px" lg="30px" />

      <div class="timeline">
        <div v-for="(item, idx) in experience" :key="idx" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="company">{{ item.company }}</span>
              <span class="role">{{ item.role }}</span>
              <span class="duration">{{ item.duration }}</span>
            </div>
            <div class="timeline-desc" v-if="item.desc">{{ item.desc }}</div>
            <div class="timeline-meta">
              <span v-if="item.language"
                ><strong>Language:</strong> {{ item.language }}</span
              >
              <span v-if="item.framework"
                ><strong>Framework:</strong> {{ item.framework }}</span
              >
              <span v-if="item.tools && item.tools.length">
                <strong>Tools:</strong> {{ item.tools.join(", ") }}</span
              >
            </div>
            <EmptyGap base="20px" lg="20px" />
          </div>
        </div>
      </div>
    </div>

    <EmptyGap base="40px" lg="60px" />
  </section>
</template>

<script>
import EmptyGap from "./EmptyGap.vue";

export default {
  name: "ExperienceSection",
  components: { EmptyGap },
  data() {
    return {
      experience: [
        {
          company: "Maxis Malaysia",
          role: "Frontend Developer",
          duration: "Jan 2022 – Present",
          desc: "Designed and implemented high-performance Vue.js marketing pages, optimized Lighthouse scores above 95, and improved user engagement across multiple campaigns.",
          language: "JavaScript",
          framework: "Vue.js",
          tools: ["Bootstrap", "GSAP", "REST API"],
        },
        {
          company: "Freelance / Contract Projects",
          role: "Junior Frontend Developer",
          duration: "Jun 2020 – Dec 2021",
          desc: "Delivered responsive websites and landing pages for clients using Vue.js, Bootstrap, and modern CSS techniques.",
          language: "JavaScript",
          framework: "Vue.js",
          tools: ["Figma", "Git", "VS Code"],
        },
        {
          company: "Tech Startup",
          role: "Intern / Web Developer",
          duration: "Jan 2020 – May 2020",
          desc: "Assisted in building dynamic components and UI features, learned collaborative development workflows, and contributed to internal tools.",
          language: "Python",
          framework: "Django",
          tools: ["Selenium", "Notion"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience-section {
  background-color: var(--grey-500);
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.timeline-dot {
  width: 14px;
  height: 14px;
  background: var(--red-500);
  border-radius: 50%;
  margin-top: 6px;
  margin-right: -18px;
  flex-shrink: 0;
  z-index: 2;
}

.timeline-content {
  flex: 1;
  padding-left: 25px;
  border-left: 2px solid var(--black-200);
  margin-left: 10px;
}

.timeline-header {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-weight: 500;
  margin-bottom: 4px;
}

.company {
  color: var(--red-500);
}

.role {
  color: var(--black-100);
}

.duration {
  color: var(--grey-200);
  font-size: 0.95em;
}

.timeline-desc {
  color: var(--black-200);
  font-size: 0.98em;
}

.timeline-meta {
  margin-top: 4px;
  font-size: 0.93em;
  color: var(--dark-300);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .timeline-item {
    flex-direction: row;
  }

  .timeline-content {
    padding-left: 15px;
    margin-left: 0;
    border-left: 2px solid var(--black-300);
  }

  .timeline-dot {
    margin-right: -8px;
  }
}
</style>
