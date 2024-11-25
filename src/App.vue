<script setup></script>

<template>
  <header>
    <div class="header-container">
      <h1>Netflix</h1>
      <nav>
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/filmes" class="nav-item">Filmes</router-link>
        <router-link to="/tv" class="nav-item">Programas de TV</router-link>
      </nav>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>


 *{
  background-color: #141414 ;
 }
header {
  height: 6rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #141414; 
  color: #fff;
  font-size: 1.2rem;
  padding: 0 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}


.header-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #e50914; 
  margin: 0;
  padding-bottom: 5px; 
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0; 
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
  text-transform: uppercase; 
}


.nav-item:hover {
  background-color: #e50914; 
  transform: translateY(-3px); 
}

.nav-item:active {
  background-color: #f40612; 
  transform: translateY(1px); 
}

.nav-item.active {
  color: #e50914; 
  font-weight: bold;
}


main {
  padding: 2rem;
  background-color: #141414; 
  margin-top: 6rem; 
  color: #fff;
}


@media (max-width: 768px) {
  header {
    height: 5rem;
    font-size: 1rem;
    padding: 0 1.5rem;
  }

  .header-container {
    gap: 1rem; 
  }

  nav {
    gap: 1rem;
  }

  .nav-item {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.8rem;
  }

  .nav-item {
    font-size: 0.9rem;
  }
}
</style>
