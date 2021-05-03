<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    Navbar: () => import('./components/layout/Navbar'),
    Footer: () => import('./components/layout/Footer')
  }
}
</script>
