import Vuex from "vuex";
import Vuetify from "vuetify/lib";
import UIKit from "@foxone/uikit";
import PandoUI, { messages } from "@foxone/pando-ui";
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
  siteData,
  isServer
}) => {
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
    lang: { locales: mergeDeep(locales, messages) },
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

  if (!isServer) {
    Vue.use(Vuetify);
    Vue.use(UIKit);

    const vuetify = new Vuetify(mergeDeep(preset, vuetifyOptions));

    options = Object.assign(options, { vuetify });

    Vue.use(UIKit.Toast, () => options.vuetify, { top: false, centered: true });
    Vue.use(UIKit.Dialog, () => options.vuetify, { flat: true });
    Vue.use(UIKit.Passport, {
      vuetify: () => options.vuetify,
      options: { origin: "Text UKIT" },
      authModalProps: {
        wallets: ["fennec", "mixin", "mvm"],
        clientId: "0900a886-acde-4f7d-a77c-17d47c95fa7f",
        scope: "PROFILE:READ ASSETS:READ",
        pkce: true
      }
    });
    Vue.use(PandoUI, () => options.vuetify);
  }

  Vue.use(Vuex);
  Vue.mixin({ store });

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component);
  }
};
