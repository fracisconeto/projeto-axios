<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';

const genres = ref([]);
const movies = ref([]);


onMounted(async () => {
  const response = await api.get('genre/movie/list?language=pt-BR');
  genres.value = response.data.genres;
});


const listMovies = async (genreId) => {
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  movies.value = response.data.results
};
</script>
<template>
  <h1>Filmes</h1>
  <ul class="genre-list">
    <li v-for="genre in genres" :key="genre.id" @click="listMovies(genre.id)" class="genre-item">
      {{ genre.name }}
    </li>
  </ul>

  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">

      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      <div class="movie-details">
        <p class="movie-title">{{ movie.title }}</p>
        <p class="movie-release-date">{{ movie.release_date }}</p>
        <p class="movie-genres">{{ movie.genre_ids }}</p>
      </div>

    </div>
  </div>

</template>


<style scoped>
/* Reseta margens e paddings para garantir uma base limpa */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilo geral do corpo */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

/* Cabeçalho */
h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #444;
}

/* Lista de gêneros */
.genre-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.genre-item {
  background-color: #0066cc;
  color: #fff;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.genre-item:hover {
  background-color: #004d99;
}

/* Layout para exibição de filmes */
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  justify-items: center;
}

/* Cartão de filme */
.movie-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 220px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.movie-card img {
  width: 100%;
  height: auto;
  border-bottom: 2px solid #eee;
}

/* Detalhes do filme */
.movie-details {
  padding: 15px;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.movie-release-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 8px;
}

.movie-genres {
  font-size: 0.9rem;
  color: #555;
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .movie-list {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  h1 {
    font-size: 1.6rem;
  }

  .genre-item {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .movie-list {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 1.4rem;
  }

  .genre-item {
    font-size: 0.8rem;
    padding: 8px 16px;
  }

  .movie-card {
    width: 100%;
  }
}
</style>
