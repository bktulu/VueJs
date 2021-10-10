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
                        v-model="tempGuest.firstName"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                         v-model="tempGuest.lastName"
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
        
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    İsim
                </th>
                <th class="text-left">
                    Soy isim
                </th>
                <th class="text-left">
                    Düzenle/Sil
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="data in guests"
                :key="data.id"
                >
                <td>{{ data.firstName }}</td>
                <td>{{ data.lastName }}</td>
                <td><v-icon
        small
        class="mr-2"
        @click="editItem(data.id,data.firstName,data.lastName)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon></td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
        

        </v-app>
</template>
<script>
const axios = require('axios');

export default ({
    data(){
        return{
            tempGuest:{
                firstName:"",
                lastName:"",
            },
            userId: this.$route.params.id, //
            dialog: false,
            guests:[                    
             ]
        }
    },
     mounted: function(){
         var self=this
        this.$nextTick(function(){
            axios.get('http://localhost:3000/guests?userId='+this.userId)
          .then(function (response) {
                 console.log(response.data);
                 response.data.forEach(guest => {
                         self.guests.push(guest)
                 });
                /*
                foreach(var guest in response.data){
                    //guest
                }
                */

                //self.guests=response.data  -> diğer kullanım şekli. Ezdiğini unutma.
                 console.dir(self.guests)
          
             
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
            
          var self=this
          axios({
            method: 'post',
            url: 'http://localhost:3000/guests',
            data: {
              firstName: this.tempGuest.firstName,
              lastName: this.tempGuest.lastName,            
              userId: this.userId            
            }
          }).then((response)=>{
                console.dir(response)
                self.guests.push(response.data)

          } )   

            this.dialog = false;
            
        },
        editItem(){
            
        },

        deleteItem(){

        }
    }

})
</script>
