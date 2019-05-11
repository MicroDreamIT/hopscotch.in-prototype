<template>
  <div>
    <headers></headers>
    <div class="flex h-full justify-center mt-xl-5" v-if="placeholder">
      <vcl-facebook
              :width="600"
              :height="600"
      ></vcl-facebook>
    </div>

      <div v-if="!placeholder">
          <nuxt/>
      </div>

    <footers></footers>
  </div>
</template>
<script>
  import Headers from '~/components/front/headers.vue'
  import Footers from '~/components/front/footers.vue'
  export default{
      components:{Headers, Footers},
      data(){
        return{
            placeholder:true
        }
      },
      created(){
//          setTimeout(function () {
//                  console.log(this.placeholder)
//          },2000)
          this.$nextTick().then(() => {
              this.placeholder=false

          });


      },




  }
</script>

<style lang="scss">
    @import "./scss/app.scss";
    @font-face { font-family: averta; src: url(../assets/fonts/AvertaDemoRegular.otf); }
</style>
