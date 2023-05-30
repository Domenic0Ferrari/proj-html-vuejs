<script>
export default {

}
</script>

<template>
    <div class="my-container d-flex align-items-center justify-content-center gap-3 mt-5">
        <div class="border"></div>
        <h3>From Our Blog</h3>
        <div class="border"></div>
    </div>
    <h5>The latest Classic Shop news</h5>
    <div class="container d-flex gap-4 mb-4 mt-5">
        <div class="card">
            <img src="../../assets/images/post_img_12-300x188.jpg" alt="#">
        </div>
        <div class="card">
            <img src="../../assets/images/post_img_11-300x188.jpg" alt="#">
        </div>
        <div class="card">
            <img src="../../assets/images/post_img_10-300x188.jpg" alt="#">
        </div>
    </div>
    <div class="my-border"></div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

.card {
    height: 300px;
    width: calc(100% / 3);
    border: 0;
    border-radius: 0;
}

.my-border {
    width: 100%;
    height: 2px;
    background-color: $brand_first;
}
</style>