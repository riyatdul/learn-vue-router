<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const posts = ref([])
const router = useRouter();
const isLoggin = true;

async function fetchPost(){
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';
    try{
       const response = await fetch(postUrl)
        
       if(response.ok) {
         posts.value = await response.json(); 
       }else {
         console.log('Failed fetch data post', response.status);
       }
    }catch (err){
        console.log('Error fetch data post', err);
    }
}

onMounted(fetchPost);

//Route Guards
router.beforeEach((to, _, next)=>{
    if (to.meta.requiresAuth && !isLoggin) {
        next('/sign-in')
    } else {
        next()
    }
});
</script>

<template>
    <h1>POST</h1>
    <button @click="router.push('/post-add')">Add Post</button>
    <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <h3>{{ post.body }}</h3>
            <RouterLink :to="`/posts/${post.id}`"><cite>More...</cite></RouterLink>
        </li>
    </ul>
    <RouterView />

</template>

<style scoped>
cite{
    color: goldenrod;
}
</style>