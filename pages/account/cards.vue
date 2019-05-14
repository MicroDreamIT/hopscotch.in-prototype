<template>
    <div>
        <h5>Saved cards</h5>

        <mdb-row>
            <mdb-col md="12">
                <div class="bg-white p-4">
                    <form @submit.prevent="addCard()">
                        <div class="form-group">
                            <label>Card Number</label>
                            <input type="text" v-model="card.number" class="form-control" required :ref="'card_number'">
                        </div>

                        <div class="form-group">
                            <label>Name on card</label>
                            <input type="text" v-model="card.name" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label>Expiry MM/YY</label>
                            <input type="text" v-model="card.expiry" class="form-control" v-mask="['##/##']" required>
                        </div>

                        <div class="form-group">
                            <mdb-btn type="submit">Add card</mdb-btn>
                        </div>
                    </form>
                </div>

                <br>
                <div class="bg-white p-4 w-50" v-for="(crd, index) in cards">
                    <p>{{crd.name}}</p>
                    <p>{{crd.number}}</p>
                    <p>card expired on: {{crd.expiry}}</p>
                    <a href="#" @click.prevent="deleteCard(index)">remove</a>
                    <a href="#" @click.prevent="editCard(index)">edit</a>
                </div>
            </mdb-col>


        </mdb-row>

    </div>
</template>

<script>

    export default {
        name: "cards",

        data() {
            return {
                card: {
                    number: '4242 4242 4242 4242',
                    name: 'john doe',
                    expiry: '12/29'
                },
                cards: []
            }
        },
        methods: {
            addCard() {
                this.cards.push(this.card)
                this.card = {
                    number: '',
                    name: '',
                    expiry: ''
                }
            },
            deleteCard(index) {
                this.cards.splice(index, 1)
            },
            editCard(index){
                this.card = this.cards[index]
                this.deleteCard(index)
                this.$nextTick(()=>this.$refs['card_number'].focus())
            }
        }
    }
</script>

<style scoped>

</style>
