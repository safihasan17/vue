<script setup lang="ts">
import PageHead from "@/components/PageHead.vue";
import { useCounterState } from "@/store/count";
import { ref } from "vue";

const counter = useCounterState();
const id =ref(counter.id);
function updateId() {
    counter.setId(id.value);
}
</script>

<template>
  <PageHead title="Update Id" />
  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <h3>Update Id:{{ counter.id }}</h3>
        <button class="btn-outline theme-danger" @click="counter.random">Update Id</button>
        <form action="">
            <input type="text" class="form-control" placeholder="Enter new ID" v-model="id" />
            <button class="btn-outline theme-danger" @click.prevent="updateId">Apply</button>
        </form>
      </div>
    </div>
  </section>
</template>