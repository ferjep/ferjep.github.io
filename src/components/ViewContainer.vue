<script setup>
import { debounce } from '../utils'
import sections from '../data/sections'
import { onMounted, ref } from 'vue'

const emit = defineEmits({
    onViewChangeId: String
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
}, 50)

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
    <div id="view-container" ref="container" class="flex-1 h-screen overflow-y-auto md:snap-y md:snap-mandatory bg-gray-100 ">
        <component 
            v-for="section in sections"
            :key="section.id"
            :is="section.view" 
            :id="section.id"
        />
    </div>
</template>
