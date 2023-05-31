<script>
export default {

}
</script>

<template>
    <main>
        <div class="my-title">BRAND LOGOS</div>
        <div class="container d-flex justify-content-between pt-5">
            <div>
                <img src="../../assets/images/b_logotype_6.png" alt="#">
            </div>
            <div>
                <img src="../../assets/images/b_logotype_7.png" alt="#">
            </div>
            <div>
                <img src="../../assets/images/b_logotype_1.png" alt="#">
            </div>
            <div>
                <img src="../../assets/images/b_logotype_2.png" alt="#">
            </div>
            <div>
                <img src="../../assets/images/b_logotype_3.png" alt="#">
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

main {
    background-color: $brand_fourth;
    width: 100%;
    padding: 3rem 0;

    .my-title {
        text-align: center;
        color: $brand_first;
        font-size: 16px;
    }
}
</style>