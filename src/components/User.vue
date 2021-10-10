<template>
    <v-app>
        <div class="container" style="text-align: center">
        <v-row justify="center">
        <div class="col-md-12">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Davetli Ekle
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="text-h5">Davetli Ekle</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-row>
                    
                    <v-col cols="12">
                        <v-text-field
                        label="First Name"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                        label="Last Name"
                        required
                        ></v-text-field>
                    </v-col>
                    
                    
                    </v-row>
                </v-container>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Kapat
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="save()"
                >
                    Kaydet
                </v-btn>
                </v-card-actions>
            </v-card>
            
            </v-dialog>
            </div>
        </v-row>
        </div>
        <ul>
            <li v-for="data in guests" :key="data.id">{{data}}</li>
        </ul>
        </v-app>
</template>
<script>
const axios = require('axios');
var guests = [];
export default ({
    data(){
        return{
            id: this.$route.params.id,
            dialog: false,
            guests:[]
        }
    },
     mounted: function(){
         guests = this.guests;
        this.$nextTick(function(){
            axios.get('http://localhost:3000/user?id='+this.id)
          .then(function (response) {
              
              guests.push(response.data[0].guests);
              console.log(guests);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });

        })
    },

    methods:{
        save(){
            this.dialog = false;
            
        }
    }

})
</script>
