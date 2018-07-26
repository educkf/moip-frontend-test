<template>
    <textarea @input="handleChange"></textarea>
</template>

<script>
import autosize from 'autosize'

export default {
    props: ['value'],
    methods: {
        handleChange(e) {
            this.$emit('input', e.target.value);
        }
    },
    mounted() {
        autosize(this.$el)
    }
}
</script>

<style scoped lang="less">
textarea {
    border: none;
    width: 100%;
    outline: none;
    color: #999;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    padding: 0 2px 3px 2px;
    resize: none;
}
</style>
