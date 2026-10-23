
<template>
  <header class="navbar">
    <!-- Brand and resized logo -->
    <RouterLink to="/" class="brand" @click="closeMenu">
      <img
        :src="ccsLogo"
        alt="CCS Logo"
        class="brand-logo-img"
      />

      <span class="brand-text">
        <strong>Centralian</strong>
        <small>CENTRAL PHILIPPINE UNIVERSITY</small>
      </span>
    </RouterLink>

    <!-- Navigation -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>

      <!-- Academics dropdown -->
      <div
        class="dropdown"
        @mouseenter="academicsOpen = true"
        @mouseleave="academicsOpen = false"
      >
        <RouterLink
          to="/expertise"
          class="dropdown-toggle"
          @click="closeMenu"
        >
          Academics <span class="arrow">▾</span>
        </RouterLink>

        <button
          class="mobile-program-toggle"
          type="button"
          :aria-expanded="academicsOpen"
          @click="academicsOpen = !academicsOpen"
        >
          Programs
          <span>{{ academicsOpen ? '−' : '+' }}</span>
        </button>

        <div
          class="dropdown-menu"
          :class="{ 'dropdown-menu-open': academicsOpen }"
        >
          <RouterLink to="/expertise" @click="closeMenu">
            Academics Overview
          </RouterLink>

          <RouterLink to="/academic-programs/bsit" @click="closeMenu">
            Information Technology
          </RouterLink>

          <RouterLink to="/academic-programs/bscs">
            Computer Science
          </RouterLink>

          <RouterLink to="/academic-programs/dmia">
            Digital Media and Interactive Arts
          </RouterLink>

          <RouterLink to="/academic-programs/blis">
            Library and Information Science
          </RouterLink>
        </div>
      </div>

      <RouterLink to="/news">News</RouterLink>
      <RouterLink to="/faculty">Faculty</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ccsLogo from '@/assets/ccslogo.png'

const menuOpen = ref(false)
const academicsOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
  academicsOpen.value = false
}
</script>

<style scoped>
/* Navbar */
.navbar {
  min-height: 82px;
  padding: 12px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
}

/* Logo size: change 45px to resize it */
.brand-logo-img {
  display: block;
  width: 45px;
  height: 45px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand-text strong {
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.brand-text small {
  color: #f3bd55;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

/* Navigation links */
nav {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

nav a {
  color: #e6e2ef;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

nav a:hover,
nav a.router-link-active {
  color: #f3bd55;
}

/* Academics dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
}

.arrow {
  font-size: 12px;
}

/* Dropdown menu */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 245px;
  background: #171329;
  border: 1px solid #373149;
  border-radius: 8px;
  padding: 8px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  z-index: 1000;
}

.dropdown-menu a {
  display: block;
  padding: 12px 16px;
  line-height: 1.5;
  white-space: normal;
}

.dropdown-menu a:hover {
  background: #29243d;
  color: #f3bd55;
}

/* Show dropdown on hover or keyboard focus */
.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  display: block;
}

/* Mobile controls */
.menu-toggle,
.mobile-program-toggle {
  display: none;
}

.menu-toggle:focus-visible,
.mobile-program-toggle:focus-visible,
.navbar a:focus-visible {
  outline: 2px solid #db1fff;
  outline-offset: 4px;
}

/* Tablet and mobile */
@media (max-width: 900px) {
  .navbar {
    padding: 12px 5%;
    gap: 14px;
  }

  .brand-logo-img {
    width: 70px;
    height: 70px;
  }

  .brand-text strong {
    font-size: 18px;
  }

  .menu-toggle {
    display: flex;
    width: 42px;
    height: 42px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 1px solid rgba(219, 31, 255, 0.35);
    border-radius: 8px;
    background: #17142f;
    cursor: pointer;
  }

  .menu-toggle span {
    width: 19px;
    height: 2px;
    border-radius: 2px;
    background: #ffffff;
  }

  .navbar nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px 0 6px;
  }

  .navbar nav.nav-open {
    display: flex;
  }

  .navbar nav > a {
    display: block;
    padding: 12px 8px;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-toggle {
    display: none !important;
  }

  .mobile-program-toggle {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px;
    border: none;
    background: transparent;
    color: #c9c2dc;
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
  }

  .mobile-program-toggle:hover {
    color: #db1fff;
  }

  .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 400px) {
  .brand {
    gap: 8px;
  }

  .brand-logo-img {
    width: 55px;
    height: 55px;
  }

  .brand-text strong {
    font-size: 16px;
  }

  .brand-text small {
    font-size: 7px;
    letter-spacing: 0.8px;
  }
}
</style>
