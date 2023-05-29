<script>
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
export default {
    data() {
        return {

        }
    },
    components: {
        faFacebookF
    }
}
</script>

<template>
    <header>
        <div class="header_top mb-3">
            <div class="container">
                <font-awesome-icon icon="fa-brands fa-facebook-f" style="color: #494949;" />
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
    }
}
</style>