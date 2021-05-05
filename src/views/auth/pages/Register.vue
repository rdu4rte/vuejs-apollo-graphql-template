<template>
  <v-container class="auth-container">
    <h1><i class="fas fa-user-plus"></i> Sign Up</h1>
    <v-card class="auth-card">
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
export default {
  name: 'Register',
  data: () => ({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    // validation
    valid: true,
    show1: false,
    show2: false,
    usernameRules: [(v) => !!v || 'Username is required'],
    emailRules: [(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    passwordRules: {
      required: (v) => !!v || 'Required',
      min: (v) => v.length >= 6 || 'Min 6 characters'
    }
  }),
  methods: {
    signup() {
      if (this.$refs.form.validate()) {
        console.log(this.username, this.email, this.password, this.passwordConfirm)
        this.$router.push('/signin')
      }

      return () => console.log('failed')
    }
  }
}
</script>
