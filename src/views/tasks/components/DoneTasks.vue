<template>
  <v-container>
    <Spinner v-if="loading" />
    <v-card v-else class="mx-auto tab-card" max-width="600">
      <v-list shaped>
        <v-list-item-group multiple>
          <template v-for="task in tasks.filter((task) => task.done)">
            <v-list-item :key="task._id" :value="task" active-class="deep-purple--text text--accent-4">
              <template>
                <v-list-item-content>
                  <v-list-item-title @click="edit($event, task._id)" v-text="task.content"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-checkbox
                    @change="doneEdit($event, task._id)"
                    :input-value="task.done"
                    value
                    color="deep-purple accent-4"
                  ></v-checkbox>
                </v-list-item-action>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { UPDATE_TASK } from '../graphql/tasks'

export default {
  name: 'DoneTasks',
  data: () => ({
    loading: false
  }),
  components: {
    Spinner: () => import('@/components/loading/Spinner')
  },
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    async doneEdit(e, id) {
      this.loading = true
      await this.$apollo.mutate({
        mutation: UPDATE_TASK,
        variables: {
          id: id,
          done: Boolean(e)
        }
      })
      this.loading = false
    }
  }
}
</script>
