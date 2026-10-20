
<template>
  <div>
    <section class="page-hero">
      <p class="eyebrow">OUR CAPABILITIES</p>
      <h1>Technology meets <span>creativity.</span></h1>
      <p>Our approach combines thoughtful planning, design, and development.</p>
    </section>

    <section class="content">
      <div class="intro">
        <p class="label">OUR EXPERTISE</p>
        <h2>How we bring ideas <span>to life.</span></h2>
        <p>Every project is different. We focus on understanding the goal first, then selecting the right design and technology approach.</p>
      </div>

      <div class="steps">
        <article><span>01</span><div><h3>Discover</h3><p>Understand the challenge, audience, and goals before choosing a solution.</p></div></article>
        <article><span>02</span><div><h3>Design</h3><p>Plan a clear structure and create a visual direction that fits the project.</p></div></article>
        <article><span>03</span><div><h3>Develop</h3><p>Build the website or digital concept with usability and responsiveness in mind.</p></div></article>
        <article><span>04</span><div><h3>Improve</h3><p>Review the result, gather feedback, and identify opportunities for improvement.</p></div></article>
      </div>

      <div class="skills">
        <h2>Our focus areas</h2>
        <div class="skill-grid">
          <div>Web Design <span>Layout · Accessibility · Responsive UI</span></div>
          <div>Frontend Development <span>HTML · CSS · JavaScript · Vue</span></div>
          <div>Creative Design <span>Branding · Graphics · Visual Systems</span></div>
          <div>Digital Planning <span>Research · Prototyping · User Needs</span></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero { padding: 70px 9%; background: #171329; color: white; text-align: center; }
.eyebrow, .label { color: #f3bd55; font-size: 12px; font-weight: 700; letter-spacing: 2px; }
h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
.page-hero h1 { font-size: clamp(35px, 5vw, 55px); margin: 15px 0; }
.page-hero h1 span { color: #f3bd55; }
.page-hero p:last-child { color: #d4cfe1; }
.content { padding: 65px 9%; }
.intro { max-width: 680px; margin-bottom: 35px; }
.label { color: #7957b6; }
.intro h2 { font-size: clamp(30px, 4vw, 40px); }
.intro h2 span { color: #7957b6; }
.intro > p:last-child { color: #686477; line-height: 1.8; }
.steps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.steps article { display: flex; gap: 18px; padding: 23px; background: #f7f5fb; border-radius: 12px; }
.steps article > span { color: #7957b6; font-size: 28px; font-weight: 700; font-family: 'Space Grotesk', sans-serif; }
.steps h3 { margin: 4px 0 8px; }
.steps p { color: #686477; line-height: 1.7; font-size: 14px; margin: 0; }
.skills { margin-top: 50px; }
.skills h2 { font-size: 30px; }
.skill-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
.skill-grid div { padding: 22px; border: 1px solid #eeeaf6; border-radius: 10px; font-weight: 700; }
.skill-grid span { display: block; color: #686477; font-size: 13px; font-weight: 400; margin-top: 8px; }
@media (max-width: 700px) { .steps, .skill-grid { grid-template-columns: 1fr; } }
</style>
