<script setup lang="ts">
import { RouterView } from 'vue-router';
import './assets/css/style.css'
import Footer from './views/layouts/Footer.vue';
import Navbar from  './views/layouts/Navbar.vue';
import Sidebar from './views/layouts/Sidebar.vue';


</script>
  
<template>

   <Sidebar/>

  <div class="main">

    <!-- ===== Navbar ===== -->
    <Navbar/>

    <main class="content">

       <RouterView/>

      <Footer/>
    </main>
  </div>
</template>
