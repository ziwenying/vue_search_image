<template>
  <nav class="nav-pills-wrapper">
    <div class="color-tone">
      <label for="color-btn" class="color-tone-title"
        >Color Tone about image</label
      >
      <ul id="color-btn" class="color-tone-panel">
        <li class="color-wrapper">
          <div class="color black"></div>
        </li>
        <li class="color-wrapper">
          <div class="color white"></div>
        </li>
        <li class="color-wrapper">
          <div class="color yellow"></div>
        </li>
        <li class="color-wrapper">
          <div class="color orange"></div>
        </li>
        <li class="color-wrapper">
          <div class="color red"></div>
        </li>
        <li class="color-wrapper">
          <div class="color purple"></div>
        </li>
        <li class="color-wrapper">
          <div class="color magenta"></div>
        </li>
        <li class="color-wrapper">
          <div class="color green"></div>
        </li>
        <li class="color-wrapper">
          <div class="color teal"></div>
        </li>
        <li class="color-wrapper">
          <div class="color blue"></div>
        </li>
      </ul>
    </div>
    <div class="sort-panel">
      <label for="sort-btn" class="sort-panel-title">Sort by</label>
      <ul id="sort-btn" class="sort">
        <li class="sort-way">Relevance</li>
        <li class="sort-way">Newest</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SearchNavPills",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/application.scss";

.nav-pills-wrapper {
  margin-top: 20px;
  width: 80%;
  text-align: center;
  .color-tone {
    position: relative;
    width: 100%;
    height: 100%;
    background: $black;
    border-radius: 15px;
    animation: spin 3s linear infinite;
    @keyframes spin {
      0% {
        background-image: linear-gradient(
          90deg,
          #5ddcff 0%,
          #3c67e3 50%,
          #4e00c2 90%
        );
      }
      25% {
        background-image: linear-gradient(
          90deg,
          #5ddcff 10%,
          #3c67e3 70%,
          #4e00c2 100%
        );
      }
      50% {
        background-image: linear-gradient(
          90deg,
          #5ddcff 20%,
          #3c67e3 90%,
          #4e00c2 100%
        );
      }
      75% {
        background-image: linear-gradient(
          90deg,
          #5ddcff 10%,
          #3c67e3 70%,
          #4e00c2 100%
        );
      }
      100% {
        background-image: linear-gradient(
          90deg,
          #5ddcff 0%,
          #3c67e3 50%,
          #4e00c2 90%
        );
      }
    }
    .color-tone-title {
      display: inline-block;
      padding: 5px 0 0 0;
      font-weight: 700;
      color: $white;
    }
    .color-tone-panel {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fill, minmax(0, 20px));
      grid-gap: 1rem;
      padding: 5px 28%;
      .color-wrapper {
        padding: 3px;
        width: 22px;
        height: 22px;
        background: var(--transparent);
        &:hover {
          display: inline-block;
          padding: 3px;
          width: 22px;
          height: 22px;
          background: var(--hover);
          border-radius: 50%;
        }
        .color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px #8b9aa780 solid;
          cursor: pointer;
        }
        .black {
          background: $black;
        }
        .white {
          background: $white;
        }
        .yellow {
          background: $yellow;
        }
        .orange {
          background: $orange;
        }
        .red {
          background: $red;
        }
        .purple {
          background: $purple;
        }
        .magenta {
          background: $magenta;
        }
        .green {
          background: $green;
        }
        .teal {
          background: $teal;
        }
        .blue {
          background: $blue;
        }
      }
    }
  }

  .sort-panel {
    position: relative;
    margin: 15px 0 0 0;
    width: 100%;
    height: 100%;
    background: $black;
    border-radius: 15px;
    .sort-panel-title {
      display: inline-block;
      padding: 5px 0 0 0;
      font-weight: 700;
      color: $white;
    }
    .sort {
      display: flex;
      justify-content: center;
      padding: 5px 0 10px 0;
      .sort-way {
        margin: 0 5px 0 0;
        padding: 5px;
        border: 1px #8b9aa780 dashed;
        border-radius: 20px;
        color: $white;
        cursor: pointer;

        &:hover {
          background: var(--hover);
          color: $white;
        }
      }
    }
  }
}
@media screen and (min-width: 767px) {
}
</style>