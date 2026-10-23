
<template>
  <main class="ccs-site">
    <section id="hero" class="hero">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <div class="hero-logo" aria-label="College of Computer Studies">
          CCS
        </div>

        <p class="hero-kicker">CENTRAL PHILIPPINE UNIVERSITY</p>

        <h1>Shaping the Future Through Technology</h1>

        <p class="hero-description">
          Empowering students to innovate, create, and lead in the
          ever-changing world of computing.
        </p>

        <RouterLink to="/expertise" class="gold-button">
          EXPLORE OUR PROGRAMS <span aria-hidden="true">→</span>
        </RouterLink>
      </div>

      <div class="hero-bottom" aria-label="Our values">
        <span>LEARN</span>
        <span>CREATE</span>
        <span>INNOVATE</span>
      </div>
    </section>
  </main>
</template>

<script setup>
// RouterLink is globally available in templates when using Vue Router.
</script>

<style scoped>
.ccs-site {
  width: 100%;
  color: white;
}

.hero {
  position: relative;
  display: flex;
  min-height: min(720px, calc(100vh - 82px));
  align-items: center;
  overflow: hidden;
  padding: 90px 8% 130px;
  background:
    linear-gradient(
      90deg,
      rgba(20, 16, 37, 0.96) 0%,
      rgba(20, 16, 37, 0.82) 48%,
      rgba(20, 16, 37, 0.36) 100%
    ),
    url('../assets/itso.jpg') center / cover no-repeat,
    #171329;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    0deg,
    rgba(20, 16, 37, 0.72),
    transparent 45%
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(760px, 100%);
}

.hero-logo {
  display: grid;
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
  place-items: center;
  border: 2px solid #f3bd55;
  border-radius: 18px;
  background: rgba(243, 189, 85, 0.12);
  color: #f3bd55;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 1px;
}

.hero-kicker {
  margin: 0 0 16px;
  color: #f3bd55;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.hero h1 {
  max-width: 740px;
  margin: 0 0 20px;
  color: white;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.05;
}

.hero-description {
  max-width: 580px;
  margin: 0 0 32px;
  color: #e4e0ed;
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.8;
}

.gold-button {
  display: inline-flex;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 0 24px;
  border: 2px solid #f3bd55;
  border-radius: 6px;
  background: #f3bd55;
  color: #171329;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}

.gold-button span {
  font-size: 20px;
  line-height: 1;
}

.gold-button:hover {
  transform: translateY(-2px);
  background: transparent;
  color: #f3bd55;
}

.gold-button:focus-visible {
  outline: 3px solid white;
  outline-offset: 4px;
}

.hero-bottom {
  position: absolute;
  z-index: 1;
  right: 8%;
  bottom: 28px;
  left: 8%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  color: #f3bd55;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

@media (max-width: 600px) {
  .hero {
    min-height: 620px;
    padding: 64px 6% 120px;
    background-position: 60% center;
  }

  .hero h1 {
    letter-spacing: -0.7px;
  }

  .hero-bottom {
    right: 6%;
    left: 6%;
    gap: 10px;
    font-size: 9px;
    letter-spacing: 1.5px;
  }

  .gold-button {
    padding: 0 16px;
    font-size: 11px;
  }
}
</style>
