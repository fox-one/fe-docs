<template>
  <f-auth-method-modal
    :fennec="fennec"
    :client-id="clientId"
    :scope="scope"
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
export default {
  data() {
    return {
      fennec: false,
      isFiresbox: false,
      clientId: "75f18fe8-b056-46d6-9c48-0214425e58ce",
      scope: "PROFILE:READ ASSETS:READ"
    };
  },
  methods: {
    handleShowAuthModal() {
      this.show = true;
    },

    handleError(error) {
      this.$uikit.toast.error({ message: error?.description ?? "" });
    },

    handleAuth(val) {
      // { type: "mixin" | "fennec", code?: string }
      this.$uikit.toast.success({ message: "Auth " + JSON.stringify(val) });
    }
  }
};
</script>
<style lang="scss" scoped></style>
