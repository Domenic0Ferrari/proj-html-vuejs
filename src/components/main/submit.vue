<script>
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
export default {
    components: {
        faEnvelope
    }
}
</script>

<template>
    <main>
        <div class="container d-flex justify-content-center align-items-center gap-5">
            <div class="my-envelope d-flex justify-content-center align-items-center">
                <font-awesome-icon icon="fa-regular fa-envelope" />
            </div>
            <div class="my-title">
                <div>Subscribe now and get special offers</div>
            </div>
            <div>
                <input type="text" class="form-control rounded-pill" placeholder="Insert your email"
                    aria-label="First name">
            </div>
            <div>
                <button class="rounded-pill">SEND</button>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

main {
    background-color: #303337;
    height: 200px;
    width: 100%;

    .container {
        height: 100%;

        .my-envelope {
            width: 50px;
            height: 50px;
            font-size: 35px;
            color: $brand_second;
            background-color: #2B2E32;
            border-radius: 50px;
            padding: 2rem;
        }

        .my-title {
            color: white;
            font-size: 30px;
        }

        button {
            padding: .4rem 3rem;
            background-color: $brand_third;
            color: white;
            border: 0;

            &:hover {
                background-color: rgba($color: $brand_third, $alpha: 0.5);
            }
        }
    }
}
</style>