<template>
  <v-app id="container">
    <nav>
      <div id="titleShown">
        <!-- <span>Sales App</span> -->
      </div>
      <div id="buttons">
        <div id="minimize">
          <span @click="minimize()">-</span>
        </div>
        <div id="maximize">
          <span @click="maximize()">+</span>
        </div>
        <div id="close">
          <span @click="close()">&times;</span>
        </div>
      </div>
    </nav>
    
    <div id="login">
      <v-row class="text-center">
        <v-col cols="6" offset="3">
          <v-card shaped class="pb-5">
            <v-row class="text-center pb-5">
            <v-col cols="12" class="py-5">
                <h2>LOGIN</h2>
              
            </v-col>
            <v-col cols="10" offset="1">
              <v-text-field outlined
                  label="Username"
                  prepend-icon="mdi-account-circle" color="black darken-4"
                  v-model="user.username"
              />
            </v-col>
            <v-col cols="10" offset="1">
                <v-text-field  outlined
                                  :type="showPassword ? 'text' : 'password'"
                                  label="Enter your password"
                                  prepend-icon="mdi-lock"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  @click:append="showPassword = !showPassword"
                                  v-model="user.password"
                                  color="black darken-4"
                              />
            </v-col>
            <v-col cols="10" offset="1" >
              <v-btn block tile color="teal" dark @click="login()">LOGIN</v-btn>
            </v-col>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
    
    
    </div>
  </v-app>
  <!-- </v-container> -->
</template>

<script>

// const {remote} = require('electron')

export default {
    data(){
        return{
            showPassword:false,
            apiRequest:false,
            user:{
                username:'',
                password:''
            },
            feedback:'',
            errors:[]
            }
    },
    methods:{
        login(){
            if(this.user.username === "admin" && this.user.password === "admin"){
                console.log('login')
                this.$router.push('/dashboard')
            }
            else{
              console.log('credentials do not match')
            }
        },
        minimize(){
        //   remote.getCurrentWindow().minimize();
          
        },
        maximize(){
        //   if(!remote.getCurrentWindow().isMaximized()){
        //     remote.getCurrentWindow().maximize()
        //   }else{
        //     remote.getCurrentWindow().unmaximize()
        //   }
        },
        close(){
        //    remote.getCurrentWindow().destroy()
          
        }
    }
}
</script>

<style scoped>  

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #login{
    -webkit-app-region:no-drag;
    margin-top: 100px;
  
  }

  #container{
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: teal;
    -webkit-app-region:drag;

  }

  #container nav{
    display: block;
    width: 100%;
    height: 30px;
    background-color:teal;
   
  }

  #container nav #titleShown{
    width: 30%;
    height: 100%;
    line-height: 30px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    float: left;
    padding: 0 0 0 0em;
  }
  #container nav #buttons{
    float:right;
    width: 150px;
    height: 100%;
    line-height: 30px;
    background-color: teal;
    -webkit-app-region:no-drag;
    margin-right:0px;
  }

  #buttons #minimize,#buttons #maximize, #buttons #close{
    float:left;
    height: 100%;
    width: 33%;
    text-align: center;
    color: white;
    transition: all ease-in-out .2s;
    cursor: default;
  }

  #buttons #minimize:hover{
    background-color: white;
    color: black;
  }

  #buttons #maximize:hover{
    background-color: white;
    color: black;
  }

  #buttons #close:hover{
    background-color: #ff0000;
  } 
</style>