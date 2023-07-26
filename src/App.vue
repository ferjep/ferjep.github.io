<script setup>
import SideBar from './components/SideBar.vue'

import ViewContainer from './components/ViewContainer.vue'
import { ref } from 'vue'
import sections from './data/sections'

const activeViewId = ref(sections.id)

const updateActiveView = (id) => {
    activeViewId.value = id
}
</script>

<template>
    <div class="lg:flex lg:flex-row font-mono selection:bg-slate-300 selection:text-slate-900 h-screen overflow-y-hidden">
        <SideBar :activeId="activeViewId"/>
        <ViewContainer @on-view-change-id="updateActiveView"/>
    </div>
</template>
