<template>
    <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <nav
              class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-fixed shadow-lg position-absolute my-3 py-2 start-0 end-0 mx-4"
            >
              <div class="container-fluid px-0">
                <a class="navbar-brand font-weight-bolder ms-sm-3">
                  Super Blog
                </a>
  
                <div
                  class="collapse navbar-collapse  pt-3 pb-2 py-lg-0"
                  id="navigation"
                >
                  <ul class="navbar-nav navbar-nav-hover mx-auto">
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <a
                        class="nav-link ps-2 font-weight-bolder d-flex justify-content-between cursor-pointer align-items-center"
                      >
                      <router-link to="/">HOME</router-link>
                      </a>
                    </li>
                    <li class="nav-item dropdown dropdown-hover mx-2">
                      <a
                        class="nav-link ps-2 font-weight-bolder d-flex justify-content-between cursor-pointer align-items-center"
                      >
                      <router-link to="/contact">CONTACT ME</router-link>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    <header class="header-2">
        <div class="page-header min-vh-75 absolute">
          <span class="mask bg-gradient-primary"></span>
          
          <div class="container mt-5 pt-5">
            <h3 class="text-white pt-5">Posts Window</h3>
            <div class="input-group mb-3">
                <input v-model="searchQuery" type="text" class="form-control" placeholder="Search Post..." aria-label="Search Post" aria-describedby="button-addon2">
    
              </div>
            <button 
            class="btn btn-secondary"
            @click="showDialog"
            >Create Post</button>
            <ModalWindow v-model:show="dialogVisible">
                <PostForm @create="createPost"/>
            </ModalWindow> 
            <MySelect
            v-model="selectedSort"
            :options="sortOptions"
            />
        <hr class="mt-5 text-white">
           <PostList 
           :posts="sortedAndSearchedPosts"
           @remove="removePost"
           v-if="!isPostLoading"
           />
           <div class="text-white mt-5" v-else>Loading...</div>
         <!-- Pagination -->
            <div class="pagination pagination-sm mt-3 mb-5 z-index-10">
                <ul 
                class="pagination pagination-sm "
                v-for="pageNumber in totalPages" 
                :key="pageNumber" 
                >
                    <li 
                    :class="{
                        'page-item active' : page === pageNumber
                    }"
                    @click="changePage(pageNumber)"
                    class="page-item" 
                    ><a class="page-link mb-5">{{ pageNumber }}</a></li>
                </ul>
            </div>
        </div>
          <div class="position-absolute w-100 z-index-0 bottom-0">
            <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 40"
              preserveAspectRatio="none"
              shape-rendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                ></path>
              </defs>
              <g class="moving-waves">
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="-1"
                  fill="rgba(255,255,255,0.40"
                ></use>
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.35)"
                ></use>
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.25)"
                ></use>
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="8"
                  fill="rgba(255,255,255,0.20)"
                ></use>
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="13"
                  fill="rgba(255,255,255,0.15)"
                ></use>
                <use
                  xlink:href="#gentle-wave"
                  x="48"
                  y="16"
                  fill="rgba(255,255,255,0.95"
                ></use>
              </g>
            </svg>
          </div>
        </div>
    </header>
    
   
</template>
<script>
import axios from 'axios'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import MySelect from '@/components/MySelect.vue'


export default {
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
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
        changePage(pageNumber) {
            this.page = pageNumber
            
        },

        async fetchPosts() {
            try {
                this.isPostLoading = true
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    })
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
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

    watch: {
        page() {
            this.fetchPosts()
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

</style>