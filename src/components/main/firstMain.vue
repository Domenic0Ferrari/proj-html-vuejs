<script>
export default {

}
</script>

<template>
    <div class="main">
        <div class="my_container">
            <h2>Brand New Arrivals</h2>
            <h3>NEW COLLECTION FROM NEW YORK</h3>
            <div class="d-flex gap-2">
                <button class="my-btn rounded-pill">VIEW ALL</button>
                <button class="my-btn rounded-pill">LOOKBOOK</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

.main {
    height: 520px;
    background-image: url('../../assets/images/home1_slide_three_bg_2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    .my_container {
        height: 100%;
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        padding-top: 9.4rem;

        h2 {
            font-size: 75px;
            color: white;
        }

        h3 {
            color: white;
            font-size: 25px;
        }

        .my-btn {
            background-color: rgba($color: white, $alpha: 0.1);
            border: 1px solid white;
            padding: .5rem 1.5rem;
            color: white;

            &:hover {
                border: 3px solid white;
            }
        }
    }
}
</style>