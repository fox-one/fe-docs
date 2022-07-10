<template>
  <div>
    <f-button color="primary" @click="handleConnect">Connect Fennec</f-button>
    <f-button color="primary" @click="handlePayment">Payment</f-button>
  </div>
</template>
<script>
import { v4 as uuid } from "uuid";
import Fennec from "@foxone/fennec-dapp";

export default {
  data: () => {
    return {
      fennec: new Fennec()
    };
  },
  methods: {
    handleConnect() {
      this.fennec.connect("Test");
    },
    handlePayment() {
      this.$uikit.payment.show({
        amount: "0.0001",
        assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        recipient: "5467e9ea-cd04-4b91-b84c-93a0c87cb6a4",
        traceId: uuid(),
        memo: "testuikit",
        info: {
          symbol: "CNB",
          logo: "https://mixin-images.zeromesh.net/0sQY63dDMkWTURkJVjowWY6Le4ICjAFuu3ANVyZA4uI3UdkbuOT5fjJUT82ArNYmZvVcxDXyNjxoOv0TAYbQTNKS=s128",
          amount: "0.0001"
        },
        checker: () =>
          new Promise((resolve) => {
            setTimeout(() => resolve(), 5000);
          })
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
