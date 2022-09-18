<template>
  <div class="main-container">
    <Navbar />
    <h3>糟糕！發生錯誤，請回首頁試試</h3>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "HomePage",
  components: {
    Navbar,
  },
};
</script>



<style scoped lang="scss">
@import "./../assets/application.scss";
.main-container {
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  color: var(--font-blue);
}
</style>