<template>
  <v-container class="auth-container">
    <h1><i class="fas fa-user-plus"></i> Sign Up</h1>
    <v-alert v-if="validationErr" dense outlined type="error">
      {{ this.validationErr }}
    </v-alert>
    <Spinner v-if="loading" />
    <v-card v-else class="auth-card">
      <v-form class="auth-form" ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 6 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="passwordConfirm"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min, password === passwordConfirm || 'Passwords dont match']"
          :type="show2 ? 'text' : 'password'"
          name="input-10-1"
          label="Password Confirmation"
          hint="At least 6 characters"
          counter
          @click:append="show2 = !show2"
        ></v-text-field>
        <v-row>
          <v-btn :disabled="!valid" color="success" @click.prevent="signup">Sign Up</v-btn>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import { SIGNUP } from '../graphql/auth.js'

export default {
  name: 'Register',
  components: {
    Spinner: () => import('../../../components/loading/Spinner')
  },
  data: () => ({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    // validation
    validationErr: null,
    valid: true,
    show1: false,
    show2: false,
    loading: false,
    usernameRules: [(v) => !!v || 'Username is required'],
    emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    passwordRules: {
      required: (v) => !!v || 'Required',
      min: (v) => v.length >= 6 || 'Min 6 characters'
    }
  }),
  methods: {
    async signup() {
      this.loading = true
      if (this.$refs.form.validate())
        await this.$apollo
          .mutate({
            mutation: SIGNUP,
            variables: {
              username: this.username,
              email: this.email,
              password: this.password,
              password_confirm: this.passwordConfirm
            }
          })
          .then(() => this.$router.push('/signin'))
          .catch((err) => {
            if (err.message.includes('E11000')) {
              this.validationErr = 'User or email already in use'
            }
          })
      this.loading = false
    }
  }
}
</script>
