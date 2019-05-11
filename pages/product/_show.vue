<template>
    <div v-if="loaded" class="product-show">
        <mdb-container class="border-bottom">
            <mdb-row class="bg-white">
                <mdb-col class="col-md-8 slide-wrapper"><br>

                    <div class="similer-image-btn">
                        <a href="#similerImage" >
                            <mdb-icon far icon="clone" />
                        </a>
                    </div>

                    <div class="product-slide">

                        <carousel :dots="false"  :navText = "['','']" >
	                        <img src="../../static/images/sim-1.jpg">
	                        <img src="../../static/images/product-image2.PNG">
	                        <img src="../../static/images/sim-2.jpg">
	                        <img src="../../static/images/sim-3.jpg">
	                        <img src="../../static/images/sim-4.jpg">
	                        <img src="../../static/images/sim-5.jpg">
	                        <img src="../../static/images/sim-6.jpg">
	                        <img src="../../static/images/sim-7.jpg">
	                        <img src="../../static/images/sim-8.jpg">
	                        <img src="../../static/images/sim-1.jpg">
	                        <img src="../../static/images/sim-2.jpg">
	                        <img src="../../static/images/sim-3.jpg">
	                        <img src="../../static/images/sim-4.jpg">
	                        <img src="../../static/images/sim-5.jpg">
	                        <img src="../../static/images/sim-6.jpg">
	                        <img src="../../static/images/sim-7.jpg">
	                        <img src="../../static/images/sim-8.jpg">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <img src="../../static/images/product-image2.PNG">
                            <template slot="prev"></template>
                        </carousel>
                    </div>

                </mdb-col>
                <mdb-col class="col-md-4 border-left">
                    <div class="cart-section">
                        <p>{{product.name}}</p>
                        <div v-if="selectedSize.hasOwnProperty('id')" class="price">
                            <span class="f18">${{withDiscountPrice.toFixed(2)}}</span>
                            <strike class="f14">${{withoutDiscountPrice}}</strike>
                            <strong class="text-danger f14">
                                {{selectedSize.discount? selectedSize.discount+'%off':''}}
                            </strong>
                        </div>
                        <div class="form-group">
                            <div class="size-cart">
                                <strong>Size</strong>
                                <a href="#">VIEW SIZE CHART</a>
                            </div>
                            <select class="form-control" v-model="selectedSize">
                                <option
                                        v-for="size in product.attributes.size"
                                        :key="size.id"
                                        :value="size"

                                >
                                    {{size.name}}
                                </option>
                            </select>

                            <mdb-btn class="mt-3 add-to-cart" block>ADD TO CART</mdb-btn>
                        </div>
                        <div class="p-3 delivery">
                            <div>
                                <strong>delivery to 769002</strong>
                                <a href="#" class=" ">EDIT PINCODE</a>
                            </div>
                            <!--<span class="info"> Select a size for delivery information</span>-->
                            <ul class="delivery-status">
                                <li><span> Cash on delivery available.</span></li>
                                <li><span>15 days return</span></li>
                            </ul>
                        </div>
                        <br>
                        <br>
                        <div class="adjustAccordion">
                            <badger-accordion>
                                <badger-accordion-item>
                                    <template slot="header">Items details</template>
                                    <template slot="content">
                                        <div class="custom-control custom-checkbox item-accordion"><br>
                                            <strong>FEATURES</strong>
                                            <ul>
                                                <li>Fabric : 100% Cotton</li>
                                                <li>
                                                    The actual product may differ slightly in color from the one
                                                    illustrated in the images.
                                                </li>
                                            </ul>
                                            <strong>WHAT'S INCLUDED:</strong>
                                            <ul>
                                                <li>1 Top , 1 Skirt</li>
                                            </ul>
                                            <strong>CARE:</strong>
                                            <ul>
                                                <li>Gentle wash</li>
                                            </ul>
                                            <strong>Suitable For</strong>
                                            <ul>
                                                <li>Girls</li>
                                            </ul>
                                            <strong>Colour</strong>
                                            <ul>
                                                <li>Navy</li>
                                            </ul>
                                        </div>
                                    </template>
                                </badger-accordion-item>
                            </badger-accordion>
                            <badger-accordion>
                                <badger-accordion-item>
                                    <template slot="header">By brand {{product.brand.name}}</template>
                                    <!--<template slot="content">-->
                                    <!--asdf-->
                                    <!--</template>-->
                                </badger-accordion-item>
                            </badger-accordion>
                        </div>
                    </div>
                </mdb-col>
            </mdb-row>
        </mdb-container>
        <section class="features addd" id="similerImage">
            <div class="container">
                <div class="row">
                    <div class="w-100">
                        <p class="text-center similer-title">Similar LED Shoes </p><br>
                        <!--:responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}-->
                        <div class="show-bottom-slider">
                            <carousel class="modify" :dots="false" :autoWidth="true" :navText = "['','']">
                                <div>
                                    <img src="../../static/images/product-image2.PNG" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-1.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-2.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-3.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-4.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-5.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-6.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-7.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-8.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-1.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-2.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-3.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-4.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-5.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-6.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-7.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                                <div>
                                    <img src="../../static/images/sim-8.jpg" alt="" class="img-fluid">
                                    <p class="mt-2">₹584</p>
                                </div>
                            </carousel>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row ">
                    <div class="bottom-link">
                        <a href="#">MORE LED SHOES FROM NATURAL BEAUTY &nbsp; | </a>
                        <a href="#"> MORE BLACK LED SHOES &nbsp; | </a>
                        <a href="#"> MORE LED SHOES </a>
                    </div>

                </div>
            </div>

        </section>

    </div>

</template>
<script>
    import carousel from 'vue-owl-carousel'

    export default {
        components: {carousel},
        data() {
            return {
                product: {},
                selectedSize: {}
            }
        },

        created() {
            if (!this.$store.state.products.length) {
                this.$store.dispatch('getProducts')
            }
            this.product = this.$store.state.products[0]
            this.selectedSize = this.getDefaultSize(this.product.attributes.size)


        },
        computed: {
            loaded() {
                if (!_.isEmpty(this.product)) {
                    if (this.product.id !== undefined && this.product.attributes !== undefined) {
                        return true
                    }
                }
            },
            withoutDiscountPrice() {
                return this.selectedSize.price
            },
            withDiscountPrice() {
                let discount = parseFloat(this.selectedSize.discount)
                let price = parseFloat(this.selectedSize.price)

                return price - (price * discount / 100).toFixed(2)
            }

        },
        methods: {
            getDefaultSize(size) {
                return size.filter(val => val.default)[0]
            },
        }
    }
</script>
<style lang="scss" scoped>
    @media(max-width: 425px) {
        .product-show{
            .container{
                padding: 0!important;
                margin: 0!important;
            }
            .row{
                padding: 0!important;
                margin: 0!important;
            }
            .col-md-8{
                padding: 0!important;
                margin: 0!important;
            }
        }
    }
    .slide-wrapper{
        position: relative;
    }
    .similer-image-btn{
        padding: 12px;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        position: absolute;
        right: 40px;
        top: 40px;
        z-index: 10;
        background: white;

        box-shadow: 0px 1px 7px #bababa;
        i{
            color: #ED54A4!important;
            display: flex;
            justify-content: center;
        }

    }

</style>
