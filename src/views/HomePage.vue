<template>
  <div id="top" class="main-container" ref="at_top">
    <Navbar />
    <SearchNavPills />
    <main class="img-wrapper scrollbar" ref="infinite_list">
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
    <!-- <GoTop /> -->
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import SearchNavPills from "../components/SearchNavPills.vue";
import Footer from "../components/Footer.vue";
// import GoTop from "../components/GoTop.vue";
import imagesAPI from "./../apis/image";

export default {
  name: "HomePage",
  components: {
    Navbar,
    SearchNavPills,
    Footer,
    // GoTop,
  },
  data() {
    return {
      allImages: [],
      firstColumnImg: [],
      secondColumnImg: [],
      thirdColumnImg: [],
    };
  },
  created() {
    this.fetchImages();
  },
  mounted() {
    const listScroll = this.$refs.infinite_list;
    listScroll.addEventListener("scroll", () => {
      const list = this.$refs.infinite_list;
      console.log("scrollTop", list.scrollTop);
      console.log("clientHeight", list.clientHeight);
      console.log("scrollHeight", list.scrollHeight);
      if (list.scrollTop + list.clientHeight + 1 >= list.scrollHeight) {
        console.log("load");
        // this.loadMore();
      }
    });
  },
  methods: {
    async fetchImages() {
      try {
        const response = await imagesAPI.images.getImages();
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

        // this.firstColumnImg = this.images.filter((image, index) => {
        //   return index < 10;
        // });

        if (this.firstColumnImg.length !== 0) {
          [
            ...this.firstColumnImg,
            ...this.images.filter((image, index) => {
              return index < 10;
            }),
          ];
        }
        console.log(this.firstColumnImg);
        this.secondColumnImg = this.images.filter((image, index) => {
          return 10 <= index && index < 20;
        });
        this.thirdColumnImg = this.images.filter((image, index) => {
          return 20 <= index && index < 30;
        });
      } catch (error) {
        console.log(error);
      }
    },
    // loadMore() {

    // },
    // async handleSubmit() {
    //   try {
    //   } catch (error) {}
    // },
    goTop() {
      // this.$refs.at_top;
      console.log(this.$refs.at_top.scrollTop);
      const scrollTop = this.$refs.infinite_list.scrollTop;

      if (scrollTop > 0) {
        window.requestAnimationFrame(scrollTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
        console.log(this.$refs.at_top.scrollTop);
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

  .img-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 24px;
    padding: 20px 0 60px 0;
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
      .img-outer {
        .image {
        }
        .description {
        }
      }

      .img-outer:hover {
        .description {
        }
      }
    }
  }
}
</style>