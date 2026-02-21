<template>
  <section id="contact" class="contact-section bg-dark-100 text-white-100">
    <EmptyGap base="40px" lg="60px" />
    <div class="container">
      <!-- Section Header -->

      <div class="text-center">
        <h6 class="text-uppercase text-red-500 mb-0">Get in Touch</h6>
        <h2 class="fw-bold text-red-500 mb-1">Contact Me</h2>
        <p class="text-grey-300">
          I’m always open to discuss new projects, creative ideas, or
          opportunities to be part of your team. Reach out!
        </p>
      </div>

      <EmptyGap base="20px" lg="30px" />

      <!-- Contact Links -->
      <div class="contact-links d-flex justify-content-center flex-wrap gap-4">
        <a
          href="mailto:syariffazmin@gmail.com"
          class="contact-icon"
          target="_blank">
          <img src="@/assets/icons/gmail.png" alt="Email" class="icon-img" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/syariffazmin"
          class="contact-icon"
          target="_blank">
          <img src="@/assets/icons/github.png" alt="GitHub" class="icon-img" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/syarifazmin"
          class="contact-icon"
          target="_blank">
          <img
            src="@/assets/icons/linkedin.png"
            alt="LinkedIn"
            class="icon-img" />
          <span>LinkedIn</span>
        </a>
        <a
          href="/resumeSyarif.pdf"
          class="contact-icon"
          download="Syarif-resume.pdf">
          <img src="@/assets/icons/cv.png" alt="LinkedIn" class="icon-img" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
    <EmptyGap base="40px" lg="60px" />
  </section>
</template>

<script>
import EmptyGap from "@/components/EmptyGap.vue";

export default {
  name: "ContactSection",
  components: { EmptyGap },
};
</script>

<style scoped>
.contact-section {
  background-color: var(--dark-100);
}

/* Contact links layout */
.contact-links a.contact-icon {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  color: var(--white-100);
  background: var(--dark-200);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-links a.contact-icon .icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.contact-links a.contact-icon span {
  font-weight: 500;
}

.contact-links a.contact-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
}

.contact-links a.contact-icon:hover .icon-img {
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 575px) {
  .contact-links a.contact-icon {
    width: 100%;
    justify-content: center;
  }
}
</style>
