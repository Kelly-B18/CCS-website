
<template>
  <header class="navbar">
    <!-- Brand -->
    <RouterLink to="/" class="brand">
      <span class="brand-mark">N</span>
      <span class="brand-text">
        <strong>NEXORA</strong>
        <small>DIGITAL SOLUTIONS</small>
      </span>
    </RouterLink>

    <!-- Navigation -->
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>

      <!-- Academics Dropdown -->
      <div class="dropdown">
        <RouterLink to="/expertise" class="dropdown-toggle">
          Academics <span class="arrow">▾</span>
        </RouterLink>

        <div class="dropdown-menu">
          <RouterLink to="/academic-programs/bsit">
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

<style scoped>
/* Navbar */
.navbar {
  min-height: 82px;
  padding: 16px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: #171329;
  color: white;
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

.brand-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #f3bd55;
  color: #171329;
  font-size: 25px;
  font-weight: 900;
  transform: skew(-5deg);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand-text strong {
  font-size: 21px;
  letter-spacing: 2px;
}

.brand-text small {
  color: #f3bd55;
  font-size: 9px;
  letter-spacing: 1.5px;
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

/* Responsive layout */
@media (max-width: 800px) {
  .navbar {
    justify-content: center;
  }

  nav {
    justify-content: center;
    gap: 14px;
  }

  .dropdown-menu {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
