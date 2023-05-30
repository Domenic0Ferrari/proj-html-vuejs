<script>
export default {

}
</script>

<template>
    <div class="card d-flex flex-column gap-2">
        <img src="../../assets/images/black_elegant_leather_jacket-200x260.jpg" alt="#">
        <h6>Black Leather Jacket</h6>
        <div class="my-style">Men, Jackets, Jeans</div>
        <div class="d-flex gap-3 align-items-end">
            <span class="my-price">$235</span>
            <span>$200</span>
        </div>
    </div>
    <div class="card d-flex flex-column gap-2">
        <img src="../../assets/images/black_leather_suit-200x260.jpg" alt="#">
        <h6>Black Leather Jacket</h6>
        <div class="my-style">Men, Jackets</div>
        <span>$176</span>
    </div>
    <div class="card d-flex flex-column gap-2">
        <img src="../../assets/images/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="#">
        <h6>Black Leather Jacket</h6>
        <div class="my-style">Men, Jackets, Suits</div>
        <span>$580</span>
    </div>
    <div class="card d-flex flex-column gap-2">
        <img src="../../assets/images/modern_black_leather_suit-200x260.jpg" alt="#">
        <h6>Black Leather Jacket</h6>
        <div class="my-style">Men, Jackets</div>
        <span>$96</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

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
</style>