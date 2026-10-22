<template> 
    <main>
      <section id="hero" class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-logo">CCS</div>
          <p class="hero-kicker">CENTRAL PHILIPPINE UNIVERSITY</p>
          <h1>BANG Shaping the Future Through Technology</h1>
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

</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function handleImageError(event) {
  event.target.alt = 'Photo unavailable'
  event.target.classList.add('photo-unavailable')
}
