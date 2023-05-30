<script>
export default {

}
</script>

<template>
    <div class="container d-flex flex-column align-items-center gap-3 mt-5 mb-5">
        <div class="my-head d-flex align-itmes-center justify-content-between">
            <hr>
            <h3>Featured Products</h3>
            <hr>
        </div>
        <h5>Must have products from our top sellers</h5>
        <div>
            <button>MEN</button>
            <button>WOMAN</button>
            <button>ACCESSORIES</button>
        </div>
        <div class="contain-card d-flex justify-content-between gap-3">
            <div class="card d-flex flex-column gap-2">
                <img src="../assets/images/black_elegant_leather_jacket-200x260.jpg" alt="#">
                <h6>Black Leather Jacket</h6>
                <div class="my-style">Men, Jackets, Jeans</div>
                <div class="d-flex gap-3 align-items-end">
                    <span class="my-price">$235</span>
                    <span>$200</span>
                </div>

            </div>
            <div class="card d-flex flex-column gap-2">
                <img src="../assets/images/black_leather_suit-200x260.jpg" alt="#">
                <h6>Black Leather Jacket</h6>
                <div class="my-style">Men, Jackets</div>
                <span>$176</span>
            </div>
            <div class="card d-flex flex-column gap-2">
                <img src="../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="#">
                <h6>Black Leather Jacket</h6>
                <div class="my-style">Men, Jackets, Suits</div>
                <span>$580</span>
            </div>
            <div class="card d-flex flex-column gap-2">
                <img src="../assets/images/modern_black_leather_suit-200x260.jpg" alt="#">
                <h6>Black Leather Jacket</h6>
                <div class="my-style">Men, Jackets</div>
                <span>$96</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

.my-head {
    width: 100%;

    hr {
        width: 450px;
    }

    h3 {
        font-size: 35px;
    }
}



h5 {
    font-size: 14px;
    color: $brand_first;
}

button {
    background-color: $brand_fourth;
    border: 1px solid $brand_second;
    padding: .6rem 2.2rem;
}

.contain-card {
    width: 100%;

    .card {
        width: calc(100% / 4);
        border: 0;

        .my-style {
            font-size: 13px;
            color: $brand_second;
        }

        span {
            color: $brand_third;
        }

        .my-price {
            font-size: 12px;
            text-decoration: line-through;
        }
    }
}
</style>