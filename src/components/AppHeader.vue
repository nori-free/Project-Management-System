<template>
  <v-app-bar
    :clipped-left="primaryDrawer.clipped"
    app
    >
    <v-app-bar-nav-icon
      v-if="primaryDrawer.type !== 'permanent'"
      @click.stop="handleClick()"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Project Management Agent</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    primaryDrawer: Object
  },
  methods: {
    handleClick() {
      this.primaryDrawer.model = !this.primaryDrawer.model
    }
  }
}
</script>

<style scoped>
</style>