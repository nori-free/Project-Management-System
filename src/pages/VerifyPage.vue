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
              <v-card width="600" tile :loading="isLoading">
                
                <v-form
                  ref="form"
                  v-model="valid"
                  :lazy-validation="lazy"
                  >
                  <v-card-title>確認コードを入力してください。</v-card-title>
                  
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
                      v-model="verifyNumber"
                      label="確認コード"
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
      verifyNumber: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      validate () {
        Authentication.activateUser(this.email, this.verifyNumber).then((res) => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
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