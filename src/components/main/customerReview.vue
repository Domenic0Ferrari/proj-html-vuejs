<script>
export default {

}
</script>

<template>
    <main>
        <div class="my-cnt d-flex flex-column align-items-center justify-content-center">
            <img src="../../assets/images/man_testimonial.png" alt="#">
            <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime et sunt eos
                assumenda nihil corrupti
                laudantium nemo, illum voluptate. Iusto eaque consequuntur unde itaque accusantium quia laboriosam saepe
                quod.</p>
            <div class="text-light">Darìo Pineda, Theme Fusion</div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

main {
    background-image: url('../../assets/images/testimonials_home_1_bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;

    .my-cnt {
        max-width: 800px;
        height: 100%;
        gap: 2rem;
        margin: 0 auto;
    }
}
</style>