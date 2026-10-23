
<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app">
 <Navbar />
 
    <main>
      <RouterView />
    </main>

    <footer class="footer">
      <div>
        <h3>Centralian<span> DIGITAL SOLUTIONS</span></h3>
        <p>Creative ideas. Smart technology. Better solutions.</p>
      </div>
      <p class="copyright">
        © 2026 Centralian Digital Solutions. Student project concept.
      </p>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: 'DM Sans', Arial, sans-serif;
  color: #242039;
  background: #ffffff;
}
button,
input,
textarea,
select {
  font: inherit;
}
a {
  transition: 0.2s ease;
}
.footer {
  background: #171329;
  color: #eeeaf6;
  padding: 36px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.footer h3 {
  margin: 0 0 8px;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 1px;
}
.footer h3 span {
  color: #f3bd55;
  font-size: 11px;
}
.footer p {
  margin: 0;
  color: #c6c0d8;
  font-size: 13px;
}
.footer .copyright {
  max-width: 330px;
}
@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
