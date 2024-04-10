<script setup>
import Plus from 'vue-material-design-icons/Plus.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Television from 'vue-material-design-icons/Television.vue'
import TrendingUp from 'vue-material-design-icons/TrendingUp.vue'
// import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue'
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue'
</script>

<template>
  <div>
    Image
    <div>
      <div class="py-2 mx-10 my-6">
        <Magnify
          fillColor="#FFFFFF"
          :size="40"
          class="cursor-pointer"
        />
      </div>
      <div class="py-2 mx-10 my-6 border-b-4 border-b-red-500">
        <HomeOutline
          fillColor="#FFFFFF"
          :size="40"
          class="cursor-pointer"
        />
      </div>
      <div class="py-2 mx-10 my-6">
        <TrendingUp
          fillColor="#FFFFFF"
          :size="40"
          class="cursor-pointer"
        />
      </div>
      <div class="py-2 mx-10 my-6">
        <Television
          fillColor="#FFFFFF"
          :size="40"
          class="cursor-pointer"
        />
      </div>
      <div class="py-2 mx-10 my-6">
        <MovieOutline
          fillColor="#FFFFFF"
          :size="40"
          class="cursor-pointer"
        />
      </div>
      <div class="py-2 mx-10 my-6">
        <Plus
          fillColor="#FFFFFF"
          :size="40"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>