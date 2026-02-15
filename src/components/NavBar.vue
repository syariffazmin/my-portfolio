<template>
  <nav class="navbar navbar-expand-lg glass fixed-top">
    <div class="container">
      <a class="navbar-brand text-red-600" href="#"
        ><img
          src="@/assets/items/signature.png"
          class="d-none d-md-block"
          alt=""
          style="max-height: 42px !important" />
        <img
          src="@/assets/items/signature.png"
          class="d-block d-md-none"
          alt=""
          style="max-height: 30px !important"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav justify-content-end flex-grow-1">
          <a class="nav-link" href="#hero">Home</a>
          <a class="nav-link" href="#works">Work</a>
          <a class="nav-link" href="#expertise">Expertise</a>
          <a class="nav-link" href="#about">About</a>
          <a class="nav-link" href="#career">Career</a>
          <a class="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.activateNavOnScroll();
  },
  methods: {
    activateNavOnScroll() {
      // Set up IntersectionObserver to monitor sections
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

      if (!sections || !navLinks) {
        console.error("Sections or navLinks are not properly loaded");
        return; // Exit early if elements are not found
      }

      const observerOptions = {
        root: null, // null means it uses the viewport as root
        threshold: 0.7, // 50% of the section must be visible to trigger
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const navLink = document.querySelector(
            `.nav-link[href="#${sectionId}"]`,
          );

          if (!navLink) {
            console.warn(`No navigation link found for section: ${sectionId}`);
            return; // If the nav link isn't found, skip this section
          }

          if (entry.isIntersecting) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions,
      );

      // Observe each section
      sections.forEach((section) => observer.observe(section));
    },
  },
};
</script>

<style scoped>
.navbar {
  min-height: 60px;
}

.active {
  color: var(--red-600) !important;
}
</style>
