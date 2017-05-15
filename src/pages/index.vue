<template>
    <o-frame>
        <side></side>
        <cont></cont>
    </o-frame>
</template>

<script type="text/ecmascript-6">
    import oFrame from '../components/o-frame.vue';
    import side from '../components/side.vue'
    import cont from '../components/content.vue'

    export default {
        components: {oFrame, side, cont},
        props: {},
        data: function () {
            return {};
        },
        created: function () {

        },
        mounted: function () {

        }
    }
</script>

<style>

</style>
