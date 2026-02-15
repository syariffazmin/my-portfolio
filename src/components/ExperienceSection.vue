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
          company: "Publicis Groupe",
          role: "Frontend Developer",
          duration: "Jun 2024 – Present",
          desc: "Lead frontend development for Maxis Malaysia marketing and brand campaigns, building high-performance, responsive pages using HTML, CSS, and JavaScript within AEM CMS. Develop scalable campaign components with Bootstrap and Lottie animations, and create email marketing templates using Stripo. Ensure brand consistency and optimized performance across digital touchpoints. Collaborate in Agile environments via Jira (sprint management), Slack (cross-team communication), and Confluence (technical documentation).",
          language: "JavaScript",
          framework: "Vue.js",
          tools: [
            "HTML",
            "CSS",
            "AEM",
            "Bootstrap",
            "Lottie",
            "Stripo",
            "Slack",
            "Jira",
            "Confluence",
          ],
        },
        {
          company: "Mesiniaga Berhad",
          role: "Junior Frontend Developer",
          duration: "Oct 2023 – Apr 2024",
          desc: "Developed and maintained frontend interfaces for a Number Plate Recognition (NPR) system, enabling real-time vehicle data capture and storage. Built responsive UI components using HTML, CSS, JavaScript, and Vue.js, and integrated REST APIs for seamless backend communication. Worked with MySQL for structured data handling and ensured accurate data presentation within the application dashboard.",
          language: "JavaScript",
          framework: "Vue.js",
          tools: ["HTML", "CSS", "REST API", "MySQL"],
        },
        {
          company: "Mesiniaga Berhad",
          role: "Frontend Developer Intern",
          duration: "July 2023 – September 2023",
          desc: "Contributed to the development of a government web application using Vue.js and Ionic. Built responsive UI components with HTML, CSS, and Bootstrap, and integrated Firebase for real-time data management. Gained hands-on experience consuming REST APIs, testing endpoints with Postman, and collaborating within an Agile development workflow.",
          language: "JavaScript",
          framework: "Vue.js",
          tools: ["Ionic", "Firebase", "Bootstrap", "REST API", "Postman"],
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
