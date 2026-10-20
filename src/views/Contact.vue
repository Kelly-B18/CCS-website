
<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const service = ref('Website Development')
const message = ref('')
const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="page-hero">
      <p class="eyebrow">LET'S CONNECT</p>
      <h1>Contact <span>Our Team.</span></h1>
      <p>Have a question or a project idea? We'd love to hear from you.</p>
    </section>

    <section class="content">
      <div class="info">
        <p class="label">GET IN TOUCH</p>
        <h2>Let's make something <span>meaningful.</span></h2>
        <p>Use the form to tell us about your idea. This demo is part of our student website project.</p>
        <div class="info-item"><b>✉ Email</b><span>hello@nexora.example</span></div>
        <div class="info-item"><b>⌖ Location</b><span>Iloilo, Philippines</span></div>
        <div class="info-item"><b>◷ Office Hours</b><span>Monday–Friday · 9:00 AM–5:00 PM</span></div>
      </div>

      <form @submit.prevent="submitForm">
        <label for="name">Full Name</label>
        <input id="name" v-model="name" required placeholder="Enter your name" />

        <label for="email">Email Address</label>
        <input id="email" v-model="email" type="email" required placeholder="Enter your email" />

        <label for="service">What do you need?</label>
        <select id="service" v-model="service">
          <option>Website Development</option>
          <option>Graphic & UI Design</option>
          <option>Software Solutions</option>
          <option>Digital Consulting</option>
          <option>Other</option>
        </select>

        <label for="message">Your Message</label>
        <textarea id="message" v-model="message" required rows="5" placeholder="Tell us about your idea"></textarea>

        <button type="submit">Submit Message ↗</button>

        <p v-if="submitted" class="success">
          Thank you, {{ name }}! Your demo form has been submitted on this page.
          No email was sent.
        </p>
      </form>
    </section>
  </div>
</template>

<style scoped>
.page-hero { padding: 70px 9%; background: #171329; color: white; text-align: center; }
.eyebrow, .label { color: #f3bd55; font-size: 12px; font-weight: 700; letter-spacing: 2px; }
h1, h2 { font-family: 'Space Grotesk', sans-serif; }
.page-hero h1 { font-size: clamp(38px, 5vw, 55px); margin: 15px 0; }
.page-hero h1 span { color: #f3bd55; }
.page-hero p:last-child { color: #d4cfe1; }
.content { padding: 65px 9%; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start; }
.label { color: #7957b6; }
.info h2 { font-size: clamp(30px, 4vw, 40px); line-height: 1.2; }
.info h2 span { color: #7957b6; }
.info > p:not(.label) { color: #686477; line-height: 1.8; }
.info-item { display: flex; flex-direction: column; gap: 6px; margin-top: 24px; }
.info-item b { color: #302849; }
.info-item span { color: #686477; font-size: 14px; }
form { padding: 28px; background: #f7f5fb; border-radius: 12px; }
label { display: block; margin: 15px 0 7px; font-size: 13px; font-weight: 700; }
input, textarea, select { width: 100%; padding: 12px; border: 1px solid #ddd7e9; border-radius: 7px; background: white; color: #242039; }
textarea { resize: vertical; }
button { width: 100%; margin-top: 20px; padding: 14px; border: 0; border-radius: 7px; background: #7957b6; color: white; font-weight: 700; cursor: pointer; }
.success { padding: 12px; background: #e7f6e9; color: #245c31; border-radius: 7px; line-height: 1.6; font-size: 13px; }
@media (max-width: 750px) { .content { grid-template-columns: 1fr; gap: 30px; } }
</style>
