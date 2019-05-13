<template>
    <div>
        <mdb-row class="bg-white p-4 mb-4">
            <mdb-col md="12" v-if="mainnav">
                <h5>Profile Detail</h5>
                <hr>
                <p class="text-center"><span v-if="value===100">Hurrah!</span> Your profile's complete {{value}} %</p>
                <mdb-progress :height="5" :value="value" color="primary"></mdb-progress>
                <br>
                <ul class="lg:list-reset">
                    <li class="pt-4 pb-4">
                        <a href="#" @click="mainnav=false, view_name=true">
                            <div class="flex justify-content-between">
                                <span><mdb-icon class="pr-2" far icon="address-card" />Ipsita Sahoo</span>
                                <span> > </span>
                            </div>
                        </a>
                    </li>
                    <li class="pt-4 pb-4">
                        <a href="#" @click="mainnav=false, view_mobile=true">
                            <div class="flex justify-content-between">
                                <span><mdb-icon class="pr-2"  icon="mobile-alt" />8895092508</span>
                                <span> > </span>
                            </div>
                        </a>
                    </li>
                    <li class="pt-4 pb-4">
                        <a href="#" @click="mainnav=false, view_email=true">
                            <div class="flex justify-content-between">
                                <span><mdb-icon class="pr-2" icon="mail-bulk" /> 2lessons@gmail.com</span>
                                <span> > </span>
                            </div>
                        </a>
                    </li>
                    <li class="pt-4 pb-4">
                        <a href="#" @click="mainnav=false, view_changepassword=true">
                            <div class="flex justify-content-between">
                                <span><mdb-icon class="pr-2" icon="unlock" />Change Password</span>
                                <span> > </span>
                            </div>
                        </a>
                    </li>

                </ul>

            </mdb-col>

            <mdb-col md="12" v-if="mainnav===false">
                <a href="#" @click="toggleNav"><mdb-icon icon="arrow-left" /> back</a>
                <hr>
                <div v-if="view_name">
                    <h5>Name</h5>
                    <mdb-input size="sm" class="mb-3" placeholder="Ipsita Sahoo">
                        <span class="input-group-text" slot="prepend">Full name</span>
                        <mdb-btn  size="sm">submit</mdb-btn>
                    </mdb-input>
                </div>
                <div v-if="view_mobile">
                    <p>
                        Enter your new number below. This will be your account identity, from now
                    </p>
                    <mdb-input size="sm" class="mb-3" placeholder="8895092508">
                        <span class="input-group-text" slot="prepend">Mobile Number</span>
                        <mdb-btn  size="sm">Send and Verify</mdb-btn>
                    </mdb-input>
                </div>
                <div v-if="view_email">
                    <p>
                        All updates and alerts will be sent to this email
                    </p>
                    <mdb-input size="sm" class="mb-3" placeholder="2lessons@gmail.com">
                        <span class="input-group-text" slot="prepend">Email Address</span>
                        <mdb-btn  size="sm">Send and Verify</mdb-btn>
                    </mdb-input>
                </div>
                <div v-if="view_changepassword">
                    <p>
                        Minimum 6 characters
                    </p>
                    <mdb-input size="sm" class="mb-3" placeholder="New Password">
                        <span class="input-group-text" slot="prepend">New Password</span>
                        <mdb-btn  size="sm">Save</mdb-btn>
                    </mdb-input>
                </div>
            </mdb-col>

        </mdb-row>
    </div>
</template>

<script>
    export default {
        name: "profile",
        data(){
            return {
                value:10,
                mainnav:true,
                view_name:false,
                view_mobile:false,
                view_email:false,
                view_changepassword:false
            }
        },
        methods:{
            toggleNav(){
                this.mainnav=true
                    this.view_name=false
                    this.view_mobile=false
                    this.view_email=false
                    this.view_changepassword=false
            }
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
    }
</style>