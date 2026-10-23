
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-logo">
        <span class="logo-box">CCS</span>
      </div>

      <p class="hero-kicker">CENTRAL PHILIPPINE UNIVERSITY</p>

      <h1>
        Shaping the Future
        <span>Through Technology</span>
      </h1>

      <p class="hero-description">
        Empowering students to innovate, create, and lead in the ever-changing
        world of computing.
      </p>

      <RouterLink to="/expertise" class="hero-button">
        EXPLORE OUR PROGRAMS
        <span class="arrow">↓</span>
      </RouterLink>

      <div class="hero-features">
        <div class="feature">
          <span class="feature-icon">✦</span>
          <span>LEARN</span>
        </div>
        <div class="feature">
          <span class="feature-icon">⌘</span>
          <span>CREATE</span>
        </div>
        <div class="feature">
          <span class="feature-icon">↗</span>
          <span>INNOVATE</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: 620px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #ffffff;

  /* Dark purple and magenta background */
  background-color: #090820;
  background-image:
    radial-gradient(
      ellipse at 85% 15%,
      rgba(219, 31, 255, 0.2) 0%,
      transparent 42%
    ),
    radial-gradient(
      ellipse at 65% 90%,
      rgba(112, 48, 239, 0.2) 0%,
      transparent 45%
    ),
    linear-gradient(
      120deg,
      #090820 0%,
      #110c2c 55%,
      #211039 100%
    );
}

.hero-content {
  width: min(calc(100% - 48px), 1120px);
  margin: 0 auto;
  padding-top: 60px;
}

.hero-logo {
  margin-bottom: 28px;
}

.logo-box {
  display: inline-flex;
  min-width: 88px;
  min-height: 70px;
  align-items: center;
  justify-content: center;
  border: 2px solid #7030ef;
  border-radius: 10px;
  background: rgba(112, 48, 239, 0.14);
  box-shadow: 0 0 25px rgba(112, 48, 239, 0.2);
  color: #ffffff;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 3px;
}

.hero-kicker {
  margin: 0 0 18px;
  color: #db1fff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
  line-height: 1.7;
}

.hero h1 {
  max-width: 850px;
  margin: 0;
  color: #ffffff;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: clamp(42px, 6vw, 68px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.08;
}

.hero h1 span {
  display: block;
  background: linear-gradient(100deg, #ffffff 10%, #db1fff 95%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  max-width: 690px;
  margin: 24px 0 34px;
  color: #c9c2dc;
  font-size: 17px;
  line-height: 1.9;
}

.hero-button {
  display: inline-flex;
  min-height: 54px;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 24px;
  border: none;
  border-radius: 7px;
  background: linear-gradient(110deg, #7030ef, #db1fff);
  box-shadow: 0 8px 28px rgba(112, 48, 239, 0.25);
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.7px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(219, 31, 255, 0.3);
}

.arrow {
  font-size: 18px;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin: 64px calc((min(100vw - 48px, 1120px) - 100vw) / 2) 0;
  padding: 22px max(24px, calc((100vw - 1120px) / 2));
  border-top: 1px solid rgba(219, 31, 255, 0.2);
  background: rgba(9, 8, 32, 0.8);
}

.feature {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 3px;
}

.feature-icon {
  color: #db1fff;
  font-size: 20px;
}

@media (max-width: 650px) {
  .hero {
    min-height: auto;
  }

  .hero-content {
    width: calc(100% - 40px);
    padding-top: 48px;
  }

  .hero h1 {
    font-size: clamp(38px, 10vw, 52px);
    letter-spacing: -1.5px;
  }

  .hero-kicker {
    font-size: 11px;
    letter-spacing: 2px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-button {
    gap: 14px;
    padding: 0 16px;
    font-size: 11px;
  }

  .hero-features {
    gap: 8px;
    margin-top: 48px;
    padding: 20px;
  }

  .feature {
    flex-direction: column;
    gap: 5px;
    font-size: 10px;
    letter-spacing: 1.5px;
  }
}
</style>
