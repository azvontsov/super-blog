<template lang="">
    <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title mb-2">{{ post.title }}</h5>
          <h6 class="card-title mb-2">{{ post.body }}</h6>
          <p class="card-text text-muted">Some quick example text .</p>
        </div>
        <div>
            <button type="button" class="btn btn-danger btn-sm m-3">Delete Post</button>
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
   }
}
</script>
<style lang="">
    
</style>