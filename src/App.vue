<script setup>
// import PageLoader from "@/components/PageLoader.vue";
import NavBar from "@/components/NavBar.vue";
import Herosection from "@/components/Herosection.vue";
import WorkSection from "@/components/WorkSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import { onMounted } from "vue";
import { initSectionReveal } from "@/scripts/sectionTitle";

onMounted(() => {
  initSectionReveal();
});
</script>

<template>
  <!-- <PageLoader /> -->
  <NavBar />
  <Herosection />
  <WorkSection />
  <SkillsSection />
  <AboutSection />
  <ExperienceSection />
  <ContactSection />
  <FooterSection />
</template>

<style scoped></style>
