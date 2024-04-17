<script setup>

import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { Modal } from 'bootstrap';
import { housesService } from '../services/HousesService.js';

const houseData = ref({})

async function submitForm() {
    try {
        await housesService.postHouse(houseData.value)
        houseData.value = {}
        Modal.getOrCreateInstance('#houseFormModal').hide()
    }
    catch (error){
      Pop.error(error)
    }
}

</script>


<template>
    <div class="modal fade" id="houseFormModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">List your house</h5>
                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm()">
                        <div class="form-floating mb-3">
                            <input v-model="houseData.imgUrl" class="form-control" type="url" id="imgUrl" required maxlength="500">
                            <label for="imgUrl">Image URL</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="houseData.price" class="form-control" type="number" id="price" required>
                            <label for="price">Price</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="houseData.bedrooms" class="form-control" type="number" id="bedrooms" required>
                            <label for="bedrooms">Bedrooms</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="houseData.bathrooms" class="form-control" type="number" id="bathrooms" required>
                            <label for="bathrooms">Bathrooms</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="houseData.levels" class="form-control" type="number" id="levels" required>
                            <label for="levels">Levels</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="houseData.year" class="form-control" type="number" id="year" required>
                            <label for="year">Year</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea v-model="houseData.description" class="form-control" id="description" maxlength="5000" style="height: 100px;"></textarea>
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