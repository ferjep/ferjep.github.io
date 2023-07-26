<script setup>
import SideBarLink from './SideBarLink.vue';
import LinkedinIcon from '../assets/icons/linkedin.svg'
import GithubIcon from '../assets/icons/github.svg'
import MailIcon from '../assets/icons/mail.svg'
import ContactLink from './ContactLink.vue'

import sections from '../data/sections'
import { ref } from 'vue';

const props = defineProps({
    activeId: String
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

</script>
<template>
    <div class="h-12 lg:h-screen w-80">
        <div
            class="fixed z-50 w-full lg:w-80 overflow-y-hidden lg:h-full bg-slate-800 lg:pt-4 pb-6 flex flex-col justify-between shadow-xl text-white transition-all"
            :class="isMenuOpen ? 'h-full' : 'h-12'"
        >
            <button
                class="lg:hidden absolute transition-all top-1.5 right-5 space-y-1.5 bg-white p-2 rounded-md"
                @click="toggleMenu"
            >
                <div class="w-6 h-0.5 bg-slate-900 transition-all" :class="{'rotate-45 translate-y-2': isMenuOpen}"></div>
                <div class="ml-auto w-4 h-0.5 bg-slate-900" :class="{'invisible': isMenuOpen}"></div>
                <div class="w-6 h-0.5 bg-slate-900 transition-all" :class="{'-rotate-45 -translate-y-2': isMenuOpen}"></div>
            </button>
            <div class="px-4">
                <h1 class="h-12 lg:h-fit flex items-center -mt-1 lg:mt-0 lg:block text-xl lg:text-4xl font-bold mb-3 font-sans">
                    Fernando Esparragoza
                </h1>
                <h1 class="text-xl font-light mb-1 pb-4">
                    Full-Stack Developer
                </h1>
            </div>
            <ul class="w-full text-xl">
                <SideBarLink
                    v-for="section in sections"
                    :key="section.id"
                    :href="section.id"
                    :title="section.title"
                    :icon="section.icon"
                    :active="props.activeId === section.id"
                />
            </ul>
            <div class="px-4">
                <p class="text-lg mb-2">Contact</p>
                <div>
                    <ContactLink
                        href="mailto:fernando.fjep@gmail.com"
                        text="fernando.fjep@gmail.com"
                        :icon="MailIcon"
                    />
                    <ContactLink
                        href="https://www.linkedin.com/in/ferjep/"
                        text="Linkedin"
                        :icon="LinkedinIcon"
                    />
                    <ContactLink
                        href="https://github.com/ferjep/"
                        text="Github"
                        img-class="invert"
                        :icon="GithubIcon"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
