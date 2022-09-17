<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header"><slot name="header"></slot></div>
      <div class="modal-body"><slot name="body"></slot></div>
      <div class="modal-footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgModal",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";
</style>