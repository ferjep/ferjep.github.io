<script setup>
import SideBarLink from './SideBarLink.vue';
import LinkedinIcon from '../assets/icons/linkedin.svg'
import GithubIcon from '../assets/icons/github.svg'
import MailIcon from '../assets/icons/mail.svg'
import ContactLink from './ContactLink.vue'

import sections from '../data/sections'

const props = defineProps({
    activeId: String
})

</script>
<template>
    <div class="h-screen w-80">
        <div class="fixed w-80 h-full bg-slate-800 pt-4 pb-6 flex flex-col justify-between shadow-xl text-white">
            <div class="px-4">
                <h1 class="text-4xl font-bold mb-3 font-sans">
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
