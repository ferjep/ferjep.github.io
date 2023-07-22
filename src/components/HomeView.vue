<script setup>
import { sectionsObj } from '../sections';
import SectionView from './SectionView.vue';

</script>
<template>
    <SectionView :id="sectionsObj.home.id">
        <div class="h-full w-full flex justify-center items-center bg-gray-200">
            <h1 class="text-2xl font-bold">
                Full-Stack Developer
            </h1>
        </div>
    </SectionView>
</template>
