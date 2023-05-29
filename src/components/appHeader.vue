<script>
import headerTop from './headerTop.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        headerTop,
    }
}
</script>

<template>
    <header>
        <headerTop />
        <div class="header_bottom">
            <div class="container"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

header {
    height: 150px;
}
</style>