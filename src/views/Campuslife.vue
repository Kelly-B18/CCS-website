
<template>
  <div>
    <section class="page-hero">
      <p class="eyebrow">IDEAS IN ACTION</p>
      <h1>Selected <span>Projects.</span></h1>
      <p>Concept projects that demonstrate our creative approach.</p>
    </section>

    <section class="content">
      <p class="label">OUR PORTFOLIO CONCEPT</p>
      <h2>Made to solve <span>real problems.</span></h2>
      <p class="description">These are sample projects created for our fictional company website, not claims about completed client work.</p>

      <div class="project-grid">
        <article>
          <div class="visual purple-bg"><span class="browser">NEXORA<br /><b>Digital experiences.</b><i>● ● ●</i></span></div>
          <div class="details"><p>WEB DESIGN</p><h3>Modern Business Website</h3><span>A clean, responsive website concept for a growing business.</span></div>
        </article>
        <article>
          <div class="visual gold-bg"><span class="phone"><b>Daily</b><br />Plan better.<br /><strong>✓ Tasks organized</strong></span></div>
          <div class="details"><p>UI CONCEPT</p><h3>Daily Planner App</h3><span>A simple interface concept for organizing everyday tasks.</span></div>
        </article>
        <article>
          <div class="visual dark-bg"><span class="brand-demo">YOUR<br /><b>BRAND.</b></span></div>
          <div class="details"><p>BRAND IDENTITY</p><h3>Creative Brand Kit</h3><span>A sample visual identity with a consistent look and feel.</span></div>
        </article>
      </div>

      <div class="banner">
        <h2>Your idea could be next.</h2>
        <p>Explore how we can turn a concept into a thoughtful digital experience.</p>
        <RouterLink to="/contact">Start a Conversation ↗</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero { padding: 70px 9%; background: #171329; color: white; text-align: center; }
.eyebrow, .label { color: #f3bd55; font-size: 12px; font-weight: 700; letter-spacing: 2px; }
h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
.page-hero h1 { font-size: clamp(38px, 5vw, 55px); margin: 15px 0; }
.page-hero h1 span { color: #f3bd55; }
.page-hero p:last-child { color: #d4cfe1; }
.content { padding: 65px 9%; }
.label { color: #7957b6; }
.content > h2 { font-size: clamp(30px, 4vw, 40px); margin: 8px 0; }
.content > h2 span { color: #7957b6; }
.description { color: #686477; line-height: 1.7; }
.project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px; }
.project-grid article { border: 1px solid #eeeaf6; border-radius: 12px; overflow: hidden; }
.visual { min-height: 220px; display: grid; place-items: center; padding: 20px; }
.purple-bg { background: #e9e0fa; }
.gold-bg { background: #f9e6b7; }
.dark-bg { background: #211b39; }
.browser { width: 90%; min-height: 120px; padding: 20px; background: white; color: #30224c; border-radius: 8px; box-shadow: 0 10px 25px #25153b20; font-size: 12px; }
.browser b { display: block; margin-top: 14px; font-size: 20px; }
.browser i { display: block; margin-top: 15px; color: #7957b6; font-style: normal; }
.phone { width: 125px; height: 165px; padding: 20px 13px; background: white; border-radius: 15px; box-shadow: 0 10px 25px #654b1720; font-size: 12px; line-height: 2; }
.phone b { font-size: 18px; color: #7957b6; }
.phone strong { display: block; background: #f7f5fb; border-radius: 5px; font-size: 10px; padding: 5px; margin-top: 12px; }
.brand-demo { color: white; letter-spacing: 4px; font-size: 24px; }
.brand-demo b { color: #f3bd55; font-size: 34px; }
.details { padding: 23px; }
.details p { color: #7957b6; font-size: 10px; letter-spacing: 1.5px; font-weight: 700; }
.details h3 { margin: 10px 0; }
.details span { color: #686477; font-size: 13px; line-height: 1.7; }
.banner { margin-top: 40px; background: #f7f5fb; padding: 30px; border-radius: 12px; }
.banner p { color: #686477; }
.banner a { display: inline-block; color: #7957b6; font-weight: 700; text-decoration: none; margin-top: 8px; }
@media (max-width: 800px) { .project-grid { grid-template-columns: 1fr; } }
</style>
