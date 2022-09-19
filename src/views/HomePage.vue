<template>
  <div id="top" class="main-container" ref="at_top">
    <Spinner v-if="isLoading" class="spinner" />
    <Navbar
      @after-click-search="searchColorSort"
      @fetch-random-image="fetchImages"
    />
    <SearchNavPills
      :initialCondition="condition"
      :keyword="keyword"
      @after-click-color-sort="searchColorSort"
    />
    <main
      class="img-wrapper scrollbar"
      style="scroll-behavior: smooth"
      ref="infinite_list"
    >
      <!-- v-for -->
      <div class="column">
        <div v-for="image in firstColumnImg" :key="image.id" class="img-outer">
          <div @click.stop="showImage(image)" class="blank"></div>
          <img :src="image.regular" alt="image" class="image" />
          <i
            v-if="image.isFavorite === false"
            @click.stop="addFavorite(image, '1')"
            class="icon white far fa-heart"
          ></i>
          <i
            v-if="image.isFavorite === true"
            @click.stop="deleteFavorite(image.id, '1')"
            class="icon red fas fa-heart"
          ></i>
          <div class="description">
            <p class="text">{{ image.createdAt | fromNow }}</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div v-for="image in secondColumnImg" :key="image.id" class="img-outer">
          <div @click.stop="showImage(image)" class="blank"></div>
          <img :src="image.regular" alt="image" class="image" />
          <i
            v-if="image.isFavorite === false"
            @click.stop="addFavorite(image, '2')"
            class="icon white far fa-heart"
          ></i>
          <i
            v-if="image.isFavorite === true"
            @click.stop="deleteFavorite(image.id, '2')"
            class="icon red fas fa-heart"
          ></i>
          <div class="description">
            <p class="text">{{ image.createdAt | fromNow }}</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div v-for="image in thirdColumnImg" :key="image.id" class="img-outer">
          <div @click.stop="showImage(image)" class="blank"></div>
          <img :src="image.regular" alt="image" class="image" />
          <i
            v-if="image.isFavorite === false"
            @click.stop="addFavorite(image, '3')"
            class="icon white far fa-heart"
          ></i>
          <i
            v-if="image.isFavorite === true"
            @click.stop="deleteFavorite(image.id, '3')"
            class="icon red fas fa-heart"
          ></i>
          <div class="description">
            <p class="text">{{ image.createdAt | fromNow }}</p>
          </div>
        </div>
      </div>
      <!-- observer -->
      <div class="observer" ref="observer"></div>
    </main>
    <Footer />
    <a id="go-top" @click="goTop">
      <img class="arrow" src="@/assets/image/icon-gotop.png" alt="go-top" />
    </a>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import Navbar from "../components/Navbar.vue";
import SearchNavPills from "../components/SearchNavPills.vue";
import Footer from "../components/Footer.vue";
import imagesAPI from "./../apis/image";

import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "HomePage",
  mixins: [fromNowFilter],
  components: {
    Spinner,
    Navbar,
    SearchNavPills,
    Footer,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  data() {
    return {
      allImages: [],
      firstColumnImg: [],
      secondColumnImg: [],
      thirdColumnImg: [],
      favoriteImages: [],
      // condition 預設
      condition: {
        page: 1,
        color: "black_and_white",
        sort: "relevance",
        search: false,
      },
      keyword: "",
      isLoading: true,
    };
  },
  created() {
    this.fetchImages();
    this.favoriteImages = JSON.parse(localStorage.getItem("STORAGE_Img")) || [];
  },
  mounted() {
    if (this.darkMode) {
      this.toggleMode();
    }
    this.lazyLoading();
  },
  watch: {
    favoriteImages() {
      this.saveStorage();
    },
  },
  methods: {
    lazyLoading() {
      const imageContainer = this.$refs.infinite_list;
      const loadingObserver = this.$refs.observer;

      // 觸發 callback 函式的條件
      const options = {
        root: imageContainer,
        rootMargin: "0px 0px 200px 0px",
        threshold: 0,
      };

      // callback
      const callback = ([entry]) => {
        if (entry && entry.isIntersecting) {
          if (!this.keyword) {
            this.fetchImages();
          } else if (
            this.keyword &&
            this.condition.page <= 29 &&
            this.condition.search !== true
          ) {
            this.condition.page += 1;
            this.searchColorSort(
              {
                color: this.condition.color,
                sort: this.condition.sort,
                page: this.condition.page,
                keyword: this.keyword,
              },
              true
            );
            this.condition.search = false;
          }
          this.condition.search = false;
        }
      };

      // build observer
      let observer = new IntersectionObserver(callback, options);

      // 觀察目標元素
      observer.observe(loadingObserver);
    },
    async fetchImages() {
      try {
        this.isLoading = true;
        const response = await imagesAPI.images.getRandomImages();
        if (response.status !== 200) {
          throw new Error("無法取得圖片，請稍後再試");
        }
        this.allImages = response.data.map((image) => {
          return {
            id: image.id,
            createdAt: image.created_at,
            likeCounts: image.likes,
            regular: image.urls.regular,
            small: image.urls.small,
          };
        });

        // 新撈的圖全部加上 isFavorite: false
        this.allImages = this.allImages.map((image) => {
          return {
            ...image,
            isFavorite: false,
          };
        });

        // 確認新撈的圖有無加入收藏
        if (this.favoriteImages.length) {
          for (let i = 0; i < this.favoriteImages.length; i++) {
            this.allImages = this.allImages.map((image) => {
              return this.favoriteImages[i].id === image.id
                ? {
                    ...image,
                    isFavorite: true,
                  }
                : image;
            });
          }
        }

        // assign images
        this.firstColumnImg = [
          ...this.firstColumnImg,
          ...this.allImages.filter((image, index) => {
            return index < 10;
          }),
        ];
        this.secondColumnImg = [
          ...this.secondColumnImg,
          ...this.allImages.filter((image, index) => {
            return 10 <= index && index < 20;
          }),
        ];
        this.thirdColumnImg = [
          ...this.thirdColumnImg,
          ...this.allImages.filter((image, index) => {
            return 20 <= index && index < 30;
          }),
        ];
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得圖片，請稍後再試",
        });
      }
    },
    async searchColorSort({ color, sort, page, keyword }, reload) {
      this.isLoading = true;
      if (color === "black_and_white") {
        this.condition.sort = "";
        this.condition.color = "black_and_white";
      } else if (
        (this.condition.color && color) ||
        (!this.condition.color && color)
      ) {
        this.condition.color = color;
      } else if (!this.condition.color && !color) {
        this.condition.color = color;
      }

      if (!(this.condition.sort === "latest" && sort === "")) {
        this.condition.sort = sort;
      }
      this.keyword = keyword;
      try {
        const response = await imagesAPI.images.searchImagesColorSort({
          keyword: this.keyword,
          page: page,
          color: this.condition.color,
          sort: this.condition.sort,
        });

        if (response.status !== 200) {
          throw new Error("無法取得圖片，請稍後再試");
        }

        this.allImages = response.data.results.map((image) => {
          return {
            id: image.id,
            createdAt: image.created_at,
            likeCounts: image.likes,
            regular: image.urls.regular,
            small: image.urls.small,
          };
        });

        if (this.allImages.length === 0) {
          Toast.fire({
            icon: "warning",
            title: "無符合圖片，如未輸入關鍵字，請輸入",
          });
        }

        // 新撈的圖全部加上 isFavorite: false
        this.allImages = this.allImages.map((image) => {
          return {
            ...image,
            isFavorite: false,
          };
        });
        // 確認新撈的圖有無加入收藏
        if (this.favoriteImages.length) {
          for (let i = 0; i < this.favoriteImages.length; i++) {
            this.allImages = this.allImages.map((image) => {
              return this.favoriteImages[i].id === image.id
                ? {
                    ...image,
                    isFavorite: true,
                  }
                : image;
            });
          }
        }

        // assign images
        if (!reload) {
          this.firstColumnImg = [];
          this.secondColumnImg = [];
          this.thirdColumnImg = [];
        }

        this.firstColumnImg = [
          ...this.firstColumnImg,
          ...this.allImages.filter((image, index) => {
            return index < 10;
          }),
        ];

        this.secondColumnImg = [
          ...this.secondColumnImg,
          ...this.allImages.filter((image, index) => {
            return 10 <= index && index < 20;
          }),
        ];

        this.thirdColumnImg = [
          ...this.thirdColumnImg,
          ...this.allImages.filter((image, index) => {
            return 20 <= index && index < 30;
          }),
        ];
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得圖片，請稍後再試",
        });
      }
    },
    addFavorite(image, columnIndex) {
      if (this.favoriteImages.length > 30) {
        alert("最多只能收藏 30 張唷");
        return;
      } else if (!this.favoriteImages.length) {
        this.favoriteImages = [{ ...image, isFavorite: true }];
        return;
      }

      if (columnIndex === "1") {
        this.firstColumnImg = this.firstColumnImg.map((firstImage) => {
          return firstImage.id === image.id
            ? { ...firstImage, isFavorite: true }
            : firstImage;
        });
      } else if (columnIndex === "2") {
        this.secondColumnImg = this.secondColumnImg.map((secondImage) => {
          return secondImage.id === image.id
            ? { ...secondImage, isFavorite: true }
            : secondImage;
        });
      } else if (columnIndex === "3") {
        this.thirdColumnImg = this.thirdColumnImg.map((thirdImage) => {
          return thirdImage.id === image.id
            ? { ...thirdImage, isFavorite: true }
            : thirdImage;
        });
      }

      const filterFavoriteImages = this.favoriteImages.some(
        (fa_image) => fa_image.id === image.id
      );

      if (filterFavoriteImages) {
        Toast.fire({
          icon: "error",
          title: "已經存在收藏清單，請點選其它圖片",
        });
      } else {
        this.favoriteImages = [
          ...this.favoriteImages,
          { ...image, isFavorite: true },
        ];
        Toast.fire({
          icon: "success",
          title: "加入囉！",
        });
      }
    },
    deleteFavorite(imageId, columnIndex) {
      // isFavorite 改 false
      this.favoriteImages = this.favoriteImages.map((fa_image) => {
        return fa_image === imageId
          ? { ...fa_image, isFavorite: false }
          : { ...fa_image };
      });
      // 從收藏中刪除
      this.favoriteImages = this.favoriteImages.filter((fa_image) => {
        return fa_image.id !== imageId;
      });
      if (columnIndex === "1") {
        this.firstColumnImg = this.firstColumnImg.map((firstImage) => {
          return firstImage.id === imageId
            ? { ...firstImage, isFavorite: false }
            : firstImage;
        });
      } else if (columnIndex === "2") {
        this.secondColumnImg = this.secondColumnImg.map((secondImage) => {
          return secondImage.id === imageId
            ? { ...secondImage, isFavorite: false }
            : secondImage;
        });
      } else if (columnIndex === "3") {
        this.thirdColumnImg = this.thirdColumnImg.map((thirdImage) => {
          return thirdImage.id === imageId
            ? { ...thirdImage, isFavorite: false }
            : thirdImage;
        });
      }
      Toast.fire({
        icon: "success",
        title: "刪除囉！",
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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 5px;
    text-align: center;
    margin: 30px auto 0 auto;
    padding: 20px 0 60px 0;
    background: var(--transparent);
    overflow-y: scroll;
    max-height: 914px;

    .column {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      align-items: start;
      row-gap: 5px;

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
    .observer {
      width: 50px;
      height: 50px;
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
      grid-column-gap: 24px;

      .column {
        row-gap: 24px;
      }
    }
  }
}
</style>