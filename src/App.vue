
<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar />

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="footer-brand">
        <h3>
          NEXORA
          <span>DIGITAL SOLUTIONS</span>
        </h3>
        <p>Creative ideas. Smart technology. Better solutions.</p>
      </div>

      <p class="copyright">
        © 2026 NEXORA Digital Solutions. Student project concept.
      </p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --primary-purple: #7030EF;
  --accent-magenta: #DB1FFF;
  --main-background: #090820;
  --surface-dark: #17142F;
  --surface-light: #211A40;
  --text-white: #FFFFFF;
  --text-muted: #C9C2DC;
  --purple-gradient: linear-gradient(110deg, #7030EF 0%, #DB1FFF 100%);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--main-background);
}

body {
  margin: 0;
  font-family: 'DM Sans', Arial, sans-serif;
  color: var(--text-white);
  background: var(--main-background);
}

body,
button,
input,
textarea,
select {
  font-family: 'DM Sans', Arial, sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}

button {
  cursor: pointer;
}

#app,
.app {
  min-height: 100vh;
}

.app {
  display: flex;
  flex-direction: column;
  background: var(--main-background);
}

.main-content {
  flex: 1;
  min-width: 0;
}

/* Footer */
.footer {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(
      ellipse at 10% 100%,
      rgba(112, 48, 239, 0.2),
      transparent 55%
    ),
    var(--surface-dark);
  color: var(--text-white);
  padding: 38px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  border-top: 1px solid rgba(219, 31, 255, 0.25);
}

.footer-brand h3 {
  margin: 0 0 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 1px;
}

.footer-brand h3 span {
  display: block;
  margin-top: 3px;
  color: var(--accent-magenta);
  font-family: 'DM Sans', Arial, sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
}

.footer-brand p,
.footer .copyright {
  margin: 0;
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.7;
}

.footer .copyright {
  max-width: 330px;
  text-align: right;
}

/* Keyboard accessibility */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid var(--accent-magenta);
  outline-offset: 4px;
}

@media (max-width: 600px) {
  .footer {
    padding: 30px 6%;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-brand h3 {
    font-size: 22px;
  }

  .footer .copyright {
    text-align: left;
  }
}
</style>
