<script>
import CollectMain from './collectMain.vue';
import firstMain from './firstMain.vue';
import productsMain from './productsMain.vue';
import bestSellers from './bestSellers.vue';
export default {
    data() {
        return {

        }
    }, components: {
        firstMain,
        productsMain,
        CollectMain,
        bestSellers
    }
}
</script>

<template>
    <main>
        <firstMain />
        <productsMain />
        <CollectMain />
        <bestSellers />
    </main>
</template>

<style lang="scss" scoped></style>