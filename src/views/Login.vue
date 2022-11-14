<script>
import { auth } from '../stores/auth'

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        isDisabled: function () {
            return this.email.length < 1 || this.password.length < 6;
        }
    },
    methods: {
        auth() {
            auth.authenticate(this.email, this.password);
        }
    }
}
</script>

<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input v-model="email" id="input-email" placeholder="E-mail" />
            <input v-model="password" id="input-password" type="password" placeholder="Password" />
            <button id="btn-submit" :disabled="isDisabled" @click="auth()">LOGIN</button>
        </form>
    </div>
</template>