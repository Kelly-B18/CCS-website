
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

    <!-- Mobile menu button -->
    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-label="Toggle navigation"
      @click="menuOpen = !menuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navigation -->
    <nav :class="{ 'nav-open': menuOpen }">
      <RouterLink to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink to="/about" @click="closeMenu">About</RouterLink>

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

          <RouterLink to="/academic-programs/bscs" @click="closeMenu">
            Computer Science
          </RouterLink>

          <RouterLink to="/academic-programs/dmia" @click="closeMenu">
            Digital Media and Interactive Arts
          </RouterLink>

          <RouterLink to="/academic-programs/blis" @click="closeMenu">
            Library and Information Science
          </RouterLink>
        </div>
      </div>

      <RouterLink to="/news" @click="closeMenu">News</RouterLink>
      <RouterLink to="/faculty" @click="closeMenu">Faculty</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
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
/* Main navbar */
.navbar {
  position: relative;
  z-index: 1000;
  min-height: 82px;
  padding: 12px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  background: #100c28;
  color: #ffffff;
  border-bottom: 1px solid rgba(219, 31, 255, 0.22);
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  color: #ffffff;
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
  gap: 4px;
}

.brand-text strong {
  font-family: 'Space Grotesk', Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.brand-text small {
  color: #db1fff;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.2px;
}

/* Navigation links */
.navbar nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

.navbar nav a {
  color: #c9c2dc;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.navbar nav a:hover,
.navbar nav a.router-link-active {
  color: #db1fff;
}

/* Academics dropdown */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 0;
}

.arrow {
  font-size: 12px;
}

/* Dropdown panel */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: -14px;
  width: 275px;
  padding: 8px;
  border: 1px solid rgba(219, 31, 255, 0.25);
  border-radius: 10px;
  background: #17142f;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.4);
  z-index: 1100;
}

.dropdown-menu a {
  display: block;
  padding: 12px;
  border-radius: 6px;
  line-height: 1.5;
  white-space: normal;
}

.dropdown-menu a:hover,
.dropdown-menu a.router-link-active {
  background: rgba(112, 48, 239, 0.2);
  color: #ffffff;
}

.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu,
.dropdown-menu.dropdown-menu-open {
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
    position: static;
    width: 100%;
    margin: 0;
    box-shadow: none;
  }

  .dropdown-menu.dropdown-menu-open {
    display: block;
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
