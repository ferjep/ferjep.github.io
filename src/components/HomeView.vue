<script setup>
import { sectionsObj } from '../sections';
import SectionView from './SectionView.vue';
import PhotoImg from '../assets/photo.webp'

</script>
<template>
    <SectionView :id="sectionsObj.home.id">
        <div class="h-full w-full flex justify-center items-center">
            <div class="flex">
                <div class="mr-4 flex-1">
                    <h1 class="text-2xl font-bold mb-1 pb-2">
                        Full-Stack Developer
                    </h1>
                    <p class="text-sm mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <a :href="'#' + sectionsObj.contact.id" class="text-xl cursor-pointer bg-gradient-to-r from-slate-900 to-cyan-800 text-white rounded p-2">
                        Contact
                    </a>
                </div>
                <div class="h-40 w-40 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 rounded overflow-hidden shadow-2xl">
                    <img :src="PhotoImg" />
                </div>
            </div>
        </div>
    </SectionView>
</template>
