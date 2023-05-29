<script>
import headerTop from './headerTop.vue';
import headerBottom from './headerBottom.vue'
export default {
    data() {
        return {
            menu: [
                'Home',
                'Shop',
                'Products',
                'Categories',
                'News',
                'Elements'
            ]
        }
    },
    components: {
        headerTop,
        headerBottom
    }
}
</script>

<template>
    <header>
        <headerTop />
        <headerBottom :menu="menu" />
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

header {
    height: 150px;
}
</style>