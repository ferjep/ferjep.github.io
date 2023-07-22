<script setup>
import { sectionsObj } from '../sections'
import SectionView from './SectionView.vue'

</script>
<template>
    <SectionView :id="sectionsObj.contact.id">
        <div class="h-full w-full flex justify-center items-center bg-blue-500">
            <h1 class="text-2xl">
                Contact
            </h1>
        </div>
    </SectionView>
</template>
