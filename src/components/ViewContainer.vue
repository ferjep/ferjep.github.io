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
    const view = views.value.find((view) => view.el.offsetTop >= scrollTop)

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
})
</script>
<template>
    <div id="view-container" ref="container" class="flex-1 h-screen overflow-y-auto lg:snap-y md:snap-mandatory bg-gray-100 ">
        <component 
            v-for="section in sections"
            :key="section.id"
            :is="section.view" 
            :id="section.id"
        />
    </div>
</template>
