<script>
import firstMain from './firstMain.vue';
import productsMain from './productsMain.vue';
export default {
    data() {
        return {

        }
    }, components: {
        firstMain,
        productsMain,
    }
}
</script>

<template>
    <main>
        <firstMain />
        <productsMain />
    </main>
</template>

<style lang="scss" scoped></style>