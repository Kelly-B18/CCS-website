
<template>
  <div>
    <section class="page-hero">
      <p class="eyebrow">WHAT WE CAN DO FOR YOU</p>
      <h1>Our <span>Services.</span></h1>
      <p>Digital tools and creative solutions for modern challenges.</p>
    </section>

    <section class="content">
      <p class="label">OUR SOLUTIONS</p>
      <h2>From idea to <span>reality.</span></h2>
      <div class="service-grid">
        <article>
          <div class="icon">⌘</div>
          <h3>Website Development</h3>
          <p>Responsive websites for businesses, organizations, portfolios, and online services.</p>
          <ul><li>Website layout and structure</li><li>Mobile-friendly design</li><li>Navigation and usability</li></ul>
        </article>
        <article>
          <div class="icon">✳</div>
          <h3>Graphic & UI Design</h3>
          <p>Visual concepts that give brands a consistent and recognizable digital presence.</p>
          <ul><li>Brand identity concepts</li><li>Posters and digital graphics</li><li>User interface design</li></ul>
        </article>
        <article>
          <div class="icon">⟡</div>
          <h3>Software Solutions</h3>
          <p>Thoughtful software concepts that help simplify common tasks and workflows.</p>
          <ul><li>System planning</li><li>Basic application concepts</li><li>Workflow improvement</li></ul>
        </article>
        <article>
          <div class="icon">⌕</div>
          <h3>Digital Consulting</h3>
          <p>Guidance for planning digital projects and choosing suitable approaches.</p>
          <ul><li>Project planning</li><li>Technology recommendations</li><li>Digital improvement ideas</li></ul>
        </article>
      </div>
      <div class="banner">
        <h2>Have a project in mind?</h2>
        <p>Tell us what you want to build, and let's explore the possibilities.</p>
        <RouterLink to="/contact" class="btn">Contact Us ↗</RouterLink>
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
.content > h2 { font-size: clamp(30px, 4vw, 40px); margin-top: 8px; }
.content > h2 span { color: #7957b6; }
.service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 30px; }
.service-grid article { padding: 28px; border: 1px solid #eeeaf6; border-radius: 12px; }
.icon { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 12px; background: #f7e7bf; color: #533d82; font-size: 25px; }
.service-grid h3 { margin-bottom: 10px; }
.service-grid p, li { color: #686477; line-height: 1.8; font-size: 14px; }
ul { padding-left: 20px; }
.banner { background: #f7f5fb; padding: 30px; margin-top: 35px; border-radius: 12px; }
.banner p { color: #686477; }
.btn { display: inline-block; margin-top: 8px; background: #7957b6; color: white; text-decoration: none; padding: 12px 17px; border-radius: 7px; font-weight: 700; }
@media (max-width: 700px) { .service-grid { grid-template-columns: 1fr; } }
</style>
