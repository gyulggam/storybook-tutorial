<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "menu-contents",

  props: {
    title: {
      type: String,
      default: "",
    },
  },

  mounted() {
    console.log("asdfasdfsdaf", this.title);
  }
};
</script>
