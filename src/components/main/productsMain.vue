<script>
import AppCard from './appCard.vue';

export default {
    data() {
        return {
            myArr: [
                {
                    "image": "public/black_elegant_leather_jacket-200x260.jpg",
                    "style": "Black Leather Jacket",
                    "type": "men",
                    "attribute": "Men, Jackets, Jeans",
                    "price": "$200",
                },
                {
                    "image": "public/black_leather_suit-200x260.jpg",
                    "style": "Black Leather Suit",
                    "type": "men",
                    "attribute": "Men, Jackets",
                    "price": "$176",
                },
                {
                    "image": "public/blue_jacket_and_white_stripe_tee-200x260.jpg",
                    "style": "Blue Jacket & Stripe Tee",
                    "type": "men",
                    "attribute": "Men, Jackets, Suit",
                    "price": "$580",
                },
                {
                    "image": "public/modern_black_leather_suit-200x260.jpg",
                    "style": "Modern Black Leather Suit",
                    "type": "men",
                    "attribute": "Men, Jackets",
                    "price": "$96",
                },
                // {
                //     "image": "public/black_leather_jacket-200x260.jpg",
                //     "style": "Black Leather Jacket",
                //     "type": "women",
                //     "attribute": "Women, Jackets",
                //     "price": "$200",
                // },
                // {
                //     "image": "public/hipster_black_top-200x260.jpg",
                //     "style": "Black Top",
                //     "type": "women",
                //     "attribute": "Women, Top",
                //     "price": "$40",
                // },
                // {
                //     "image": "public/modern_love_tee-200x260.jpg",
                //     "style": "Modern Love",
                //     "type": "women",
                //     "attribute": "Women, Tee",
                //     "price": "$55",
                // },
                // {
                //     "image": "public/spring_printed_dress-200x260.jpg",
                //     "style": "Spring Dress",
                //     "type": "women",
                //     "attribute": "Women, Dress",
                //     "price": "$33",
                // },
                // {
                //     "image": "public/brown_dress_shoes-200x260.jpg",
                //     "style": "Brown Shoes",
                //     "type": "accessories",
                //     "attribute": "Accessories, Shoes",
                //     "price": "$150",
                // },
                // {
                //     "image": "public/casual_leather_belts-200x260.jpg",
                //     "style": "Leather Belts",
                //     "type": "accessories",
                //     "attribute": "Accessories, Belts",
                //     "price": "$100",
                // },
                // {
                //     "image": "public/leather_gloves-200x260.jpg",
                //     "style": "Leather Gloves",
                //     "type": "accessories",
                //     "attribute": "Accessories, Gloves",
                //     "price": "$300",
                // },
                // {
                //     "image": "public/modern_leather_boots-200x260.jpg",
                //     "style": "Leather Boots",
                //     "type": "accessories",
                //     "attribute": "Accessories, Boots",
                //     "price": "$400",
                // },
            ]
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
            <button @click="">MEN</button>
            <button>WOMEN</button>
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

    &:active {
        background-color: white;
    }
}

.contain-card {
    width: 100%;
}
</style>