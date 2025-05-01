<script setup lang="ts">
import { ref } from 'vue'
const tabs = [
    {
        id: "home",
        title: "Home",
        icon: "bi-house-fill",
    },
    {
        id: "profile",
        title: "Profile",
        icon: "bi-person-fill",
    },
    {
        id: "settings",
        title: "Settings",
        icon: "bi-gear-wide-connected",
    },
]

const currentTab = ref(0)
</script>

<template>
    <fg-tabs v-model="currentTab" :tabs="tabs">
        <template #home>
            <div>Welcome to the home tab!</div>
        </template>
        <template #profile>
            <div>This is your profile.</div>
        </template>
        <template #settings>
            <div>Adjust your preferences here.</div>
        </template>
    </fg-tabs>
</template>

<style scoped></style>