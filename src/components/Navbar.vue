
<template>
  <header class="navbar">
    <RouterLink to="/" class="brand">
      <span class="brand-mark">N</span>
      <span class="brand-text">
        <strong>NEXORA</strong>
        <small> DIGITAL SOLUTIONS</small>
      </span>
    </RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="about">About</RouterLink>
      <RouterLink to="/Academics">Academics</RouterLink>
      <RouterLink to="/Faculty">Faculty</RouterLink>
      <RouterLink to="/News">News</RouterLink>
      <RouterLink to="/Contact">Contact</RouterLink>
      


      
    </nav>
  </header>
</template>

<style scoped>
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
nav .nav-contact {
  padding: 11px 16px;
  border-radius: 7px;
  background: #f3bd55;
  color: #171329;
  font-weight: 700;
}
@media (max-width: 800px) {
  .navbar {
    justify-content: center;
  }
  nav {
    justify-content: center;
    gap: 14px;
  }
}
</style>
