import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import UIKit from "@foxone/uikit";
import PandoUI from "@foxone/pando-ui";
import * as icons from "@foxone/icons";
import { mergeDeep } from "vuetify/lib/util/helpers";
import locales from "@theme/locales.json";
import store from "@theme/store";
import pageComponents from "@internal/page-components";

import "@foxone/uikit/build/index.min.css";
import "@foxone/pando-ui/build/index.css";
import "@theme/styles/index.scss";

export default ({
  Vue,
  options, // options for root Vue instance: new Vue(options)
  // router,
  siteData
}) => {
  console.log("vuepress them docs enhanceApp", options);
  const vuetifyOptions = siteData.themeConfig.vuetifyOptions || {};
  const preset = mergeDeep(UIKit.preset, {
    icons: {
      values: {
        ...Object.keys(icons).reduce((m, k) => {
          m[k] = { component: icons[k] };

          return m;
        }, {})
      }
    },
    lang: { locales },
    theme: {
      themes: {
        light: {
          primary: "#000000",
          accent: "#076AFF",
          anchor: "#076AFF"
        },
        dark: {
          primary: "#FFFFFF",
          accent: "#076AFF",
          anchor: "#076AFF"
        }
      }
    }
  });
  const vuetify = new Vuetify(mergeDeep(preset, vuetifyOptions));

  options.vuetify = vuetify;

  Vue.use(Vuetify);
  Vue.use(PandoUI);

  if (typeof window !== undefined) {
    Vue.use(UIKit);
    Vue.use(UIKit.Toast, vuetify, { top: false, centered: true });
    Vue.use(UIKit.Dialog, vuetify, { flat: true });
  }

  Vue.use(Vuex);
  Vue.mixin({ store });

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component);
  }
};
