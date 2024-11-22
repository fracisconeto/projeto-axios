<script setup>
import { ref } from 'vue';

const title = ref("Bem-vindo ao Cinema!");
const subtitle = ref("Explore os filmes mais populares e os lançamentos de sucesso");
const buttonText = ref("Descubra Agora");

const handleClick = () => {
  alert('Vamos te levar à lista de filmes!');
};
</script>

<template>
  <div class="home-container">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <div class="description">
        <p>Assista aos melhores filmes de todos os tempos, desde os clássicos a lançamentos de última hora. Embarque em uma jornada cinematográfica com nossa seleção de filmes!</p>
      </div>
      <router-link to="filmes"><button @click="handleClick">{{ buttonText }}</button></router-link>
    </div>
  </div>
</template>

<style scoped>
/* Estilo geral do container da home */


.home-container {
  background-color: #2c3e50; /* Cor sólida de fundo, que é elegante e moderna */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

/* Conteúdo principal da página */
.content {
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente */
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  width: 90%;
}

/* Título principal */
h1 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 3px;
  animation: fadeIn 1.5s ease-out;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
}

/* Subtítulo */
p {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.6;
  animation: fadeIn 2s ease-out;
}

/* Descrição adicional */
.description {
  margin-bottom: 30px;
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

/* Botão de ação */
button {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #ff6347; /* Cor vibrante de laranja */
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Efeito no botão ao passar o mouse */
button:hover {
  background-color: #ff4500; /* Cor mais intensa ao passar o mouse */
  transform: scale(1.1);
}

/* Efeito no botão ao clicar */
button:active {
  transform: scale(0.98);
}

/* Animação de FadeIn para títulos e textos */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
