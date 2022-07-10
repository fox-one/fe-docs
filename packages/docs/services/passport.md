# Passport

An encapsulation of payment and auth service. Possport will save auth channel and auth token, and call certain payment method according to auth cahnnel. Mixin OAuth, Fennec and MVM are supported currently.

## Basic Usage

In order to use passport via Vue instance, you should install the plugin at first. You need not install auth and payment service spreatly, since these steps has been done inside.

```ts
import UIKit from "@foxone/uikit";

// install with some configration
// then you can use provided actions
Vue.use(UIKit.Passport, {
  vuetify,
  options: { origin: "Text UKIT" },
  // this will be passed to UIKit.Auth service
  authModalProps: {
    wallets: ["fennec", "mixin", "mvm"],
    clientId: "0900a886-acde-4f7d-a77c-17d47c95fa7f",
    scope: "PROFILE:READ ASSETS:READ",
    pkce: true
  }
});

// sync last auth state with current
this.$uikit.passport.sync({ channel, token });

// connect wallet with FAuthMethodModal
this.$uikit.passport.auth();

// payment with FPaymentModal
this.$uikit.passport.payment({
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

export interface PaymentPayload {
  // transfer params
  assetId: string;
  amount: string;
  recipient?: string;
  traceId?: string;
  memo?: string;
  // multisig params
  code?: string;
  multisig?: boolean;
  // common params
  info: {
    symbol: string;
    logo: string;
    amount: string;
  };
  checker?: () => Promise<boolean>;
}
```

Here comes a more completely example.

<example file="services/passport/basic" />
