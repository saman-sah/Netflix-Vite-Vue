<script setup>
import { onMounted } from 'vue'
import { useMovieStore } from './stores/movie.js'

import movies from './movies.json'

import SideNav from './components/SideNav.vue'
import MovieDetails from './components/MovieDetails.vue'
import VideoCarousel from './components/VideoCarousel.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
const useMovie = useMovieStore()

onMounted(() => {
  setTimeout(() => {
    useMovie.movie = movies[0][0]
  }, 100);
})
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
    <div v-if="!useMovie.showFullVideo">
      <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
        <div class="absolute z-30 h-[600px] left-[120px] w-[77%] right-0 top-0 bg-gradient-to-r from-black via-black" />
        <MovieDetails 
          v-if="useMovie.movie" 
          :movie="useMovie.movie"
        />
        <video 
          :src="'/videos/'+useMovie.movie?.name+'.mp4'"
          autoplay
          loop
          class="absolute z-0 h-[600px] right-0 top-0"
        />
      </div>
      <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-auto">
        <VideoCarousel class="pb-14 pt-14" category="Popular Movies" :movies="movies[0]" />
        <VideoCarousel class="pb-14" category="Horror Movies" :movies="movies[1]" />
        <VideoCarousel class="pb-32" category="Featured Movies" :movies="movies[2]" />
      </div>
      <div v-if="!useMovie.showFullVideo" class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0 bg-gradient-to-t from-black via-black" />
    </div>
    <div v-if="useMovie.showFullVideo">
      <div @click="useMovie.showFullVideo = false" class="absolute z-50 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer">
        <ChevronLeft fillColor="#FFFFFF" :size="40"/>
      </div>
      <video 
        :src="'/videos/'+useMovie.movie.name+'.mp4'" 
        autoplay 
        loop
        controls
        class="absolute z-0 w-[100vw] h-full object-fit"
      />
    </div>
  </div>
</template>

