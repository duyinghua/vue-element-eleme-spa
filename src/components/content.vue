<template>
    <div class="content">
        fetching:{{fetch}}



        <div class="item" v-for="item in items"> {{item.content}}--{{itemsCount}} </div>
    </div>
</template>

<script>
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
        computed: {
            items (){
                return this.$store.state.items
            },
            itemsCount (){
                return this.$store.getters.itemsCount
            },
            fetch (){
                return this.$store.state.fetch
            }
        }
    }
</script>

<style>

</style>
