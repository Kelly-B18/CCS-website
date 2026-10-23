
<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: [String, Object],
    required: true
  },
  objectives: {
    type: Array,
    default: () => []
  }
})

const programImage = computed(() => props.image)
</script>

<template>
  <div class="program-page">
    <!-- Program hero -->
    <section class="program-hero">
      <div class="hero-glow"></div>

      <div class="hero-content">
        <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>

        <h1>{{ title }}</h1>

        <p class="hero-description">
          {{ description }}
        </p>

        <a href="#objectives" class="hero-button">
          <span>☰</span>
          View Objectives
        </a>
      </div>

      <div class="program-image-wrap">
        <img
          :src="programImage"
          :alt="title + ' program image'"
          class="program-image"
        />
      </div>
    </section>

    <!-- Objectives -->
    <section id="objectives" class="objectives-section">
      <div class="section-heading">
        <p class="eyebrow">YOUR PATH TO THE FUTURE</p>
        <h2>Program Educational Objectives</h2>
        <p>
          The {{ title }} program prepares students with the knowledge,
          skills, and professional values needed for their chosen careers.
        </p>
      </div>

      <div class="objectives-card">
        <div class="objectives-icon">✦</div>

        <ol v-if="objectives.length">
          <li
            v-for="(objective, index) in objectives"
            :key="index"
          >
            {{ objective }}
          </li>
        </ol>

        <p v-else class="empty-objectives">
          Program objectives will be provided soon.
        </p>
      </div>
    </section>

    <!-- Bottom callout -->
    <section class="program-callout">
      <div>
        <p class="eyebrow">COLLEGE OF COMPUTER STUDIES</p>
        <h2>Learn. Create. Innovate.</h2>
        <p>
          Build your knowledge and prepare for opportunities in the
          ever-evolving world of technology.
        </p>
      </div>

      <RouterLink to="/expertise" class="outline-button">
        Explore Academics →
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.program-page {
  min-height: 100vh;
  overflow: hidden;
  background: #090820;
  color: #ffffff;
  font-family: 'DM Sans', Arial, sans-serif;
}

/* Hero banner */
.program-hero {
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.65fr);
  align-items: center;
  gap: 64px;
  min-height: 370px;
  padding: 64px max(8%, calc((100% - 1120px) / 2));
  background:
    radial-gradient(
      ellipse at 85% 20%,
      rgba(219, 31, 255, 0.24),
      transparent 40%
    ),
    radial-gradient(
      ellipse at 20% 100%,
      rgba(112, 48, 239, 0.22),
      transparent 50%
    ),
    linear-gradient(120deg, #100c28 0%, #171039 55%, #30104c 100%);
}

.hero-glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.22;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.14) 1px,
    transparent 1px
  );
  background-size: 26px 26px;
}

.hero-content {
  max-width: 680px;
}

.eyebrow {
  margin: 0 0 16px;
  color: #db1fff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.5px;
  line-height: 1.8;
}

.program-hero h1 {
  margin: 0 0 18px;
  color: #ffffff;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: clamp(38px, 5vw, 58px);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.12;
}

.hero-description {
  max-width: 650px;
  margin: 0 0 26px;
  color: #c9c2dc;
  font-size: 14px;
  line-height: 1.9;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 44px;
  padding: 0 19px;
  border: 1px solid rgba(219, 31, 255, 0.28);
  border-radius: 7px;
  background: linear-gradient(110deg, #7030ef, #db1fff);
  box-shadow: 0 7px 24px rgba(112, 48, 239, 0.2);
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(219, 31, 255, 0.25);
}

.program-image-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.program-image {
  display: block;
  width: 100%;
  max-width: 245px;
  max-height: 245px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  border: 1px solid rgba(219, 31, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
}

/* Educational objectives */
.objectives-section {
  padding: 70px 8% 80px;
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(112, 48, 239, 0.1),
      transparent 55%
    ),
    #090820;
  scroll-margin-top: 90px;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto 36px;
  text-align: center;
}

.section-heading .eyebrow {
  margin-bottom: 10px;
}

.section-heading h2 {
  margin: 0 0 18px;
  color: #ffffff;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: clamp(25px, 3.5vw, 36px);
  line-height: 1.25;
}

.section-heading > p:last-child {
  margin: 0;
  color: #c9c2dc;
  font-size: 14px;
  line-height: 1.9;
}

.objectives-card {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 34px;
  border: 1px solid rgba(112, 48, 239, 0.28);
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(23, 20, 47, 0.95),
    rgba(16, 12, 40, 0.95)
  );
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16);
}

.objectives-icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  margin-bottom: 18px;
  border: 1px solid rgba(219, 31, 255, 0.3);
  border-radius: 10px;
  background: rgba(112, 48, 239, 0.18);
  color: #db1fff;
  font-size: 22px;
}

.objectives-card ol {
  display: grid;
  gap: 13px;
  margin: 0;
  padding-left: 24px;
  color: #c9c2dc;
  font-size: 14px;
  line-height: 1.8;
}

.objectives-card li {
  padding-left: 5px;
}

.objectives-card li::marker {
  color: #db1fff;
  font-weight: 800;
}

.empty-objectives {
  color: #c9c2dc;
  line-height: 1.8;
}

/* Bottom callout */
.program-callout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 45px 10%;
  border-top: 1px solid rgba(219, 31, 255, 0.18);
  background: #100c28;
}

.program-callout .eyebrow {
  margin-bottom: 8px;
}

.program-callout h2 {
  margin: 0 0 10px;
  color: #ffffff;
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: clamp(24px, 3vw, 34px);
}

.program-callout p:not(.eyebrow) {
  max-width: 620px;
  margin: 0;
  color: #c9c2dc;
  font-size: 13px;
  line-height: 1.8;
}

.outline-button {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid #7030ef;
  border-radius: 7px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.outline-button:hover {
  border-color: #db1fff;
  background: rgba(112, 48, 239, 0.18);
}

/* Responsive layout */
@media (max-width: 760px) {
  .program-hero {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 48px 7% 56px;
  }

  .program-hero h1 {
    font-size: clamp(34px, 8vw, 48px);
  }

  .program-image {
    max-width: 200px;
    max-height: 200px;
  }

  .objectives-section {
    padding: 52px 6%;
  }

  .objectives-card {
    padding: 24px 20px;
  }

  .program-callout {
    align-items: flex-start;
    flex-direction: column;
    padding: 38px 7%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-button,
  .outline-button {
    transition: none;
  }
}
</style>
