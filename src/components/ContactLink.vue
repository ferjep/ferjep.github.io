<script setup>
const props = defineProps({
    href: String,
    imgClass: String,
    text: String,
    icon: String
})
</script>
<template>
    <a
        :href="props.href"
        class="flex items-center mb-4 last:mb-0"
        target="_blank"
    >
        <img :src="props.icon" class="inline w-6 mr-2" :class="imgClass || ''"/>
        <span class="inline">{{ props.text }}</span>
    </a>
</template>
