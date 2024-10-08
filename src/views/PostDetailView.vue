<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

watch(
    ()=>route.params.id,
    (newValue, oldValue)=>{
        console.log('old id', oldValue)
        console.log('new id', newValue)
    }, 
{ immediate: true })

</script>

<template>
    <h1>{{ route.params.id }}</h1>
</template>