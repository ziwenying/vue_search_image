<template>
  <div id="top" class="main-container" ref="at_top">
    <Spinner v-if="isLoading" class="spinner" />
    <Navbar />
    <main
      class="img-wrapper scrollbar"
      style="scroll-behavior: smooth"
      ref="infinite_list"
    >
      <h2 v-if="noImg" class="no-image">還沒有收藏唷！</h2>
      <h4 v-if="noImg" class="no-image">
        快將喜歡的圖片加入收藏吧 (੭ु´͈ ᐜ `͈)੭ु⁾⁾
      </h4>
      <!-- v-for -->
      <div class="column">
        <div v-for="image in favoriteImages" :key="image.id" class="img-outer">
          <div @click.stop="showImage(image)" class="blank"></div>
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
    <Footer class="footer" />
    <a v-if="!noImg" id="go-top" @click="goTop">
      <img class="arrow" src="@/assets/image/icon-gotop.png" alt="go-top" />
    </a>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "HomePage",
  mixins: [fromNowFilter],
  components: {
    Spinner,
    Navbar,
    Footer,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  data() {
    return {
      favoriteImages: [],
      keyword: "",
      noImg: true,
      isLoading: true,
    };
  },
  created() {
    this.fetchFavoriteImg();
  },
  mounted() {
    if (this.darkMode) {
      this.toggleMode();
    }
  },
  watch: {
    favoriteImages() {
      this.saveStorage();
    },
  },
  methods: {
    fetchFavoriteImg() {
      this.isLoading = true;
      this.favoriteImages =
        JSON.parse(localStorage.getItem("STORAGE_Img")) || [];
      this.isLoading = false;
      if (!this.favoriteImages.length) {
        this.noImg = true;
      } else {
        this.noImg = false;
      }
    },
    addFavorite(imageId) {
      this.favoriteImages = this.favoriteImages.map((fa_image) => {
        return fa_image.id === imageId
          ? { ...fa_image, isFavorite: true }
          : fa_image;
      });
      Toast.fire({
        icon: "success",
        title: "加入囉！",
      });
    },
    async deleteFavorite(imageId) {
      Toast.fire({
        title: "確定要刪除檔案?",
        icon: "warning",
        showConfirmButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "是的，我要刪除!",
        showCancelButton: true,
        cancelButtonColor: "#444444",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.value) {
          this.favoriteImages = this.favoriteImages.map((fa_image) => {
            return fa_image.id === imageId
              ? { ...fa_image, isFavorite: false }
              : fa_image;
          });
          this.favoriteImages = this.favoriteImages.filter((fa_image) => {
            return fa_image.id !== imageId;
          });
          Toast.fire({
            icon: "success",
            title: "刪除囉！",
          });
        }
      });
    },
    showImage(oneImage) {
      this.$store.commit("getOneImage", oneImage);
      // open new page
      let routeUrl = this.$router.resolve({
        path: `/favorite/${oneImage.id}`,
      });
      window.open(routeUrl.href, "_blank");
    },
    saveStorage() {
      localStorage.setItem("STORAGE_Img", JSON.stringify(this.favoriteImages));
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

    .no-image {
      text-align: center;
      height: 200px;
      color: var(--font-blue);
      margin: 5px;
    }

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
        }
        .blank {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
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
      cursor: zoom-in;

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
    cursor: pointer;
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