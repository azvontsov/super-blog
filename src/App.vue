<template lang="">
    <div class="container">
        <form>
            <h4>Create Post</h4>
            <input class="form-control mt-2" type="text" placeholder="name">
            <input class="form-control mt-2" type="text" placeholder="description">
            <div class="d-flex flex-row-reverse bd-highlight">
                <button class="btn btn-primary mt-2">Create</button>
              </div>
        </form>
        <div class="card mt-3" v-for="post in posts" >
            <div class="card-body">
              <h6 class="card-subtitle text-muted">Name:</h6>
              <h5 class="card-title mb-2">{{ post.title }}</h5>
              <h6 class="card-subtitle text-muted">Description:</h6>
              <h5 class="card-title mb-2">{{ post.body }}</h5>
              <p class="card-text">Some quick example text .</p>
             
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
            ]
        }
    },
    methods: {
        addLike(){
            this.likes += 1
        },
        addDislike() {
            this.dislikes += 1
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