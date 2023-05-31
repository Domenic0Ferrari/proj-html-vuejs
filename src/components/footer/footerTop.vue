<script>
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default {
    props: {
        footerContacts: Array,
        topRatedProducts: Array,
        recentPosts: Array,
        tagsList: Array,
    },
    components: {
        faFacebookF,
        faTwitter,
        faInstagram,
        faYoutube,
        faStar,
        faChevronRight
    }
}
</script>

<template>
    <main>
        <div class="container d-flex gap-5 justify-content-between pt-5">
            <div class="my-card d-flex flex-column text-light gap-3">
                <div>
                    <img src="../../assets/images/classic_shop_logo_footer.png" alt="#">
                </div>
                <div class="pt-3">{{ footerContacts[0].address }}</div>
                <div>{{ footerContacts[0].city }}</div>
                <div>{{ footerContacts[0].phoneNumber }}</div>
                <div>{{ footerContacts[0].mail }}</div>
                <div class="pb-3">{{ footerContacts[0].web }}</div>
                <div>
                    <ul class="d-flex gap-3 justify-content-start p-0">
                        <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
                    </ul>
                </div>
            </div>
            <div class="my-card text-light d-flex flex-column align-items-start justify-content-between">
                <div>TOP RATED PRODUCTION</div>
                <div class="mini-card d-flex justify-content-between" v-for="item in topRatedProducts">
                    <div class="one pb-1">
                        <div>{{ item.article }}</div>
                        <font-awesome-icon icon="fa-solid fa-star" class="my-star" />
                        <font-awesome-icon icon="fa-solid fa-star" class="my-star" />
                        <font-awesome-icon icon="fa-solid fa-star" class="my-star" />
                        <font-awesome-icon icon="fa-solid fa-star" class="my-star" />
                        <font-awesome-icon icon="fa-solid fa-star" class="my-star" />
                        <div>{{ item.price }}</div>
                    </div>
                    <div class="one pb-1 d-flex justify-content-end">
                        <img :src="item.image" alt="#">
                    </div>
                </div>
            </div>
            <div class="my-card text-light d-flex flex-column align-items-start">
                <div>RECENT POSTS</div>
                <ul v-for="post in recentPosts" class="my-ul d-flex justify-content-start gap-1">
                    <li><font-awesome-icon icon="fa-solid fa-chevron-right" /></li>
                    <li>{{ post.post }}</li>
                </ul>
            </div>
            <div class="my-card text-light ">
                <div>TAGS</div>
                <div class="d-flex flex-wrap gap-2">
                    <div v-for="tag in tagsList" class="my-tag">
                        {{ tag.tag }}
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;

main {
    background-color: #2B2E32;

    .my-card {
        width: calc(100% / 4);

        .one {
            width: 150px;
            border-bottom: 1px solid $brand_first;
        }

        .my-ul {
            border-bottom: 1px solid $brand_first;
            width: 100%;
            padding: 1rem 0;
        }

        .my-tag {
            border: 1px solid $brand_first;
            padding: 0.2rem;
        }
    }
}
</style>