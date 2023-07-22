<script setup>
const props = defineProps({
    id: String
})
</script>

<template>
    <div :id="props.id" class="h-screen w-full text-2xl snap-start">
        <slot></slot>
    </div>
</template>
