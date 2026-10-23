
<template>
  <main class="faculty-page">
    <section class="faculty-hero">
      <div class="faculty-hero-content">
        <p class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY</p>
        <h1>Faculty and Staff</h1>
        <p>
          Meet the people who support teaching, learning, research,
          and student services at the College of Computer Studies.
        </p>
      </div>
    </section>

    <section class="faculty-content">
      <div class="section-intro">
        <p class="eyebrow">OUR PEOPLE</p>
        <h2>Dedicated to Learning and Innovation</h2>
        <p>
          Explore the college administration, teaching personnel,
          and support staff.
        </p>
      </div>

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
            <div class="photo-wrap">
              <img
                :src="person.photo"
                :alt="'Photo of ' + person.name"
                class="faculty-photo"
                loading="lazy"
                @error="handleImageError"
              />
            </div>

            <div class="faculty-info">
              <h4>{{ person.name }}</h4>
              <p class="faculty-role">{{ person.role }}</p>
              <p class="education">
                <strong>Educational attainment:</strong>
                {{ person.education }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <p class="directory-note">
        Please refer to the official CPU CCS directory for the latest
        faculty information and program assignments.
      </p>
    </section>
  </main>
</template>

<script setup>
const photoBase =
  'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/'

function handleImageError(event) {
  const image = event.target
  image.style.display = 'none'

  const wrapper = image.parentElement
  wrapper.classList.add('photo-missing')
  wrapper.setAttribute('data-message', 'Photo unavailable')
}

const facultyGroups = [
  {
    number: '01',
    title: 'College Administration',
    subtitle: 'College leadership and program coordination',
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
    subtitle: 'Teaching personnel',
    people: [
      {
        name: 'Leo Paulo B. Beldia',
        role: 'Program assignment: verify with official directory',
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
        role: 'Program assignment: verify with official directory',
        education: 'MBA',
        photo: photoBase + 'dignadice-1-754x1024.jpg',
      },
      {
        name: 'Rodolfo C. Eregia, Jr.',
        role: 'Program assignment: verify with official directory',
        education: 'Not listed',
        photo: photoBase + 'eregia-754x1024.jpg',
      },
      {
        name: 'Donie S. Jardeleza, MSCS',
        role: 'Program assignment: verify with official directory',
        education: 'MSCS',
        photo: photoBase + 'jardleza-754x1024.jpg',
      },
      {
        name: 'Antonio M. Montaño, Jr.',
        role: 'Program assignment: verify with official directory',
        education: 'Not listed',
        photo: photoBase + 'montano-754x1024.jpg',
      },
      {
        name: 'Rose Leah Joy A. Ojacastro, MSCS',
        role: 'Program assignment: verify with official directory',
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

<style scoped>
.faculty-page {
  min-height: 100vh;
  background: #f7f6fa;
  color: #211d35;
}

.faculty-hero {
  display: flex;
  align-items: center;
  min-height: 300px;
  padding: 64px 8%;
  color: white;
  background:
    linear-gradient(110deg, rgba(23, 19, 41, 0.96),
    rgba(38, 31, 68, 0.82)),
    #171329;
}

.faculty-hero-content {
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 12px;
  color: #d69f37;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.faculty-hero h1 {
  margin: 0 0 16px;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.1;
}

.faculty-hero-content > p:last-child {
  max-width: 620px;
  color: #e5e1ef;
  font-size: 17px;
  line-height: 1.75;
}

.faculty-content {
  width: min(1180px, 84%);
  margin: auto;
  padding: 64px 0 80px;
}

.section-intro {
  max-width: 760px;
  margin-bottom: 46px;
}

.section-intro h2 {
  margin: 0 0 14px;
  font-size: clamp(1.7rem, 3vw, 2.4rem);
}

.section-intro > p:last-child {
  color: #6c687a;
  line-height: 1.8;
}

.department {
  margin-top: 44px;
}

.department-heading {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e1ee;
}

.department-number {
  display: grid;
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  place-items: center;
  border-radius: 14px;
  background: #f3bd55;
  color: #171329;
  font-weight: 900;
}

.department-heading h3 {
  margin: 0 0 5px;
  font-size: 1.35rem;
}

.department-heading p {
  margin: 0;
  color: #777184;
  font-size: 14px;
}

.faculty-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.faculty-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #e9e5f0;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 24px rgba(31, 23, 57, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.faculty-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(31, 23, 57, 0.12);
}

.photo-wrap {
  position: relative;
  display: grid;
  height: 245px;
  place-items: center;
  overflow: hidden;
  background: #ece9f3;
}

.faculty-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
}

.photo-missing::after {
  content: attr(data-message);
  color: #777184;
  font-size: 14px;
}

.faculty-info {
  padding: 20px;
}

.faculty-info h4 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  line-height: 1.45;
}

.faculty-role {
  min-height: 42px;
  margin: 0 0 14px;
  color: #64518a;
  font-size: 14px;
  line-height: 1.5;
}

.education {
  margin: 0;
  color: #777184;
  font-size: 13px;
  line-height: 1.6;
}

.education strong {
  color: #302943;
}

.directory-note {
  margin-top: 44px;
  padding: 16px 18px;
  border-left: 4px solid #f3bd55;
  border-radius: 0 8px 8px 0;
  background: white;
  color: #6c687a;
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .faculty-content {
    width: 90%;
  }

  .faculty-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .faculty-hero {
    min-height: 260px;
    padding: 48px 6%;
  }

  .faculty-hero-content > p:last-child {
    font-size: 15px;
  }

  .faculty-content {
    width: 90%;
    padding: 44px 0 56px;
  }

  .faculty-grid {
    grid-template-columns: 1fr;
  }

  .photo-wrap {
    height: 280px;
  }

  .department-heading {
    align-items: flex-start;
  }
}
</style>
