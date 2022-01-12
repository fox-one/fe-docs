<template>
  <pando-account-avatar :logged="logged" :avatar="avatar" />
</template>
<script>
export default {
  data() {
    return {
      logged: false,
      avatar: ""
    };
  }
};
</script>
