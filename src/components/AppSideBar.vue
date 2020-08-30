<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    :permanent="primaryDrawer.type === 'permanent'"
    :temporary="primaryDrawer.type === 'temporary'"
    app
    overflow
    >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar v-if="avater">
          <img src="https://randomuser.me/api/portraits/women/81.jpg">
        </v-list-item-avatar>

        <v-list-item-avatar color="indigo" v-else>
          <v-icon dark>mdi-account-circle</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{username}}</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>
    <v-list
      dense
      nav
      >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.href"
        >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <logout-button />
    </template>
    <!-- <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template> -->
  </v-navigation-drawer>
</template>
<script>
import LogoutButton from './LogoutButton.vue'
// import store from '../store'
// console.log(this.username)
// console.log(this.$store.state.user.name)
export default {
  props: {
    primaryDrawer: Object,
    // items: Array
  },
  components: {
    logoutButton: LogoutButton
  },
  data: () => ({
    avater: '',
    // username: this.$store, //.state.user.idToken.payload.name,
    items: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', href: '/'},
      {title: 'Wiki', icon: 'mdi-text-box-search', href: '/wiki'},
      {title: 'Notifications', icon: 'mdi-bell', href: '/notifications'},
      {title: 'Dialy report', icon: 'mdi-file-document-edit', href: '/dialy-report'},
      {title: 'Todo', icon: 'mdi-format-list-checks', href: '/todo'},
      {title: 'Test', icon: 'mdi-ab-testing', href: '/login'}
    ],
  }),
  computed: {
    username () {
      console.log(this.$store.state)
      console.log(this.$store.state.user)
      return this.$store.state.user.name
    }
  }
}
</script>