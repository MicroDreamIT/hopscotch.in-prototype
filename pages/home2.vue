<template>
    <div>
        <carousel>
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
        </carousel>
    </div>
</template>
<script>
    import {Carousel, Slide} from 'vue-carousel'
    export default {
        name: "home2",
        components:{
            Carousel, Slide
        }
    }
</script>

<style scoped>

</style>