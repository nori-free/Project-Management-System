<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    :permanent="primaryDrawer.type === 'permanent'"
    :temporary="primaryDrawer.type === 'temporary'"
    app
    overflow
    >
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
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    primaryDrawer: Object,
    // items: Array
  },
  data: () => ({
    items: [
      {title: 'Dashboard', icon: 'mdi-view-dashboard', href: '/'},
      {title: 'Wiki', icon: 'mdi-text-box-search', href: '/wiki'},
      {title: 'Notifications', icon: 'mdi-bell', href: '/notifications'},
      {title: 'Dialy report', icon: 'mdi-file-document-edit', href: '/dialy-report'},
      {title: 'Todo', icon: 'mdi-format-list-checks', href: '/todo'},
      {title: 'Test', icon: 'mdi-ab-testing', href: '/login'}
    ],
  })
}
</script>