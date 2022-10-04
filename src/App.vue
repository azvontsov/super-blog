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
       />
       
    </div>
   
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import ModalWindow from '@/components/ModalWindow.vue'


export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Description'},
                {id: 2, title: 'JavaScript', body: 'Description #2'},
                {id: 3, title: 'JavaScript', body: 'Description #3'},
                {id: 4, title: 'JavaScript', body: 'Description #4'},
            ],
            dialogVisible: false
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
        }
       
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