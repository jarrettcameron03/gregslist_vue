<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { housesService } from '../services/HousesService.js';
import HouseModal from '../components/HouseModal.vue';


  const houses = computed(() => AppState.houses)

  onMounted(() => housesService.loadHouses())

</script>

<template>

  <main class="container">
    <section class="row mt-3">
      <div class="col-12 d-flex gap-4">
        <h3>Houses</h3>
        <button v-if="AppState.account" data-bs-toggle="modal" data-bs-target="#houseFormModal" class="btn btn-outline-dark"><i class="mdi mdi-plus"></i></button>
      </div>
    </section>
    <section class="row">
      <HouseCard v-for="house in houses" :key="house.id" :house="house"/>
    </section>
  </main>
  <HouseModal/>
</template>


<style scoped></style>