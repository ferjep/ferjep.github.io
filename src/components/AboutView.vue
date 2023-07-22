<script setup>
import { sectionsObj } from '../sections'
import SectionView from './SectionView.vue'

</script>
<template>
    <SectionView :id="sectionsObj.about.id">
        <div class="h-full w-full flex justify-center items-center bg-emerald-500">
            <h1 class="text-2xl">
                About
            </h1>
        </div>
    </SectionView>
</template>
