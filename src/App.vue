<template>
    <div class="container">
       <PostForm @create="createPost" />
       <PostList 
       :posts="posts"
       
       />
    </div>
   
</template>
<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Description'},
                {id: 2, title: 'JavaScript', body: 'Description #2'},
                {id: 3, title: 'JavaScript', body: 'Description #3'},
                {id: 4, title: 'JavaScript', body: 'Description #4'},
            ],
            
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
       
    },
    components: {
        PostForm,
        PostList
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