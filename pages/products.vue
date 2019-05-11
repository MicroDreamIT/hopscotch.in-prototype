<template>
    <div class="product-list">
        <div class="filter-bar">
            <div class="items" @click="filterArea =! filterArea">
                <mdb-icon icon="filter"/>
                filter
            </div>
            <div class="items">1045 items</div>
            <div class="items" @click="sortArea =! sortArea">
                <mdb-icon icon="sort-alpha-up"/>
                sort
            </div>
        </div>
	    <!--sort area-->
	    <div v-if="sortArea" class="sortArea">
			    <div class="items">
				    <div> </div>
				    <div>SORT</div>
				    <div @click="sortArea = false"> X </div>
			    </div>
		    <div class="items">
			    <mdb-list-group>
				    <mdb-list-group-item> <b>Popular</b></mdb-list-group-item>
				    <mdb-list-group-item>Lowest Price</mdb-list-group-item>
				    <mdb-list-group-item>Heighest Price</mdb-list-group-item>
			    </mdb-list-group>
		    </div>
	    </div>
	    <!--filter Area-->
        <div v-if="filterArea" class="filterArea">
            <div class="items">
                <div @click="filterArea = false"> X </div>
                <div>Filter</div>
                <div>Clear all</div>
            </div>
            <div class="items">
                <div class="tab">
                    <button class="tablinks" @click="openFilter('shop')" id="defaultOpen">Shop for</button>
                    <button class="tablinks" @click="openFilter('age')">Age</button>
                    <button class="tablinks" @click="openFilter('category')">Category</button>
                    <button class="tablinks" @click="openFilter('delivery')">Delivery</button>
                    <button class="tablinks" @click="openFilter('colour')">Colour</button>
                    <button class="tablinks" @click="openFilter('price')">Price</button>
                    <button class="tablinks" @click="openFilter('discount')">Discount</button>
                </div>
                <div id="shop" class="tabcontent">
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
                </div>
                <div id="age" class="tabcontent">
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
                </div>
	            <div id="category" class="tabcontent">
		            <div class="custom-control custom-checkbox">
			            <input type="checkbox"
			                   class="custom-control-input selectColor"
			                   id="cat1"
			            >
			            <label class="custom-control-label colorLabel" for="cat1">Cat 1</label>
		            </div>
	            </div>
                <div id="delivery" class="tabcontent">
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
                </div>
                <div id="colour" class="tabcontent">
	                <div class="color-section">
		                <div v-for="(color,index) in colors"
		                     :style="{ background: color }"
		                     class="color-box"
		                >
			
			                <!--<mdb-input type="checkbox" :id="'colorBox'+index"/>-->
		                </div>
	                </div>
                </div>
                <div id="price" class="tabcontent">
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
                </div>
                <div id="discount" class="tabcontent">
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
                </div>
            </div>
            <div class="items">
                <mdb-btn block color="pink">Apply</mdb-btn>
            </div>
        </div>
        <mdb-container>
            <mdb-row style="margin:0;">
                <mdb-col class="col-lg-2 col-md-12 col-xs-12 on-sm-device">
                    <sidebar :ages="ages" class="on-sm-device"></sidebar>
                </mdb-col>
                <mdb-col class="col-lg-10 col-md-12 col-xs-12 contentArea ">
                    <mdb-col class="col-md-12 ">
                        <div class="d-flex mt-5 flex-wrap search-item-top on-sm-device">
                            <span>Showing <strong>78</strong> Results for  </span>
                            <div> 0-3 Months <span>X</span></div>
                            <div> 0-3 Months <span>X</span></div>
                            <div> 0-3 Months <span>X</span></div>

                        </div>
                        <div class="product-top-slide">
                            <carousel
                                    :navText="['','']"
                                    class="sort-item"
                                    :nav="true"
                                    :dots="false"
                                    :autoWidth="true"
                            >
                                <mdb-btn
                                        color="pink"
                                        size="sm"
                                        class="cust-btn"
                                        rounded
                                        @click="triggerFilter(name)"
                                        v-for="name in ages"
                                        :key="name"
                                >
                                    {{name}}
                                </mdb-btn>
                            </carousel>
                        </div>
                        <product-list></product-list>
                    </mdb-col>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    import Sidebar from '~/components/front/product/sidebar.vue'
    import ProductList from '~/components/front/product/productList.vue'
    import carousel from 'vue-owl-carousel'
    
    
    export default {
        name: "products",
        components:{
            Sidebar,ProductList,carousel
        },
        data(){
            return {
                filterArea:false,
                sortArea:false,
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
                    'red','yellow','green','blue','pink','cyan','black','gray','white'
                ],
                filterItems: [],
            }
        },
        created() {
            if(!this.$store.state.products.length){
                this.$store.dispatch('getProducts')
            }
        },
        computed: {
            ages() {
                return this.$store.getters.sizesName
            }
        },
        updated(){
            if(document.getElementById("defaultOpen")){
                document.getElementById("defaultOpen").click();
            }

        },
        methods:{
            triggerFilter(name){
                alert(name)
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


<style scoped lang="scss">
    .top-filter {
        border: none !important;
    }


    .tab {
        float: left;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        width: 30%;
        height: 300px;
    }
    .tab button {
        display: block;
        background-color: inherit;
        color: black;
        padding: 22px 16px;
        width: 100%;
        border: none;
        outline: none;
        text-align: left;
        cursor: pointer;
        transition: 0.3s;
        font-size: 17px;
    }

    .tab button:hover {
        background-color: #ddd;
    }
    .tab button.active {
        background-color: #ccc;
    }
    .tabcontent {
        float: left;
        padding: 0px 12px;
        border: 1px solid #ccc;
        width: 70%;
        border-left: none;
        height: 300px;
    }

</style>
