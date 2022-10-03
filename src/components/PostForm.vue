<template lang="">
    <form @submit.prevent>
        <h4>Create Post</h4>
        <input 
        v-model="post.title"
        class="form-control mt-2" 
        type="text" 
        placeholder="name"
        >
        <input  
        v-model="post.body"
        class="form-control mt-2" 
        type="text" 
        placeholder="description"
        >

        <div class="d-flex flex-row-reverse bd-highlight">
            <button @click="createPost" class="btn btn-primary mt-3">Create</button>
          </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                            title: '',
                            body: ''
                        }
            
        }
    }
}
</script>
<style lang="">
    
</style>