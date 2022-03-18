# Migrate from @foxone/uikit@2.x to @foxone/uikit@3.x

## Install UIKit

Here is an example for UIKit 2.0

```ts
import Uikit from "@foxone/uikit";

Vue.use(Uikit);
```

Here is an example from UIKit 3.0

```ts
import UIKit from "@foxone/uikit";
import "@foxone/uikit/build/index.min.css";

// UIKit.Toast and UIKit.Dialog depend on vuetify instance

Vue.use(UIKit);
Vue.use(PandoUI, vuetify);
Vue.use(UIKit.Toast, vuetify, {
  top: false,
  centered: true
});
Vue.use(UIKit.Dialog, vuetify, { flat: true });
```

## Update Vuetify options

UIKit 3.x add some preset options for vuetify

Here is an example for UIKit 2.0

```ts
import zh from "vuetify/es5/locale/zh-Hans";
import en from "vuetify/es5/locale/en";
import ja from "vuetify/es5/locale/ja";
import enUikit from "@foxone/uikit/src/locales/en";
import jaUikit from "@foxone/uikit/src/locales/ja";
import zhUikit from "@foxone/uikit/src/locales/zh-Hans";

export default function ({ store }) {
  const isDark = store.state.app.dark;
  return {
    icons: {
      iconfont: "mdiSvg",
      values: {
        // ...
      }
    },
    theme: {
      dark: isDark,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          // ...
        },
        dark: {
          // ...
        }
      }
    },
    lang: {
      locales: {
        zh: {
          ...zh,
          ...zhUikit
        },
        en: {
          ...en,
          ...enUikit
        },
        ja: {
          ...ja,
          ...jaUikit
        }
      }
    }
  };
}
```

Here is an example for UIKit 3.0

```ts
import UIKit from "@foxone/uikit";
import icons from "@/utils/icons";

import { mergeDeep } from "vuetify/lib/util/helpers";

export default function ({ store }) {
  const isDark = store.state.app.dark;

  const options = {
    icons: {
      values: icons
    },
    theme: {
      dark: isDark,
      themes: {
        light: {
          primary: "#000000",
          secondary: "#FEF6E8",
          third: "#FBEACC"
        },
        dark: {
          primary: "#FFFFFF",
          secondary: "#452C00",
          third: "#5C3A13"
        }
      }
    }
  };

  return mergeDeep(UIKit.preset, options);
}
```

## Update sass variables

Add variables for apply customize styles in your sass variable file.

```scss
// src/style/variables.scss

@import "~@foxone/uikit/src/styles/variables/_index.scss";
```

## Add font link

If font of your website in Inter, we have a static link.

```ts
// nuxt.config.ts
import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  head: {
    // ...
    link: [
      { rel: "stylesheet", href: "https://static.fox.one/font/inter/style.css" }
    ]
  }
  // ...
};

export default config;
```

## Components migration

### FAppBottomNav

1.Props updated
2.@change params updated

### FBottomSheet

1.Add title prop replace title slot
2.Use FBottomSheetSubtitle subtitle slot
