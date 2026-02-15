<template>
  <div
    ref="loaderRef"
    class="page-loader d-flex flex-column justify-content-center align-items-center"
    @touchstart="startTouch"
    @touchmove="moveTouch"
    @touchend="endTouch"
    @mousedown="startMouse"
    @mousemove="moveMouse"
    @mouseup="endMouse">
    <!-- Optional loader animation or logo -->
    <h1 class="text-red-500 mb-2">Syarif Azmin</h1>
    <p class="text-white-100 mb-0">Frontend Developer</p>
    <span class="small-text text-grey-300 mt-3">Swipe up to enter</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const loaderRef = ref(null);

// For touch/swipe
let startY = 0;
let currentY = 0;
let isDragging = false;

const startTouch = (e) => {
  startY = e.touches[0].clientY;
  isDragging = true;
};

const moveTouch = (e) => {
  if (!isDragging) return;
  currentY = e.touches[0].clientY;
  const delta = currentY - startY;
  if (delta < 0) {
    gsap.to(loaderRef.value, { y: delta, duration: 0 });
  }
};

const endTouch = (e) => {
  isDragging = false;
  const delta = currentY - startY;
  if (delta < -100) {
    hideLoader();
  } else {
    gsap.to(loaderRef.value, { y: 0, duration: 0.3, ease: "power2.out" });
  }
};

// Optional: for mouse drag support
const startMouse = (e) => {
  startY = e.clientY;
  isDragging = true;
};

const moveMouse = (e) => {
  if (!isDragging) return;
  currentY = e.clientY;
  const delta = currentY - startY;
  if (delta < 0) {
    gsap.to(loaderRef.value, { y: delta, duration: 0 });
  }
};

const endMouse = (e) => {
  isDragging = false;
  const delta = currentY - startY;
  if (delta < -100) {
    hideLoader();
  } else {
    gsap.to(loaderRef.value, { y: 0, duration: 0.3, ease: "power2.out" });
  }
};

// Function to hide loader
const hideLoader = () => {
  gsap.to(loaderRef.value, {
    y: "-100%",
    duration: 0.6,
    ease: "power3.inOut",
    onComplete: () => {
      loaderRef.value.style.display = "none";
    },
  });
};

onMounted(() => {
  // Initial animation when page loads
  gsap.from(loaderRef.value, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
  });
});
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  background-color: var(--dark-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  user-select: none;
  touch-action: none;
  cursor: grab;
}

.page-loader h1 {
  font-size: 3rem;
}

.page-loader p {
  font-size: 1.2rem;
}

.page-loader .small-text {
  font-size: 0.9rem;
  color: var(--grey-300);
}
</style>
