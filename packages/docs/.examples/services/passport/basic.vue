<template>
  <div class="passport">
    <div class="text-center">
      <f-loading v-if="initing" />
    </div>

    <div class="status">
      <template v-if="user">
        <f-user-avatar
          v-if="user"
          :name="user.full_name"
          :avatar="user.avatar_url"
        />
        <span class="ml-2">{{ user.full_name }}</span>
      </template>
    </div>

    <div class="actions">
      <f-button :disabled="connected" color="primary" @click="handleConnect">
        Connect
      </f-button>
      <f-button
        :disabled="!connected"
        color="primary"
        class="mt-5"
        @click="handleDisconnect"
      >
        Disconnect
      </f-button>
      <f-button
        :disabled="!connected"
        :loading="paying"
        color="primary"
        class="mt-5"
        @click="handlePayment"
      >
        Payment
      </f-button>
      <div class="caption text-center">transfer 0.01 CNB to a test bot</div>

      <f-button
        :disabled="!connected"
        :loading="paying2"
        color="primary"
        class="mt-5"
        @click="handlePaymentMultisig"
      >
        Payment Multisig
      </f-button>
      <div class="caption text-center">
        Swap 0.01 USDT(ERC20) to pUSD via 4swap
      </div>

      <f-button
        :disabled="!connected"
        :loading="loading2"
        color="primary"
        class="mt-5"
        @click="handleGetBalance"
      >
        Get Balance
      </f-button>
      <div class="caption text-center">Get balance of CNB</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { v4 as uuid } from "uuid";
import axios from "axios";

@Component
class Passport extends Vue {
  loading = false;

  loading2 = false;

  paying = false;

  paying2 = false;

  initing = false;

  channel = "";

  token = "";

  user: any = null;

  get connected() {
    return Boolean(this.token);
  }

  // sync local state with passport
  // if last channel is fennec or mvm
  // passport will connect that channal automaticly and return updated token
  async mounted() {
    this.initing = true;

    const channel = localStorage.getItem("channel") || "";
    const token = localStorage.getItem("token") || "";
    const auth = await this.$uikit.passport.sync({ channel, token });

    this.updateAuth(auth);

    await this.getMe();

    this.initing = false;
  }

  updateAuth({ channel, token }) {
    this.channel = channel;
    this.token = token;
    localStorage.setItem("channel", channel);
    localStorage.setItem("token", token);
  }

  async getMe() {
    if (!this.connected) return;

    const resp = await axios.get("https://api.mixin.one/me", {
      headers: { Authorization: `Bearer ${this.token}` }
    });

    this.user = resp.data.data;
  }

  async handleConnect() {
    this.loading = true;

    try {
      const { channel, token } = await this.$uikit.passport.auth();

      this.updateAuth({ channel, token });

      this.$nextTick(() => {
        this.getMe();
      });
    } catch (error: any) {
      console.log(error);
      this.$uikit.toast.error({ message: error.message });
    }

    this.loading = false;
  }

  handleDisconnect() {
    this.$uikit.passport.sync({ channel: "", token: "" });
    this.updateAuth({ channel: "", token: "" });
    this.user = null;
  }

  async handlePayment() {
    this.paying = true;

    try {
      await this.$uikit.passport.payment({
        amount: "0.01",
        assetId: "965e5c6e-434c-3fa9-b780-c50f43cd955c",
        // a test bot
        recipient: "17ac525b-5e12-44b0-8f51-5beb8aa1a129",
        traceId: uuid(),
        memo: "test",
        info: {
          symbol: "CNB",
          logo: "https://mixin-images.zeromesh.net/0sQY63dDMkWTURkJVjowWY6Le4ICjAFuu3ANVyZA4uI3UdkbuOT5fjJUT82ArNYmZvVcxDXyNjxoOv0TAYbQTNKS=s128",
          amount: "0.01"
        },
        checker: () =>
          new Promise((resolve) => {
            // mock check order status
            setTimeout(() => resolve(true), 3000);
          })
      });
    } catch (error: any) {
      this.$uikit.toast.error({ message: error.message });
    }

    this.paying = false;
  }

  async handlePaymentMultisig() {
    this.paying2 = true;

    try {
      // swap USDT to PUSD
      const followId = uuid();
      const memo = `3,${this.user.user_id},${followId},31d2ea9c-95eb-3355-b65b-ba096853bc18,MWR,0`;
      const data = {
        action: memo,
        amount: 0.01,
        asset_id: "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        broker_id: "a753e0eb-3010-4c4a-a7b2-a7bda4063f62"
      };
      const resp = await axios.post(
        "https://mtgswap-api.fox.one/api/actions/v2",
        data,
        {
          headers: { Authorization: `Bearer ${this.token}` }
        }
      );

      const checker = async () => {
        try {
          const resp = await axios.get(
            `https://mtgswap-api.fox.one/api/orders/${followId}`,
            {
              headers: { Authorization: `Bearer ${this.token}` }
            }
          );
          const order = resp.data.data;

          if (order.state === "Done") {
            this.$uikit.toast.success({ message: "success" });

            return true;
          } else if (order.state === "Rejected") {
            this.$uikit.toast.success({ message: "rejected" });

            return true;
          } else {
            return false;
          }
        } catch (error) {
          return false;
        }
      };

      await this.$uikit.passport.payment({
        assetId: "4d8c508b-91c5-375b-92b0-ee702ed2dac5",
        amount: "0.01",
        code: resp.data.data.code,
        multisig: true,
        info: {
          symbol: "USDT",
          logo: "https://mixin-images.zeromesh.net/0sQY63dDMkWTURkJVjowWY6Le4ICjAFuu3ANVyZA4uI3UdkbuOT5fjJUT82ArNYmZvVcxDXyNjxoOv0TAYbQTNKS=s128",
          amount: "0.01"
        },
        checker
      });
    } catch (error: any) {
      this.$uikit.toast.error({ message: error.message });
    }

    this.paying2 = false;
  }

  async handleGetBalance() {
    this.loading = true;

    try {
      const balance = await this.$uikit.passport.getBalance(
        "965e5c6e-434c-3fa9-b780-c50f43cd955c"
      );

      this.$uikit.toast.success({ message: "Balance: " + balance });
    } catch (error: any) {
      this.$uikit.toast.error({ message: error.message });
    }

    this.loading = false;
  }
}
export default Passport;
</script>

<style lang="scss" scoped>
.passport {
  padding: 16px;

  .status {
    padding: 24px;
    display: flex;
    align-items: center;
    word-break: break-all;
  }
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
