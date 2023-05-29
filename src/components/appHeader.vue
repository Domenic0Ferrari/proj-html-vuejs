<script>
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faAngleDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';
export default {
    data() {
        return {

        }
    },
    components: {
        faFacebookF,
        faTwitter,
        faInstagram,
        faYoutube,
        faCartShopping,
        faAngleDown, faChevronDown
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
                        <button class="btn_top">Shopping Cart</button>
                        <button class="btn_top">My Account
                            <font-awesome-icon icon="fa-solid fa-angle-down" style="color: #AAAAAA;"
                                class="fa-angle" /></button>
                        <button>
                            <font-awesome-icon icon="fa-solid fa-cart-shopping" />CART
                            <font-awesome-icon icon="fa-solid fa-chevron-down" style="color: #AAAAAA;" class="fa-chevron" />
                        </button>
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
        height: 60px;
        border-bottom: 1px solid $brand_second;

        .container {
            height: 100%;

            .row {
                height: 100%;
            }

            button {
                height: 100%;
                color: $brand_second;
                background-color: #FFFFFF;
                border: 0;
                padding: 0 2rem;
                display: flex;
                align-items: center;
                gap: .5rem;

                .fa-chevron {
                    font-size: 14px;
                }
            }

            .btn_top {
                border-right: 1px solid $brand_second;
                padding: .5rem;

                .fa-angle {
                    font-size: 10px;
                }
            }
        }

        button:active {
            background-color: $brand_fourth;
            color: black;
        }
    }
}
</style>