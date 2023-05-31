<script>
import { faAngleDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default {
    props: {
        menu: Array,
    },
    data() {

        return {

        }
    },
    components: {
        faAngleDown,
        faMagnifyingGlass
    }
}
</script>

<template>
    <div class="header_bottom">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="cont_img">
                <img src="../assets/images/classic_shop_logo1x.png" alt="#">
            </div>
            <div class="d-flex gap-5 align-items-center cont-menu">
                <ul class="gap-3">
                    <li v-for="menu in menu">{{ menu }}
                        <div v-if="menu === 'News'"></div>
                        <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
                    </li>
                </ul>
                <button class="px-3 py-2 rounded-pill">SHOP NOW!</button>
                <div>
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/style/general.scss' as *;

header {
    .header_bottom {
        height: 90px;

        .container {
            height: 90px;

            .cont-menu {
                height: 90px;
            }

            ul {
                display: flex;
                align-items: center;
                height: 90px;
                margin: 0;
                color: $brand_second;

                li {
                    line-height: 90px;
                    height: 100%;
                    color: $brand_second;
                }

                li:hover {
                    color: $brand_third;
                    cursor: pointer;
                    border-top: 3px solid $brand_third;
                }
            }

            button {
                background-color: $brand_third;
                color: white;
                border: 0;
            }
        }
    }
}
</style>