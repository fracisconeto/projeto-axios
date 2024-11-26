<script setup>
  import { defineProps, onMounted } from 'vue';
  import { useMovieStore } from '@/stores/movie';
  const movieStore = useMovieStore();

  const props = defineProps({
    movieId: {
      type: Number,
      required: true,
    },
  });

  onMounted(async () => {
    await movieStore.getMovieDetail(props.movieId);
  });
</script>

<template>
  
  <div class="main">
    <div class="content">
      <img
        :src="`https://image.tmdb.org/t/p/w185${movieStore.currentMovie.poster_path}`"
        :alt="movieStore.currentMovie.title"
      />

      <div class="details">
        <h1>Filme: {{ movieStore.currentMovie.title }}</h1>
        <p>{{ movieStore.currentMovie.tagline }}</p>
        <p>{{ movieStore.currentMovie.overview }}</p>
        <p>Orçamento: ${{ movieStore.currentMovie.budget }}</p>
        <p>Avaliação: {{ movieStore.currentMovie.vote_average }}</p>
      </div>
    </div>
  </div>

  <p>Produtoras</p>
  <div class="companies">
    <template
      v-for="company in movieStore.currentMovie.production_companies"
      :key="company.id"
    >
      <img
        v-if="company.logo_path"
        :src="`https://image.tmdb.org/t/p/w92${company.logo_path}`"
        :alt="company.name"
      />
      <p v-else>{{ company.name }}</p>
    </template>
  </div>
  
</template>

<style scoped>

.main {
  background-color: #141414;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.content img {
  width: 250px;
  height: 375px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.details {
  max-width: 60%;
}

.details h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.details p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #b3b3b3;
}

.details p:first-of-type {
  font-weight: bold;
  font-size: 1.2rem;
  color: #f5f5f5;
}

.companies {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
}

.companies img {
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.companies img:hover {
  transform: scale(1.1);
}

.companies p {
  color: #b3b3b3;
  font-size: 1rem;
  text-align: center;
}

h1, p {
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .content img {
    width: 200px;
    height: 300px;
  }

  .details {
    max-width: 100%;
  }
}
</style>

