<template>
  <section id="news" class="section news">
    <div class="section-heading">
      <p class="eyebrow">STAY UPDATED</p>
      <h2>News, Events & Announcements</h2>
      <p>
        Keep up with the latest achievements, upcoming academic events, 
        and official announcements from the CPU College of Computer Studies.
      </p>
    </div>

    <div class="news-grid">
      <!-- Article 1 -->
      <article class="news-card">
        <div class="news-badge event-badge">EVENT</div>
        <div class="news-content">
          <p class="news-date">NOVEMBER 15, 2026</p>
          <h3>CCS Tech Days 2026: Code for Innovation</h3>
          <p class="news-excerpt">
            Join us for an exciting 3-day event featuring hackathons, UI/UX workshops, 
            and tech talks from CPU alumni working in leading software companies.
          </p>
          <a href="#" class="read-more">Read Full Story &rarr;</a>
        </div>
      </article>

      <!-- Article 2 -->
      <article class="news-card">
        <div class="news-badge achievement-badge">ACHIEVEMENT</div>
        <div class="news-content">
          <p class="news-date">OCTOBER 20, 2026</p>
          <h3>BSCS Students Win Regional Computing Olympiad</h3>
          <p class="news-excerpt">
            Congratulations to our BSCS delegators for taking home 1st place in 
            the Western Visayas Algorithmic Programming Competition.
          </p>
          <a href="#" class="read-more">Read Full Story &rarr;</a>
        </div>
      </article>

      <!-- Article 3 -->
      <article class="news-card">
        <div class="news-badge announcement-badge">ANNOUNCEMENT</div>
        <div class="news-content">
          <p class="news-date">OCTOBER 05, 2026</p>
          <h3>Cisco Networking Academy Enrollment Open</h3>
          <p class="news-excerpt">
            Registration for CCNA certification track for the upcoming semester is now open. 
            Limited slots available for BSIT and BSCS students.
          </p>
          <a href="#" class="read-more">Read Full Story &rarr;</a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.news {
  background: #ffffff;
}

.eyebrow {
  color: #dc9c20;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.section {
  padding: 90px 8%;
  scroll-margin-top: 82px;
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 45px;
  text-align: center;
}

.section-heading h2 {
  margin: 12px 0;
  color: var(--ccs-navy, #102c35);
  font-size: clamp(30px, 4vw, 44px);
}

.section-heading > p:last-child {
  color: #687477;
  font-size: 15px;
  line-height: 1.9;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1250px;
  margin: auto;
}

.news-card {
  background: #f7f6f1;
  border: 1px solid #e5e7e4;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, box-shadow 0.25s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(16, 44, 53, 0.08);
}

.news-badge {
  padding: 6px 14px;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.5px;
  align-self: flex-start;
  margin: 20px 20px 0;
  border-radius: 2px;
}

.event-badge {
  background: #174b46;
  color: #ffffff;
}

.achievement-badge {
  background: #ffb323;
  color: #102c35;
}

.announcement-badge {
  background: #102c35;
  color: #ffffff;
}

.news-content {
  padding: 15px 20px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-date {
  color: #727d80;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 8px;
}

.news-card h3 {
  color: var(--ccs-navy, #102c35);
  font-size: 18px;
  line-height: 1.4;
  margin: 0 0 12px;
}

.news-excerpt {
  color: #697679;
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 20px;
  flex: 1;
}

.read-more {
  color: #bd8419;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: color 0.2s;
}

.read-more:hover {
  color: var(--ccs-navy, #102c35);
}

@media (max-width: 900px) {
  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>