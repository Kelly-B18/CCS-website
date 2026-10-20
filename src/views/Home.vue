
<template>
  <div class="ccs-site">
    <header class="navbar">
      <a href="#hero" class="brand">
        <span class="brand-mark">CCS</span>
        <span class="brand-text">
          <strong>COLLEGE OF</strong>
          <strong>COMPUTER STUDIES</strong>
          <small>CENTRAL PHILIPPINE UNIVERSITY</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
      >
        {{ menuOpen ? '✕' : '☰' }}
      </button>

      <nav :class="{ 'nav-open': menuOpen }">
        <a href="#hero" @click="menuOpen = false">Home</a>
        <a href="#programs" @click="menuOpen = false">Programs</a>
        <a href="#faculty" @click="menuOpen = false">Faculty &amp; Staff</a>
        <a href="#partnerships" @click="menuOpen = false">Partnerships</a>
      </nav>
    </header>

    <main>
      <section id="hero" class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-logo">CCS</div>
          <p class="hero-kicker">CENTRAL PHILIPPINE UNIVERSITY</p>
          <h1>Shaping the Future Through Technology</h1>
          <p class="hero-description">
            Empowering students to innovate, create, and lead
            in the ever-changing world of computing.
          </p>
          <a href="#programs" class="gold-button">
            EXPLORE OUR PROGRAMS <span>↓</span>
          </a>
        </div>
        <div class="hero-bottom">
          <span>LEARN</span>
          <span>CREATE</span>
          <span>INNOVATE</span>
        </div>
      </section>

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
          </article>
        </div>
      </section>

      <!-- FACULTY AND STAFF -->
      <section id="faculty" class="section faculty">
        <div class="section-heading">
          <p class="eyebrow">THE PEOPLE BEHIND OUR SUCCESS</p>
          <h2>Faculty and Staff</h2>
          <p>
            Meet the educators and personnel listed in the
            CPU College of Computer Studies directory.
          </p>
        </div>

        <p class="faculty-source">
          Photos and names are sourced from the
          <a
            href="https://ccs.cpu.edu.ph/faculty-and-staff/"
            target="_blank"
            rel="noopener noreferrer"
          >official CCS directory</a>.
          Photos require an internet connection.
        </p>

        <div
          v-for="group in facultyGroups"
          :key="group.title"
          class="department"
        >
          <div class="department-heading">
            <span class="department-number">{{ group.number }}</span>
            <div>
              <h3>{{ group.title }}</h3>
              <p>{{ group.subtitle }}</p>
            </div>
          </div>

          <div class="faculty-grid">
            <article
              v-for="person in group.people"
              :key="person.name"
              class="faculty-card"
            >
              <img
                class="faculty-photo"
                :src="person.photo"
                :alt="'Photo of ' + person.name"
                loading="lazy"
                @error="handleImageError"
              />
              <div class="faculty-info">
                <h4>{{ person.name }}</h4>
                <p class="faculty-role">{{ person.role }}</p>
                <p>
                  <strong>Educational attainment:</strong>
                  {{ person.education }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

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

    <footer class="footer">
      <div class="footer-brand">
        <span class="brand-mark">CCS</span>
        <div>
          <strong>COLLEGE OF COMPUTER STUDIES</strong>
          <p>Central Philippine University</p>
        </div>
      </div>
      <p>Learning today. Innovating for tomorrow.</p>
      <a href="#hero" class="back-top">Back to top ↑</a>
      <small>CCS Mockup Website · Student Project</small>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function handleImageError(event) {
  event.target.alt = 'Photo unavailable'
  event.target.classList.add('photo-unavailable')
}

const photoBase =
  'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/'

const facultyGroups = [
  {
    number: '01',
    title: 'College Administration',
    subtitle: 'Dean, department head, and program coordinators',
    people: [
      {
        name: 'Ma. Christina A. Quijano, MSCS',
        role: 'Dean',
        education: 'MSCS',
        photo: photoBase + 'quijano-e1637132499305.png',
      },
      {
        name: 'Rea P. Balontong, MBA',
        role: 'Department Head (IT & IS)',
        education: 'MBA',
        photo: photoBase + 'balontong-754x1024.jpg',
      },
      {
        name: 'Marjee Rose B. Parreño, MSCS, MBA',
        role: 'Program Coordinator (BSCS, BSDMIA, and MSCS)',
        education: 'MSCS, MBA',
        photo: photoBase + 'parreno-754x1024.jpg',
      },
      {
        name: 'Ana Mae B. Cantel, MLIS',
        role: 'Program Coordinator (BLIS and MLIS)',
        education: 'MLIS',
        photo: photoBase + 'cantel-754x1024.jpg',
      },
      {
        name: 'Lennon D. Pajar',
        role: 'Computer Laboratory Coordinator',
        education: 'Not listed',
        photo: photoBase + 'pajar-754x1024.jpg',
      },
    ],
  },
  {
    number: '02',
    title: 'Faculty',
    subtitle: 'Teaching personnel listed in the directory',
    people: [
      {
        name: 'Leo Paulo B. Beldia',
        role: 'BSIT and BSIS Program',
        education: 'Not listed',
        photo: photoBase + 'beldia-754x1024.jpg',
      },
      {
        name: 'Pedro Peter Rhys B. Cambronero, MSCS',
        role: 'BSCS Program',
        education: 'MSCS',
        photo: photoBase + 'cambronero-754x1024.jpg',
      },
      {
        name: 'Lesley Joy L. Dignadice, MBA',
        role: 'BSIT and BSIS Program',
        education: 'MBA',
        photo: photoBase + 'dignadice-1-754x1024.jpg',
      },
      {
        name: 'Rodolfo C. Eregia, Jr.',
        role: 'BSIT and BSIS Program',
        education: 'Not listed',
        photo: photoBase + 'eregia-754x1024.jpg',
      },
      {
        name: 'Donie S. Jardeleza, MSCS',
        role: 'BSIT and BSIS Program',
        education: 'MSCS',
        photo: photoBase + 'jardleza-754x1024.jpg',
      },
      {
        name: 'Antonio M. Montaño, Jr.',
        role: 'BSIT and BSIS Program',
        education: 'Not listed',
        photo: photoBase + 'montano-754x1024.jpg',
      },
      {
        name: 'Rose Leah Joy A. Ojacastro, MSCS',
        role: 'BSIT and BSIS Program',
        education: 'MSCS',
        photo: photoBase + 'ojacastro-754x1024.jpg',
      },
      {
        name: 'Ma. Sheila C. Sapul, Ph. D.',
        role: 'BSCS Program',
        education: 'Ph. D.',
        photo: photoBase + 'sapul-754x1024.jpg',
      },
    ],
  },
  {
    number: '03',
    title: 'Staff',
    subtitle: 'Administrative and student-support personnel',
    people: [
      {
        name: 'Chrislyn C. Castaño',
        role: 'Secretary',
        education: 'Not listed',
        photo: photoBase + 'castano-754x1024.jpg',
      },
      {
        name: 'A.M.P. Latter P. Taasan',
        role: 'Computer Laboratory Technician',
        education: 'Not listed',
        photo: photoBase + 'taasan-754x1024.jpg',
      },
      {
        name: 'Chriselda Elaine Ador',
        role: 'Guidance Counselor',
        education: 'Not listed',
        photo: photoBase + 'ador-754x1024.jpg',
      },
      {
        name: 'Donna May Rivera',
        role: 'Library Liaison Officer',
        education: 'Not listed',
        photo: photoBase + 'rivera-754x1024.png',
      },
    ],
  },
]
</script>

<style>
:root {
  --ccs-navy: #102c35;
  --ccs-green: #174b46;
  --ccs-gold: #ffb323;
  --ccs-cream: #f7f6f1;
  --ccs-text: #25353a;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  margin: 0;
}

.ccs-site {
  color: var(--ccs-text);
  font-family: Arial, Helvetica, sans-serif;
  overflow-wrap: anywhere;
}

.navbar {
  min-height: 82px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 6%;
  background: #fff;
  box-shadow: 0 2px 14px #00000012;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--ccs-navy);
  text-decoration: none;
  flex-shrink: 0;
}

.brand-mark {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border: 3px solid var(--ccs-gold);
  color: var(--ccs-green);
  font-size: 17px;
  font-weight: 900;
  transform: rotate(-3deg);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 12px;
}

.brand-text small {
  color: #727d80;
  font-size: 9px;
  letter-spacing: 1px;
}

.navbar nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.navbar nav a {
  color: #263b40;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.navbar nav a:hover {
  color: #d18a00;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: var(--ccs-navy);
  font-size: 27px;
  cursor: pointer;
}

.hero {
  min-height: 610px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 10% 100px;
  color: white;
  background:
    linear-gradient(90deg, #0a252def, #0a252db8 60%, #0a252d66),
    url('/cpu-1.jpg') center / cover no-repeat,
    var(--ccs-navy);
  scroll-margin-top: 82px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, #102c3530, transparent);
  pointer-events: none;
}

.hero-content {
  position: relative;
  max-width: 760px;
}

.hero-logo {
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  margin-bottom: 30px;
  border: 4px solid var(--ccs-gold);
  color: white;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 2px;
}

.hero-kicker,
.eyebrow {
  color: #dc9c20;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2.5px;
}

.hero h1 {
  max-width: 720px;
  margin: 18px 0;
  font-size: clamp(38px, 6vw, 68px);
  line-height: 1.08;
}

.hero-description {
  max-width: 600px;
  color: #e0e8e8;
  font-size: 17px;
  line-height: 1.9;
}

.gold-button {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  padding: 16px 22px;
  background: var(--ccs-gold);
  color: #1d3033;
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s;
}

.gold-button:hover {
  transform: translateY(-3px);
}

.hero-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 18px 5%;
  background: #071c22b8;
  color: #f6c44e;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
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
  color: var(--ccs-navy);
  font-size: clamp(30px, 4vw, 44px);
}

.section-heading > p:last-child {
  color: #687477;
  font-size: 15px;
  line-height: 1.9;
}

.programs {
  background: var(--ccs-cream);
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  max-width: 1300px;
  margin: auto;
}

.program-card {
  padding: 28px 22px;
  background: white;
  border: 1px solid #e5e7e4;
  box-shadow: 0 8px 28px #183c3a0a;
  transition: transform 0.25s, box-shadow 0.25s;
}

.program-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px #183c3a15;
}

.program-logo {
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  margin-bottom: 22px;
  border-radius: 50%;
  font-size: 22px;
  font-weight: 900;
}

.it-logo {
  color: white;
  background: #256d78;
}

.cs-logo {
  color: white;
  background: #384c7c;
}

.dmia-logo {
  color: white;
  background: #9b5e87;
}

.lis-logo {
  color: white;
  background: #b88732;
}

.program-code {
  color: #bd8419;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 2px;
}

.program-card h3 {
  min-height: 75px;
  color: var(--ccs-navy);
  font-size: 19px;
  line-height: 1.45;
}

.program-card p {
  color: #697679;
  font-size: 13px;
  line-height: 1.9;
}

.program-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 20px;
}

.program-tags span {
  padding: 6px 8px;
  background: #f0f3f0;
  color: #41605b;
  font-size: 10px;
}

.faculty {
  background: white;
}

.faculty-source {
  max-width: 950px;
  margin: 0 auto 42px;
  color: #687477;
  font-size: 13px;
  line-height: 1.8;
  text-align: center;
}

.faculty-source a {
  color: #9a6b0d;
  font-weight: 700;
}

.department {
  max-width: 1150px;
  margin: 0 auto 55px;
}

.department-heading {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e2e7e5;
}

.department-number {
  color: #d39a24;
  font-size: 30px;
  font-weight: 900;
}

.department-heading h3 {
  margin: 0 0 6px;
  color: var(--ccs-navy);
  font-size: 23px;
}

.department-heading p {
  margin: 0;
  color: #7b8586;
  font-size: 13px;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.faculty-card {
  overflow: hidden;
  border: 1px solid #e6e9e7;
  background: white;
}

.faculty-photo {
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  object-position: center 25%;
  background: #e5ece8;
}

.faculty-photo.photo-unavailable {
  display: none;
}

.faculty-info {
  padding: 20px;
}

.faculty-info h4 {
  margin: 0 0 10px;
  color: var(--ccs-navy);
  font-size: 17px;
}

.faculty-role {
  color: #b17b13;
  font-size: 13px;
  font-weight: 700;
}

.faculty-info p {
  color: #687477;
  font-size: 12px;
  line-height: 1.8;
}

.partnerships {
  background: #f2f5f2;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
  max-width: 950px;
  margin: auto;
}

.partner-card {
  padding: 35px;
  background: white;
  text-align: center;
  border: 1px solid #e3e8e4;
}

.partner-symbol {
  min-height: 90px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  font-weight: 900;
  letter-spacing: 2px;
}

.cisco-symbol {
  color: #1376a8;
  font-size: 28px;
}

.oracle-symbol {
  color: #c64242;
  font-size: 25px;
}

.partner-card h3 {
  color: var(--ccs-navy);
  font-size: 20px;
}

.partner-card p,
.partner-note {
  color: #697679;
  font-size: 13px;
  line-height: 1.9;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 45px 6%;
  background: #0c242b;
  color: white;
  text-align: center;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
}

.footer-brand p {
  margin: 6px 0 0;
  color: #c0cece;
  font-size: 12px;
}

.footer > p {
  color: #d3dedd;
  font-size: 13px;
}

.back-top {
  color: var(--ccs-gold);
  font-size: 13px;
  text-decoration: none;
}

.footer small {
  color: #9eb0b0;
  font-size: 11px;
}

@media (max-width: 1000px) {
  .navbar {
    padding-inline: 4%;
  }

  .navbar nav {
    gap: 14px;
  }

  .navbar nav a {
    font-size: 12px;
  }

  .program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .navbar {
    min-height: 75px;
    flex-wrap: wrap;
  }

  .brand-mark {
    width: 45px;
    height: 45px;
  }

  .brand-text {
    font-size: 10px;
  }

  .brand-text small {
    font-size: 8px;
  }

  .menu-toggle {
    display: block;
  }

  .navbar nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding-bottom: 10px;
  }

  .navbar nav.nav-open {
    display: flex;
  }

  .navbar nav a {
    padding: 14px 4px;
    border-top: 1px solid #edf0ed;
    font-size: 14px;
  }

  .hero {
    min-height: 570px;
    padding: 65px 7% 100px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-bottom {
    padding-inline: 3%;
    font-size: 9px;
    letter-spacing: 1px;
  }

  .section {
    padding: 65px 6%;
  }

  .program-grid,
  .faculty-grid,
  .partner-grid {
    grid-template-columns: 1fr;
  }

  .program-card h3 {
    min-height: auto;
  }

  .department-heading {
    gap: 13px;
  }

  .department-heading h3 {
    font-size: 19px;
  }

  .faculty-photo {
    height: 300px;
  }
}
</style>
