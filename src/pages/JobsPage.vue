<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { jobsService } from '../services/JobsService.js';


  const jobs = computed(() => AppState.jobs)

  onMounted(() => jobsService.loadJobs())

</script>

<template>

  <main class="container">
    <section class="row mt-3">
      <div class="col-12 d-flex gap-4">
        <h3>Jobs</h3>
        <button v-if="AppState.account" data-bs-toggle="modal" data-bs-target="#jobFormModal" class="btn btn-outline-dark"><i class="mdi mdi-plus"></i></button>
      </div>
    </section>
    <section class="row">
      <JobCard v-for="job in jobs" :key="job.id" :job="job"/>
    </section>
  </main>
  <JobModal/>
</template>


<style scoped></style>