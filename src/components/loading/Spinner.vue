<template>
  <div class="text-center">
    <v-progress-circular :size="100" color="black" indeterminate></v-progress-circular>
  </div>
</template>
<script>
export default {
  name: 'Spinner'
}
</script>
<style lang="scss" scoped>
.text-center {
  margin: 60px auto;
}
</style>
