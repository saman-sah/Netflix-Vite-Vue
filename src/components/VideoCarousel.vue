<script setup>
import { ref, watch } from 'vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import { useMovieStore } from '../stores/movie'

defineProps({
  category: {
    type: String,
    default: ''
  },
  movies: {
    type: Array,
    default: () => []
  }
})

const useMovie = useMovieStore()

const currentSlide = ref(0)



const currentSlideObject = (slide, index) => {
  if(index === currentSlide.value) {
    useMovie.movie = slide
  }
}

const fullScreenVideo = (index, slide) => {
  console.log('fullscreen', index);
  currentSlide.value = index
  setTimeout(() => {
    useMovie.showFullVideo = true
  }, 500);
}
</script>

<template>
  <div class="min-w-[1200px] relative">
    <div class="flex justify-between mr-6">
      <div class="flex items-center font-semibold text-white text-2xl cursor-pointer">
        {{  category }}
      </div>
    </div>
    <Carousel 
      ref="carousel" 
      v-model="currentSlide"
      :items-to-show="8" 
      :items-to-scroll="1"
      :wrap-around="true"
      :transition="500"
      snapAlign="start"
      class="bg-transparent"
    >
      <slide
        v-for="slide, index in movies"
        :key="index"
        class="flex item-center object-cover text-white bg-transparent"
      >
        <div
          @click="fullScreenVideo(index, slide)"
          :class="[
            currentSlide !== index ? 'border-transparent' : 'border-white', 
            currentSlideObject(slide, index),
            'object-cover h-[100%] hover:brightness-125 cursor-pointer border-4'
          ]"
        >
          <img 
            :src="'/images/' + slide.name + '.png'" 
            :alt="slide.name"
            class="select-none pointer-events-none h-[100%] z-[-1]"
          >
        </div>
      </slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped lang="sass">
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover 
    color: white
</style>
