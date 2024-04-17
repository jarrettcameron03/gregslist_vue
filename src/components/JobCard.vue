<script setup>
import { AppState } from '../AppState.js';
import { Job } from '../models/Job.js';
import { jobsService } from '../services/JobsService.js';
import Pop from '../utils/Pop.js';

    defineProps({ job: Job })

    async function deleteJob(job) {
        try {
            const confirmation = await Pop.confirm('Are you sure you want to delete this job?')
            if (!confirmation) return
            await jobsService.deleteJob(job)
        }
        catch (error){
          Pop.error(error);
        }
    }
</script>


<template>
    <div class="col-3 my-3">
        <div class="card shadow">
            <div class="card-body">
                <div class="card-title">
                    <h4>{{ job.jobTitle }}</h4>
                </div>
                <div class="d-flex gap-2 align-content-center">
                    <img class="pfp" :src="job.creator.picture" alt="">
                    <p>{{ job.creator.name }}</p>
                </div>
                <p>Company: {{ job.company }}<br>Hours: {{ job.hours }}<br>Rate: ${{ job.rate.toLocaleString() }}<br>{{ job.description }}</p>
                <button v-if="job.creatorId == AppState.account?.id" @click="deleteJob(job)" class="mt-3 btn btn-danger">Delete Listing</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .card-img-top {
        object-fit: cover;
        height: 15dvh;
    }

    .pfp {
        aspect-ratio: 1/1;
        height: 1.5em;
        object-fit: cover;
        border-radius: 100em;
    }
</style>