<template>
    <div>
        <slide-section></slide-section>
        <br>
        <br>
        <facility-section></facility-section>
        <product-slide></product-slide>
        <support-content></support-content>

    </div>
</template>
<script>
    import SlideSection from '~/components/front/sliderSection.vue'
    import FacilitySection from '~/components/front/FacilitySection.vue'
    import ProductSlide from '~/components/front/ProductSlide.vue'
    import SupportContent from '~/components/front/SupportContent.vue'
    export default {
        name: "home2",
        components:{
            SlideSection,
            ProductSlide,
            SupportContent,
            FacilitySection
        }
    }
</script>

<style scoped>

</style>