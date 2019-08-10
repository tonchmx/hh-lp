<template>
  <div class="container">
    <p class="has-text-centered">
      <b>We Were Featured By</b>
    </p>
    <ul class="brands">
      <li v-for="(brand, index) in brands" :key="index">
        <img :src="brand.src" :alt="brand.name" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        { name: 'Panasonic', src: '/images/brand_1.png' },
        { name: 'Pano Pro', src: '/images/brand_2.png' },
        { name: 'townwizard', src: '/images/brand_3.png' },
        { name: 'erodr', src: '/images/brand_4.png' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-bottom: 4rem;
  }
  .brands {
    text-align: center;
    margin-top: 1rem;
    li {
      display: inline-block;
    }
  }
</style>
