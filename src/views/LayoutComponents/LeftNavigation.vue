<template>
    <v-navigation-drawer
        v-model="drawer"
        color="#222d32"
        dark
        width="250"
        app
    >
        <!-- COMPANY NAME & LOGO -->
        <v-sheet
        color="#222d34"
        elevation="10"
        height="80"
        width="100%"
        class="text-center pt-5"
        justify="center"
      >
        <h3 class="text-center"><span class="red--text">Eons</span> Enterprise App</h3>
      </v-sheet>
    
      <v-divider></v-divider>

      <!-- USER'S INFO -->
      <v-list-item two-line >
        <v-list-item-avatar class="ml-n4">
            <v-icon id="close" class=" pa-3">mdi-account-circle</v-icon>
            <!-- <v-img src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-avatar-person-business/100/10B-1User-512.png" /> -->
        </v-list-item-avatar>

        <v-list-item-content v-if="user">
            <v-list-item-title><span color="white">welcome Isaac</span></v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense shaped nav class="clickable mb-5 pb-5">
        <template v-for="item in items">
          <v-list-group color="red"
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item['icon-ctr']"
          :append-icon="item.model ? item.icon : item['icon-alt']"
          active-class="white--text"
          >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{item.text}}
              </v-list-item-title>
            </v-list-item-content>
          </template>

            <v-list-item v-for="(child,i) in item.children" 
            :key="i"
            route :to="child.route"
            active-class="red--text"
            >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{child.icon}}</v-icon>
            </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{child.text}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          
          <v-list-item class="style-type"
            v-else
            :key="item.text"
            active-class="white--text"
            route
            :to="item.route"
          >
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{item.text}}
            </v-list-item-title>
          </v-list-item>
        </template>

      </v-list>

      <v-divider></v-divider>

      <v-list-item class="mt-5 pt-5">
            <v-list-item-icon>
              <v-icon>
                  mdi-cog
              </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title class="sub-title">
                  Settings
              </v-list-item-title>
          </v-list-item-content>
      </v-list-item>
      
   </v-navigation-drawer>
   <!--end of navigation  -->
</template>

<script>

export default {
  props:{
    drawer:{
      type:Boolean
    }
  },
  data(){
      return{
          user:{

          },
          items:[
          {icon:'mdi-view-dashboard', text:'System Statistics', route:'/dashboard'},
          {icon:'mdi-cart', text:'Invoice', route:'/invoices'},
          {icon:'mdi-shape', text:'Categories', route:'/categories'},
          {icon:'mdi-currency-rub', text:'Products', route:'/products'},
          {icon:'mdi-chart-line-variant', text:'Stocks', route:'/stocks'},
          // {icon:'show_chart', text:'System Analytics', route:'/pagenotfound'},
      ],
      }
  }
}
</script>

<style>

</style>