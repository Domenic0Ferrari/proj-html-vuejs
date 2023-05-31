<script>
import AppCard from './appCard.vue';

export default {
    data() {
        return {
            myArr: [{
                "image": "public/black_elegant_leather_jacket-200x260.jpg",
                "style": "Black Leather Jacket"
            }]
        }
    },
    components: {
        AppCard
    },
    methods: {

    }
}
</script>

<template>
    <div class="container d-flex flex-column align-items-center gap-3 mt-5 mb-5">
        <div class="my-container d-flex align-items-center justify-content-center gap-3">
            <div class="border"></div>
            <h3>Featured Products</h3>
            <div class="border"></div>
        </div>
        <h5>Must have products from our top sellers</h5>
        <div>
            <button>MEN</button>
            <button>WOMAN</button>
            <button>ACCESSORIES</button>
        </div>
        <div class="contain-card d-flex justify-content-between gap-3">
            <AppCard :myArr="myArr" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;


button {
    background-color: $brand_fourth;
    border: 1px solid $brand_second;
    padding: .6rem 2.2rem;
}

.contain-card {
    width: 100%;
}
</style>