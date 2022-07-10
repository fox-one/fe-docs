<template>
  <div>
    <f-button color="primary" @click="handleConnect">Connect</f-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Auth extends Vue {
  handleConnect() {
    console.log("auth basic", this.$vuetify);
    this.$uikit.auth.show({
      checkFennec: () => true,
      handleAuth: (data) => {
        this.$uikit.toast.show({ message: JSON.stringify(data) });
      },
      handleError: () => {}
    });
  }
}
export default Auth;
</script>
