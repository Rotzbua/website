<template>
  <img
    :src="
      isDarkTheme
        ? require('./../../assets/logos/small-logo-full.png')
        : require('./../../assets/logos/small-logo-full-black.png')
    "
    width="210"
    height="40"
    alt="W3Champions Logo"
  />
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component({})
export default class BrandLogo extends Vue {
  @Prop() isDarkTheme!: boolean;
}
</script>

<style scoped>
img {
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
}
</style>
