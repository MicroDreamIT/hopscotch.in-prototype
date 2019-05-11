import Vue from 'vue'

import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

const components = {
    BadgerAccordion,
    BadgerAccordionItem
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})