<template>
  <footer class="footer">
    <p class="footer-text">Copyright © All images from Unsplash.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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
    padding: 10px 0 0 0;
    text-align: center;
  }
}
</style>