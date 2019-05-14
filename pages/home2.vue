<template>
    <div>
        <slide-section></slide-section>
        <facility-section></facility-section>
        <hot-categories></hot-categories>
        <product-slide></product-slide>
        <support-content></support-content>

    </div>
</template>
<script>
    import SlideSection from '~/components/front/sliderSection.vue'
    import FacilitySection from '~/components/front/FacilitySection.vue'
    import ProductSlide from '~/components/front/ProductSlide.vue'
    import SupportContent from '~/components/front/SupportContent.vue'
    import hotCategories from '~/components/front/hotCategories.vue'
    export default {
        name: "home2",
        components:{
            SlideSection,
            ProductSlide,
            SupportContent,
            FacilitySection,
            hotCategories,
        }
    }
</script>

<style scoped>

</style>
