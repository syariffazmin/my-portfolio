<template>
  <footer class="footer-section bg-dark-100 text-grey-300 text-center py-3">
    <div class="container">
      <p class="mb-0">
        &copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer-section {
  border-top: 1px solid var(--dark-200);
  font-size: 0.95rem;
}

.footer-section p {
  margin: 0;
  color: var(--grey-300);
}

.footer-section p span {
  color: var(--red-500);
  font-weight: 500;
}
</style>
