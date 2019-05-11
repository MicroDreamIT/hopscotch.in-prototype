<template>
    <mdb-container class="mt-2">
        <mdb-row class="search-item on-sm-device">
            <div>Sort by:</div>
            <div class="active">Popular</div>
            <div>Lowest Price</div>
            <div>Highest Price</div>
        </mdb-row>

        <mdb-row class="d-flex flex-row p-2 product-item">
                <mdb-card v-for="(item,index) in product" :key="index">
                    <div @mouseover="showItem('item'+index)"
                         @mouseleave="hideItem('item'+index)" v-if="item.hasOwnProperty('id') && item.id">
                        <nuxt-link :to="{name:'product-show', params:{show:item.id}}">
                            <img src="../../../static/images/product-image2.PNG" alt="">
                            <!--<img :src="item.images[0].path" alt="Card image cap"/>-->
                        </nuxt-link>

                        <div class="bottom-text">
                            <mdb-card-text>{{item.name}}</mdb-card-text>
                            <mdb-card-text>
                               <strong> {{'$ '}}{{item.price-(item.price*item.discount/100)}}</strong>
                                <strike>{{'$ '}}{{item.price}}</strike>
                                <span class="discount">{{'('+item.discount+' % off)'}} </span>
                            </mdb-card-text>
                        </div>
                        <div :ref="'item'+index" class="item-hover">
                            <mdb-card>
                                <mdb-card-header class="cardHeader">
                                    <span class="text-center">Get it in 1-2 weeks</span>
                                </mdb-card-header>

                                <mdb-card-body>
                                    <div class="productAttributes">
                                        <span>Size</span>
                                        <span>View size chart</span>
                                    </div>
                                    <div class="d-flex flex-wrap pt-2">
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">
                                            6-12 month
                                        </mdb-btn>
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">
                                            1-2 years
                                        </mdb-btn>
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">
                                            2-3 years
                                        </mdb-btn>
                                        <mdb-btn rounded class="customBtnProduct" @click="cart">
                                            3-4 years
                                        </mdb-btn>
                                    </div>
                                </mdb-card-body>

                                <mdb-card-footer class="productFooter">
                                    <div>
                                        <button class="addToCart" v-if="cartButton">Select a Size</button>
                                        <button class="addToCart" v-else @click.prevent="addOnCart()">Add To Cart
                                        </button>
                                    </div>
                                </mdb-card-footer>
                            </mdb-card>
                        </div>
                    </div>

                    <vcl-facebook
                            :width="400"
                            :height="200"
                            v-else
                    ></vcl-facebook>
                </mdb-card>

        </mdb-row>
    </mdb-container>
</template>

<script>
    export default {
        name: "productList",
        data() {
            return {
                product: [],
                cartButton: true,

            }
        },
        created() {
            this.product = this.$store.state.products;
        },
        methods: {
            showItem(item) {
                let itemElement = this.$refs[item][0].classList
                itemElement.add('hover-item')
            },
            hideItem(item) {
                this.cartButton = true
                let itemElement = this.$refs[item][0].classList
                itemElement.remove('hover-item')
            },
            cart(e) {
                let targetElement = e.target.classList
                targetElement.contains('active')?
                    targetElement.remove('active'):targetElement.add('active')
                this.cartButton ? this.cartButton = false : null
            },
            addOnCart(){
                alert('I am on cart')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../layouts/scss/variables";
    .card {
	    border: 0.5px solid #f5f5f5;
        box-shadow: none;
        background:white;
    }
    .bottom-text {
        padding: 12px 15px;
        z-index: 2;
        position: relative;
        background: #fff;
        .card-text {
            padding: 0;
            font-size: 13px;

            .discount {
                color: green;
                font-weight: bold;
            }
        }
    }

    .addToCart {
        padding: 8px 0;
        color: $white;
        text-align: center;
        background:$primary;
        width: 100%;
        display: block;
        font-size: 13px;
        outline: 0;
    }

    .productFooter {
        padding: 0;
    }

    .customBtnProduct {
        background: none !important;
        padding: 6px 9px;
        color: #707070;
        font-size: 11px;
        box-shadow: none;
        border: 1px solid #707070a3;
        border-radius: 15px;
        &.active{
            background: transparent!important;
        }
    }

    .customBtnProduct {
        &:hover {
            border: 1px solid transparent;
            box-shadow: 0px 4px 15px #00000029;
            color: $primary;
        }
        /*&.active{*/
            /*border: 1px solid transparent;*/
            /*box-shadow: 0px 4px 15px #00000029;*/
            /*color: #ED54AC;*/
        /*}*/
    }
    .customBtnProduct.btn.btn-default.btn-rounded.ripple-parent.active{
            background: transparent!important;
            box-shadow: none;
            color: #ED54A4!important;
    }

    .productAttributes {
        display: flex;
        justify-content: space-between;
        span {
            &:first-child {
                color: $primary;
                font-size: 14px;
                font-weight: bold;
            }
            &:last-child {
                color: $primary;
                font-size: 14px;
                font-weight: bold;
            }
        }
    }

    .cardHeader {
        padding: 8px 0!important;
        font-size: 12px;
        text-align: center;
        background:  $Secondary;
        color: #fff;
    }

    .product-item {
        flex-wrap: wrap;
        background: #F5F5F5;
        img {
            max-width: 100%;
            max-height: 100%;
        }

        p {
            padding: 5px 15px;
            font-size: 14px;
        }
    }

    p {
        margin: 0;
    }

    .item-hover {
        position: absolute;
        right: 0;
	    bottom:-200%;
	    transition: bottom 0.5s ease;
        //display: block;
    }
    .hover-item {
        display: block;
    }

    .search-item {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 10px;

        div {
            margin-left: 12px;
            font-weight: 400;
            font-size: 14px;

            &:last-child {
                padding-right: 35px;
            }
        }

        ul {
            flex: 1;
            display: flex;

            li {
                flex: 1;
                list-style: none;
            }
        }
    }

</style>
