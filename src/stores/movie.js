import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movie = ref(null)
  showFullVideo = ref(false)
  return {
    movie,
    showFullVideo
  }
})