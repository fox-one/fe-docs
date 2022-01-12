<template>
  <f-bottom-sheet
    v-model="dialog"
    hide-close-icon
    min-width="500"
    z-index="111"
    wapper-in-desktop="dialog"
    content-class="f-bottom-sheet--no-padding"
  >
    <template #activator="{ on }">
      <pando-account-avatar
        :logged="logged"
        name="Tom"
        @click.native="on.click"
      />
    </template>

    <pando-account-overview
      :balance="balance"
      :logged="logged"
      name="Pando Lake"
      version="2.1.1"
      @close="handleClose"
      @connect="handleConnect"
      @disconnect="handleDisconnect"
    >
      <template #actions>
        <f-list-item title="Action1" hide-tail>
          <template #head>
            <v-icon size="16">$FIconDocument4P</v-icon>
          </template>
        </f-list-item>

        <f-list-item title="Action2" hide-tail>
          <template #head>
            <v-icon size="16">$FIconDocumentHelp4P</v-icon>
          </template>
        </f-list-item>
      </template>
    </pando-account-overview>
  </f-bottom-sheet>
</template>
<script>
export default {
  data() {
    const format = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD"
    });

    return {
      dialog: false,
      logged: true,
      balance: format.formatToParts(111111)
    };
  },

  mounted() {
    console.log(this.$vuetify);
  },

  methods: {
    handleClose() {
      this.dialog = false;
    },

    handleConnect() {
      console.log("connect");
    },

    handleDisconnect() {
      console.log("disconnect");
    }
  }
};
</script>
