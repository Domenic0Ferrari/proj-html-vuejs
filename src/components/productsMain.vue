<script>
export default {

}
</script>

<template>
    <div class="container d-flex flex-column align-items-center gap-3 mt-5">
        <h3>Featured Products</h3>
        <h5>Must have products from our top sellers</h5>
        <div>
            <button>MEN</button>
            <button>WOMAN</button>
            <button>ACCESSORIES</button>
        </div>
        <div class="contain-card d-flex justify-content-between">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

h3 {
    font-size: 35px;
}

h5 {
    font-size: 14px;
    color: $brand_first;
}

button {
    background-color: $brand_fourth;
    border: 1px solid $brand_second;
    padding: .6rem 2.2rem;
}

.contain-card {
    width: 100%;
}

.card {
    height: 300px;
    width: 250px;
    border: 1px solid black;
}
</style>