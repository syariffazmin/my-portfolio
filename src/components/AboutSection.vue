<template>
  <section id="about" class="about-section bg-grey-500 text-dark-100">
    <EmptyGap base="40px" lg="70px" />

    <div class="container">
      <!-- Section Header -->
      <div class="text-center section-title">
        <h6 class="text-uppercase text-red-500 mb-0">Who I Am</h6>
        <h2 class="fw-bold text-red-500">About Me</h2>
      </div>
      <EmptyGap base="30px" lg="50px" />
      <!-- About Content -->
      <div class="row align-items-center">
        <!-- Photo -->
        <div class="col-xl-4 text-center">
          <div class="photo-wrapper mx-auto">
            <img
              src="@/assets/passport.webp"
              alt="Professional Photo"
              class="img-fluid rounded-circle shadow" />
          </div>
          <div class="d-block d-xl-none">
            <EmptyGap base="40px" lg="40px" />
          </div>
        </div>

        <!-- Bio -->
        <div class="col-xl-8">
          <p class="text-dark-200 word-animate">
            I’m a passionate Frontend Developer with a flair for building clean,
            responsive, and high-performing web experiences. With over 2 years
            of hands-on experience in Vue.js, Bootstrap, and modern web
            technologies, I bring a mix of creativity and precision to every
            project. I thrive in collaborative teams, enjoy problem-solving, and
            love turning complex ideas into intuitive user experiences.
          </p>

          <p class="text-dark-200 word-animate">
            Beyond code, I’m a continuous learner, exploring new frameworks and
            tools, and always eager to push the boundaries of what a modern web
            interface can do. I take pride in writing code that is not only
            functional but also elegant and maintainable.
          </p>

          <p class="text-dark-200 word-animate">
            When I’m not coding, you’ll find me experimenting with design
            trends, contributing to open-source projects, or diving into a good
            tech blog.
          </p>
        </div>
      </div>
    </div>

    <EmptyGap base="40px" lg="70px" />
  </section>
</template>

<script>
export default {
  name: "AboutSection",

  mounted() {
    // Split text into words and wrap each word with a span
    this.splitTextIntoWords(".word-animate");

    // Apply animation to each word
    gsap.utils.toArray(".word-animate .word").forEach((word) => {
      gsap.from(word, {
        scrollTrigger: {
          trigger: word, // Trigger animation for each word individually
          start: "top 85%", // When the top of the word reaches 80% of the viewport height
          // When the bottom of the word reaches the center of the viewport
          scrub: true, // Smooth scroll animation
          markers: false, // You can set this to true for debugging
          // Play when entering, reverse when leaving
        },
        opacity: 0.05, // Start with opacity 0
        // Move the word from below
        stagger: 0.3, // Delay between each word's animation
        ease: "power3.out", // Smooth easing effect
      });
    });
  },

  methods: {
    // Method to split text into individual words and wrap them with <span>
    splitTextIntoWords(selector) {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const text = el.innerText; // Get the text content
        const words = text.split(" "); // Split the text into words

        // Wrap each word in a <span> element
        el.innerHTML = words
          .map((word) => `<span class="word">${word}</span>`)
          .join(" "); // Reconstruct the text with wrapped words
      });
    },
  },
};
</script>

<style scoped>
.about-section {
  background-color: var(--grey-500);
}

/* Photo Styling */
.photo-wrapper img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border: 4px solid var(--red-500);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.photo-wrapper img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
}

/* Lead paragraph styling */
.lead {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .photo-wrapper img {
    width: 180px;
    height: 180px;
  }

  .lead {
    font-size: 1rem;
  }
}

/* Word animation */
.word {
  display: inline-block;
}
</style>
