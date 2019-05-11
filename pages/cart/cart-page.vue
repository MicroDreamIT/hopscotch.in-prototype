<template>
    <div style="background: #fff">
        <div class="container">
           <div class="row">
             <div class="col-lg-8 lg-offset-2 mx-auto md-offset-0 xs-offset-0">
                 <div class="row">
                     <div class="col-lg-8 ">
                         <br>
                         <div class="cart-header">
                             <span class="title">Cart</span>
                             <span class="circle"> </span>
                             <span class="count">{{cartItem.length}} items</span>
                             <a  class="ow-right" @click.prevent="pinCodePopup=!pinCodePopup">Enter pincode for delivery</a>
                             <div class="pinCode" v-if="pinCodePopup">
                                 <template>
                                     <span class="close-pin" @click="pinCodePopup=false">x</span>
                                     <pre>Enter a pincode</pre>
                                     <mdb-input box label="Promo Code"  />
                                     <mdb-btn color="pink" class="" block > check</mdb-btn>
                                 </template>
                             </div>
                         </div>
                         <hr>
                         <div class="cart-body">
                             <template v-for="(item,index) in cartItem">
                                 <div class="inner">
                                     <div>
                                         <img :src="item.image" class="img-fluid d-block">
                                         <select class="browser-default custom-select" v-model="item.quantity">
                                             <option value="1">Qty 1</option>
                                             <option value="2">Qty 2</option>
                                             <option value="3">Qty 3</option>
                                         </select>
                    
                                     </div>
                                     <div>
                                         <a href="">{{item.title}}</a> <span class="ow-right media-adjust"> <b>Arrives 10 May</b></span>
                                         <p>by {{item.created_by}}</p>
                                         <p class="ow-opacity-6">Size: {{item.size}}</p>
                                         <p>₹ {{(parseFloat(item.orginal_price)*parseInt(item.quantity))-((parseInt(item.quantity)*
                                             parseFloat(item.orginal_price))*parseFloat(item.discount))/100}}
                                             <strike>₹ {{parseInt(item.quantity)*parseFloat(item.orginal_price)}}</strike>
                                             <span class="text-success">{{item.discount}}% off</span>
                            
                                             <a href="" class="ow-right media-adjust" @click.prevent="deleteItem(index)">
                                                 <mdb-icon far icon="trash-alt" class="icon-bg" />
                                             </a>
                                         </p>
                    
                                     </div>
                                 </div>
                                 <hr>
                             </template>
                         </div>
                         <div class="cart-bottom mt-lg-5">
                             <div>
                                 <mdb-icon icon="shipping-fast" class="f25 d-flex justify-content-center flex-column pb-4 pt-4 fas fa-shipping-fast"/>
                                 <h6>Free Shipping*</h6>
                                 <span> On orders of ₹500 and above.Details</span>
                             </div>
                             <div>
                                 <mdb-icon icon="reply-all" class="f25 d-flex justify-content-center flex-column pb-4 pt-4 fas fa-shipping-fast"/>
                                 <h6>Easy returns</h6>
                                 <span>Send items back for free within 15 days</span>
                             </div>
                             <div>
                                 <mdb-icon icon="shield-alt" class="f25 d-flex justify-content-center flex-column pb-4 pt-4 fas fa-shipping-fast"/>
                                 <h6>Secure shopping</h6>
                                 <span>Your payment details are fully encrypted</span>
                             </div>
                         </div>
                     </div>
                     <div class="col-lg-4">
                       <div class="promo">
                           <br>
                           <badger-accordion class="filter-item">
                               <badger-accordion-item>
                                   <template slot="header">Get a Promo Code</template>
                                   <template slot="content">
                                       <template>
                                         <mdb-input box label="Promo Code" v-model="promoCode" />
                                        <button class="apply-btn" :disabled="!promoCode.length">Apply</button>
                                       </template>
                                   </template>
                               </badger-accordion-item>
                           </badger-accordion>
                       </div>
                       
                         <div class="price_summary">
                             <h5> <b>Price Summary</b></h5>
                             <span class="includes">Includes GST and all government taxes</span>
                             <div class="payment_term">
                                 <p>Total item Price <span class="ow-right">$ {{totalItemPrice[0]}}</span></p>
                                 <p>Item Discount <span class="ow-right">$ {{totalItemPrice[1]}}</span></p>
                                 <p>Shipping fee <span class="ow-right">Free</span></p>
                                 <div class="total"> Total <span class="ow-right">$ {{totalItemPrice[0]-totalItemPrice[1]}}</span></div>
                             </div>
                             <div class="proceed-button">
                                 <nuxt-link to='/checkout/checkout-page'>
                                     <mdb-btn color="pink" class="mt-lg-5 " block >Proceed to checkout</mdb-btn>
                                     <!--@click="proceedItem"-->
                                 </nuxt-link>
                             </div>
                           
                         </div>
                     </div>
                 </div>
             </div>
           </div>
        </div>
        <!--<div class="bottom-cart">-->
            <!--&lt;!&ndash;<div>&ndash;&gt;-->
                <!--&lt;!&ndash;<a href="#total-cart">&ndash;&gt;-->
                    <!--&lt;!&ndash;<b>Total 985 <mdb-icon  icon="caret-down" /> </b><br>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>View price summery</span>&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div>-->
                <!--&lt;!&ndash;<mdb-btn color="pink" class="mt-lg-5" block @click="proceedItem">Proceed to checkout</mdb-btn>&ndash;&gt;-->
            <!--</div>-->
        <!--</div> -->
    </div>
</template>

<script>
  
    export default{
        data(){

            return{
                promoCode:'',
                pinCodePopup:false,
                cartItem:[
                    {image:'/_nuxt/static/images/sim-1.jpg',
                        title:'Navy Fish Print Half Sleeves T-Shirt A',
                        size:'6-12 months',quantity:1,orginal_price:2500,
                        discount:10,created_by:'TGX',date:'2019-10-05'},
                    {image:'/_nuxt/static/images/sim-1.jpg',
                        title:'Navy Fish Print Half Sleeves T-Shirt A',
                        size:'6-12 months',quantity:3,orginal_price:1500,
                        discount:20,created_by:'GFE', date:'2019-10-05'},
                    {image:'/_nuxt/static/images/sim-1.jpg',
                        title:'Navy Fish Print Half Sleeves T-Shirt A',
                        size:'6-12 months',quantity:2,orginal_price:1800,
                        discount:10, created_by:'NEO Rin',date:'2019-10-05'},
                ]
            }
        
        },
        computed:{
            totalItemPrice(){
                let total=0
                let discount =0
               this.cartItem.forEach(data=>{
                   let discountAmount =((parseInt(data.quantity)*parseFloat(data.orginal_price))*
                       parseFloat(data.discount))/100
                   total += (parseFloat(data.orginal_price)*parseInt(data.quantity))
                   discount+=discountAmount
               })

                return [total,discount]
            },
        },
        methods:{
            deleteItem(index){
                if(confirm('Are you sure?')){
                    this.cartItem.splice(index,1)
                }

            },
            proceedItem(){
                alert('I am ready to proceed with amount $ ' + (this.totalItemPrice[0]-this.totalItemPrice[1]))
            }
        },
      
    }
</script>
<style lang="scss" scoped="">
    
    
    
    .price_summary{
        @media(max-width: 768px){
            padding-bottom:200px;
        }
    }
    .checkout-head{
        box-shadow: -1px -5px 11px #00000045;
        position: absolute;
        top: 0;
        background: aliceblue;
        left: 0;
        right: 0;
        padding: 15px;
        color: #000;
        span{
            &:first-child{
                font-size:25px;
                color:#3c3c3c;
            }
            &:not(:first-child){
                color:#797979;
                font-size: 13px;
            }
        }
    }
    .total-cart{
        display: none;
        padding: 53px;
        position: fixed;
        bottom: -100%;
        left: 0;
        right: 0;
        z-index: 112;
        background: #fff;
       &:target{
           display: block;
           bottom: 0;
           top: 0;
           transition: bottom 0.6s ease;
           .price_summary{
               display: block!important;
           }
       }
    }
    .media-adjust{
        @media(max-width: 425px){
            width: 100%;
        }
    }
    .proceed-button{
       @media(max-width: 768px){
           box-shadow: 0 -6px 9px 0 rgba(0, 0, 0, 0.03);
           display: block;
           padding: 20px;
           background-color: #fff;
           position: fixed;
           bottom: 0;
           left: 0;
           right: 0;
           z-index: 12;
           justify-content: space-around;
           flex-wrap: wrap;
       }
    }

 .icon-bg{
     padding: 10px;
     background: #EDEEF1;
     border-radius: 3px;
 }
    .total{
        padding:9px 0 ;
        border-top: 1px dashed lightgrey;
        font-weight: bold;
    }
    
    .includes{
        font-size: 12px;
        color: #9a9a9a;
    }
    .payment_term{
        margin-top:20px;
        p{
            line-height: 10px;
            font-size: 13px;
            color: #232222;
        }
    }

    .cart-bottom{
        display: flex;
        div{
            color: rgba(0,0,0,.56);
            background-color: #F9FAFB;
            padding: 20px;
            margin-right: 15px;
            @media (max-width: 425px) {
                margin-right: 0px;
                margin-bottom: 15px;

            }
            &:last-child{
                margin-right: 0;
            }
            h6{
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 0;
            }
            span{
                font-size: 12px;
                line-height: 16px;
                letter-spacing: .4px;
            }
        }
        @media (max-width: 425px) {
            flex-direction: column;
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
    .cart-side-item{
        padding:0 60px;
      
        p{
            font-size: 14px;
            opacity: .7;
        }
        button{
            background: #ED54A4!important;
        }
        @media (max-width: 1024px) {

            padding:20px 0px;
        }
    }
    .cart-body{
        .inner{
            display: flex;
            div{
                padding:5px;
                &:first-child{
                    flex:1;
                }
                &:last-child{
                    flex:4;
                    //min-width: 230px;
                    padding: 0 11px;
                }
            }
        }
        img{
             min-width: 88px;
             margin-bottom: 13px;
        }
        select{
            font-size: 10px;
        }

        a{
            color: rgba(49, 49, 49, 0.71);
            font-weight: 300;
           @media(max-width: 425px){
               font-size: 17px;
           }
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .cart-header{
        position:relative;
        @media(max-width: 768px){
            box-shadow: 1px 1px 14px #00000014;
            position: fixed;
            top: -2px;
            background: #fff;
            right: -2px;
            left: -2px;
            padding: 12px 17px;
            z-index: 10;
        }
        a{
            margin-top: 13px;
            font-size: 13px;
            color: #737373;
        }
        pre{
            margin-bottom: 0;
            color: grey;
        }
        
        .ow-dropdown{
            position: relative;
            span{
                font-size: 14px!important;
            }
            button{
                max-width: 300px;
                box-shadow: none;
                text-transform: none;

            }
            .dropdown-menu{
                position: absolute;
                top: -15px;
                right: 0;
            }

        }
        .title{
            opacity: .8;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.25;
            color: #000;
            display: inline-block;
        }
        .count{
            opacity: .36;
            font-size: 20px;
            font-weight: 400;
            line-height: 1.2;
            color: #000;
            display: inline-block;
        }
        .circle{
            width: 4px;
            height: 4px;
            opacity: .12;
            background-color: #000;
            top: -4px;
            display: inline-block;
            position: relative;
            margin: 0 12px;
            border-radius: 4px;
        }
    }
    @media (max-width: 768px) {
        .cart-details{
            .row{
                display: inline;
            }
        }
        .col-md-5{
            max-width: 100%;
        }
        .col-md-3{
            max-width: 100%;
        }
    
    }
    @media (max-width: 1024px) {

        .col-md-10,.col-md-2{
         padding-left: 0px!important;
        }

    }

</style>
