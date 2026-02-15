<template>
  <section id="expertise" class="skills-section bg-dark-100 text-white-100">
    <EmptyGap base="40px" lg="70px" />

    <div class="container">
      <!-- Section Header -->
      <div class="text-center section-title">
        <h6 class="text-uppercase text-red-500 mb-0">Portfolio</h6>
        <h2 class="fw-bold text-red-500">Skills & Expertise</h2>
        <p class="text-grey-300">
          Core skills organized by category. Clean, professional, and easy to
          read.
        </p>
      </div>

      <EmptyGap base="20px" lg="40px" />

      <!-- Skills Grid -->
      <div class="row text-center text-lg-start">
        <div
          v-for="(category, i) in skillCategories"
          :key="i"
          class="col-lg-4 mb-4 mb-lg-0">
          <h5 class="text-red-500 fw-bold mb-3">{{ category.name }}</h5>
          <div
            class="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <div
              v-for="(skill, j) in category.skills"
              :key="j"
              class="skill-chip">
              <img :src="skill.icon" :alt="skill.name" />
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EmptyGap base="40px" lg="70px" />
  </section>
</template>

<script>
import EmptyGap from "./EmptyGap.vue";

// Import your icons
import vueIcon from "@/assets/icons/vue.png";
import jsIcon from "@/assets/icons/js.png";
import htmlIcon from "@/assets/icons/html5.png";
import cssIcon from "@/assets/icons/css3.png";
import bootstrapIcon from "@/assets/icons/bootstrap.png";
import gitIcon from "@/assets/icons/git.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import stripoIcon from "@/assets/icons/stripo.png";
import postmanIcon from "@/assets/icons/postman.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import nodeIcon from "@/assets/icons/nodejs.png";
import restApiIcon from "@/assets/icons/restapi.png";

export default {
  name: "SkillsSection",
  components: { EmptyGap },
  data() {
    return {
      skillCategories: [
        {
          name: "Frontend",
          skills: [
            { name: "Vue.js", icon: vueIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "HTML5", icon: htmlIcon },
            { name: "CSS3", icon: cssIcon },
            { name: "Bootstrap", icon: bootstrapIcon },
          ],
        },
        {
          name: "Tools",
          skills: [
            { name: "Git", icon: gitIcon },
            { name: "VS Code", icon: vscodeIcon },
            { name: "Stripo", icon: stripoIcon },
            { name: "Postman", icon: postmanIcon },
          ],
        },
        {
          name: "Other / Backend",
          skills: [
            { name: "Firebase", icon: firebaseIcon },
            { name: "MySQL", icon: mysqlIcon },
            { name: "Node.js", icon: nodeIcon },
            { name: "REST API", icon: restApiIcon },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills-section {
  background-color: var(--dark-100);
}

/* Skill Chip Styling */
.skill-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  background-color: var(--grey-300);
  color: var(--dark-100);
  font-weight: 500;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: default;
}

.skill-chip img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.skill-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.25);
}

/* Responsive spacing for chips */
@media (max-width: 991px) {
  .skill-chip {
    margin-bottom: 0.5rem;
  }
}
</style>
