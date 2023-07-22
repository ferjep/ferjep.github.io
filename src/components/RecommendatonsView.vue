<script setup>
import { sectionsObj } from '../sections'
import SectionView from './SectionView.vue'

</script>
<template>
    <SectionView :id="sectionsObj.recommendations.id">
        <div class="h-full w-full flex justify-center items-center bg-yellow-500">
            <h1 class="text-2xl">
                recommendations
            </h1>
        </div>
    </SectionView>
</template>
