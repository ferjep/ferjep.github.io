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
                    <h1 class="text-3xl mb-6">Welcome</h1>
                    <p class="text-sm mb-3 leading-relaxed text-justify">
                        I'm Full-Stack Developer focused on <BgText>web development</BgText>, backend services, performance optimization and Blockchain technologies.
                        I have a proven track record of delivering <BgText>high-quality code</BgText> and robust problem solutions.
                    </p>
                    <p class="text-sm mb-8 leading-relaxed text-justify">
                        Since I've been coding since childhood, I'm characterized as a fast learner, self-taught and <BgText>proactive</BgText> developer.
                        Those qualifiers have allowed me to achieve <BgText>senior</BgText> roles, mentor other developers, and improve the overall team development experience.
                    </p>
                    <div>
                        <a
                            class="z-50 text-base hover:underline rounded inline-block bg-sky-900 hover:bg-sky-600 text-white pb-2 pt-3 px-3 mb-4 cursor-pointer"
                            href="https://drive.google.com/file/d/1_xAWXTVZJQuYLwS07YdFee5rq17gBSDM/view?usp=sharing"
                            target="_blank"
                        >
                            <div class="inline-block mr-2 ">
                                View full resume
                            </div>
                            <div class="inline-block">
                                <svg height="16" fill="#dcece8" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15,10 L15,14 C15,15.1045695 14.1045695,16 13,16 L2,16 C0.8954305,16 0,15.1045695 0,14 L0,3 C0,1.8954305 0.8954305,1 2,1 L6,1 L6,3 L2,3 L2,14 L13,14 L13,10 L15,10 Z M13.9971001,3.41421356 L7.70420685,9.70710678 L6.28999329,8.29289322 L12.5828865,2 L8.99710007,2 L8.99710007,0 L15.9971001,0 L15.9971001,7 L13.9971001,7 L13.9971001,3.41421356 Z" fill-rule="evenodd"/></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </SectionView>
</template>
