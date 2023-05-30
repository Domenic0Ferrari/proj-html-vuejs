<script>
export default {

}
</script>

<template>
    <main class="d-flex align-items-center">
        <div class="container">
            <div class="row d-flex gap-3">
                <div class="col promo-1">
                    <h3>70% OFF</h3>
                    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, corporis dolores! Explicabo,
                        accusamus, provident ipsam dignissimos dolore libero error fuga quidem asperiores facilis
                        necessitatibus eveniet eligendi recusandae atque ipsa ducimus!</div>
                    <button>VIEW MORE</button>
                </div>
                <div class="col promo-2">
                    <h3>FREE SHIPPING</h3>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus recusandae voluptate,
                        velit consectetur dolorum aspernatur harum cumque eius esse magnam reiciendis accusamus minus nisi
                        quas, veritatis vero repellendus commodi?</div>
                    <button>VIEW MORE</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

main {
    background-image: url('../../assets/images/bkgd_confetti-compressor.jpg');
    height: 500px;

    button {
        background-color: rgba($color: white, $alpha: 0.3);
        border: 2px solid white;
        border-radius: 15px;
        padding: .4rem 2.3rem;
        color: white;
        font-size: 14px;
    }

    h3 {
        color: white;
        font-size: 35px;
    }

    .promo-1 {
        height: 350px;
        background-image: url('../../assets/images/promo_box_1_bg.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        padding-inline: 3rem;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }

    .promo-2 {
        height: 350px;
        background-image: url('../../assets/images/promo_box_2_bg.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        padding-inline: 3rem;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }
}
</style>