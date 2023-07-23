<script setup>
import { sectionsObj } from '../data/sections';
import SectionView from './SectionView.vue';
import PhotoImg from '../assets/photo.webp'

</script>
<template>
    <SectionView :id="sectionsObj.about.id">
        <div class="h-full w-full flex justify-center items-center">
            <div class="flex">
                <div class="mr-4 flex-1">
                    <p class="text-sm mb-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <a href="" class="text-xl cursor-pointer bg-gradient-to-r from-slate-900 to-cyan-800 text-white rounded p-2">
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
