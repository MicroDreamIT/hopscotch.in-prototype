import Vue from 'vue'
Vue.use(require('vue-faker'))
const fakerSize = ['0-3 months', '3-6 months', '6-12 months', '12-15 months', '15-20 months']
const fakerSex = ['male', 'female', 'both']

export const state = () => ({
    products:[],
})
export const actions = {
    /* for ajax request for get product
    from the server. Here I have used
    another arg as null should be object
    contains logic for query
     */
    getProducts({commit}, arg=null){
        /* please start from axios.get()
        below lines are meant to be deleted unit axios.get
        */
        let products = [
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:12,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default: 0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default: 1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default: 0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default: 0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            size:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            size:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            size:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            },
            {
                id:Vue.faker().random.uuid(),
                name:Vue.faker().commerce.productName(),
                description:Vue.faker().lorem.paragraph(),
                price: Vue.faker().commerce.price(),
                  discount:Vue.faker().random.number({min:5, max:10}),
                shop_for:Vue.faker().random.arrayElement(fakerSex),
                category_id: Vue.faker().random.uuid(),
                brand: {
                    id:Vue.faker().random.uuid(),
                    name:Vue.faker().company.companyName()
                },
                color:Vue.faker().commerce.color(),
                images:[
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:0},
                    {id:Vue.faker().random.uuid(), model:'Product', path:Vue.faker().image.fashion(), default:1},
                ],
                attributes:{
                    size:[
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:1
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        },
                        {
                            id:Vue.faker().random.uuid(),
                            name: Vue.faker().random.arrayElement(fakerSize),
                            price:Vue.faker().commerce.price(),
                            quantity:Vue.faker().random.number(),
                            discount:23,
                            default:0
                        }
                    ]
                }
            }
        ]
        commit('productsList', products, arg)
        // axios.get()
    }
}

export const mutations = {
    productsList(state, arr, arg=null){
        state.products = arr
    }
}

export const getters ={
    sizesName: state => {
        let cats = []
        for (let i=0; i<state.products.length;i++){
            if(!_.isEmpty(state.products[i])){
                if(state.products[i]!==undefined){
                    if(!_.isEmpty(state.products[i].attributes)){
                        if(state.products[i].attributes.size.length){
                            for (let j=0; j<state.products[i].attributes.size.length; j++){
                                cats.push(state.products[i].attributes.size[j].name)
                            }
                        }
                    }
                }
            }
        }

        return _.uniq(cats)
    }
}