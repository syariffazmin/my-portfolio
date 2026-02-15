<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import EmptyGap from "./EmptyGap.vue";

onMounted(() => {
  // Animate the hero text on page load
  gsap.from(
    ".hero-section h6, .hero-section h2, .hero-section h1, .hero-section p",
    {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power2.out",
    },
  );
});
</script>

<template>
  <section id="hero" class="hero-section">
    <div
      class="container d-none d-lg-flex flex-column justify-content-end justify-content-lg-center h-100">
      <h6 class="text-uppercase mb-0 text-red-500">Frontend Developer</h6>
      <h1 class="mb-0">
        <span class="text-red-500">Hi, I'm </span>
        <br class="d-block d-md-none" /><span class="text-white-300"
          >Syarif Azmin</span
        >
      </h1>
      <p class="text-white-300">
        I craft clean, performant interfaces that users love.
        <br class="d-none d-md-block" />Specializing in React, TypeScript, and
        modern web technologies.
      </p>
      <EmptyGap base="35px" class="d-block d-lg-none" />
    </div>
    <div
      class="container d-flex d-lg-none flex-column justify-content-start justify-content-lg-center h-100">
      <EmptyGap base="80px" class="d-block d-md-none" />
      <EmptyGap base="180px" class="d-none d-md-block d-lg-none" />
      <h6
        class="text-uppercase mb-0 text-red-500"
        style="font-size: 0.8rem !important">
        Frontend Developer
      </h6>
      <h2 class="mb-2">
        <span class="text-red-500">Hi, I'm </span>
        <br class="d-block d-md-none" /><span class="text-black-300"
          >Syarif Azmin</span
        >
      </h2>
      <p class="text-black-300" style="font-size: 0.8rem !important">
        I craft clean, performant interfaces that users love.
        <br class="d-none d-md-block" />Specializing in React, TypeScript, and
        modern web technologies.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-image: url("@/assets/cars/car-7.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh; /* Full viewport height */
}
</style>
