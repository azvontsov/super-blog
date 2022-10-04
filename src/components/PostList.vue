<template lang="">
    <div class="mt-5" v-if="posts.length > 0">
        <h3>Posts list</h3>
        <TransitionGroup name="list">
            <PostItem 
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
            />
        </TransitionGroup>
       
    </div>
    <h4 class="mt-5" v-else>No posts here yet.</h4>

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
<style lang="css">
    .list-enter-active,
    .list-leave-active {
      transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
      opacity: 0;
      transform: translateX(130px);
    }
    .list-move {
        transition: transform .8s ease;
    }

</style>