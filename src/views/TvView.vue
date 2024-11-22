<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';
import { useGenreStore } from '@/stores/genre';

const genreStore = useGenreStore();
const Tvs = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('movie');
  isLoading.value = false;
});

const listTv = async (genreId) => {
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });

  Tvs.value = response.data.results
  isLoading.value = false;
};

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

</script>

<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li v-for="genre in genreStore.genres" :key="genre.id" @click="listTv(genre.id)" class="genre-item">
      {{ genre.name }}
    </li>
  </ul>

  <loading v-model:active="isLoading" is-full-page />

  <div class="movie-list">
    <div v-for="tv in Tvs" :key="tv.id" class="movie-card">

      <img :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`" :alt="tv.title" />
      <div class="movie-details">
        <p class="movie-title">{{ tv.name }}</p>
        <p class="movie-release-date">{{ formatDate(tv.first_air_date) }}</p>
        <p class="movie-genres">
          <span v-for="genre_id in Tvs.genre_ids" :key="genre_id" @click="listTv(genre_id)">
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>

    </div>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #444;
}

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

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  justify-items: center;
}

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
