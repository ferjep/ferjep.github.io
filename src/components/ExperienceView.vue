<script setup>
import SectionView from './SectionView.vue'
import MintmeLogo from '../assets/icons/mintme.png'
import BgText from './BgText.vue'
import skills from '../data/skills'

const props = defineProps({id: String })

</script>
<template>
    <SectionView :id="props.id">
        <div class="h-full w-full flex justify-center items-center">
            <div class="w-full">
                <div class="shadow-md p-3 mb-10 rounded bg-gray-200 mb-5">
                    <div class="relative flex flex-col sm:flex-row items-center mb-2">
                        <a href="https://www.mintme.com" target="_blank" class="absolute top-1 right-0 mr-4">
                            &#128279;
                        </a>
                        <div class="-mt-2 sm:mt-0 w-28 mr-2">
                            <a href="https://www.mintme.com" target="_blank">
                                <img :src="MintmeLogo" class="h-24 w-24" alt="mintme-logo"/>
                            </a>
                        </div>
                        <div class="w-full text-center wrap sm:text-left">
                            <h1 class="text-xl w-full mb-1">
                                <BgText class="whitespace">
                                    <span class="whitespace-normal">
                                        Senior Full-Stack Developer
                                    </span>
                                </BgText>
                            </h1>
                            <p class="text-base mb-1">
                                <a href="https://www.mintme.com" target="_blank" class="inline-block underline">
                                    MintMe.com
                                </a>
                                · Full-time
                            </p>
                            <p class="text-base text-xs mb-1">
                                Feb 2021 · Present
                            </p>
                            <p class="text-base text-xs mb-1">
                                Belize · Remote
                            </p>
                        </div>
                    </div>
                    <p class="text-sm text-justify leading-relaxed">
                        In my current role as a Full-stack Developer, I've focused on optimizing frontend assets for improved loading times on Google PageSpeed Insights. I've developed various features and fixes using Symfony and Vue.js, managed database migrations, and completely refactored the blockchain gateway using Typescript and Node.js while ensuring backward compatibility. Additionally, I handle the maintenance and implementation of Docker containers, and actively mentor other developers and review their code to enhance our platform's codebase and services workflow.
                    </p>
                </div>
                <div>
                    <p class="mb-4 text-center">
                        Skills
                    </p>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4 w-fit mx-auto">
                        <div v-for="skill in skills" :key="skill.name">
                            <div class="flex items-center justify-start px-1 rounded h-10">
                                <img :src="skill.icon" class="h-8 w-8 mr-2" :alt="skill.name.toLowerCase() + '-logo'"/>
                                <p class="text-base">{{skill.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SectionView>
</template>
