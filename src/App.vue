<script setup>
import SideBar from './components/SideBar.vue'

import ViewContainer from './components/ViewContainer.vue'
import { ref } from 'vue'
import { sectionsArr } from './data/sections'

const activeViewId = ref(sectionsArr[0].id)

const updateActiveView = (id) => {
    activeViewId.value = id
}
</script>

<template>
    <div class="flex font-mono selection:bg-slate-300 selection:text-slate-900">
        <SideBar :activeId="activeViewId"/>
        <ViewContainer @on-view-change-id="updateActiveView"/>
    </div>
</template>
