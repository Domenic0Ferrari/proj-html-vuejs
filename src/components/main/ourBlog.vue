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
            <h6>Aenan lobortis sapien enim viverra</h6>
            <div class="date">September 9th, 2015 | 0 comments</div>
            <div class="para">Etiam finibus suscipit odio, quis cursus dui pharetra vitae. Donec hendrerit tincidunt congue.
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/post_img_11-300x188.jpg" alt="#">
            <h6>Duic ac massa semper maximus</h6>
            <div class="date">September 9th, 2015 | 0 comments</div>
            <div class="para">Etiam finibus suscipit odio, quis cursus dui pharetra vitae. Donec hendrerit tincidunt congue.
            </div>
        </div>
        <div class="card">
            <img src="../../assets/images/post_img_10-300x188.jpg" alt="#">
            <h6>Nunc femrint nulla eu justo sem id</h6>
            <div class="date">September 9th, 2015 | 0 comments</div>
            <div class="para">Etiam finibus suscipit odio, quis cursus dui pharetra vitae. Donec hendrerit tincidunt congue.
            </div>
        </div>
    </div>
    <div class="my-border"></div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

.card {
    width: calc(100% / 3);
    border: 0;
    border-radius: 0;

    .date {
        font-size: 12px;
    }

    .para {
        padding: 1rem 0;
        font-size: 15px;
    }
}

.my-border {
    margin: 0 auto;
    width: 95%;
    height: 1px;
    background-color: $brand_second;
}
</style>