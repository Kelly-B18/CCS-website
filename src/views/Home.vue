
<template>
  <div class="ccs-site">
    <main>
      <!-- HERO SECTION -->
      <section id="hero" class="hero">
        <div class="hero-glow"></div>

        <div class="hero-content">
          <div class="hero-logo">CCS</div>
          <p class="hero-kicker">COLLEGE OF COMPUTER STUDIES</p>
          <h1>Shaping the Future Through Technology</h1>
          <p class="hero-description">
            Empowering students to innovate, create, and lead
            in the ever-changing world of computing.
          </p>

          <RouterLink to="/expertise" class="hero-button">
            EXPLORE OUR PROGRAMS
            <span>↓</span>
          </RouterLink>
        </div>

        <div class="hero-bottom">
          <span><i>✦</i> LEARN</span>
          <span><i>⌘</i> CREATE</span>
          <span><i>↗</i> INNOVATE</span>
        </div>
      </section>

      <!-- PROGRAMS SECTION -->
      <section id="programs" class="section programs">
        <div class="section-heading">
          <p class="eyebrow">YOUR FUTURE STARTS HERE</p>
          <h2>Programs Offered</h2>
          <p>
            Discover a program that matches your interests
            and prepares you for a career in technology.
          </p>
        </div>

        <div class="program-grid">
          <article class="program-card">
            <div class="program-logo it-logo">IT</div>
            <span class="program-code">BSIT</span>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>
              Learn to develop, implement, and manage technology
              solutions, networks, information systems, and software
              that address real-world needs.
            </p>
            <div class="program-tags">
              <span>Networking</span>
              <span>Web Development</span>
              <span>IT Systems</span>
            </div>
            <RouterLink
              to="/academic-programs/bsit"
              class="program-link"
            >
              Explore BSIT <span>→</span>
            </RouterLink>
          </article>

          <article class="program-card">
            <div class="program-logo cs-logo">&lt;/&gt;</div>
            <span class="program-code">BSCS</span>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>
              Explore programming, algorithms, software development,
              and computing theories to build innovative digital solutions.
            </p>
            <div class="program-tags">
              <span>Programming</span>
              <span>Algorithms</span>
              <span>Software</span>
            </div>
            <RouterLink
              to="/academic-programs/bscs"
              class="program-link"
            >
              Explore BSCS <span>→</span>
            </RouterLink>
          </article>

          <article class="program-card">
            <div class="program-logo dmia-logo">DM</div>
            <span class="program-code">BSDMIA</span>
            <h3>Bachelor of Science in Digital Media and Interactive Arts</h3>
            <p>
              Combine technology and creativity through digital design,
              multimedia production, interactive experiences, and visual storytelling.
            </p>
            <div class="program-tags">
              <span>Digital Art</span>
              <span>Multimedia</span>
              <span>Design</span>
            </div>
            <RouterLink
              to="/academic-programs/dmia"
              class="program-link"
            >
              Explore BSDMIA <span>→</span>
            </RouterLink>
          </article>

          <article class="program-card">
            <div class="program-logo lis-logo">LIS</div>
            <span class="program-code">BLIS</span>
            <h3>Bachelor of Library and Information Science</h3>
            <p>
              Learn to organize, manage, preserve, and provide access
              to information resources in modern libraries and digital environments.
            </p>
            <div class="program-tags">
              <span>Information</span>
              <span>Research</span>
              <span>Digital Libraries</span>
            </div>
            <RouterLink
              to="/academic-programs/blis"
              class="program-link"
            >
              Explore BLIS <span>→</span>
            </RouterLink>
          </article>
        </div>
      </section>

      <!-- PARTNERSHIPS SECTION -->
      <section id="partnerships" class="section partnerships">
        <div class="section-heading">
          <p class="eyebrow">CONNECTED TO THE INDUSTRY</p>
          <h2>Partnerships and Memberships</h2>
          <p>
            Collaboration and professional connections help strengthen
            learning and connect students with the technology industry.
          </p>
        </div>

        <div class="partner-grid">
          <article class="partner-card">
            <div class="partner-symbol cisco-symbol">CISCO</div>
            <h3>Cisco Networking Academy</h3>
            <p>
              An educational initiative supporting networking
              and information technology learning.
            </p>
          </article>

          <article class="partner-card">
            <div class="partner-symbol oracle-symbol">ORACLE</div>
            <h3>Oracle Academic Initiative</h3>
            <p>
              An academic initiative connecting education with
              Oracle technologies and learning opportunities.
            </p>
          </article>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-brand">
        <span class="footer-logo">CCS</span>
        <div>
          <strong>COLLEGE OF COMPUTER STUDIES</strong>
          <p>Central Philippine University</p>
        </div>
      </div>

      <p class="footer-message">
        Learning today. Innovating for tomorrow.
      </p>

      <a href="#hero" class="back-top">Back to top ↑</a>

      <small>CCS Mockup Website · Student Project</small>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
:root {
  --ccs-bg: #090820;
  --ccs-surface: #100c28;
  --ccs-card: #17142f;
  --ccs-card-hover: #211a40;
  --ccs-purple: #7030ef;
  --ccs-magenta: #db1fff;
  --ccs-white: #ffffff;
  --ccs-muted: #c9c2dc;
  --ccs-border: rgba(219, 31, 255, 0.2);
  --ccs-gradient: linear-gradient(110deg, #7030ef, #db1fff);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
  background: var(--ccs-bg);
}

body {
  margin: 0;
  background: var(--ccs-bg);
}

button,
input,
textarea,
select {
  font: inherit;
}

.ccs-site {
  min-height: 100vh;
  overflow: hidden;
  overflow-wrap: anywhere;
  background: var(--ccs-bg);
  color: var(--ccs-white);
  font-family: 'DM Sans', Arial, Helvetica, sans-serif;
}

.ccs-site a {
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

/* HERO */
.hero {
  position: relative;
  isolation: isolate;
  min-height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px 10% 100px;
  overflow: hidden;
  color: var(--ccs-white);
  background:
    radial-gradient(
      ellipse at 82% 18%,
      rgba(219, 31, 255, 0.2),
      transparent 42%
    ),
    radial-gradient(
      ellipse at 65% 95%,
      rgba(112, 48, 239, 0.2),
      transparent 45%
    ),
    linear-gradient(120deg, #090820 0%, #171039 55%, #24104b 100%);
  scroll-margin-top: 82px;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.2;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.14) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
}

.hero-glow {
  position: absolute;
  top: 15%;
  right: -150px;
  z-index: -1;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: rgba(112, 48, 239, 0.12);
  filter: blur(80px);
  pointer-events: none;
}

.hero-content {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.hero-logo {
  width: 88px;
  height: 70px;
  display: grid;
  place-items: center;
  margin-bottom: 28px;
  border: 2px solid var(--ccs-purple);
  border-radius: 10px;
  background: rgba(112, 48, 239, 0.12);
  box-shadow: 0 0 25px rgba(112, 48, 239, 0.18);
  color: var(--ccs-white);
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 3px;
}

.hero-kicker,
.eyebrow {
  margin: 0;
  color: var(--ccs-magenta);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.5px;
  line-height: 1.8;
}

.hero h1 {
  max-width: 850px;
  margin: 18px 0;
  color: var(--ccs-white);
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: clamp(40px, 6vw, 68px);
  font-weight: 700;
  letter-spacing: -1.8px;
  line-height: 1.1;
}

.hero-description {
  max-width: 650px;
  margin: 24px 0 0;
  color: var(--ccs-muted);
  font-size: 17px;
  line-height: 1.9;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 30px;
  padding: 17px 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 7px;
  background: var(--ccs-gradient);
  box-shadow: 0 8px 25px rgba(112, 48, 239, 0.2);
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.7px;
  text-decoration: none;
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(219, 31, 255, 0.28);
}

.hero-button span {
  font-size: 18px;
}

.hero-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 20px 5%;
  border-top: 1px solid var(--ccs-border);
  background: rgba(9, 8, 32, 0.82);
  color: var(--ccs-white);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

.hero-bottom i {
  margin-right: 7px;
  color: var(--ccs-magenta);
  font-size: 15px;
  font-style: normal;
}

/* GENERAL SECTIONS */
.section {
  padding: 85px 8%;
  scroll-margin-top: 82px;
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 45px;
  text-align: center;
}

.section-heading h2 {
  margin: 12px 0;
  color: var(--ccs-white);
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: clamp(30px, 4vw, 44px);
  line-height: 1.2;
}

.section-heading > p:last-child {
  color: var(--ccs-muted);
  font-size: 15px;
  line-height: 1.9;
}

.programs {
  background: var(--ccs-surface);
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  max-width: 1300px;
  margin: auto;
}

.program-card {
  display: flex;
  flex-direction: column;
  padding: 26px 22px;
  border: 1px solid var(--ccs-border);
  border-radius: 12px;
  background: var(--ccs-card);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.program-card:hover {
  transform: translateY(-6px);
  border-color: rgba(219, 31, 255, 0.55);
  box-shadow: 0 15px 35px rgba(112, 48, 239, 0.13);
}

.program-logo {
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  margin-bottom: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: var(--ccs-gradient);
  color: #ffffff;
  font-size: 20px;
  font-weight: 900;
}

.program-code {
  color: var(--ccs-magenta);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 2px;
}

.program-card h3 {
  margin: 12px 0;
  color: var(--ccs-white);
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.45;
}

.program-card p {
  flex: 1;
  color: var(--ccs-muted);
  font-size: 13px;
  line-height: 1.85;
}

.program-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 15px 0 20px;
}

.program-tags span {
  padding: 7px 9px;
  border: 1px solid rgba(112, 48, 239, 0.25);
  border-radius: 5px;
  background: var(--ccs-card-hover);
  color: var(--ccs-muted);
  font-size: 10px;
}

.program-link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--ccs-border);
  color: var(--ccs-magenta);
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
}

.program-link:hover {
  color: #ffffff;
}

.program-link span {
  font-size: 18px;
}

/* PARTNERSHIPS */
.partnerships {
  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(112, 48, 239, 0.12),
      transparent 60%
    ),
    var(--ccs-bg);
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
  max-width: 950px;
  margin: auto;
}

.partner-card {
  padding: 32px;
  border: 1px solid var(--ccs-border);
  border-radius: 12px;
  background: var(--ccs-card);
  text-align: center;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
  border-color: rgba(219, 31, 255, 0.5);
}

.partner-symbol {
  min-height: 85px;
  display: grid;
  place-items: center;
  margin-bottom: 18px;
  border-radius: 10px;
  background: rgba(112, 48, 239, 0.1);
  color: var(--ccs-white);
  font-weight: 900;
  letter-spacing: 2px;
}

.cisco-symbol {
  color: #b7a4ff;
  font-size: 27px;
}

.oracle-symbol {
  color: #ff8bda;
  font-size: 25px;
}

.partner-card h3 {
  color: var(--ccs-white);
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 20px;
}

.partner-card p {
  color: var(--ccs-muted);
  font-size: 13px;
  line-height: 1.9;
}

/* FOOTER */
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 42px 6%;
  border-top: 1px solid var(--ccs-border);
  background: #070619;
  color: var(--ccs-white);
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
}

.footer-logo {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--ccs-gradient);
  color: #ffffff;
  font-size: 15px;
  font-weight: 900;
}

.footer-brand strong {
  font-size: 12px;
  letter-spacing: 0.8px;
}

.footer-brand p {
  margin: 6px 0 0;
  color: var(--ccs-muted);
  font-size: 12px;
}

.footer-message {
  color: var(--ccs-muted);
  font-size: 13px;
}

.back-top {
  color: var(--ccs-magenta);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
}

.back-top:hover {
  color: #ffffff;
}

.footer small {
  color: #9c94b7;
  font-size: 11px;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .section {
    padding-right: 6%;
    padding-left: 6%;
  }
}

@media (max-width: 700px) {
  .hero {
    min-height: 570px;
    padding: 60px 7% 100px;
  }

  .hero-logo {
    width: 76px;
    height: 64px;
    margin-bottom: 24px;
  }

  .hero h1 {
    font-size: clamp(38px, 9vw, 48px);
    letter-spacing: -1px;
  }

  .hero-kicker {
    font-size: 10px;
    letter-spacing: 1.8px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-button {
    gap: 14px;
    padding: 15px 17px;
    font-size: 11px;
  }

  .hero-bottom {
    gap: 8px;
    padding: 17px 3%;
    font-size: 9px;
    letter-spacing: 1px;
  }

  .hero-bottom i {
    margin-right: 3px;
  }

  .section {
    padding: 60px 6%;
  }

  .program-grid,
  .partner-grid {
    grid-template-columns: 1fr;
  }

  .program-card h3 {
    font-size: 19px;
  }

  .partner-card {
    padding: 26px 20px;
  }
}
</style>