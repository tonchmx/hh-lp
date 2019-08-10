<template>
  <div class="bg-blue">
    <div class="container">
      <h3 class="title is-3 has-text-centered has-text-white">
        Our Global Features
      </h3>
      <div class="columns is-multiline is-mobile is-marginless">
        <div
          v-for="(feature, index) in features" :key="index"
          class="column is-12-mobile is-6-tablet is-3-desktop has-text-centered"
        >
          <img :src="feature.image" />
          <p class="has-text-centered has-text-white">
            <b>{{ feature.title }}</b>
            <br />
            <br />
            {{ feature.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          image: '/images/icon_2.png',
          title: 'Broadcast your research',
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            maiores rem a nihil, sequi possimus culpa natus eos inventore fugit.`
        },
        {
          image: '/images/icon_3.png',
          title: 'Built for print',
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            maiores rem a nihil, sequi possimus culpa natus eos inventore fugit.`
        },
        {
          image: '/images/icon_4.png',
          title: 'One page only',
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            maiores rem a nihil, sequi possimus culpa natus eos inventore fugit.`
        },
        {
          image: '/images/icon_5.png',
          title: 'Job applications',
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            maiores rem a nihil, sequi possimus culpa natus eos inventore fugit.`
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .bg-blue {
    background-color: #509AEE;

    @media screen and (min-width: 768px) {
      background: #509AEE url('/images/map_bg.png') no-repeat center center;
    }

    .container {
      padding-top: 6rem;
      padding-bottom: 8rem;
      margin-bottom: 8rem;

      h3 {
        margin-bottom: 6rem;
      }

      img {
        margin-bottom: 1rem;
      }

      p {
        padding: 0 2rem;
      }
    }
  }
</style>
