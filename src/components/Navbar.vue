<template>
  <nav class="nav-wrapper">
    <router-link :to="{name: 'home-page'}" class="logo">
      <img class="logo-img" src="~@/assets/image/ziwen-nobk.png" alt="logo">
    </router-link>

    <div class="search">
      <input class="searcher" type="text">
      <div class="icon-wrapper">
        <i class="fas fa-times deleted"></i>
        <i class="fas fa-search"></i>
      </div>
    </div>
    <label for="toggle-btn" class="hamburger-icon">
      <i class="fas fa-bars"></i>
    </label>
    <label for="toggle-btn" class="icon d-none">
      <i class="fas fa-times"></i>
    </label>
    <input class="icon-toggle d-none" type="checkbox" name="toggle" id="toggle-btn">
    <!-- item list -->
    <ul class="list">
      <li class="item">
        <router-link :to="{name: 'home-page'}" class="item-link">Home</router-link>
      </li>
      <li class="show item">
        <p class="item-text">
          <router-link :to="{name: 'about-page'}" class="  item-link">Info</router-link>
          <i class="fas fa-chevron-down"></i>
        <ul class="item-child-outer">
          <li class="item-child">
            <router-link :to="{name: 'about-page'}" class="item-link">About the website</router-link>
          </li>
          <li class="item-child">
            <a href="https://unsplash.com/" class="item-link" target='_blank'>Photo from Unsplash</a>
          </li>
        </ul>
        </p>
      </li>
      <li class="item item-icon">
        <i class="icon fa fa-facebook"></i>
        <i class="icon fa fa-instagram"></i>
        <i @click="toggleMode" class="icon fas fa-moon"></i>
        <i class="icon fas fa-sun"></i>
      </li>
    </ul>
    <router-link :to="{name: 'home-page'}" class="cp-logo d-none">
      <img class="logo-img" src="~@/assets/image/ziwen-nobk.png" alt="logo">
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    toggleMode() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/application.scss";

.nav-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  height: 95px;
  color: var(--font-blue);
  background: var(--body-bg);
  z-index: 1;

  .logo {
    margin: 0 10px;
    .logo-img {
      width: 78px;
      height: 78px;
    }
  }

  .search {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 60%;
    height: 25px;
    border: 1px var(--font-blue) solid;
    border-radius: 20px;

    .searcher {
      width: 70%;
      border: none;
    }

    .icon-wrapper {
      display: flex;
      margin: 0 10px 0 0;
      .deleted,
      .fa-search {
        font-size: 14px;
        margin: 0 0 0 10px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }

  .hamburger-icon,
  .fa-bars {
    margin: 0 20px 0 0;
    color: var(--font-yellow);
    cursor: pointer;
  }

  .list {
    position: absolute;
    top: 100%;
    transform: scale(1, 0);
    text-align: center;
    width: 100%;
    background: var(--body-bg);
    z-index: 1;

    .item {
      padding: 10px 30px;

      .item-link {
        color: var(--font-blue);
        &:hover {
          color: var(--font-yellow);
          text-decoration: underline;
        }
      }
    }

    .item:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .fa-chevron-down {
        margin: 3px;
        font-size: 16px;
        &:hover {
          color: var(--font-yellow);
          cursor: pointer;
        }
      }

      .item-child-outer {
        position: absolute;
        top: 130%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 20px 0 0 0;
        padding: 10px 0 0 0;

        .item-child {
          padding: 5px 0 0 0;
        }
      }
    }

    .item-icon {
      margin: 10px 0 0 0;
      padding: 60px 0 10px 0;

      .icon {
        margin: 5px;
        &:hover {
          color: var(--font-yellow);
          cursor: pointer;
        }
      }

      .fa-sun {
        display: none;
      }
    }
  }

  .icon-toggle:checked ~ .list {
    transform: scale(1, 1);
  }
}

@media screen and (min-width: 767px) {
  .nav-wrapper {
    justify-content: center;
    position: sticky;
    top: 0;
    .logo {
      .logo-img {
      }
    }

    .search {
      margin: 0;
      width: 50%;
      .searcher {
      }

      .fa-search {
      }
    }

    .hamburger-icon {
      display: none;
    }

    .list {
      all: unset;
      display: flex;
      transform: scale(1, 1);
      color: var(--font-blue);
      .item {
        display: flex;
        align-items: center;
      }

      .item:nth-child(2) {
        .item-child-outer {
          display: none;
          text-align: center;
          .item-child {
            padding: 10px 0;
            white-space: nowrap;
          }
        }
      }

      .show.item:nth-child(2) {
        &:hover {
          .item-child-outer {
            display: block;
            background: var(--body-bg);
            padding: 0 10px 0 10px;
            border-radius: 10px;
          }
        }
      }

      .item-icon {
        margin: 0;
        padding: 0;
        .icon {
          padding: 0 10px;
        }
      }
    }

    .cp-logo {
      // display: block;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 100px;
      height: 100px;
      background: var(--body-bg);
    }
  }
}
</style>