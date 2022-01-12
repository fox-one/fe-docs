# Usage

UIKit is a UI library based on Vue and Vuetify，which provides some customized styles.

## Installation

To use UIKit, you first need to install some dependencies. And make sure you have Vuetify installed properly.

```bash
yarn add @foxone/uikit@beta @foxone/icons@beta @foxone/utils
```

After installed, add UIKit to plugins, and update options of vuetify to apply presets.

Here is an example, which might vary according to your actual project.

```ts
// plugins.ts
import Vue from "vue";
import UIKit from "@foxone/uikit";
import Vuetify from "vuetify/lib";
import { mergeDeep } from "vuetify/lib/util/helpers";

// styles
import "@foxone/uikit/build/index.min.css";

// your application options
const customOptions = {
  theme: {
    themes: {
      dark: {
        // custom color variables
        bg_card: "#474264"
      }
    }
  }
};

// merge with UIKit preset
const vuetifyOptions = mergeDeep(UIKit.preset, options);

Vue.use(UIKit);
Vue.use(UIKit.Toast, app.vuetify, {
  // Toast global options
  top: false,
  centered: true
});
Vue.use(UIKit.Dialog, app.vuetify, {
  // Dialog global options
  flat: true
});

Vue.use(Vuetify);

// Vuetify instance to injected to Vue instance
const vuetify = new Vuetify(VuetifyOptions);

return { vuetify };
```

## Presets

UIKit has provided some preset options.

### Icons

```ts
// preset/icons.ts
import {
  FIconChevronLeft,
  FIconChevronRight,
  FIconChevronDown4P,
  FIconClose,
  FIconConnect3PFill,
  FIconUpRight3PFill,
  FIconInformation3PFill,
  FIconWarningFill,
  FIconArrowRight4P,
  FIconClear3PFill,
  FIconArrowDown,
  FIconSearch,
  FIconHelp3PFill,
  FIconCheck4P,
  FIconInfo4P,
  FIconLink4P,
  FIconImport4PBold,
  FIconAlert4P
} from "@foxone/icons";

export default {
  iconfont: "mdiSvg" as const,
  values: {
    back: { component: FIconChevronLeft },
    next: { component: FIconChevronRight },
    arrowRight: { component: FIconArrowRight4P },
    close: { component: FIconClose },
    clear: { component: FIconClear3PFill },
    expand: { component: FIconChevronDown4P },
    swap: { component: FIconArrowDown },
    connect: { component: FIconConnect3PFill },
    fill: { component: FIconUpRight3PFill },
    help: { component: FIconInformation3PFill },
    warning: { component: FIconWarningFill },
    search: { component: FIconSearch },
    question: { component: FIconHelp3PFill },
    check: { component: FIconCheck4P },
    info: { component: FIconInfo4P },
    link: { component: FIconLink4P },
    install: { component: FIconImport4PBold },
    alert: { component: FIconAlert4P }
  }
};
```

### Lang

```ts
// perset/lang.ts
import { en, ja, ko, de, fr, es, zhHans } from "vuetify/src/locale";
import { mergeDeep } from "vuetify/lib/util/helpers";
import locales from "../locales";

const base = {
  en,
  ja,
  zh: zhHans,
  ko,
  de,
  fr,
  es
};

export default {
  locales: mergeDeep(base, locales)
};
```

### Theme

```ts
// preset/theme.ts
export default {
  options: {
    customProperties: true,
    variations: false
  },
  themes: {
    light: {
      // greyscale
      greyscale_1: "#000000",
      greyscale_2: "#494949",
      greyscale_3: "#808080",
      greyscale_4: "#CCCCCC",
      greyscale_5: "#EBEBEB",
      greyscale_6: "#F5F5F5",
      greyscale_7: "#FFFFFF",
      // error & warning
      info: "#0f65c7",
      error: "#f44c4c",
      error_bg: "#FBF2F2",
      error_emphsize: "#75080A",
      success: "#2CC94E",
      success_bg: "#1B4324",
      warning: "#F58721",
      warning_bg: "#FCF8F0",
      warning_emphsize: "#75080A",
      // colors
      pink: "#EE4596",
      blue: "#076AFF",
      orange: "#FF850E",
      bright_green: "#C3FC1A",
      green: "#15D8B4"
    },

    dark: {
      // greyscale
      greyscale_1: "#ffffff",
      greyscale_2: "#D8D8D8",
      greyscale_3: "#9F9F9F",
      greyscale_4: "#656565",
      greyscale_5: "#3C3C3C",
      greyscale_6: "#303030",
      greyscale_7: "#000000",
      // error & warning
      info: "#79a4e4",
      error: "#F67070",
      error_bg: "#4A2222",
      error_emphsize: "#F34A4D",
      success: "#56D471",
      success_bg: "#1B4324",
      warning: "#F79F4D",
      warning_bg: "#5C3A13",
      warning_emphsize: "#FFE08F",

      // colors
      pink: "#F16AAB",
      blue: "#3988FF",
      orange: "#FFB255",
      bright_green: "#CDFF38",
      green: "#32EBC9"
    }
  }
};
```

## SASS Variables

SASS variables usage of Vuetify [https://vuetifyjs.com/en/features/sass-variables/], you can add UIKit variables too.

<Tip type="warning">

Since styles of UIKit is imported by css file, not sass file, can not modify scss variable of UIKit component currently.

</Tip>

```scss
// src/styles/_variables.scss

@import "~@foxone/uikit/src/styles/variables/_index.scss";

$snackbar-absolute-z-index: 1000;
```
