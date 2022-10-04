<template>
   

    <div class="container">
        <h1>Posts Window</h1>
        <div class="input-group mb-3">
            <input v-model="searchQuery" type="text" class="form-control" placeholder="Search Post..." aria-label="Search Post" aria-describedby="button-addon2">

          </div>
        <button 
        class="btn btn-primary"
        @click="showDialog"
        >Create Post</button>
        <ModalWindow v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </ModalWindow> 
        <MySelect
        v-model="selectedSort"
        :options="sortOptions"
        />
<hr class="mt-5">
       <PostList 
       :posts="sortedAndSearchedPosts"
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
import MySelect from './components/MySelect.vue'


export default {
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value: 'title', name: 'by name'},
                {value: 'body', name: 'by description'},
            ]
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
   
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
            
    },

    components: {
    PostForm,
    PostList,
    ModalWindow,
    MySelect
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