<template>

    <mdb-container>

      <mdb-row class="mt-5">
       <mdb-col md="4">
           <nuxt-link to="/products">
                  <img src="~assets/images/1.jpg"  alt="" class="rounded-lg hv-slide-top lg:hover:shadow">
                  <img src="~assets/images/2.jpg" alt="" class="rounded-lg hv-slide-top lg:hover:shadow mt-lg-5">
                  <div class="bg-white rounded-lg group hv-slide-top lg:hover:shadow mt-lg-5">
                    <img src="~/assets/images/3.jpg" alt="">
                  </div>
           </nuxt-link>
        </mdb-col>
        <mdb-col md="4">
            <nuxt-link to="/products">
                  <div class="group hv-slide-top lg:hover:shadow">
                    <img src="~/assets/images/5.jpg"  class="rounded-lg">
                    <img src="~/assets/images/6.jpg"
                         class="rounded-lg">
                    <img src="~/assets/images/7.jpg"
                         class="rounded-lg">
                  </div>
                  <div class="bg-hop-grey-2 rounded-lg group hv-slide-top lg:hover:shadow mt-lg-5">
                    <img src="~/assets/images/8.jpg" alt="">
                    <img src="~/assets/images/9.jpg" alt="">
                      <img src="~/assets/images/4.jpg" alt="">
                  </div>
            </nuxt-link>

        </mdb-col>
        <mdb-col md="4">
            <nuxt-link to="/products">
          <div class="deal-day rounded-lg group hv-slide-top lg:hover:shadow">
           
           
              <img src="~/assets/images/10.jpg"
                   alt="">
            <img src="~/assets/images/11.jpg"
                   alt="">
            <img src="~/assets/images/12.jpg"
                   alt="">
          </div>
          
          <!--<div class="rounded-lg group hv-slide-top lg:hover:shadow mt-lg-5">-->
            <!--<div class="flex">-->
                <!--<img src="https://static.hopscotch.in/fstatic/product/201905/588d69d0-a703-4469-bba9-ad95a0f6d718_full.jpg?version=1556772664971" class="img-fluid" style="width: 33.3333%; height: 33%">-->
                <!--<img src="https://static.hopscotch.in/fstatic/product/201905/f7017765-7c03-4c98-a892-a95d31cab551_full.jpg?version=1556772668191" class="img-fluid" style="width: 33.3333%; height: 33%">-->
                <!--<img src="https://static.hopscotch.in/fstatic/product/201905/6f82e8dc-76f6-4dae-8ae7-1aabb885e3e3_full.jpg?version=1556772671154" class="img-fluid" style="width: 33.33333%; height: 33%">-->
            <!--</div>-->
            <!--<div class="flex">-->
              <!--<img src="https://static.hopscotch.in/fstatic/product/201905/f1d258a0-b6c0-43b3-a311-be9182d39d2e_full.jpg?version=1556772679104" class="img-fluid" style="width: 33.3333%; height: 33%">-->
              <!--<img src="https://static.hopscotch.in/fstatic/product/201905/28b601bf-520a-422a-9f5a-4bc1103529f4_full.jpg?version=1556772681791" class="img-fluid" style="width: 33.3333%; height: 33%">-->
              <!--<img src="https://static.hopscotch.in/fstatic/product/201905/a29b05e5-3919-4b8d-ba05-46c412316bd1_full.jpg?version=1556772687994" class="img-fluid" style="width: 33.33333%; height: 33%">-->
            <!--</div>-->
          <!--</div>-->
            </nuxt-link>
          
        </mdb-col>
      </mdb-row>
    </mdb-container>

</template>

<script>
import Logo from '~/components/Logo.vue'
import ProductList from '~/components/front/product/productList.vue'
export default {
  components: {
    Logo,ProductList
  }
}
</script>

<style lang="scss" scoped>
  .hv-slide-top{
    &:hover{
      transform: translateY(-3px);
      transition: transform .2s ease-in;
    }
  }
  .bg-hop-grey-2{
    background:#eff1f5;
  }
  .deal-day{
    background:#ebebeb;
  }
</style>


