<script>
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default {
    data() {
        return {

        }
    },
    components: {
        faFacebookF,
        faTwitter,
        faInstagram,
        faYoutube
    }
}
</script>

<template>
    <header>
        <div class="header_top">
            <div class="container">
                <div class="row d-flex">
                    <div class="col-3 d-flex align-items-center gap-3">
                        <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" style="color: #494949;" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" style="color: #494949;" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" style="color: #494949;" /></a>
                        <a href="#"><font-awesome-icon icon="fa-brands fa-youtube" style="color: #494949;" /></a>
                    </div>
                    <div class="col-9 d-flex justify-content-end align-items-center">
                        <button>Shopping Cart</button>
                        <button>My Account</button>
                        <button>Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="header_bottom">
            <div class="container"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

header {
    height: 150px;

    .header_top {
        height: 80px;
        border-bottom: 1px solid $brand_second;

        .container {
            height: 100%;

            .row {
                height: 100%;
            }
        }
    }
}
</style>