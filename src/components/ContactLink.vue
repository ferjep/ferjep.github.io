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
        <img
            :src="props.icon"
            :class="imgClass || ''"
            alt="contact-logo"
            class="inline w-5 h-5 mr-2"
        />
        <span class="inline">{{ props.text }}</span>
    </a>
</template>
