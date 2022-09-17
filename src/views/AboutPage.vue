<template>
  <div class="main-container">
    <Navbar />
    <main class="main-wrapper">
      <ul class="function">
        <li class="function-intro">
          <h3 class="intro">
            本網頁為簡易圖庫，串接 unsplash api，具有搜尋、收藏等功能。
          </h3>
        </li>
        <li class="function-intro">
          <h5 class="title">一、導覽列：</h5>
          <p class="text">可以切換 dark mode。</p>
        </li>
        <li class="function-intro">
          <h5 class="title">二、首頁：</h5>
          <p class="text">
            1. 進入首頁可隨機取得 30 張圖片，因為是隨機，可能出現重複圖片。
          </p>
          <p class="text">
            2.
            在「輸入有效關鍵字」的情況下，可使用篩選「圖片色調」和「排序」的功能。
          </p>
          <p class="text">3. 瀏覽圖片滑到下面會再請求另外 30 張圖片。</p>
          <p class="text">4. 右下角有往上的箭頭，點擊後可回到靠近頂端處。</p>
        </li>
        <li class="function-intro">
          <h5 class="title">三、收藏頁：</h5>
          <p class="text">
            圖片可加入收藏和刪除，並在收藏頁面可看到，最多可以收藏 30 張。
          </p>
        </li>
        <li class="function-intro">
          <h5 class="title">四、關於頁：</h5>
          <p class="text">無特別功能。</p>
        </li>
        <li class="function-intro">
          <h5 class="title">五、API:</h5>
          <p class="text">https://api.unsplash.com/</p>
        </li>
      </ul>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { mapState } from "vuex";

export default {
  name: "AboutPage",
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapState(["darkMode"]),
  },
  data() {
    return {};
  },
  mounted() {
    if (this.darkMode) {
      this.toggleMode();
    }
  },
  methods: {
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
  height: 100vh;
  margin: 0 auto;
  background: var(--body-bg);
  color: var(--font-blue);
  font-weight: 600;

  .main-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 40px 0 20px 0;

    .function {
      .intro {
        margin: 0 0 20px 0;
        font-weight: 600;
      }

      .function-intro {
        margin: 10px;
        .text {
          padding: 5px;
        }
      }
    }
  }
}
</style>