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
    <div class="container d-flex flex-column justify-content-center h-100">
      <h6 class="text-uppercase mb-0 text-red-500">Frontend Developer</h6>
      <h1 class="mb-0">
        <span class="text-red-500">Hi, I'm </span>
        <br class="d-block d-md-none" /><span class="text-white-300"
          >Syarif Azmin</span
        >
      </h1>
      <p class="text-white-300">
        I design clean, fast, and engaging user interfaces.
        <br class="d-none d-md-block" />Specializing in Vue.js, JavaScript, and
        the latest web technologies.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-image:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      /* Dark overlay (adjust opacity as needed) */ rgba(0, 0, 0, 0.5)
        /* Same dark overlay at the bottom */
    ),
    url("@/assets/japan/image-9.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh; /* Full viewport height */
}
</style>
