<script>
import CollectMain from './collectMain.vue';
import firstMain from './firstMain.vue';
import productsMain from './productsMain.vue';
export default {
    data() {
        return {

        }
    }, components: {
        firstMain,
        productsMain,
        CollectMain
    }
}
</script>

<template>
    <main>
        <firstMain />
        <productsMain />
        <CollectMain />
    </main>
</template>

<style lang="scss" scoped></style>