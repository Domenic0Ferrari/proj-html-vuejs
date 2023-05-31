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
    <div class="container d-flex flex-column align-items-center gap-3 mt-5 mb-5">
        <div class="my-container d-flex align-items-center justify-content-center gap-3">
            <div class="border"></div>
            <h3>Best Sellers</h3>
            <div class="border"></div>
        </div>
        <h5>Must have products from our top sellers</h5>
        <div class="row align-items-center">
            <button><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
            <div class="col">
                <img src="public/spring_printed_dress-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="public/modern_love_tee-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="public/black_leather_jacket-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="public/black_elegant_leather_jacket-200x260.jpg" alt="#">
            </div>
            <div class="col">
                <img src="public/hipster_black_top-200x260.jpg" alt="#">
            </div>
            <button><font-awesome-icon icon="fa-solid fa-chevron-right" /></button>
        </div>
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
</style>