<template>
  <footer>
    <div class="container has-text-centered">
      <ul class="footer-links">
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.url" :title="link.label">{{ link.label }}</a>
        </li>
      </ul>

      <p class="small-font">Follow us <a href="#">@themefhisher</a> updates</p>

      <p class="small-font">Copyright {{ year }} - Themefisher</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { label: 'Features', url: '#' },
        { label: 'Pricing', url: '#' },
        { label: 'Support', url: '#' },
        { label: 'Contact', url: '#' }
      ]
    };
  },
  computed: {
    year() {
      const now = new Date();
      return now.getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #2f2e3d;
  padding-top: 3rem;
  padding-bottom: 2rem;

  .footer-links {
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5rem;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 50px;
        @media screen and (max-width: 767px) {
          margin-right: 20px;
        }
      }
    }
  }

  p {
    color: #cccccc;
  }

  a {
    color: white;
    &:hover {
      color: darken($color: white, $amount: 25%);
    }
  }

  .small-font {
    font-size: 0.8rem;
  }
}
</style>
