<script setup>
import RecommendatonsView from './RecommendatonsView.vue'
import AboutView from './AboutView.vue'
import ProjectsView from './ProjectsView.vue'
import { debounce } from '../utils'
import { sectionsArr } from '../data/sections'
import { onMounted, ref } from 'vue'

const emit = defineEmits({
    onViewChangeId: String
})

const container = ref(null)
const views = ref([])

const updateActiveView = debounce(() => {
    const view = views.value.find((view) => view.el.offsetTop === container.value.scrollTop)

    if (view) {
        emit('onViewChangeId', view.section.id)
        return
    }
}, 50)

onMounted(() => {
    views.value = sectionsArr.map((section) => ({
        el: document.getElementById(section.id),
        section,
    }))

    container.value.addEventListener('scroll', () => {
        updateActiveView()
    }, { passive: true })
})
</script>
<template>
    <div ref="container" class="flex-1 h-screen overflow-y-auto snap-y snap-mandatory bg-gray-100 ">
        <AboutView />
        <ProjectsView />
        <RecommendatonsView />
    </div>
</template>
