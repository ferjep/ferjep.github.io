<script setup>
import { debounce } from '../utils'
import sections from '../data/sections'
import { onMounted, ref } from 'vue'

const props = defineProps({
    viewId: String,
})

const emit = defineEmits({
    onViewChangeId: String,
})

const container = ref(null)
const views = ref([])

const updateActiveView = debounce(({scrollTop}) => {
    // Choosing the closest view
    const view = views.value.reduce((closest,view) => {
        const closestMid = closest.el.offsetTop + (closest.el.offsetHeight / 2)
        const viewMid = view.el.offsetTop + (view.el.offsetHeight / 2)

        const closestDiff = Math.abs(scrollTop - closestMid)
        const viewDiff = Math.abs(scrollTop - viewMid)

        const newClosestDiff = Math.min(closestDiff, viewDiff)

        return newClosestDiff === viewDiff
            ? view
            : closest
    })

    if (view) {
        emit('onViewChangeId', view.section.id)
        return
    }
}, 60)

const handleScrollBtn = () => {
    const viewIndex = views.value.findIndex((view) => view.section.id === props.viewId)
    const view = views.value[viewIndex + 1] || views.value[0]

    container.value.scrollTo({
        top: view.el.offsetTop,
        left: 0,
        behavior: 'smooth'
    })

    emit('onViewChangeId', view.section.id)
}

const lastSection = sections[sections.length-1]

onMounted(() => {
    views.value = sections.map((section) => ({
        el: document.getElementById(section.id),
        section,
    }))

    container.value.addEventListener('scroll', () => {
        updateActiveView({scrollTop: container.value.scrollTop})
    }, { passive: true })

    window.addEventListener('scroll', () => {
        updateActiveView({scrollTop: window.scrollY})
    }, { passive: true })

    updateActiveView({scrollTop: 0})
})
</script>
<template>
    <div id="view-container" ref="container" class="relative flex-1 h-screen overflow-y-auto md:snap-y md:snap-mandatory bg-gray-100 ">
        <component 
            v-for="section in sections"
            :key="section.id"
            :is="section.view" 
            :id="section.id"
        />
        <div class="fixed bottom-0 right-0 z-40">
            <button
                class="bg-gray-300 p-2 rounded-full mb-4 mr-4 h-10 w-10 flex justify-center items-center animate-bounce"
                @click="handleScrollBtn"
            >
                <svg class="transition-transform" :class="{'rotate-180': viewId === lastSection.id}" l="#000000" height="24px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
            </button>
        </div>
    </div>
</template>
