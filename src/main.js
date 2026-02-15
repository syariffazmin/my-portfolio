import { createApp } from "vue";
import App from "@/App.vue";
import "@/styles/main.css";
import EmptyGap from "@/components/EmptyGap.vue";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// ✅ Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Optional: make gsap globally available (if needed)
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;
const app = createApp(App);

app.component("EmptyGap", EmptyGap);

app.mount("#app");
