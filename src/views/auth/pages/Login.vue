<template>
  <v-container class="auth-container">
    <h1><i class="fas fa-sign-in-alt"></i> Sign In</h1>
    <v-alert v-if="validationErr" dense outlined type="error">
      {{ this.validationErr }}
    </v-alert>
    <Spinner v-if="loading" />
    <v-card v-else class="auth-card">
      <v-form class="auth-form" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 6 characters"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-row>
          <v-btn :disabled="!valid" color="success" @click.prevent="login">Submit</v-btn>
          <router-link class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default info" to="/signup"
            >New user?</router-link
          >
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { LOGIN } from '../graphql/auth'

export default {
  name: 'Login',
  components: {
    Spinner: () => import('../../../components/loading/Spinner')
  },
  data: () => ({
    username: '',
    password: '',
    // validation
    validationErr: null,
    loading: false,
    valid: true,
    show1: false,
    usernameRules: [(v) => !!v || 'Username is required'],
    passwordRules: {
      required: (v) => !!v || 'Required'
    }
  }),
  methods: {
    async login() {
      this.loading = true
      if (this.$refs.form.validate())
        await this.$apollo
          .mutate({
            mutation: LOGIN,
            variables: {
              username: this.username,
              password: this.password
            }
          })
          .then((res) => {
            localStorage.setItem('token', res.data.login.token)
            this.$router.push('/dashboard/tasks')
          })
          .catch((err) => {
            if (err.message.includes('found')) {
              this.validatioErr = 'User not found'
            }
            this.validationErr = 'Wrong credentials'
          })
      this.loading = false
    }
  }
}
</script>
