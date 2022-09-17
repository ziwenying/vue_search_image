<template>
  <div class="spinner">
    <span class="dot rot-1"></span>
    <span class="dot rot-2"></span>
    <span class="dot rot-3"></span>
    <span class="dot rot-4"></span>
    <span class="dot rot-5"></span>
    <span class="dot rot-6"></span>
    <span class="dot rot-7"></span>
    <span class="dot rot-8"></span>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.spinner {
  position: relative;
  width: 120px;
  height: 120px;
  margin: auto;
  transform: scale(1);
  z-index: 1;

  .dot {
    position: absolute;
    background-color: transparent;
    height: 22px;
    width: 22px;
    border-radius: 12px;
    animation: dot 1.2s linear infinite;
  }

  .rot-1 {
    left: 0;
    top: 51px;
    animation-delay: 0.45s;
  }
  .rot-2 {
    left: 15px;
    top: 15px;
    animation-delay: 0.6s;
  }
  .rot-3 {
    left: 51px;
    top: 0;
    animation-delay: 0.75s;
  }
  .rot-4 {
    right: 15px;
    top: 15px;
    animation-delay: 0.9s;
  }
  .rot-5 {
    right: 0;
    top: 51px;
    animation-delay: 1.05s;
  }
  .rot-6 {
    right: 15px;
    bottom: 15px;
    animation-delay: 1.2s;
  }
  .rot-7 {
    left: 51px;
    bottom: 0;
    animation-delay: 1.35s;
  }
  .rot-8 {
    left: 15px;
    bottom: 15px;
    animation-delay: 1.5s;
  }

  @keyframes dot {
    0% {
      background-color: $purple;
    }
    100% {
      background-color: transparent;
    }
  }
}
</style>