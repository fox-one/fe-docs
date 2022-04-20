<template>
  <div>
    <div>{{ meta }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import uikit from "@foxone/uikit/package.json";
import icons from "@foxone/icons/package.json";
import pandoUI from "@foxone/pando-ui/package.json";

@Component
class Version extends Vue {
  lastest = {};

  pkgs = ["@foxone/uikit", "@foxone/icons", "@foxone/pando-ui"];

  get meta() {
    return {
      "@foxone/uikit": uikit.version,
      "@foxone/icons": icons.version,
      "@foxone/pando-ui": pandoUI.version
    };
  }
}
export default Version;
</script>
