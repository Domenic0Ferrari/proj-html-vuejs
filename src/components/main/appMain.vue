<script>
import CollectMain from './collectMain.vue';
import firstMain from './firstMain.vue';
import productsMain from './productsMain.vue';
import bestSellers from './bestSellers.vue';
import FreeShipping from './freeShipping.vue';
import newArrivals from './newArrivals.vue'
export default {
    data() {
        return {

        }
    }, components: {
        firstMain,
        productsMain,
        CollectMain,
        bestSellers,
        FreeShipping,
        newArrivals
    }
}
</script>

<template>
    <main>
        <firstMain />
        <productsMain />
        <CollectMain />
        <bestSellers />
        <FreeShipping />
        <newArrivals />
    </main>
</template>

<style lang="scss" scoped></style>