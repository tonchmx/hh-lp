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
  name: 'App',
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
