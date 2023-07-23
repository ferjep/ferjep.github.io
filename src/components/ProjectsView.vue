<script setup>
import { sectionsObj } from '../data/sections'
import SectionView from './SectionView.vue'

</script>
<template>
    <SectionView :id="sectionsObj.projects.id">
        <div class="h-full w-full flex justify-center items-center bg-gray-500">
            <h1 class="text-2xl">
                Projects
            </h1>
        </div>
    </SectionView>
</template>
