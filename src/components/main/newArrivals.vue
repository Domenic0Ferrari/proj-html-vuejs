<script>
export default {

}
</script>

<template>
    <div class="container mt-5">
        <div class="my-head d-flex align-itmes-center justify-content-between">
            <hr>
            <h3>Best Seller</h3>
            <hr>
        </div>
        <h5>Brand new products from top designer</h5>
    </div>
    <div class="d-flex justify-content-between mb-5 align-items-center">
        <button>freccia</button>
        <div class="card">
            <img src="../../assets/images/black_elegant_leather_jacket-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="../../assets/images/hipster_black_top-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="../../assets/images/black_leather_suit-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="../../assets/images/spring_printed_dress-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="../../assets/images/modern_love_tee-200x260.jpg" alt="#">
        </div>
        <button>freccia</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

hr {
    width: 450px;
}

h3 {
    font-size: 35px;
}

h5 {
    font-size: 14px;
    color: $brand_first;
    text-align: center;
}

.card {
    width: calc(100% / 5);
    border: 0;
}
</style>