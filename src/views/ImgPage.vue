<template>
  <main class="main-wrapper">
    <div class="image-outer">
      <img :src="showImg.regular" alt="image" class="image" />
      <div class="heart-count">
        <i class="icon white far fa-heart"></i>
        <span class="count">{{ showImg.likeCounts }}</span>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ImgPage",
  computed: {
    ...mapState(["showImg"]),
  },
  created() {},
  data() {
    return {
      image: {
        id: -1,
        createdAt: "",
        likeCounts: 0,
        regular: "",
        small: "",
        isFavorite: false,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.main-wrapper {
  position: relative;
  width: 95vw;
  height: 95vh;

  .image-outer {
    width: 100%;
    height: 100%;

    .image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .heart-count {
      text-align: center;
      font-size: 20px;

      .icon {
        margin: 5px 10px 20px 0;
      }
    }
  }
}
</style>