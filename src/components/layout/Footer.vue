<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 --text text-center"> {{ new Date().getFullYear() }} — <strong>VLS</strong> </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
