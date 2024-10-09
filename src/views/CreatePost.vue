<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function submitForm() {
    router.push({path: "/posts"})
}
</script>

<template>
    <h1>Create POST</h1>
    <button @click="submitForm">Save</button>
</template>