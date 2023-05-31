<script>
import footerTop from './footerTop.vue';
export default {
    data() {
        return {
            footerContacts: [
                {
                    address: "12345 North Main Street,",
                    city: "New York, NY 55555",
                    phoneNumber: "Phone: 1.800.555.6789",
                    mail: "Email: info@compani.com",
                    web: "Web: Theme-fusion.com",
                },

            ],
            topRatedProducts: [
                {
                    article: "Leather Gloves",
                    image: "https://thumbs2.imgbox.com/ad/dd/IVFGCvIi_t.jpg",
                    price: "$45",
                },

                {
                    article: "Black Leather Jacket",
                    image: "https://thumbs2.imgbox.com/5b/03/QGJ1tzQo_t.jpg",
                    price: "$235",
                },

                {
                    article: "Spring Printed Dress",
                    image: "https://thumbs2.imgbox.com/db/7c/jf9rkkfH_t.jpg",
                    price: "$47",
                }
            ],
            recentPosts: [
                {
                    id: "1",
                    post: "Aenean lobortis sapien enim viverra",
                },
                {
                    id: "2",
                    post: "Duis ac massa semper maximus",
                },
                {
                    id: "3",
                    post: "Nunc fermint nulla eu justo sem id",
                },
                {
                    id: "4",
                    post: "Aliquam posuere magna eget nibh",
                },
                {
                    id: "5",
                    post: "Cras ac nulla ac consecte rutrum",
                },
                {
                    id: "6",
                    post: "Fusce mattis nunc ut aliquam",
                },
            ],
            tagsList: [
                {
                    id: "1",
                    tag: "Black"
                },
                {
                    id: "2",
                    tag: "boots"
                },
                {
                    id: "3",
                    tag: "Brown"
                },
                {
                    id: "4",
                    tag: "Casual"
                },
                {
                    id: "5",
                    tag: "D&G"
                },
                {
                    id: "6",
                    tag: "Fabric"
                },
                {
                    id: "7",
                    tag: "flowers"
                },
                {
                    id: "8",
                    tag: "Grey"
                },
                {
                    id: "9",
                    tag: "hat"
                },
                {
                    id: "1o",
                    tag: "Hipster"
                },
                {
                    id: "11",
                    tag: "lines"
                },
                {
                    id: "12",
                    tag: "multi-purpose"
                },
                {
                    id: "13",
                    tag: "New York"
                },
                {
                    id: "14",
                    tag: "Outdoors"
                },
                {
                    id: "15",
                    tag: "red"
                },
                {
                    id: "16",
                    tag: "responsive"
                },
                {
                    id: "17",
                    tag: "summer"
                },
                {
                    id: "18",
                    tag: "sweater"
                },
                {
                    id: "19",
                    tag: "Travel"
                },
                {
                    id: "20",
                    tag: "Warm"
                },
                {
                    id: "21",
                    tag: "White"
                },
                {
                    id: "22",
                    tag: "winter"
                },
            ],
        }
    },
    components: {
        footerTop
    }
}
</script>

<template>
    <footerTop :footerContacts="footerContacts" :topRatedProducts="topRatedProducts" :recentPosts="recentPosts"
        :tagsList="tagsList" />
</template>

<style lang="scss" scoped>
@use '../../assets/style/general.scss' as *;
</style>