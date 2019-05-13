<template>
    <mdb-container>
        <h3 class="text-center mt-5">FEATURE PRODUCT</h3>
        <hr>
        <carousel :perPage="4" :autoplay="true" :autoplayTimeout="1000" draggable="true">
            <slide v-for="(product, index) in $store.state.products" :key="index">
                <mdb-card class="m-2">
                    <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
                    <mdb-card-body>
                        <mdb-card-title>Basic card</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                    </mdb-card-body>
                </mdb-card>
            </slide>
        </carousel>
    </mdb-container>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel'
    export default {
        name: "ProductSection",
        components:{
            Carousel, Slide
        },
        created() {
            if(!this.$store.state.products.length){
                this.$store.dispatch('getProducts')
            }
        },
    }
</script>

<style scoped>

</style>