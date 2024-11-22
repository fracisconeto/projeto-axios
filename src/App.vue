<script setup></script>

<template>
  <header>
    <nav>
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/filmes" class="nav-item">Filmes</router-link>
      <router-link to="/tv" class="nav-item">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111; 
  color: #fff;
  font-size: 1.2rem;
  padding: 0 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.nav-item {
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block;
}

.nav-item:hover {
  background-color: #ff6347; 
  transform: translateY(-3px); 
}

.nav-item:active {
  background-color: #e55347; 
  transform: translateY(1px); 
}

.nav-item.active {
  color: #ff6347; 
  font-weight: bold;
}

main {
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 100vh;
}

@media (max-width: 768px) {
  header {
    height: 3.5rem;
    font-size: 1rem;
  }

  nav {
    gap: 1rem;
  }

  .nav-item {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
}
</style>
