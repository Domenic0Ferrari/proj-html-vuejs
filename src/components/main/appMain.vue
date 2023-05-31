<script>
import CollectMain from './collectMain.vue';
import firstMain from './firstMain.vue';
import productsMain from './productsMain.vue';
import bestSellers from './bestSellers.vue';
import FreeShipping from './freeShipping.vue';
import newArrivals from './newArrivals.vue';
import customerReview from './customerReview.vue';
import ourBlog from './ourBlog.vue';
import summaryVue from './summary.vue';
import BrandLogo from './brandLogo.vue';
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
        newArrivals,
        customerReview,
        ourBlog,
        summaryVue,
        BrandLogo
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
        <customerReview />
        <ourBlog />
        <summaryVue />
        <BrandLogo />
    </main>
</template>

<style lang="scss" scoped></style>