<script setup>
import { ref, onMounted } from 'vue';
import api from '@/plugins/axios';
import Loading from 'vue-loading-overlay';
import { useGenreStore } from '@/stores/genre';
import { useRouter } from 'vue-router'

const router = useRouter()
const genreStore = useGenreStore();
const Tvs = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tv');
  isLoading.value = false;
});

const listTv = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  Tvs.value = response.data.results;
  isLoading.value = false;
};

const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

function openTv(tvId) {
  router.push({ name: 'TvDetails', params: { tvId } });
}

</script>


<template>
  <h1>Programas de TV</h1>
  <ul class="genre-list">
    <li v-for="genre in genreStore.genres" :key="genre.id" @click="listTv(genre.id)" class="genre-item"
      :class="{ active: genre.id === genreStore.currentGenreId }">

      {{ genre.name }}

    </li>
  </ul>

  <loading v-model:active="isLoading" is-full-page />

  <div class="movie-list">
    <div v-for="tv in Tvs" :key="tv.id" class="movie-card">
      <img
  :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
  :alt="tv.title"
  @click="openTv(tv.id)"
/>
      <div class="movie-details">
        <p class="movie-title">{{ tv.name }}</p>
        <p class="movie-release-date">{{ formatDate(tv.first_air_date) }}</p>
        <p class="movie-genres">
          <span v-for="genre_id in tv.genre_ids" :key="genre_id" @click="listTv(genre_id)"
            :class="{ active: genre_id === genreStore.currentGenreId }">
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
  background-color: #141414;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #141414;
  color: #fff;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
  margin-top: 8rem;
}

.genre-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  list-style: none;
  text-decoration: none;
  
}

.genre-item {
  background-color: black;
  color: #fff;
  padding: 8px 18px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;


}

.genre-item:hover {
  background-color: #e50914;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  justify-items: center;
}

.movie-card {
  background-color: black;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  border-radius: 0;
}

.movie-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8);
}

.movie-card img {
  width: 100%;
  height: auto;
}

.movie-details {
  padding: 20px;
  background-color: black;
  text-align: center;

}

.movie-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  background-color: black;
}

.movie-release-date {
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 10px;
  background-color: black;

}

.movie-genres {
  font-size: 0.75rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  background-color: black;

}

.movie-genres span {
  background-color: #e50914;
  border-radius: 20px;
  padding: 5px 15px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.movie-genres span:hover {
  background-color: #f40612;
  box-shadow: 0 0 0.5rem rgba(229, 9, 20, 0.8);
}

@media (max-width: 768px) {
  .movie-list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  h1 {
    font-size: 2rem;
  }

  .genre-item {
    font-size: 0.9rem;
  }

  .movie-card {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .movie-list {
    grid-template-columns: 1fr;
    margin: 0 10px 0 10px;
    padding: 5px 7px ;
    font-size: 0.1rem;
  }
  p{
    font-size: medium;
  }

  h1 {
    font-size: 1.6rem;
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
