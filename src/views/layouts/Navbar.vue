<script setup lang="ts">
import { api } from "@/api";
import { router } from "@/route";
import { useCounterState } from "@/store/count";

const counter = useCounterState();

function handleLogout() {
  api.post('/logout')
  .then((response)=>{
     localStorage.removeItem("vuetoken");
     router.push("/login");
  })
  .catch((error)=>{
    console.log(error.response.data)
  });
}
</script>

<template>
  <header class="navbar topbar bg-1 border-bottom">
    <button
      class="btn-icon menu-toggle"
      type="button"
      data-bs-toggle="drawer"
      data-bs-target="#mobileSidebar"
      aria-controls="mobileSidebar"
      aria-label="Open menu"
    >
      <i class="bi bi-list fs-xl"></i>
    </button>
    <span class="topbar-title"
      >Count: <b>{{ counter.count }}</b></span
    >
    <span class="topbar-title"
      >Id: <b>{{ counter.id }}</b></span
    >

    <div class="topbar-right">
      <!-- Bootstrap Toggler plugin: <html> এর data-bs-theme অ্যাট্রিবিউট অন/অফ করে -->
      <button
        type="button"
        class="btn-icon"
        aria-label="Toggle dark mode"
        data-bs-toggle="toggler"
        data-bs-target="html"
        data-bs-attribute="data-bs-theme"
        data-bs-value="dark"
      >
        <i class="bi bi-moon-stars"></i>
      </button>

      <!-- Bootstrap Menu plugin -->
      <div>
        <button
          type="button"
          class="btn-text user-btn"
          data-bs-toggle="menu"
          aria-expanded="false"
        >
          <span class="user-badge">SA</span>
          <span class="d-none sm:d-inline">Sabbir</span>
        </button>
        <div class="menu">
          <a class="menu-item" href="#">Profile</a>
          <a class="menu-item" href="#">Settings</a>
          <div class="menu-divider"></div>
          <button class="menu-item" @click="handleLogout">Logout</button>
        </div>
      </div>
    </div>
  </header>
</template>
