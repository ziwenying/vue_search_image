<template>
  <div class="main-container">
    <Navbar />
    <section></section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AboutPage",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    // async handleSubmit() {
    //   try {
    //   } catch (error) {}
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";
.main-container {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
}
// @media screen and (min-width: px) {
//   .main-container {
// }
// }
</style>