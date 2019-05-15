<template>
    <mdb-container>
        <h5 class="text-center mt-5">FEATURE PRODUCT</h5>
        <hr>
        <carousel :perPage="4" :autoplayTimeout="1000" draggable="true" paginationColor="#3D4852" paginationActiveColor="#1A75FF">
            <slide v-for="(product, index) in $store.state.products" :key="index">
                <mdb-card class="m-2">
                    <mdb-card-image
                            :src="getDefaultValue(product.images)"
                            alt="Card image cap"
                    ></mdb-card-image>
                    <mdb-card-body>
                        <mdb-card-title>{{product.name}}</mdb-card-title>
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
        methods:{
            getDefaultValue(arr){
                let val =  arr.filter(value=>{
                    if(value.default===1){

                        return value
                    }
                })[0]
                return '/images/'+val.path
            }
        }
    }
</script>

<style scoped>

</style>
