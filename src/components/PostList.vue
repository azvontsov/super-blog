<template lang="">
    <PostItem 
    v-for="post in posts"
    :post="post"
    />


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