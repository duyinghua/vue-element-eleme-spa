<template>
    <ul class="side list-unstyled">
        <li @click="addItem({ content : Math.random()})"> 增加 </li>
        <li @click="deleteItem()"> 删除 </li>
        <li @click="commitItem()"> 提交 </li>
    </ul>
</template>

<script type="text/ecmascript-6">
    import {ADD_ITEM, DELETE_ITEM} from '../vuex/mutation-type.js'

    export default {
        components: {},
        props: {},
        data: function () {
            return {};
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {
            addItem: function (obj) {
                this.$store.commit(ADD_ITEM, obj)   //触发mutation
            },
            deleteItem: function () {
                this.$store.commit(DELETE_ITEM)     //触发mutation
            },
            commitItem: function () {
                this.$store.dispatch('commitItem')  //触发action
            }
        }
    }
</script>

<style>

</style>
