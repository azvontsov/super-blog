<template lang="">
    <div class="card mt-3 shadow">
        <div class="card-body">
          <h5 class="card-title mb-2">{{ post.title }}</h5>
          <h6 class="card-title mb-2">{{ post.body }}</h6>
          <p class="card-text text-muted">Some quick example text .</p>
        </div>
        <div class="d-flex flex-row-reverse bd-highlight">
            <button 
            type="button" 
            class="btn btn-outline-danger btn-sm me-3 mb-3"
            @click="$emit('remove', post)"
            >Delete Post</button>
        </div>
        
    </div>
</template>
<script>
export default {
   props: {
    post: {
        type: Object,
        required: true
    }
   },
 
}
</script>
<style lang="">
    
</style>