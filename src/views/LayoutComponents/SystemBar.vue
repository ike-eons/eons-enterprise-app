<template>
    <v-system-bar style="-webkit-app-region:drag;" height="30" class="white--text" color="teal darken-2" app>
        <v-spacer></v-spacer>
    
        <div id="buttons">
            <v-icon id="minimize"  class=" pa-2">mdi-minus</v-icon>
            <v-icon id="maximize" class=" pa-2">mdi-square-outline</v-icon>
            <!-- <v-icon class="white--text pa-2">mdi-vector-arrange-below</v-icon> -->
            <v-icon id="close" class=" pa-2">mdi-close</v-icon>
        </div>
    </v-system-bar>
</template>

<script>
export default {
    props:{
        name:{
           type: String,
           require:true
        }
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>

  #buttons{
      margin-right: -12px;
  }
  #buttons #maximize,#buttons #minimize,#buttons #close{
    color: white;
    /* color: black; */
  }

  #buttons #maximize:hover,#buttons #minimize:hover{
    background-color: white;
    color: black;
  }
  #buttons #close:hover{
    background-color: #ff0000;
  } 
</style>