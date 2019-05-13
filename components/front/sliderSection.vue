<template>
    <mdb-container>

        <carousel :perPage="1" :autoplay="true" :autoplayTimeout="1000">
            <slide>
                <img src="~assets/images/playingbaby.jpg" width="100%">
            </slide>
            <slide>
                <img src="~assets/images/singlebaby.jpg" width="100%">
            </slide>
            <slide>
                <img src="~assets/images/sleepingbaby.jpg" width="100%">
            </slide>
        </carousel>
    </mdb-container>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel'
    export default {
        name: "slider-section",
        components:{
            Carousel, Slide
        }
    }
</script>
