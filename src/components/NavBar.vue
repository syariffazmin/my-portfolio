<template>
  <nav class="navbar navbar-expand-lg glass-nav fixed-top">
    <div class="container">
      <a class="navbar-brand text-red-600" href="#">Navbar</a>
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
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#work">Work</a>
          <a class="nav-link" href="#expertise">Expertise</a>
          <a class="nav-link" href="#about">About</a>
          <a class="nav-link" href="#career">Career</a>
          <a class="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 60px;
}

.active {
  color: var(--red-600) !important;
}
</style>
