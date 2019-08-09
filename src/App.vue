<template>
  <div id="app">
    <div class="headerHeroWrapperBackground">
      <Header />
      <Hero />
    </div>
    <Descriptions />
    <Features />
    <Pricing />
    <CTA />
    <Brands />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Hero from './components/Hero';
import Descriptions from './components/Descriptions';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Brands from './components/Brands';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Descriptions,
    Features,
    Pricing,
    CTA,
    Brands,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
