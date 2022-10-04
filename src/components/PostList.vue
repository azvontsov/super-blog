<template lang="">
    <div class="mt-5" v-if="posts.length > 0">
        <h3>Posts list</h3>
        <PostItem 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        />
    </div>
    <h2 v-else>No posts here yet</h2>

</template>


<script>
import PostItem from '@/components/PostItem.vue'

export default {
    // send this props here 
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        PostItem
    }
}
</script>
<style lang="">
    
</style>