<template>
  <v-app>
    <v-row justify="center" style="margin-top:200px">
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="3"
      >
        <v-card ref="form"> 
          <v-card-text v-if="isLoggin">
            <h1 class="text-center mb-7">Login -  {{title}}</h1>          
            <v-text-field
              ref="email"
              prepend-inner-icon='mdi-account'
              v-model="email"
              :rules="[() => !!email || 'This field is required']"
              :error-messages="errorMessages"
              label="Email"
              placeholder="John Doe"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-card-text>       
          <v-card-text v-else>
            <h1 class="text-center mb-7">Register</h1>          
            <v-text-field
              ref="firstName"
              v-model="firstName"
              :rules="[() => !!firstName || 'This field is required']"
              :error-messages="errorMessages"
              label="First Name"
              placeholder="Buket"
              
          />
            
            <v-text-field
              ref="lastName"
              v-model="lastName2"
              :rules="[ (lastName2) => !!lastName2 || 'This field is required2']"
              label="Last Name"
              placeholder="Buket"
              
            />
            <v-text-field
              ref="email"
              v-model="email"
              :rules="[() => !!email || 'This field is required']"
              :error-messages="errorMessages"
              label="Email"
              placeholder="John Doe"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field 
            v-model="verify" 
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
              :rules="[rules.required, rules.passwordMatch]" 
              :type="show1 ? 'text' : 'password'" 
              name="input-10-1" 
              label="Confirm Password" 
              counter 
              @click:append="show1 = !show1"></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn type="submit" @click="dbControl">{{ isLoggin == true ? signIN : register}}</v-btn>
            <!--<v-btn v-else type="submit">{{register}}</v-btn>-->
            <v-spacer></v-spacer>
            
            <v-btn color="orange" text @click="isLoggin = !isLoggin">{{isLoggin == true ? register : signIN}}</v-btn>
          </v-card-actions>
        </v-card>        
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
const axios = require('axios');
 export default {
   /*
   ()=>
   (){}
   */
   props:
    {
        title: String
    }
   ,
    data () {
      return {
        signIN: "SIGN IN",
        register: "REGISTER",
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        isLoggin: true,
        password: 'Password',
        verify: '',
        errorMessages: '',
        email: '',
        firstName: '',
        lastName2: '',
        lastName:'',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          passwordMatch: () => {
            return this.password === this.verify  ? "" : "Password must match";
          },
          passwordMatch1:() => this.password === this.verify || "Password must match"

        },
      }
    },
    
    methods:{
      changeTemplate(){
        if(this.isLoggin){
          this.isLoggin = false;
        }else{
          this.isLoggin = true;
        }
      },
      dbControl(){
        var inputEmail = this.email;
        var inputPass = this.password;
        axios.get('http://localhost:3000/user')
          .then(function (response) {            
            for(var k in response.data) {              
              if (response.data[k].email == inputEmail && response.data[k].pass == inputPass) {                
                alert("basarili");
                break;
              }else{
                alert("hatali");
                break;
              }
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }
    }
  }

  
  

  //id,email,password,firstname,lastname db oluştur.
  //https://github.com/axios/axios

</script>

