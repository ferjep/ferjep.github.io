<script setup>
import SectionView from './SectionView.vue'
import BgText from './BgText.vue'
import recommendations from '../data/recommendations'
import { ref } from 'vue';

const props = defineProps({id: String})

const currentIndex = ref(0)
const container = ref(null)

const scrollTo = (index) => {
    const width = container.value.scrollWidth / recommendations.length

    container.value.scrollTo({
        top: 0,
        left: width * index ,
        behavior: 'smooth'
    })

    currentIndex.value = index
}
</script>
<template>
    <SectionView :id="props.id" class="flex items-center sm:block">
        <div class="h-full w-full flex flex-col justify-center">
            <div ref="container" class="flex items-center gap-8 overflow-x-hidden overflow-y-hidden snap-x snap-x-mandatory mb-4">
                <div v-for="recommendation in recommendations" :key="recommendation.name" class="snap-center shrink-0 w-full">
                    <div class="w-full bg-gray-200 p-4 rounded shadow-md relative">
                        <a :href="recommendation.profileUrl" target="_blank" class="absolute right-0 mr-4">
                            &#128279;
                        </a>
                        <div class="flex flex-col items-center text-center mb-4">
                            <a :href="recommendation.profileUrl" target="_blank">
                                <img :src="recommendation.profileImg" class="rounded-md w-20 h-20 mb-2" alt="recommendation-photo"/>
                            </a>
                            <BgText class="mb-2">
                                <a :href="recommendation.profileUrl" target="_blank" class="whitespace-normal">{{recommendation.name}}</a>
                            </BgText>
                            <p class="text-base">{{recommendation.role}}</p>
                        </div>
                        <p class="text-sm text-justify italic">
                            <span class="text-4xl">&#10077;</span>
                            {{recommendation.text}}
                            <span class="text-4xl float-right">&#10078;</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <button
                    v-for="index in recommendations.length"
                    class="w-8 h-8 rounded-full mr-2"
                    :key="index"
                    :class="{
                        'bg-slate-900': currentIndex === index - 1,
                        'border border-slate-700 border-4': currentIndex !== index -1
                    }"
                    @click="scrollTo(index - 1)"
                    :aria-label="`recommendation-slider-${index}`"
                >
                </button>
            </div>
        </div>
    </SectionView>
</template>
