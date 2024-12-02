import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useTvStore = defineStore('tv', () => {
  const state = reactive({
    currentTV: {},
  });

  const currentTv  = computed(() => state.currentTV);

  const getTvDetail = async (tvId) => {
    const response = await api.get(`tv/${tvId}`);
    state.currentTV = response.data;
  };

  return { currentTv, getTvDetail };
});