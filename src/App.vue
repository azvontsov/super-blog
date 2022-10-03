<template lang="">
    <div class="container">
        <form @submit.prevent>
            <h4>Create Post</h4>
            <input 
            :value="title" 
            @input="title = $event.target.value"
            class="form-control mt-2" 
            type="text" 
            placeholder="name"
            >
            <input  
            :value="body" 
            @input="body = $event.target.value"
            class="form-control mt-2" 
            type="text" 
            placeholder="description"
            >

            <div class="d-flex flex-row-reverse bd-highlight">
                <button @click="createPost" class="btn btn-primary mt-3">Create</button>
              </div>
        </form>
        <div class="card mt-3" v-for="post in posts" >
            <div class="card-body">
              <h5 class="card-title mb-2">{{ post.title }}</h5>
              <h6 class="card-title mb-2">{{ post.body }}</h6>
              <p class="card-text text-muted">Some quick example text .</p>
             
            </div>
          </div>
        
    </div>
   
</template>
<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'JavaScript', body: 'Description'},
                {id: 2, title: 'JavaScript', body: 'Description #2'},
                {id: 3, title: 'JavaScript', body: 'Description #3'},
                {id: 4, title: 'JavaScript', body: 'Description #4'},
            ],
            title: '',
            body: ''
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost)
            this.title = ''
            this.body = ''
        }
       
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