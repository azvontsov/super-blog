<template lang="">
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div>
            <div @click.stop class="card shadow-lg position-absolute top-50 start-50 translate-middle" style="width: 28rem;">
                <div class="card-body">
                    <slot></slot>
                </div>
            </div>
        </div>
      </div>

</template>

<script>
export default {
    name: 'my-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    }
}
</script>

<style scoped>
    .dialog {
        background: rgba(0, 0, 0, 0.5);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        display: flex;
        z-index: 2;
    }
    .card {
        background: rgb(226, 226, 178);

        z-index: 3;
    }
</style>