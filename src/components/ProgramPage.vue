
<template>
  <div class="program-page">
    <!-- Hero Section -->
    <section class="program-hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>{{ title }}</h1>
          <p class="description">{{ description }}</p>

          <div class="hero-buttons">
            <a href="#objectives" class="btn btn-dark">
              ☰ &nbsp; Objectives
            </a>
          </div>
        </div>

        <div class="hero-image">
          <img :src="image" :alt="title + ' program image'" />
        </div>
      </div>
    </section>

    <!-- Program Objectives -->
    <section id="objectives" class="objectives-section">
      <h2>PROGRAM EDUCATIONAL OBJECTIVES</h2>

      <p class="section-intro">
        The {{ title }} program prepares students with the knowledge,
        skills, and professional values needed for their chosen careers.
      </p>

      <ol>
        <li v-for="(objective, index) in objectives" :key="index">
          {{ objective }}
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProgramPage",

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    objectives: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.program-page {
  color: #183f3d;
  font-family: Arial, sans-serif;
}

.program-hero {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      120deg,
      rgba(20, 62, 59, 0.92),
      rgba(83, 124, 82, 0.82),
      rgba(201, 165, 43, 0.85)
    );
  color: white;
  padding: 70px 8% 85px;
  min-height: 350px;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 78%,
    78% 100%,
    53% 83%,
    23% 100%,
    0 72%
  );
}

.hero-content {
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: clamp(36px, 5vw, 54px);
  font-weight: 300;
  margin: 12px 0;
}

.description {
  max-width: 520px;
  line-height: 1.9;
  color: #f0f0e5;
  font-size: 15px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 35px;
}

.btn {
  display: inline-block;
  padding: 15px 25px;
  min-width: 100px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.3s;
  font-size: 14px;
}

.btn-dark {
  background: #143e3b;
  color: #ffc52e;
}

.btn:hover {
  transform: translateY(-3px);
  filter: brightness(1.1);
}

.hero-image {
  flex: 0 1 340px;
  text-align: center;
}

.hero-image img {
  width: 100%;
  max-width: 340px;
  max-height: 250px;
  object-fit: contain;
  border-radius: 8px;
}

.objectives-section {
  max-width: 1000px;
  margin: 40px auto 70px;
  padding: 20px;
  color: #222;
}

.objectives-section h2 {
  text-align: center;
  font-size: 20px;
  color: #183f3d;
  margin-bottom: 35px;
}

.section-intro {
  line-height: 1.8;
  text-align: center;
  margin-bottom: 25px;
}

.objectives-section ol {
  padding-left: 25px;
  line-height: 2;
  font-size: 14px;
}

.objectives-section li {
  padding-left: 5px;
}

@media (max-width: 700px) {
  .program-hero {
    padding: 45px 7% 65px;
    clip-path: none;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-image {
    width: 100%;
    flex-basis: auto;
  }

  .hero-image img {
    max-height: 200px;
  }

  .objectives-section {
    margin-top: 30px;
    padding: 20px;
  }
}
</style>
