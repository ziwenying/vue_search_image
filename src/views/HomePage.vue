<template>
  <div id="top" class="main-container" ref="at_top">
    <Navbar @after-click-search="searchImg" />
    <SearchNavPills />
    <main
      class="img-wrapper scrollbar"
      style="scroll-behavior: smooth"
      ref="infinite_list"
    >
      <!-- v-for -->
      <div class="column">
        <div v-for="image in firstColumnImg" :key="image.id" class="img-outer">
          <img :src="image.regular" alt="image" class="image" />
          <div class="description">
            <p class="text">{{ image.createdAt }}</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div v-for="image in secondColumnImg" :key="image.id" class="img-outer">
          <img :src="image.regular" alt="image" class="image" />
          <div class="description">
            <p class="text">{{ image.createdAt }}</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div v-for="image in thirdColumnImg" :key="image.id" class="img-outer">
          <img :src="image.regular" alt="image" class="image" />
          <div class="description">
            <p class="text">{{ image.createdAt }}</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <a id="go-top" @click="goTop">
      <img class="arrow" src="@/assets/image/icon-gotop.png" alt="go-top" />
    </a>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SearchNavPills from "../components/SearchNavPills.vue";
import Footer from "../components/Footer.vue";
import imagesAPI from "./../apis/image";

export default {
  name: "HomePage",
  components: {
    Navbar,
    SearchNavPills,
    Footer,
  },
  data() {
    return {
      allImages: [],
      firstColumnImg: [],
      secondColumnImg: [],
      thirdColumnImg: [],
      page: 1,
    };
  },
  created() {
    this.fetchImages();
  },
  mounted() {
    const listScroll = this.$refs.infinite_list;
    listScroll.addEventListener("scroll", () => {
      const list = this.$refs.infinite_list;
      if (list.scrollTop + list.clientHeight + 1 >= list.scrollHeight) {
        console.log("load");
        this.fetchImages();
      }
    });
  },
  methods: {
    async fetchImages() {
      try {
        const response = await imagesAPI.images.getRandomImages();
        if (response.status !== 200) {
          throw new Error("無法取得圖片，請稍後再試");
        }
        console.log(response);
        this.images = response.data.map((image) => {
          return {
            id: image.id,
            createdAt: image.created_at,
            likeCounts: image.likes,
            regular: image.urls.regular,
            small: image.urls.small,
          };
        });
        // assign images
        this.firstColumnImg = [
          ...this.firstColumnImg,
          ...this.images.filter((image, index) => {
            return index < 10;
          }),
        ];
        this.secondColumnImg = [
          ...this.secondColumnImg,
          ...this.images.filter((image, index) => {
            return 10 <= index && index < 20;
          }),
        ];
        this.thirdColumnImg = [
          ...this.thirdColumnImg,
          ...this.images.filter((image, index) => {
            return 20 <= index && index < 30;
          }),
        ];
      } catch (error) {
        console.log(error);
      }
    },
    async searchImg(keyword) {
      try {
        const response = await imagesAPI.images.searchImages({
          keyword: keyword,
          page: this.page,
        });

        if (response.status !== 200) {
          throw new Error("無法取得圖片，請稍後再試");
        }
        console.log(response);
        this.images = response.data.results.map((image) => {
          return {
            id: image.id,
            createdAt: image.created_at,
            likeCounts: image.likes,
            regular: image.urls.regular,
            small: image.urls.small,
          };
        });
        // assign images
        this.firstColumnImg = [];
        this.firstColumnImg = [
          ...this.firstColumnImg,
          ...this.images.filter((image, index) => {
            return index < 10;
          }),
        ];
        this.secondColumnImg = [];
        this.secondColumnImg = [
          ...this.secondColumnImg,
          ...this.images.filter((image, index) => {
            return 10 <= index && index < 20;
          }),
        ];
        this.thirdColumnImg = [];
        this.thirdColumnImg = [
          ...this.thirdColumnImg,
          ...this.images.filter((image, index) => {
            return 20 <= index && index < 30;
          }),
        ];
      } catch (error) {
        console.log(error);
      }
    },
    goTop() {
      const scrollTop = this.$refs.infinite_list;
      console.log(scrollTop.scrollTop === 0);
      if (scrollTop.scrollTop > 0) {
        const toTop = () => {
          scrollTop.scrollTo(0, 0);
          console.log("click", this.$refs.at_top.scrollTop);
        };
        requestAnimationFrame(toTop);
        toTop();
      }
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

  .img-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 24px;
    padding: 20px 0 60px 0;
    background: var(--transparent);
    overflow-y: scroll;
    max-height: 914px;

    .column {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      align-items: start;
      row-gap: 24px;
      .img-outer {
        position: relative;
        width: 100%;
        height: 100%;
        .image {
          cursor: zoom-in;
        }

        .description {
          position: absolute;
          bottom: 0;
          display: none;
          .text {
            text-align: center;
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
      .description {
        display: block;
        width: 100%;
        height: 30px;
        background: var(--black);
        opacity: 0.75;
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