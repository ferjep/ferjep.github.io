<script setup>
const props = defineProps({
    href: String,
    title: String,
    icon: String,
    active: Boolean,
})

</script>
<template>
    <li class="mb-2 last:mb-0">
        <a
            :href="'#' + props.href"
            :class="{'border-white bg-gray-100 text-black': props.active}"
            class="flex items-center py-2 px-4 border-transparent border-b hover:text-black hover:border-white hover:bg-gray-100"
        >
            <img class="mr-2 w-5 h-5" :src="props.icon" />
            <span>{{ props.title }}</span>
        </a>
    </li>
</template>
