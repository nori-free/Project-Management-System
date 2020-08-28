<template>
    <v-app id="sandbox">
    <app-header :primaryDrawer="primaryDrawer" />
    <app-sidemenu :primaryDrawer="primaryDrawer" />

    <v-main>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
          >
          <v-col cols="10">
            <v-card>
              Wiki
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <global-footer />
  </v-app>
</template>

<script>
  import AppHeader from "../components/AppHeader.vue"
  import AppSideBar from "../components/AppSideBar.vue"
  import AppGlobalFooter from "../components/AppGlobalFooter.vue"

  export default {
    components: {
      appHeader: AppHeader,
      appSidemenu: AppSideBar,
      globalFooter: AppGlobalFooter
    },
    data: () => ({
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: true,
      },
    }),
  }
</script>

<style scoped>
</style>