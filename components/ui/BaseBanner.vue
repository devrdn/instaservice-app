<template>
  <div class="banner">
    <img class="banner__img" src="/img/expert-one/background.png" alt="background" />
    <p>{{ title }}</p>
    <nuxt-link to="/">
      <img class="banner__arrow" src="/img/expert-one/arrow.svg" alt="arrow" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  &__img {
    position: relative;
    z-index: 0;
    width: 100%;
  }
  p {
    position: absolute;
    font-size: 50px;
    font-weight: 800;
    color: $whiteColor;
    letter-spacing: 2px;
    @include rwdmax(450px) {
      font-size: 19px;
      //display: none;
      
    }
  }
  &__arrow {
    display: block;
    position: absolute;
    top: 10%;
    left: 7.5%;
    background: $whiteColor;
    padding: 15px;
    border-radius: 20px;
    @include rwdmax(325px) {
      padding: 5px;
    }
  }
}
</style>
