<script setup></script>

<template>
  <div class="home-container">
    <div class="content">
      <h1> Bem-vindo ao Notflux – O Seu Destino Para Filmes Imperdíveis!</h1>
      <p> Se você é apaixonado por cinema, nosso site é o lugar perfeito para você! Descubra uma vasta seleção de filmes
        para
        todos os gostos: desde os clássicos atemporais até os lançamentos mais aguardados. Aqui, você encontra resenhas
        exclusivas, trailers emocionantes, listas personalizadas e muito mais, tudo para garantir que sua experiência no
        mundo
        do cinema seja única.</p>
      <div class="description">
        <h2> Explore, Assista e Compartilhe a Magia do Cinema!</h2>
        <p>Navegue por categorias como ação, comédia, drama, terror e ficção científica, e mergulhe em uma imersão
          cinematográfica sem igual. Nosso objetivo é ser o seu guia definitivo para as melhores histórias em tela.
          Prepare a
          pipoca e venha curtir as maiores emoções do universo cinematográfico com a gente!
        </p>
      </div>
      <router-link to="filmes"><button>ACESSAR FILMES</button></router-link>

    </div>
  </div>
</template>

<style scoped>
* {
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
  background-color: #141414;
  margin-bottom: 20rem;
}


.content {
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  border: 1px solid white;
  max-width: 700px;
  width: 90%;
margin-top: 13rem;
}


h1 {
  font-size: 15pt;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 5px;
  animation: fadeIn 2s ease-out;
  text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.7);
  color: #fff;

}

h2 {
  font-size: 13pt;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 5px;
  animation: fadeIn 2s ease-out;
  text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.7);
  color: #fff;

}

p {
  font-size: 12pt;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.6;
  animation: fadeIn 3s ease-out;
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
  font-size: 14pt;
  background-color: #e50914;
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

}


button:hover {
  background-color: #690b0f;
}

button:active {
  transform: scale(0.98);
}



@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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
