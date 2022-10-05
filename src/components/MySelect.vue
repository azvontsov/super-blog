<template lang="">
    <div class="container">

    
    <div class="d-flex flex-row-reverse bd-highlight">
        <select v-model="modelValue" @change="changeOption">
            <option disabled value="">Pick from the list</option>
            <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
            
            >{{ option.name }}</option>
        </select>
    </div>
</div>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style lang="">
    
</style> 