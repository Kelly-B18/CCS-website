<<<<<<< Updated upstream
=======
<template>
  <div class="ccs-site">
    <header class="navbar">
      <a href="#hero" class="brand">
        <span class="brand-mark">CCS</span>
        <span class="brand-text">
          <strong>COLLEGE OF</strong>
          <strong>COMPUTER STUDIES</strong>
          <small>CENTRAL PHILIPPINE UNIVERSITY</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        {{ menuOpen ? '✕' : '☰' }}
      </button>

      <nav :class="{ 'nav-open': menuOpen }">
        <a href="#hero" @click="menuOpen = false">Home</a>
        <a href="#programs" @click="menuOpen = false">Programs</a>
        <a href="#partnerships" @click="menuOpen = false">Partnerships</a>
      </nav>
    </header>

>>>>>>> Stashed changes
<template> 
    <main>
      <section id="hero" class="hero">
        <div class="hero-overlay"></div>
@@ -167,7 +139,7 @@
      <a href="#hero" class="back-top">Back to top ↑</a>
      <small>CCS Mockup Website · Student Project</small>
    </footer>
<<<<<<< Updated upstream
=======
  </div>
>>>>>>> Stashed changes

</template>

<script setup>