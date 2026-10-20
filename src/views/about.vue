
<template>
  <div>
    <section class="page-hero">
      <p class="eyebrow">GET TO KNOW US</p>
      <h1>About <span>NEXORA.</span></h1>
      <p>We turn creative ideas into useful digital experiences.</p>
    </section>

    <section class="content">
      <div class="story">
        <p class="label">OUR STORY</p>
        <h2>A new perspective on <span>technology.</span></h2>
        <p>
          NEXORA Digital Solutions is a fictional technology company created
          to show how creativity and technology can work together. Our goal
          is to design digital experiences that are simple, helpful, and
          accessible to everyone.
        </p>
        <p>
          From websites to visual design and software concepts, we believe
          every good solution begins by understanding people's needs.
        </p>
      </div>

      <div class="cards">
        <article>
          <div class="symbol">◎</div>
          <h3>Our Mission</h3>
          <p>To create practical, creative, and user-friendly digital solutions that help people and businesses move forward.</p>
        </article>
        <article>
          <div class="symbol">✦</div>
          <h3>Our Vision</h3>
          <p>To become a trusted digital innovation partner known for thoughtful design, useful technology, and continuous learning.</p>
        </article>
        <article>
          <div class="symbol">◇</div>
          <h3>Our Values</h3>
          <p>Creativity, collaboration, responsibility, accessibility, and a commitment to improving every project.</p>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 70px 9%;
  background: #171329;
  color: white;
  text-align: center;
}
.eyebrow, .label {
  color: #f3bd55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}
h1, h2, h3 { font-family: 'Space Grotesk', sans-serif; }
.page-hero h1 { font-size: clamp(38px, 5vw, 55px); margin: 15px 0; }
.page-hero h1 span { color: #f3bd55; }
.page-hero p:last-child { color: #d4cfe1; }
.content { padding: 65px 9%; }
.story { max-width: 760px; margin: 0 auto 45px; text-align: center; }
.story .label { color: #7957b6; }
.story h2 { font-size: clamp(28px, 4vw, 40px); }
.story h2 span { color: #7957b6; }
.story p:not(.label) { color: #686477; line-height: 1.9; }
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.cards article { padding: 27px; background: #f7f5fb; border-radius: 12px; }
.symbol { color: #7957b6; font-size: 32px; }
.cards h3 { margin-bottom: 10px; }
.cards p { color: #686477; font-size: 14px; line-height: 1.8; }
@media (max-width: 750px) {
  .cards { grid-template-columns: 1fr; }
}
</style>
