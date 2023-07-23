<script setup>
const props = defineProps({
    id: String
})

const arrowDownClass = `
after:content-['V']
    last:after:content-['']
    after:absolute
    after:text-slate-500 
    after:text-2xl
    after:left-1/2 
    after:bottom-2
    after:animate-bounce
`

</script>

<template>
    <div
        :id="props.id"
        class="mx-auto relative h-screen overflow-y-hidden text-2xl snap-start p-5 w-full max-w-2xl"
        :class="arrowDownClass"
    >
        <slot></slot>
    </div>
</template>
