<template>
  <footer class="footer">
    <p class="footer-text">Copyright © All images from Unsplash.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: $purple;
  background: var(--body-bg);
  .footer-text {
    margin: 5px 20px;
    text-align: center;
  }
}
</style>