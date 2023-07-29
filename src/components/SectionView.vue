<script setup>
const props = defineProps({
    id: String
})
</script>

<template>
    <div
        :id="props.id"
        class="mx-auto relative min-h-screen sm:min-h-0 sm:h-screen lg:overflow-y-hidden text-2xl snap-start p-5 w-full max-w-2xl"
    >
        <slot></slot>
    </div>
</template>
