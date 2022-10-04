<template>
   

    <div class="container">
        <h1>Posts Window</h1>
        <button 
        class="btn btn-primary"
        @click="showDialog"
        >Create Post</button>
        <ModalWindow v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </ModalWindow> 

       <PostList 
       :posts="posts"
       @remove="removePost"
       v-if="!isPostLoading"
       />
       <div class="mt-5" v-else>Loading...</div>
    </div>
   
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import axios from 'axios'


export default {
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async fetchPosts() {
            try {
                this.isPostLoading = true
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                    this.posts = response.data
                    this.isPostLoading = false
                
            } catch (e) {
                console.log('error:', e)
            }
        }
       
    },
    mounted() {
        this.fetchPosts()
    },
    components: {
        PostForm,
        PostList,
        ModalWindow

    }
}
</script>
<style lang="css">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        margin-top: 20px;
    }
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

    
</style>