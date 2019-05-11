<template>
	<div class="sidebar bg-white">
		<div class="d-flex justify-content-between p-3 border mt-4">
			<span class="filter-text">Filters</span>
			<span class="clear-filter">Clear All</span>
		</div>
		
		<badger-accordion class="filter-item">
			<badger-accordion-item>
				<template slot="header">Shop For</template>
				<template slot="content">
					<mdb-list-group>
						<div class="custom-control custom-checkbox">
							<input type="checkbox"
								   class="custom-control-input"
								   name="sex"
								   value="1"
								   id="boys"
							>
							<label class="custom-control-label"
								   for="boys"
							>
								Boys
							</label>
						</div>
						<div class="custom-control custom-checkbox">
							<input type="checkbox"
								   class="custom-control-input"
								   name="sex"
								   value="1"
								   id="girls"
							/>
							<label class="custom-control-label"
								   for="girls"
							>
								Girls
							</label>
						</div>
					</mdb-list-group>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Age</template>
				<template slot="content">
					<div class="custom-control custom-checkbox"
						 v-for="(age,index) in ages"
						 :key="index"
					>
						<input type="checkbox"
							   v-model="filterItems"
							   :value="age"
							   class="custom-control-input"
						       :id="'ages'+index"
						>
						<label class="custom-control-label"
							   :for="'ages'+index"
						>
							{{age}}
						</label>
					</div>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Category</template>
				<template slot="content">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox"
							   class="custom-control-input selectColor"
							   id="cat1"
						>
                        <label class="custom-control-label colorLabel" for="cat1">Cat 1</label>
                    </div>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Delivery Time</template>
				<template slot="content">
					<mdb-list-group>
						<div class="custom-control custom-radio">
							<input type="radio"
								   class="custom-control-input"
								   name="deleveryTime"
								   id="weekOne"
							/>
							<label class="custom-control-label" for="weekOne">In a Week 1</label>
						</div>
						<div class="custom-control custom-radio">
							<input type="radio"
								   class="custom-control-input"
								   name="deleveryTime"
								   id="weekTwo"
							/>
							<label class="custom-control-label" for="weekTwo">In a Week 2</label>
						</div>
					</mdb-list-group>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Colour</template>
				<template slot="content" >
						<div class="color-section">

							<label v-for="(item,index) in colors"
								 :style="{ background: item.color }"
								 class="color-box"
                                 :id="'colorCheck'+index"
                                 @click="doCheck(index)"
							>
                                <div v-if="colors[index].value" class="checkMark">&check;</div>
                                <input type="checkbox"  :id="'colorCheck'+index" />



                            </label>
						</div>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Price</template>
				<template slot="content">
					<div class="custom-control custom-checkbox"
						 v-for="(price,index) in prices"
						 :key="index"
					>
						<input type="checkbox"
							   v-model="filterItems"
							   :value="price"
							   class="custom-control-input"
						       :id="'price'+index"
						/>
						<label class="custom-control-label"
							   :for="'price'+index"
						>
							{{price}}
						</label>
					</div>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Discount</template>
				<template slot="content">
					<mdb-list-group>
						<div class="custom-control custom-radio"
							 v-for="(discount,index) in discounts"
							 :key="index"
						>
							<input type="radio"
								   class="custom-control-input"
								   name="discount"
								   :id="'disc'+index"
							/>
							<label class="custom-control-label"
								   :for="'disc'+index">{{discount}}</label>
						</div>
					</mdb-list-group>
				</template>
			</badger-accordion-item>

			<badger-accordion-item>
				<template slot="header">Brands</template>
				<template slot="content">
					<div class="custom-control custom-checkbox"
						 v-for="(age,index) in ages"
						 :key="index"
					>
						<input type="checkbox"
							   v-model="filterItems"
							   :value="age"
							   class="custom-control-input"
						       :id="'ages'+index"
						/>
						<label class="custom-control-label"
							   :for="'ages'+index">{{age}}</label>
					</div>
				</template>
			</badger-accordion-item>
		</badger-accordion>
	
	
	</div>
</template>

<script>
    export default {
        name: "sidebar",
        props: ['ages'],
        data() {
            return {
            	colorSelected:[],
                prices: [
                    'Below 200',
                    '200-300',
                    '300-400',
                    '400-600',
                    'Above 600',
                ],
                discounts: [
                    '10% and above',
                    '20% and above',
                    '30% and above',
                    '40% and above',
                    '50% and above',
                ],
	            Brands:[
	            'AA','BB','CC','DD','EE','FF','GG'
	            ],
				colors:[
                    {color:'red',value:false},
                    {color:'yellow',value:false},
                    {color:'green',value:false},
                    {color:'blue',value:false},
                    {color:'pink',value:false},
                    {color:'cyan',value:false},
                    {color:'gray',value:false},
                    {color:'white',value:false},
				],
                filterItems: [],
                colorCount:0,
            }
        },
        methods:{
            doCheck(index){

                if(this.colorCount==0){
                    this.colors[index].value=!this.colors[index].value
                    this.colorCount++

                }else{
                    this.colorCount=0
                }
                console.log(this.colors[index].value)


            }
        },
        watch: {
            filterItems(val) {
                // emit value from here

            },
	       
        } ,
    }
</script>

<style lang="scss" scoped>
	
	.component-badger-accordion.badger-accordion--initialized {
		padding: 6px 13px;
		display: block;
		border: 1px solid #dee2e6;
		margin-top: -1px;
		margin-bottom: 0 !important;
		
	}
    .filter-text{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: #707070;
    }
    .clear-filter{
        color: #b0b0b0 !important;
    }
    .color-section{
        input[type="checkbox"] {
            opacity: 0;
        }
    }
    
    .checkMark{
        display: flex;
        justify-content: center;
        text-align: center;
        height: 25px;
	    color: #3e3e3e;
	    font-weight: 600;
    }



</style>
