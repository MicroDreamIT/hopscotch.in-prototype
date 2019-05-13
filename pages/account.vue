<template>
    <div>
        <mdb-container>
            <br>
            <mdb-row>
                <mdb-col md="2"></mdb-col>
                <mdb-col md="2">
                    <div class="bg-white p-2 mt-4 .flex .flex-col">
                        <img class="block h-16 sm:h-24 rounded-full mx-auto mt-4"
                             src="https://avatars1.githubusercontent.com/u/8063392?s=460&v=4" alt="">

                        <div class="text-center">
                            <span>Hello Ipsita</span><br>
                            <span class="small text-grey">testing@testing.com</span>
                        </div>

                        <hr>

                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <nuxt-link class="nav-link primary-theme-color hv" href="#" to="order">
                                    <mdb-icon icon="shopping-bag"  class="pr-3"/>Orders
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link primary-theme-color hv" to="profile">
                                    <mdb-icon far icon="user-circle"  class="pr-3"/>Profile details
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link primary-theme-color hv" to="moments">
                                    <mdb-icon fab icon="gratipay"  class="pr-3"/>My Moments
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link primary-theme-color hv" href="#" to="cards">
                                    <mdb-icon fab icon="cc-mastercard"  class="pr-3"/>Saved Cards
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link primary-theme-color hv" href="#">
                                    <mdb-icon icon="hand-holding-usd"  class="pr-3"/>Credits $7896
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link primary-theme-color hv" href="#">
                                    <mdb-icon icon="sign-out-alt"  class="pr-3"/>Sign Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </mdb-col>
                <mdb-col md="6" class="p-4">
                    <nuxtChild></nuxtChild>
                </mdb-col>
                <mdb-col md="2"></mdb-col>
            </mdb-row>
        </mdb-container>
    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>