<script setup>
import { sectionsObj } from '../data/sections';
import SectionView from './SectionView.vue';
import PhotoImg from '../assets/photo.webp'
import BgText from './BgText.vue'

</script>
<template>
    <SectionView :id="sectionsObj.about.id">
        <div class="h-full w-full">
            <div class="flex h-full items-center">
                <div class="mr-4 flex-1">
                    <h1 class="text-3xl mb-3">Welcome.</h1>
                    <p class="text-sm mb-5 leading-relaxed">
                        My name is Fernando, I'm a Full-Stack Developer focused on <BgText>web development</BgText>, backend services, performance optimization and Blockchain technologies.
                        I have a proven track record of delivering <BgText>high-quality code</BgText> and robust problem solutions.
                    </p>
                    <p class="text-sm mb-5 leading-relaxed">
                        Since I've been coding since childhood, I'm characterized as a fast learner, self-taught and <BgText>proactive</BgText> developer.
                        Those qualifiers have allowed me to achieve <BgText>senior</BgText> roles, mentor other developers, and improve the overall team development experience.
                    </p>
                    <a href="" class="text-xl cursor-pointer bg-gradient-to-r from-slate-900 to-cyan-800 text-white rounded p-2 hover:underline">
                        See more 
                    </a>
                </div>
                <div class="h-40 w-40 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 rounded overflow-hidden shadow-2xl">
                    <img :src="PhotoImg" />
                </div>
            </div>
        </div>
    </SectionView>
</template>
