<script>
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
export default {
    props: {
        myArr: Array,
    },
    components: {
        faSquareCheck
    }
}
</script>

<template>
    <div class="card d-flex flex-column gap-2" v-for="item in myArr">
        <img :src="item.image" alt="#">
        <h6>{{ item.style }}</h6>
        <div class="my-style">{{ item.attribute }}</div>
        <div class="d-flex gap-3 align-items-end">
            <!-- <span class="text-decoration-line-through">$235</span> -->
            <span>{{ item.price }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

.card {
    width: calc(100% / 4);
    border: 0;


    .my-style {
        font-size: 13px;
        color: $brand_second;
    }

    span {
        color: $brand_third;
    }

    .my-price {
        font-size: 12px;
        text-decoration: line-through;
    }

}
</style>