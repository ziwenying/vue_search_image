<template>
  <div id="top" class="main-container" ref="at_top">
    <Spinner v-if="isLoading" class="spinner" />
    <Navbar />
    <main
      class="img-wrapper scrollbar"
      style="scroll-behavior: smooth"
      ref="infinite_list"
    >
      <!-- v-for -->
      <div class="column">
        <div v-for="image in favoriteImages" :key="image.id" class="img-outer">
          <img :src="image.regular" alt="image" class="image" />
          <i
            v-if="image.isFavorite === false"
            @click.stop="addFavorite(image.id)"
            class="icon white far fa-heart"
          ></i>
          <i
            v-if="image.isFavorite === true"
            @click.stop="deleteFavorite(image.id)"
            class="icon red fas fa-heart"
          ></i>
          <div class="description">
            <p class="text">{{ image.createdAt | fromNow }}</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <ImgModal />
    <a id="go-top" @click="goTop">
      <img class="arrow" src="@/assets/image/icon-gotop.png" alt="go-top" />
    </a>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import ImgModal from "../components/ImgModal.vue";

import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "HomePage",
  mixins: [fromNowFilter],
  components: {
    Spinner,
    Navbar,
    Footer,
    ImgModal,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  data() {
    return {
      favoriteImages: [],
      keyword: "",
    };
  },
  created() {
    this.favoriteImages = JSON.parse(localStorage.getItem("STORAGE_Img")) || [];
  },
  mounted() {
    if (this.darkMode) {
      this.toggleMode();
    }
  },
  methods: {
    addFavorite(imageId) {
      this.favoriteImages = this.favoriteImages.map((fa_image) => {
        return fa_image.id === imageId
          ? { ...fa_image, isFavorite: true }
          : fa_image;
      });
    },
    deleteFavorite(imageId) {
      this.favoriteImages = this.favoriteImages.map((fa_image) => {
        return fa_image.id === imageId
          ? { ...fa_image, isFavorite: false }
          : fa_image;
      });
    },
    goTop() {
      const scrollTop = this.$refs.infinite_list;
      if (scrollTop.scrollTop > 0) {
        const toTop = () => {
          scrollTop.scrollTo(0, 0);
        };
        requestAnimationFrame(toTop);
        toTop();
      }
    },
    toggleMode() {
      this.$store.commit("changeMode");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/application.scss";

.main-container {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  background: var(--body-bg);
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .img-wrapper {
    padding: 20px 0 60px 0;
    background: var(--transparent);
    overflow-y: scroll;
    max-height: 914px;

    .column {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      row-gap: 24px;
      .img-outer {
        position: relative;
        width: 100%;
        height: 100%;
        border: 5px var(--transparent) solid;
        border-radius: 5px;
        .image {
          border-radius: 2px;
          cursor: zoom-in;
        }
        .icon {
          position: absolute;
          bottom: 5px;
          right: 10px;
          padding: 1px;
          cursor: pointer;
          z-index: 1;
          &.red {
            color: $red;
          }
          &.white {
            color: $white;
          }
        }
        .description {
          position: absolute;
          bottom: 0;
          display: none;
          .text {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            line-height: 30px;
            color: var(--white);
            text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff,
              0 0 42px #5271ff, 0 0 82px #5271ff, 0 0 92px #5271ff,
              0 0 102px #5271ff, 0 0 151px #5271ff;
          }
        }
      }
    }

    .img-outer:hover {
      border: 5px #efceff79 solid;
      border-radius: 5px;
      .description {
        display: block;
        width: 100%;
        height: 100%;
        background: var(--black);
        opacity: 0.4;
      }
    }
  }
  .scrollbar {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  #go-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    border: 1px var(--font-blue) solid;
    border-radius: 50px;
    background: $white;
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
}
@media screen and (min-width: 767px) {
  .main-container {
    .img-wrapper {
      margin: 50px auto 0 auto;
      width: 95%;
    }
  }
}
</style>