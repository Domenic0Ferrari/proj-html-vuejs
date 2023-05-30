<script>
export default {

}
</script>

<template>
    <div class="container d-flex flex-column align-items-center gap-3 mt-5 mb-5">
        <div class="my-head d-flex align-itmes-center justify-content-between">
            <hr>
            <h3>Best Seller</h3>
            <hr>
        </div>
        <h5>Must have products from our top sellers</h5>
        <div class="row">
            <button class="btn-1">freccia</button>
            <div class="col">
                <img src="../../assets/images/spring_printed_dress-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="../../assets/images/modern_love_tee-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="../../assets/images/black_leather_jacket-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="../../assets/images/black_elegant_leather_jacket-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="../../assets/images/hipster_black_top-200x260.jpg" alt="#">
            </div>
            <button class="btn-2">freccia</button>
        </div>
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
}

.row {
    position: relative;
}

button {
    background-color: rgba($color: $brand_first, $alpha: 0.3);
    position: absolute;
    width: 50px;
    height: 50px;
    top: 100px;
}

.btn-1 {
    left: 0;
}

.btn-2 {
    right: 0;
}
</style>