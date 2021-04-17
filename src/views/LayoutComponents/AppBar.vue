<template>
  <v-app-bar
      app
      clipped-right
      flat
      height="52"
      color="teal darken-1"
    >
    <v-app-bar-nav-icon class="white--text" @click="openDrawer()"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>

      <!-- <v-responsive max-width="156"> -->
      <v-spacer />
      <v-btn small color="white" text rounded @click="logout">
        <span>Logout</span>
        <v-icon small right>mdi-logout</v-icon>
      </v-btn>
      <!-- </v-responsive> -->
    </v-app-bar>
</template>

<script>
export default {
    props:{
        openNav:Boolean
    },
    data(){
        return{
        
        }
    },
    methods:{
      openDrawer(){
        this.drawer = !this.drawer
        
        this.$emit('openDrawer',this.drawer)
      },
      logout(){

      }
    }
}
</script>

<style>

</style>