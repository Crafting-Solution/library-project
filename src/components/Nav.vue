<template>
    <div class="flex justify-between items-center border-b pr-4 row-start-1 col-start-2">
        <div class="cursor-pointer">
            <svg data-slot="icon" class="h-8 w-10" fill="none" stroke-width="3" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
        </div>

        <!-- Profile Options -->
        <div class="relative">
            <div class="flex justify-between items-center">
                <div class="relative">
                    <select class="text-gray-500 border border-spacing-10 p-2 w-32 mr-3 rounded-lg appearance-none focus:outline-none">
                        <option value="">en</option>
                        <option value="">oo</option>
                        <option value="">er</option>
                        <option value="">en</option>
                    </select>
                    <svg data-slot="icon" class="h-4 w-4 right-8 absolute top-1/2 transform -translate-y-1/2 pointer-events-none" fill="none" stroke-width="1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                    </svg>
                </div>

                <div class="relative inline-block" @mouseenter="toggleMouseOver" @mouseleave="toggleMouseOver">
                    <div class="flex justify-center items-center cursor-pointer p-4">
                        <img class="h-10 w-10 rounded-full mr-3" :src="librarianImage" alt="Librarian Image">
                        <p class="text-gray-500">Librarian</p>
                        <svg class="h-4 w-4 ml-2" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>

                    <div v-show="showDropDown" class="absolute right-0 cursor-pointer w-48 bg-white shadow-lg rounded-lg z-99999">
                        <RouterLink :to="{ name: 'editprofile' }" class="flex px-4 py-2 text-gray-500 items-center text-center mb-2 hover:bg-gray-100">
                            <svg class="h-5 w-5 mr-2" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"></path>
                            </svg>Edit Profile
                        </RouterLink>
                        <RouterLink :to="{ name: 'signout' }" class="flex  px-4 py-2 text-gray-500 items-center text-center mb-2 hover:bg-gray-100">
                            <svg class="h-5 w-5 mr-2" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                            </svg>Sign Out
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import librarianImage from '@/assets/images/digital-photo.jpg'
import SideNav from './SideNav.vue';
import { ref } from 'vue';

const showDropDown = ref(false);

const toggleMouseOver = () => {
  showDropDown.value = !showDropDown.value;
};


</script>

<style>

</style>