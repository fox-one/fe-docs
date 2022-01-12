<template>
  <pando-account-avatar :logged="logged" :avatar="avatar" :name="name" />
</template>
<script>
export default {
  data() {
    return {
      logged: true,
      avatar: "",
      name: "Tom"
    };
  }
};
</script>
