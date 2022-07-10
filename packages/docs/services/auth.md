# Auth

Auth service provide a convenient method to call FAuthMethodModal.

## Basic usage

<tip type="warning">

if Passport have been installed, you need install auth spreatly, you can call `$uikit.auth` directly.

</tip>

```ts
import UIKit from "@foxone/uikit";

// install
Vue.use(UIKit.Auth, vuetify, {
  wallets: ["fennec", "mixin", "mvm"],
  clientId: "0900a886-acde-4f7d-a77c-17d47c95fa7f",
  scope: "PROFILE:READ ASSETS:READ",
  pkce: true
});

// types for third param
export interface FAuthMethodModalProps {
  // mixin, links, fennec, mvm
  wallets?: string[];
  // Mixin oauth params
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
}

// show FAuthMethodModal
this.$uikit.auth.show({
  checkFennec: () => false,
  handleAuth: (data) => {
    console.log(data);
  },
  handleError: (error) => {
    console.log(error);
  }
});
```

<example file="services/auth/basic" />
