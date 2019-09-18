<template>
  <div id="app-main" :class="clasName">
    <Header />
    <div class="content">
      <router-view :key="$route.fullPath" class="animated animatedFadeInUp fadeInUp" />
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
export default {
  components: {
    Header
    // Footer
  },
  computed: {
    ...mapGetters(['getIsDesktop']),
    clasName() {
      let clasName = this.getIsDesktop ? '' : 'mobile'
      if (this.$route.name) {
        clasName = this.$route.name + ' ' + clasName
      }
      return clasName
    }
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
  font-size: 20px;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: $color-gray;
}
::-webkit-scrollbar-button ::-webkit-scrollbar-track {
  display: none;
  ::-webkit-scrollbar-thumb {
    background-color: $color-silver-light;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: $color-black-exact-light;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Muli', sans-serif;
}
a:visited,
a:focus,
a:active,
a:hover,
a {
  color: #22a0ea;
  text-decoration: none;
}
#app-main {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  &.home {
    background: none;
    .navHeader {
      display: none;
    }
    .content {
      padding: 0;
    }
  }
  .content {
    position: relative;
    padding-top: 130px;
    z-index: 10;
  }
}
.el-select-dropdown.el-popper {
  .el-select-dropdown__item {
    font-size: 24px;
    line-height: initial;
    &.selected {
      font-weight: 400;
      color: rgb(0, 130, 0);
    }
  }
}
.el-select .el-input.is-focus {
  .el-input__inner {
    border-color: rgb(0, 130, 0);
  }
}
/* Animation */

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  from {
    transform: translate3d(0, 40px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}

.animatedFadeInUp {
  opacity: 0;
}

.fadeInUp {
  opacity: 0;
  animation-name: fadeInUp;
  -webkit-animation-name: fadeInUp;
}

.mobile {
  &#app-main {
    background-size: contain;
    background-position: bottom;
  }
  .navHeader {
    position: relative;
    width: 100%;
    .logo {
      img {
        width: 100%;
      }
    }
  }
  .question {
    padding: 0 20px;
    &-answer {
      .el-form {
        display: block;
        margin: auto;
      }
      &.el-input,
      .el-input__inner {
        display: block;
        margin: auto;
      }
      &.el-date-editor {
        text-align: initial;
        margin-bottom: 22px;
      }
    }
    &-gif {
      position: absolute;
      left: 0;
      top: initial;
      right: 0;
      bottom: -200px;
      img {
        width: 150px;
      }
    }
    &-submit {
      float: initial;
      display: block;
      margin: auto;
      width: 100%;
      max-width: 300px;
    }
  }
}
</style>
