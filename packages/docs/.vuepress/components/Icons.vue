<template>
  <div class="icons">
    <div v-for="(icon, index) in icons" :key="index" class="icon">
      <f-tooltip top>
        <template #activator="{ on }">
          <v-icon :size="size" @click="on.click"> {{ "$" + icon }} </v-icon>
        </template>

        <div>
          {{ icon }}
        </div>
      </f-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import meta from "@foxone/icons/src/meta.json";
import icons from "@foxone/icons/src/icons.json";

const iconsColorful = meta.colorful.map((x) => x.componentName);

@Component({
  name: "Icons"
})
class Icons extends Vue {
  @Prop() type!: string;

  icons: any[] = [];

  size: any = 12;

  mounted() {
    if (this.type === "3p") {
      this.icons = icons["3P"];
      this.size = 12;
    } else if (this.type === "4p") {
      this.icons = icons["4P"];
      this.size = 16;
    } else if (this.type === "6p") {
      this.icons = icons["6P"];
      this.size = 24;
    } else if (this.type === "colorful") {
      this.icons = iconsColorful;
      this.size = 48;
    } else {
      const all = [...meta.outline, ...meta.fill].map((x) => x.componentName);
      const used = [...icons["3P"], ...icons["4P"], ...icons["6P"]];

      this.icons = all.filter((x) => used.findIndex((y) => x === y) === -1);
      this.size = 24;
    }
  }
}
export default Icons;
</script>

<style lang="scss" scoped>
.icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  column-gap: 16px;
  row-gap: 16px;
}
</style>
