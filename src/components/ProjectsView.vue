<script setup>
import SectionView from './SectionView.vue'

const props = defineProps({id: String })

</script>
<template>
    <SectionView :id="props.id">
        <div class="h-full w-full flex justify-center items-center bg-gray-500">
            <h1 class="text-2xl">
                Projects
            </h1>
        </div>
    </SectionView>
</template>
