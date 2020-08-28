<template>
    <v-app id="sandbox">

    <v-main>
      <v-container fill-height fluid>
        <v-row
          align="center"
          justify="center"
          >
          <v-col cols="12">
            <v-row
              align="center"
              justify="center"
              >
              <v-card max-width="600" tile :loading="isLoading">
                
                <v-form
                  ref="form"
                  v-model="valid"
                  >
                  <v-card-title>Sign in</v-card-title>
                  
                  <v-list-item>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-list-item>
                  
                  <v-list-item>
                    <v-text-field
                      v-model="password"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[passwordRules.required, passwordRules.min]"
                      :type="showPassword ? 'text' : 'password'"
                      name="input-10-2"
                      label="Password"
                      hint="At least 8 characters"
                      value=""
                      class="input-group--focused"
                      @click:append="showPassword = !showPassword"
                    ></v-text-field>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="validate"
                    >
                      Validate
                    </v-btn>

                    <v-btn
                      color="error"
                      class="mr-4"
                      @click="reset"
                    >
                      Reset Form
                    </v-btn>

                    <v-btn
                      color="warning"
                      @click="resetValidation"
                    >
                      Reset Validation
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <router-link to="/signup">Sign up</router-link>
                    <router-link to="/verify">Verify</router-link>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <global-footer />
  </v-app>
</template>

<script>
  import AppGlobalFooter from "../components/AppGlobalFooter.vue"
  import { Authentication } from '../functions/accountService/authentication'

  export default {
    components: {
      globalFooter: AppGlobalFooter
    },
    data: () => ({
      isLoading: false,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      showPassword: false,
      password: 'Password',
      passwordRules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    }),

    methods: {
      validate () {
        this.isLoading = true
        console.log(this.email, this.password)
        Authentication.userLogin(this.email, this.password).then((status, result) => {
          // this.$store.dispatch
          this.$store.dispatch('doLogin', result)
          console.log(status)
          console.log(result)
          this.isLoading = false
          location.href = '/'
        })
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
  }
</script>