<script>
export default {

}
</script>

<template>
    <div class="my-cnt d-flex">
        <div class="card one d-flex flex-column align-items-center justify-content-end pb-5">
            <h2>Winter Collection</h2>
            <h4>STYLISH AND WARM</h4>
            <button>VIEW MORE</button>
        </div>
        <div class="card two d-flex flex-column align-items-center justify-content-end pb-5">
            <h2>Spring Collection</h2>
            <h4>BRIGHT AND COLORFUL</h4>
            <button>VIEW MORE</button>
        </div>
        <div class="card three d-flex flex-column align-items-center justify-content-end pb-5">
            <h2>Autumn Collection</h2>
            <h4>RICH AND COMFORTABLE</h4>
            <button>VIEW MORE</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 0;
    border-radius: 0;
    height: 460px;
    width: calc(100% / 3);

    h2 {
        color: white;
    }

    h4 {
        color: white;
        font-size: 15px;
    }

    button {
        background-color: rgba($color: white, $alpha: 0.3);
        border: 2px solid white;
        border-radius: 15px;
        padding: .4rem 2.3rem;
        color: white;
        font-size: 14px;
    }
}

.one {
    background-image: url('../assets/images/winter_collection_bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.two {
    background-image: url('../assets/images/spring_collection_bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.three {
    background-image: url('../assets/images/autumn_collection_bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>