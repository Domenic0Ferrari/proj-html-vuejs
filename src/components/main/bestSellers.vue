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
            <AppCard />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;
</style>