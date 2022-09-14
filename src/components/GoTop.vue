<template>
  <a id="go-top">
    <!-- <img class="arrow" src="@/assets/image/icon-gotop.png" alt="go-top" /> -->
  </a>
</template>

<script>
export default {
  name: "GoTop",
  data() {
    return {};
  },
  methods: {
    // goTop() {
    //   // this.$refs.at_top;
    //   console.log(windows);
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/application.scss";

#go-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: 1px var(--font-blue) solid;
  border-radius: 50px;
  opacity: 0.3;
  z-index: 99;
  transition: all 0.5s;
  .arrow {
    margin: 5px;
    width: 50px;
    height: 50px;
  }
  &:hover {
    opacity: 1;
  }
}
</style>