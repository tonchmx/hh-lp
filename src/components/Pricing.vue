<template>
  <div class="container">
    <div class="columns is-marginless is-vcentered">
      <div class="column is-one-third" data-aos="fade" data-aos-once="true">
        <h3 class="title is-3 has-text-centered-mobile">
          Simple pricing.
        </h3>
        <p class="has-text-centered-mobile">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          ratione. Sunt qui dolorum id earum aspernatur aperiam sint
          perspiciatis? Delectus expedita nobis minima! Quidem, dolore commodi?
          Voluptate consectetur odit odio.
        </p>
        <div class="comment columns is-mobile is-vcentered">
          <div class="column is-4-touch is-2-desktop has-text-centered">
            <img src="/images/avatar_small.png" />
          </div>
          <div class="column">
            <p class="is-size-7">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              deserunt alias quia et aperiam dolor modi, reiciendis quas ullam?
              Maxime, exercitationem. Quos dolore enim corrupti velit nihil
              minima consequatur eius.
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="colum is-marginless">
          <div class="columns is-vcentered">
            <div
              v-for="(pricing, index) in pricings"
              :key="index"
              class="column pricing"
              data-aos="fade-left"
              data-aos-once="true"
              :data-aos-delay="index * 250"
            >
              <div class="has-text-centered">
                <h4 class="title is-4">
                  {{ pricing.name }}
                </h4>
                <ul>
                  <li
                    v-for="(feature, indexi) in pricing.features"
                    :key="indexi"
                  >
                    <b>{{ feature }}</b>
                  </li>
                </ul>
                <a href="#" class="button is-rounded is-purple has-shadow">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pricings: [
        {
          name: 'FREE',
          features: [
            'Unlimited Access',
            '5,000 subscribers',
            'Custom domain',
            'PayPal & credit card payments',
            'Instant payouts',
            'WebSite & conversion tracking'
          ]
        },
        {
          name: 'Premium',
          features: [
            'Better permissions',
            'All integration',
            'Unlimited Access',
            '30,000 subscribers',
            'Custom domain',
            'PayPal & credit card payments',
            'Instant payouts',
            'WebSite & conversion tracking',
            '99.9% uptime SLA',
            'Basic support via email'
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 8rem;
}
p {
  margin-bottom: 2rem;
}

.comment {
  p {
    margin-bottom: 0;
  }
}

.pricing {
  background-color: white;
  padding-top: 4rem;
  padding-bottom: 4rem;
  -webkit-box-shadow: 0px 9px 19px 0px rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0px 9px 19px 0px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 9px 19px 0px rgba(0, 0, 0, 0.07);
  border-radius: 5px;

  @media screen and (min-width: 1024px) {
    &:nth-child(1) {
      margin-left: 0.75rem;
    }
    &:nth-child(2) {
      z-index: 2;
      margin-right: 0.75rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 1rem 25vw;
  }

  @media screen and (max-width: 767px) {
    margin: 0.75rem 1rem;
  }

  h4 {
    margin-bottom: 2.5rem;
  }

  li {
    margin-bottom: 1rem;
    color: #8c8c8c;
  }

  a {
    margin-top: 2rem;
    padding: 1.5rem 3rem;
  }
}
</style>
