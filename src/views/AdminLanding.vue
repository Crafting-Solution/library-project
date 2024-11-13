<template>
  <div>
    <!-- Top Nav -->
    <nav class="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div>
        <img src="" alt="">
        <p class="font-bold text-2xl text-blue-400">E-Library</p>
      </div>
      <div class="flex space-x-32 text-blue-500 font-semibold">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/">FEATURES</RouterLink>
        <RouterLink to="/">PRICE</RouterLink>
        <RouterLink to="/">ABOUT</RouterLink>
        <RouterLink to="/">CONTACT US</RouterLink>
      </div>
      <div>
        <RouterLink class="flex items-center bg-blue-500 text-lg p-2 px-6 rounded-lg text-white" :to="{name: 'loans'}">
          <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
          </svg>
          Login
        </RouterLink>
      </div>
    </nav>

    <!-- Slider -->
    <div class="flex justify-center gap-10 items-center h-[80vh] mx-auto max-w-7xl px-8">
      <div class="flex-shrink-0">
        <img class="h-72 w-96" :src="sliderImage">
      </div>
      <!-- Text Content -->
      <div class=" flex flex-col gap-6 ml-10 p-8">
        <h1 class="font-bold text-6xl text-gray-800">E-Library</h1>
        <p class="text-gray-600 leading-relaxed text-xl">
          Lorem, ipsum dolor sit amet consectetur <br> adipisicing elit. Non qui aut voluptatum nisi <br>facere eius optio, adipisci ratione ullam <br> dignissimos nemo facilis commodi labore, quis <br> recusandae. Repudiandae harum alias voluptates?
        </p>
        <!-- <div class="">
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <p>Fugit voluptatibus placeat sit quibusdam</p>
          <p>ullam dolor ducimus tempora doloremque.</p>
          <p>inventore, dicta.</p>
        </div> -->
        <div>
          <RouterLink class="bg-blue-500 p-3 pl-5 pr-7 rounded-md text-gray-100 font-medium" to="/" >Learn More</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sliderImage from '@/assets/images/book1.png'

</script>

<style>

</style>