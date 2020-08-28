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
                  <v-card-title>Sign up</v-card-title>
                  
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

                  <v-list-item>
                    <v-text-field
                      v-model="name"
                      :counter="10"
                      :rules="nameRules"
                      label="Username"
                      required
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
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
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
      // async doSignup() {
      //   await Authentication.userSignup(this.name, this.email, this.password)
      // },
      validate () {
        this.isLoading = true
        // doSignup().then(() => {
        //   this.isLoading = false
        // })
        console.log(this.name, this.email, this.password)
        Authentication.userSignup(this.name, this.email, this.password).then(() => {
          this.isLoading = false
        })
        // this.isLoading = false
        // this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>