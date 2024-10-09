import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostListView from '@/views/PostListView.vue'
import PostDetailView from '@/views/PostDetailView.vue'
import CreatePost from '@/views/CreatePost.vue'
import NestedPage from '@/views/NestedPage.vue'
import NestedOne from '@/views/NestedOne.vue'
import NestedTwo from '@/views/NestedTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostListView,
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostDetailView,
    },
    {
      path: '/post-add',
      name: 'post-add',
      component: CreatePost,
    },
    {
      path: '/nested',
      name: 'nested',
      component: NestedPage,
      children:[
        {
          path: '/nested/one',
          component: NestedOne
        },
        {
          path: '/nested/two',
          component: NestedTwo
        }
      ]
    }
    
  ]
})

export default router
