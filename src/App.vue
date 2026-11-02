<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import './assets/css/style.css'
import Footer from './views/layouts/Footer.vue';
import Navbar from  './views/layouts/Navbar.vue';
import Sidebar from './views/layouts/Sidebar.vue';

const route = useRoute();

</script>
  

  
  <template >
    <Sidebar v-if="route.meta.layout !== 'auth'"/>
    <RouterView v-if="route.meta.layout" />
    <div v-else class="main">
      <Navbar v-if="route.meta.layout !== 'auth'"/>
      <main class="content">
        <RouterView />
        <Footer/>
      </main>
    </div>
  </template>
