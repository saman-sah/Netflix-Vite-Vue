<script setup>
// import { onMounted, ref } from 'vue'



// import MovieDetails from '@/components/MovieDetails.vue'
// import VideoCarousel from '@/components/VideoCarousel.vue'
import SideNav from './components/SideNav.vue'
import { useMovieStore } from './stores/movie.js'
// import { storeToRefs } from 'pinia';
const useMovie = useMovieStore()
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    <div
      v-if="!useMovie.showFullVideo"
      id="SideNav"
      class="flex z-40 items-center w-[120px] h-screen bg-black relative"
    >
      <SideNav />
    </div>
  </div>
</template>

