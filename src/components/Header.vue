<template>
  <div class="navHeader">
    <router-link to="/" exact class="logo">Header</router-link>
  </div>
</template>
<style lang="scss">
.navHeader {
  position: absolute;
  top: 0;
  z-index: 9;
  .right {
    float: right;
    height: 135px;
    width: initial;
  }
  img {
    width: 300px;
  }
  .logo {
    float: left;
    img {
      // background-color: #c5e0b4;
      // border: 1px solid rgb(0, 130, 0);
    }
  }
}
</style>
