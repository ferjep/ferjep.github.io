<script setup>
import SectionView from './SectionView.vue';
import PhotoImg from '../assets/photo.webp'
import BgText from './BgText.vue'

const props = defineProps({id: String })

const handleSeeMore = () => {
    const container = document.getElementById('view-container')

    container.scrollTo({
        top: container.scrollTop + container.children[1].offsetTop,
        left: 0,
        behavior: 'smooth'
    })
}
</script>
<template>
    <SectionView :id="props.id" class="flex items-center sm:block">
        <div class="h-full w-full">
            <div class="flex h-full items-center">
                <div class="mr-4 flex-1">
                    <div class="float-right ml-5 bg-gradient-to-r from-slate-900 via-cyan-900 to-slate-900 rounded overflow-hidden shadow-2xl">
                        <img :src="PhotoImg" class="w-28 h-28 sm:w-44 sm:h-44" alt="ferjep-photo"/>
                    </div>
                    <h1 class="text-3xl mb-3">Welcome.</h1>
                    <p class="text-sm mb-3 leading-relaxed text-justify">
                        My name is Fernando, I'm a Full-Stack Developer focused on <BgText>web development</BgText>, backend services, performance optimization and Blockchain technologies.
                        I have a proven track record of delivering <BgText>high-quality code</BgText> and robust problem solutions.
                    </p>
                    <p class="text-sm mb-5 leading-relaxed text-justify">
                        Since I've been coding since childhood, I'm characterized as a fast learner, self-taught and <BgText>proactive</BgText> developer.
                        Those qualifiers have allowed me to achieve <BgText>senior</BgText> roles, mentor other developers, and improve the overall team development experience.
                    </p>
                    <button
                        @click="handleSeeMore"
                        class="text-xl cursor-pointer bg-gradient-to-r from-slate-900 to-cyan-800 text-white rounded p-2 hover:underline"
                    >
                        See more
                    </button>
                </div>
            </div>
        </div>
    </SectionView>
</template>
