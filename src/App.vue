<script>
import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';
import appFooter from './components/appFooter.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        appHeader,
        appMain,
        appFooter,
    }
}
</script>

<template>
    <div class="container">
        <appHeader />
        <appMain />
        <appFooter />
    </div>
</template>

<style lang="scss">
@import '../node_modules/bootstrap';
</style>
