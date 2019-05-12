import Vue from 'vue'
import {VclFacebook, VclInstagram, VueContentLoading } from 'vue-content-loading'
import VueTheMask from 'vue-the-mask'


Vue.use(VueTheMask)

const components = {
    VclFacebook,
    VclInstagram
}

Object.entries(components).forEach(([name, component])=>{
    Vue.component(name, component)
})