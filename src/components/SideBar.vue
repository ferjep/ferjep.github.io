<script setup>
import SideBarLink from './SideBarLink.vue';

import {sectionsArr} from '../sections'

const props = defineProps({
    activeId: String
})

</script>
<template>
    <div class="h-screen w-64">
        <div class="fixed w-64 h-full bg-slate-800 py-4 flex flex-col justify-center items-center shadow-xl text-white">
            <h1 class="text-2xl text-center italic px-4">
                Fernando Esparragoza
            </h1>
            <ul class="w-full mt-auto mb-auto text-xl">
                <SideBarLink
                    v-for="section in sectionsArr"
                    :key="section.id"
                    :href="section.id"
                    :title="section.title"
                    :icon="section.icon"
                    :active="props.activeId === section.id"
                />
            </ul>
        </div>
    </div>
</template>
