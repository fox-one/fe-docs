<template>
  <f-auth-method-modal
    ref="authModal"
    :fennec="fennec"
    :client-id="clientId"
    :code-challenge="codeChallenge"
    :scope="scope"
    :state="state"
    :is-firesbox="isFiresbox"
    title="Connect Wallet"
    @auth="handleAuth"
    @error="handleError"
  >
    <template #activator="{ on }">
      <v-btn depressed rounded color="primary" v-on="on"> Connect </v-btn>
    </template>
  </f-auth-method-modal>
</template>
<script>
import axios from "axios";
export default {
  data () {
    return {
      fennec: false,
      isFiresbox: false,
      clientId: "75f18fe8-b056-46d6-9c48-0214425e58ce",
      scope: "PROFILE:READ ASSETS:READ",
      codeChallenge: "",
      state: ""
    }
  },
  methods: {

    async handleAuth (value) {
      if (value.authCode) {
        await this.authMixin(value.authCode);
      }
      else if (value.fennec) {
        console.log(value.fennec);
      }
    },

    handleError (error) {
      console.log(error)
    },

    async authMixin(code) {

      const url = "https://leaf-api.pando.im/api/login";
      fetch(url, {
        method: "POST",
        body:JSON.stringify({code: code})
      }).then(res =>
        res.json().then(data => ({
          data:data,
          status: res.status
        }))
      ).then(res => {
        const token = res.data.data.token;
        console.log(token);
      });

    }
  }
}
</script>
<style lang="scss" scoped></style>
