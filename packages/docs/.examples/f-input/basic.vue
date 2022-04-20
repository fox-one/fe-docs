<template>
  <v-container>
    <f-input
      v-model="value"
      label="Type something here"
      class="mb-10"
      prepend-icon="$close"
      prepend-inner-icon="$close"
      append-icon="$close"
      append-outer-icon="$close"
    />

    <f-input
      v-model="value"
      dense
      :clearable="true"
      hint="click the clear button to clear content"
      label="Type something here"
      class="mb-10"
      persistent-hint
      prepend-icon="$close"
      prepend-inner-icon="$close"
      append-icon="$close"
      append-outer-icon="$close"
    />

    <f-input
      v-model="value"
      dense
      :clearable="true"
      hint="click the clear button to clear content"
      label="Type something here"
      class="mb-10"
      persistent-hint
    />

    <f-search-input />

    <f-search-input dense />

    <f-input
      v-model="username"
      :hint="`hello ${username}`"
      :rules="[rules.moreThan5Letters]"
      label="Type username here"
      class="mb-10"
      persistent-hint
    />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class FInputDemo extends Vue {
  value = "";

  username = "";

  rules = {
    moreThan5Letters: (val) =>
      val.length > 5 || "username should more than 5 letters"
  };
}
export default FInputDemo;
</script>
