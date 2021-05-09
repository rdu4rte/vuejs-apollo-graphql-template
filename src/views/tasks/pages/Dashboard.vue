<template>
  <v-container>
    <v-tabs v-model="active_tab" centered>
      <v-tab v-for="tab in tabs" :key="tab.index" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <router-view :tasks="todos"></router-view>
  </v-container>
</template>

<script>
import { GET_TASKS } from '../graphql/tasks'

export default {
  name: 'Dashboard',
  data: () => ({
    active_tab: null,
    tabs: [
      { index: 1, name: 'Tasks', route: '/dashboard/tasks' },
      { index: 2, name: 'Done', route: '/dashboard/done' }
    ]
  }),
  apollo: {
    todos: {
      query: GET_TASKS
    }
  }
}
</script>
