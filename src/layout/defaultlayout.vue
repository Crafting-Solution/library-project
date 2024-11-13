<template>
    <div id="wrapper">
        <nav class="grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr] h-screen">
            <!-- Nav -->
            <Nav />

            <RouterView />

            <!-- SideNav -->
            <SideNav />

            <!-- Footer -->
            <footer class="col-span-2 flex justify-center items-center">
                <Footer />
            </footer>
        </nav>
    </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import SideNav from '@/components/SideNav.vue';

</script>

