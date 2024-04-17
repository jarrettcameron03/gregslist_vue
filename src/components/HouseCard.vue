<script setup>
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';

    defineProps({ house: House })

    async function deleteHouse(house) {
        try {
            const confirmation = await Pop.confirm('Are you sure you want to delete this house?')
            if (!confirmation) return
            await housesService.deleteHouse(house)
        }
        catch (error){
          Pop.error(error);
        }
    }
</script>


<template>
    <div class="col-3 my-3">
        <div class="card shadow">
            <img :src="house.imgUrl" alt="" class="card-img-top">
            <div class="card-body">
                <div class="card-title">
                    <h3>${{ house.price.toLocaleString() }}</h3>
                </div>
                <div class="d-flex gap-2 align-content-center">
                    <img class="pfp" :src="house.creator.picture" alt="">
                    <p>{{ house.creator.name }}</p>
                </div>
                <p>{{ house.bedrooms }} Bed | {{ house.bathrooms }} Bath | {{ house.levels }} Story</p>
                <details>
                    {{ house.description }}
                    <summary>
                        Description
                    </summary>
                </details>
                <button v-if="house.creatorId == AppState.account?.id" @click="deleteHouse(house)" class="mt-3 btn btn-danger">Delete Listing</button>
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