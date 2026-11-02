<script setup lang="ts">
import PageHead from "@/components/PageHead.vue";
import { useCounterState } from "@/store/count";

const counter = useCounterState();
</script>

<template>
  <PageHead title="count" />
  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <button class="btn-outline theme-danger" @click="counter.decrement">-</button>
        <h3>Count: {{ counter.count }}</h3>
        <button class="btn-outline theme-danger" @click="counter.increnment">+</button>
      </div>

        <div class="card-body">
            <ul>
                <li>Double: {{ counter.double }}</li>
                <li>Triple: {{ counter.triple }}</li>
                <li>Square: {{ counter.square }}</li>
            </ul>
            <button class="btn-outline theme-danger" @click="counter.reset">Reset</button>   
        </div>
    </div>
  </section>
</template>
