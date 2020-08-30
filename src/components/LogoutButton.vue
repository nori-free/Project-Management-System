<template v-slot:append>
    <div class="pa-2">
    <v-btn
    block
    @click="logout">Logout</v-btn>
    </div>
</template>

<script>
    import { Authentication } from '../functions/accountService/authentication'
    export default {
        methods: {
            logout() {
                Authentication.userLogout()
                location.href='/login'
            }
        }
    }
</script>