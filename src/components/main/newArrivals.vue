<script>
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
export default {
    components: {
        faChevronLeft,
        faChevronRight
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="my-container d-flex align-items-center justify-content-center gap-3">
            <div class="border"></div>
            <h3>New Arrivals</h3>
            <div class="border"></div>
        </div>
        <h5>Brand new products from top designer</h5>
    </div>
    <div class="d-flex justify-content-between mb-5 align-items-center">
        <button><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
        <div class="card">
            <img src="public/black_elegant_leather_jacket-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="public/hipster_black_top-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="public/black_leather_suit-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="public/spring_printed_dress-200x260.jpg" alt="#">
        </div>
        <div class="card">
            <img src="public/modern_love_tee-200x260.jpg" alt="#">
        </div>
        <button><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;


button {
    background-color: rgba($color: $brand_first, $alpha: 0.3);
    width: 30px;
    height: 60px;
    border: 0;
    color: white;
    font-size: 12px;
}

.card {
    width: calc(100% / 5);
    border: 0;
}
</style>