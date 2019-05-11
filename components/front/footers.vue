<template>
    <!-- Footer -->
    <div>
    <mdb-footer class="font-small pt-4 mt-4 site-footer" v-if="getShowStatus">
        <mdb-container class="text-center text-md-left">
            <mdb-row class="text-center text-md-left mt-3 pb-3">
                <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
                    <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.</p>
                </mdb-col>
                <hr class="w-100 clearfix d-md-none" />
                <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                    <p><a href="#!" class="footer-link">MDBootstrap</a></p>
                    <p><a href="#!" class="footer-link">MDWordPress</a></p>
                    <p><a href="#!" class="footer-link">BrandFlow</a></p>
                    <p><a href="#!" class="footer-link">Bootstrap Angular</a></p>
                </mdb-col>
                <hr class="w-100 clearfix d-md-none" />
                <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                    <p><a href="#!" class="footer-link">Your Account</a></p>
                    <p><a href="#!" class="footer-link">Become an Affiliate</a></p>
                    <p><a href="#!" class="footer-link">Shipping Rates</a></p>
                    <p><a href="#!" class="footer-link">Help</a></p>
                </mdb-col>
                <hr class="w-100 clearfix d-md-none" />
                <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
                    <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </mdb-col>
            </mdb-row>
            <hr />
            <mdb-row class="d-flex align-items-center">
                <mdb-col md="8" lg="8">
                    <p class="text-center text-md-left grey-text">&copy; 2018 Copyright: <a href="https://www.company.com">
                        Company </a></p>
                </mdb-col>
                <mdb-col md="4" lg="4" class="ml-lg-0">
                    <div class="text-center text-md-right">
                        <ul class="list-unstyled list-inline">
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
                            <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </mdb-col>
            </mdb-row>
        </mdb-container>
    </mdb-footer>
    </div>
    <!-- Footer -->
</template>
<script>
    export default {
        computed:{
            getShowStatus(){
               
                if(window.innerWidth<1024){
                    if(this.$nuxt.$route.path=='/cart/cart-page'){
                        return false
                    }
                }else{
                    return true
                }
                
            }
        }
    }
</script>


<style scoped>

</style>
