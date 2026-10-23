<template><!-- FACULTY AND STAFF -->
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
  ];
</script>




