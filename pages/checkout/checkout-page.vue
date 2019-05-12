<template>
	<div class="bg-white">
		 <div class="container">
			<div class="row">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<div class="row">
						<div class="col-lg-8">
							<br>
							<h2>Checkout</h2>
							<hr>
							<div class="steps" v-if="stepOne">
								<div class="tab">
									<h5>Mobile</h5>
									<div class="timeline">
										<div class="pointer">
											1
										</div>
									</div>
								</div>
								<div class="tab-content">
									<div class="mobile-number">
										<h5>Enter your mobile number</h5>
										<p>Your shipping and payment details will be <br>
											associated with this number
										</p>
										<template>
											<mdb-input  label="Your mobile number"/>
											<mdb-btn  class="btn-primary" block @click="maintainStep(1)"> CONTINUE</mdb-btn>
										</template>
									</div>
								</div>
							</div>
								<div class="step-mobile" v-if="!stepOne">
								  <div>
									  <div class="checkout-status">
										  <mdb-icon far icon="check-circle" />
									  </div>
									  Mobile
								  </div>
								  <div>9121241215241</div>
								  <div>
									  <button class="change" @click="maintainStep(1,true)">Change</button>
								  </div>
							  </div>
							<div class="steps" v-if="stepTwo">
									<div class="tab">
										<h5>ship to </h5>
										<div class="timeline">
											<div class="pointer">
												2
											</div>
										</div>
									</div>
									<div class="tab-content">
										<div class="address">
											Add an Address
										</div>
										<div class="ship-to">
											<mdb-input  label="Full Name"></mdb-input>
											<mdb-input  label="Pincode"></mdb-input>
											<mdb-input type="textarea" label="Address"></mdb-input>
											<mdb-input  label="Landmark"></mdb-input>
											<div class="city-area">
												<mdb-input  label="City"></mdb-input>
												<mdb-input  label="State"></mdb-input>
											</div>
											<mdb-input  label="Mobile"></mdb-input>
											<mdb-input  label="Email"></mdb-input>
											<span class="link-account">
										This email address will be linked to your account
									</span>
											<mdb-btn  class="btn-primary" block @click="maintainStep(2)"> CONTINUE</mdb-btn>
										</div>
									</div>
							</div>
							<div class="step-shipping"  v-if="!stepTwo">
								<div>
									<div class="checkout-status">
										<mdb-icon far icon="check-circle" />
									</div>
									Ship to
								</div>
								<div>
									Fsd , Dsfsdf <br>
									VADODARA, 333333
								</div>
								<div>
									<button class="change" @click="maintainStep(2,true)">Change</button>
								</div>
							</div>
							
							<div class="steps" v-if="stepThree">
								<div class="tab">
									<h5 class="payBy">Pay By</h5>
									<div class="timeline">
										<div class="pointer">
											3
										</div>
									</div>
									<div class="tab">
										<button class="tablinks" @click="openFilter('shop')" id="defaultOpen">Credit or Debit Cards</button>
										<button class="tablinks" @click="openFilter('age')">Netbankings</button>
										<button class="tablinks" @click="openFilter('category')">Cash (COD)</button>
									</div>
								</div>
								<div class="tab-content">
									<div class="payment-method">
										<div id="shop" class="tabcontent">
										 <h5>Add a card</h5>
											<mdb-input  label="Card number"></mdb-input>
											<div class="expire">
												<mdb-input  label="Expiry MM/YY"></mdb-input>
												<mdb-input  label="CVV"></mdb-input>
											</div>
											<mdb-input  label="Name on card"></mdb-input>
											<mdb-btn  class="btn-primary" block > CONTINUE</mdb-btn>
										</div>
										<div id="age" class="tabcontent">
											<h5>Select a bank</h5><br>
											<div class="banks-payments">
												<div>
													<input type="radio" id="hdfc" class="bank-select" value="hdfv" name="bank">
													<label for="hdfc"class="bank-select-label" >
														<img src="https://hopscotch.in/w/d63eb2906dd9bd9b5aebdaa8def67946.svg" width='35px'>
														HDFC
													</label>
												</div>
												<div>
													<input type="radio" id="sbi" class="bank-select" value="sbi" name="bank" >
													<label for="sbi"class="bank-select-label">
														<img src="https://hopscotch.in/w/c98f325bc043f5bb7893c21f7b49a7cd.svg" width='35px'>
														SBI
													</label>
												</div>
												<div>
													<input type="radio" id="icici" class="bank-select" value="icici" name="bank">
													<label for="icici"class="bank-select-label">
														<img src="https://hopscotch.in/w/901b03477fc7f695dcc71f348598b284.svg" width='35px'>
														ICICI NetBanking
													</label>
												</div>
												<div>
													<input type="radio" id="axis" class="bank-select" value="axis" name="bank">
													<label for="axis"class="bank-select-label">
														<img src="https://hopscotch.in/w/69e2edc0b540bb9d813c8dec8b2da1e9.svg" width='35px'>
														Axis Bank
													</label>
												</div>
												<div>
													<input type="radio" id="kotak" class="bank-select" value="kotak" name="bank">
													<label for="kotak" class="bank-select-label">
														<img src="https://hopscotch.in/w/20c240fd2b2cc165416e12c4b015cdbe.svg" width='25px'>
														Kotak Mahindra Bank
													</label>
												</div>
											
											</div>
											<div>
												<mdb-select search  />
												<mdb-btn color="pink" class="" block > PROCEED TO REVIEW </mdb-btn>
											</div>
										</div>
										<div id="category" class="tabcontent adjust" >
										<div class="cash">
											<h5>Cash on delivery</h5>
											<p>Verify your mobile number <span style="color:black;">+91 9652555455</span> to <br> pay with cash on delivery</p>
											<mdb-btn color="pink" class="" block @click="maintainStep(3)"> SEND OTP </mdb-btn>
										</div>
										</div>
									</div>
								</div>
							</div>
							<div class="step-shipping"  v-if="!stepThree">
								<div>Pay</div>
								<div>
									Fsd , Dsfsdf <br>
									VADODARA, 333333
								</div>
								<div>
									<button class="change" @click="maintainStep(3,true)">Change</button>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="item-summary mt-3">
								<badger-accordion class="filter-item">
									<badger-accordion-item>
										<template slot="header">Item Summary</template>
										<template slot="content">
											<div class="product-items">
												<div>
													<img src="https://static.hopscotch.in/fstatic/product/201805/b490efe5-0e70-4870-a696-831f619d93bf_medium.jpg?version=1526461554276">
												</div>
												<div>Qty : 7 <br> Arrives 10 May  </div>
												<div>₹649</div>
											</div>
											<br>
											<nuxt-link :to="{name:'cart-cart-page'}" class="edit-cart">EDIT CART</nuxt-link>
										</template>
									</badger-accordion-item>
								</badger-accordion>
							</div>
								<div class="price-summary">
									<badger-accordion class="filter-item">
										<badger-accordion-item>
											<template slot="header">Price Summary</template>
											<template slot="content">
												<span class="includes">Includes GST and all government taxes</span>
												<div class="payment_term">
													<p>Total item Price <span class="ow-right">$ {{totalItemPrice[0]}}</span></p>
													<p>Item Discount <span class="ow-right">$ {{totalItemPrice[1]}}</span></p>
													<p>Shipping fee <span class="ow-right">Free</span></p>
												</div>
											</template>
										</badger-accordion-item>
									</badger-accordion>
									<div class="total"> Total <span class="ow-right">$ {{totalItemPrice[0]-totalItemPrice[1]}}</span></div>
									<div class="proceed-button">
										<mdb-btn  class="btn-primary mt-lg-5 " block @click=" ">PAY 5,522</mdb-btn>
										<span class="secure"><mdb-icon  icon="lock" /> Secure checkout</span>
									</div>
								</div>
						</div>
					</div>
				</div>
				<div class="col-lg-2"></div>
			</div>
		 </div>
	</div>
</template>
<script>
    import { mdbSelect } from 'mdbvue';
	export default {
	    data(){
	        return{
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
                ],
		        stepOne:true,
		        stepTwo:false,
		        stepThree:false
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
        updated(){
            if(document.getElementById("defaultOpen")){
                document.getElementById("defaultOpen").click();
            }

        },
		methods:{
            maintainStep(val,change=null){
                val==1? !change?[this.stepTwo=true,this.stepOne=false]:
	                [this.stepOne=true,this.stepTwo=false,this.stepThree=false]:''
                val==2?!change?[this.stepThree=true,this.stepTwo=false]:
	                [this.stepOne=false,this.stepTwo=true,this.stepThree=false]:''
                val==3?!change?'':[this.stepOne=false,this.stepTwo=false,this.stepThree=true]:''
            },
            openFilter(filterName){
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(filterName).style.display = "block";
                event.currentTarget.className += " active";
            }
		}
	}
</script>

