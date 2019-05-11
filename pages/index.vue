<template>

    <mdb-container>

      <mdb-row class="mt-5">
       <mdb-col md="4">
           <nuxt-link to="/products">
          <img src="https://static.hopscotch.in/fstatic/product/201904/ad2797ef-f844-430f-93d1-ba494b48630a_full.jpg?version=1556644603090"
               alt="" class="rounded-lg hv-slide-top lg:hover:shadow">

          <img src="https://static.hopscotch.in/fstatic/product/201904/f25413dd-105d-4b15-997e-f0392e915abf_full.jpg?version=1555917901409"
               alt="" class="rounded-lg hv-slide-top lg:hover:shadow mt-lg-5">

          <div class="bg-white rounded-lg group hv-slide-top lg:hover:shadow mt-lg-5">
            <h5 class="pt-4 pl-4">Deals of the Day</h5>
            <img src="https://static.hopscotch.in/fstatic/product/201904/ba28cd9f-13d1-4fd0-8c23-667b14617747_full.gif?version=1556388290261"
                 alt="">
            <img src="https://static.hopscotch.in/fstatic/product/201904/d51dfdf5-b338-4539-84a8-d0d008d99aa0_full.gif?version=1556439947083"
                 alt="">
          </div>
           </nuxt-link>


        </mdb-col>
        <mdb-col md="4">
            <nuxt-link to="/products">
          <div class="group hv-slide-top lg:hover:shadow">
            <img src="https://static.hopscotch.in/fstatic/product/201904/d2984b4f-5a7b-4504-a6a0-e5a76111e4f4_full.jpg?version=1555478694854"
                 class="rounded-lg">
            <img src="https://static.hopscotch.in/fstatic/product/201904/a2032859-47cd-4563-b17c-621156f77a74_full.jpg?version=1555478701743"
                 class="rounded-lg">
            <img src="https://static.hopscotch.in/fstatic/product/201904/34a7ca88-64e7-4413-afde-dd3876a104ae_full.jpg?version=1555479220515"
                 class="rounded-lg">
          </div>
          <div class="bg-hop-grey-2 rounded-lg group hv-slide-top lg:hover:shadow mt-lg-5">
            <h5 class="pt-4 pl-4">The Budget Store</h5>
            <img src="https://static.hopscotch.in/fstatic/product/201904/cc7b4165-2a9c-436f-91c5-9437b711557e_full.jpg?version=1556618055537"
                 alt="">
            <img src="https://static.hopscotch.in/fstatic/product/201904/e34dd266-6f25-42da-8aaa-2bb4120e56bb_full.jpg?version=1556618083856"
                 alt="">
          </div>
            </nuxt-link>

        </mdb-col>
        <mdb-col md="4">
            <nuxt-link to="/products">
          <div class="deal-day rounded-lg group hv-slide-top lg:hover:shadow">
            <h5 class="pt-4 pl-4">Deals of the Day</h5>
              <img src="https://static.hopscotch.in/fstatic/product/201905/90c6329d-239a-4d1e-9bcd-a4599fa473ae_full.jpg?version=1556771272968"
                   alt="">
            <img src="https://static.hopscotch.in/fstatic/product/201905/90c6329d-239a-4d1e-9bcd-a4599fa473ae_full.jpg?version=1556771272968"
                   alt="">
            <img src="https://static.hopscotch.in/fstatic/product/201905/90c6329d-239a-4d1e-9bcd-a4599fa473ae_full.jpg?version=1556771272968"
                   alt="">
          </div>
          
          <div class="rounded-lg group hv-slide-top lg:hover:shadow mt-lg-5">
            <img src="https://static.hopscotch.in/fstatic/product/201905/4283aa61-756e-4d9b-ac52-a555568fa1cf_full.jpg?version=1556772632733" class="rounded-t-lg">
            <div class="flex">
                <img src="https://static.hopscotch.in/fstatic/product/201905/588d69d0-a703-4469-bba9-ad95a0f6d718_full.jpg?version=1556772664971" class="img-fluid" style="width: 33.3333%; height: 33%">
                <img src="https://static.hopscotch.in/fstatic/product/201905/f7017765-7c03-4c98-a892-a95d31cab551_full.jpg?version=1556772668191" class="img-fluid" style="width: 33.3333%; height: 33%">
                <img src="https://static.hopscotch.in/fstatic/product/201905/6f82e8dc-76f6-4dae-8ae7-1aabb885e3e3_full.jpg?version=1556772671154" class="img-fluid" style="width: 33.33333%; height: 33%">
            </div>
            <div class="flex">
              <img src="https://static.hopscotch.in/fstatic/product/201905/f1d258a0-b6c0-43b3-a311-be9182d39d2e_full.jpg?version=1556772679104" class="img-fluid" style="width: 33.3333%; height: 33%">
              <img src="https://static.hopscotch.in/fstatic/product/201905/28b601bf-520a-422a-9f5a-4bc1103529f4_full.jpg?version=1556772681791" class="img-fluid" style="width: 33.3333%; height: 33%">
              <img src="https://static.hopscotch.in/fstatic/product/201905/a29b05e5-3919-4b8d-ba05-46c412316bd1_full.jpg?version=1556772687994" class="img-fluid" style="width: 33.33333%; height: 33%">
            </div>
          </div>
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


