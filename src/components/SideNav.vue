<template>
    <!-- Side Navigation -->
    <div id="sideNav" class="pt-6 flex flex-col w-64 min-h-screen border-r text-lg gap-6 row-start-1 row-end-3">
        <h3 class="text-center font-bold text-2xl">Library</h3>
        <div class="flex flex-col gap-4">
            <RouterLink :to="{name: 'landing'}" class="flex items-center gap-2 p-5 pl-7 text-gray-500 hover:bg-blue-100 hover:border-r-4 hover:border-r-blue-500 transition-all">
                <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>Home
            </RouterLink>
            <RouterLink :to="{name: 'auditlogs'}" class="flex items-center gap-2 p-5 pl-7 text-gray-500 hover:bg-blue-100 hover:border-r-4 hover:border-r-blue-500 transition-all">
                <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>Audit Logs
            </RouterLink>
            <RouterLink :to="{name: 'settings'}" class="flex items-center gap-2 p-5 pl-7 text-gray-500 hover:bg-blue-100 hover:border-r-4 hover:border-r-blue-500 transition-all ">
                <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                </svg>Settings
            </RouterLink>
            <RouterLink :to="{name: 'user'}" @click="handleActiveLink" class="flex items-center gap-2 p-5 pl-7 text-gray-500  hover:bg-blue-100 hover:border-r-4 hover:border-r-blue-500 transition-all">
                <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 
                    6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"></path>
                </svg>Users
            </RouterLink>
            <RouterLink :to="{name: 'loans'}" @click="handleActiveLink" class="flex items-center gap-2 p-5 pl-7 text-gray-500  hover:bg-blue-100 hover:border-r-4 hover:border-r-blue-500 transition-all">
                <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 
                    1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
                </svg>Loans
            </RouterLink>
            <RouterLink :to="{name: 'books'}" class="flex items-center gap-2 p-5 pl-7 text-gray-500  hover:bg-blue-100 hover:border-r-4 hover:border-r-blue-500 transition-all">
                <svg data-slot="icon" class="h-5 w-5" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 
                    6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"></path>
                </svg>Books
            </RouterLink>     
        </div>
    </div>
        
</template>

<script setup>
import { onMounted, ref } from 'vue';


</script>

