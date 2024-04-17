<script setup>

import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { Modal } from 'bootstrap';
import { jobsService } from '../services/JobsService.js';

const jobData = ref({})

async function submitForm() {
    try {
        await jobsService.postJob(jobData.value)
        jobData.value = {}
        Modal.getOrCreateInstance('#jobFormModal').hide()
    }
    catch (error){
      Pop.error(error)
    }
}

</script>


<template>
    <div class="modal fade" id="jobFormModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create a job listing</h5>
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm()">
                        <div class="form-floating mb-3">
                            <input v-model="jobData.company" class="form-control" type="text" id="company" required maxlength="100">
                            <label for="company">Company</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="jobData.jobTitle" class="form-control" type="text" id="jobTitle" required maxlength="100">
                            <label for="jobTitle">Job Title</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="jobData.hours" class="form-control" type="number" id="hours" required>
                            <label for="hours">Hours</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="jobData.rate" class="form-control" type="number" id="rate" required>
                            <label for="rate">Rate</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea v-model="jobData.description" class="form-control" id="description" maxlength="5000" style="height: 100px;"></textarea>
                            <label for="description">Description</label>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-primary">Post Listing</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
</style>