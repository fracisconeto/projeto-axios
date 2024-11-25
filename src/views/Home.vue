<script setup>
import { ref } from 'vue';

const title = ref("Bem-vindo a Netflix!");
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
*{
  background-color: #000000;
}
.home-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}


.content {
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.8); 
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  max-width: 700px;
  width: 90%;
}


h1 {
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 5px;
  animation: fadeIn 1.5s ease-out;
  text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.7);
  color: #fff;
}

p {
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.6;
  animation: fadeIn 2s ease-out;
  color: #b3b3b3;
}

.description {
  margin-bottom: 30px;
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  color: #ccc; 
}


button {
  padding: 12px 24px;
  font-size: 1.4rem;
  background-color: #e50914; 
  border: none;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  font-weight: bold;
}


button:hover {
  background-color: #f40612; 
  transform: scale(1.05); }

button:active {
  transform: scale(0.98); 
}

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

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem; 
  }

  p {
    font-size: 1.3rem;
  }

  .description {
    font-size: 1.1rem;
  }

  button {
    font-size: 1.2rem;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.1rem;
  }

  .description {
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    padding: 8px 16px;
  }
}

</style>
