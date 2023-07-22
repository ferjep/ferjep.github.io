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
            class="flex items-center py-2 px-4 border-transparent border-b hover:border-white hover:bg-gray-700"
            :class="{
                'border-white bg-gray-700': props.active,
            }"
        >
            <img class="mr-2 w-5 h-5" :src="props.icon" />
            <span>{{ props.title }}</span>
        </a>
    </li>
</template>
