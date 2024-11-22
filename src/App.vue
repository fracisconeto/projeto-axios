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
/* Estilo para o cabeçalho */
header {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111; /* Cor de fundo escura */
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

/* Estilo dos links de navegação */
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
  background-color: #ff6347; /* Cor vibrante de laranja */
  transform: translateY(-3px); /* Efeito de elevação ao passar o mouse */
}

.nav-item:active {
  background-color: #e55347; /* Cor mais escura quando clicado */
  transform: translateY(1px); /* Efeito de "pressionamento" */
}

.nav-item.active {
  color: #ff6347; /* Cor de destaque para o item ativo */
  font-weight: bold;
}

/* Estilos para o conteúdo da página principal */
main {
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 100vh;
}

/* Responsividade para telas menores */
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
