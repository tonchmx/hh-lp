<template>
  <div class="container">
    <div class="columns is-marginless is-vcentered">
      <div class="column has-text-centered-mobile">
        <h1 class="title has-text-white">
          A Life in Design
        </h1>
        <p class="has-text-white is-size-5">
          You can have an art experience in front of a Rembrandt, or in front
          of a pice of graphic design.
        </p>
        <a href="#" class="button is-rounded is-large is-black has-shadow has-text-centered">
          Get Started Now
        </a>
      </div>
      <div class="column has-text-centered has-text-right-desktop">
        <img src="/images/device.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 4rem;
    z-index: 2;
  }

  h1 {
    font-size: 3.75rem;
  }

  .button {
    margin-top: 3rem;
    @media screen and (max-width: 767px){
      padding: 2rem 4rem !important;
    }
  }
</style>
