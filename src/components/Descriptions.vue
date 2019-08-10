<template>
  <div class="container">
    <div class="columns is-marginless is-vcentered">
      <div class="column has-text-centered-mobile has-text-left-desktop">
        <img src="/images/ui.png" />
      </div>
      <div class="column description">
        <div class="rounded-icon-wrapper">
          <img src="/images/icon_1.png" >
        </div>
        <h3 class="title is-3">
          Take your docs anywhere
        </h3>
        <p>
          Take your docks anywhere. Save files on your computer then acces them
          on your phone from the road.Everything you keep in Dropbox is synced
          automatically to all your devices.
        </p>
        <a href="#" class="button is-purple has-shadown is-rounded">
          Buy now
        </a>
      </div>
    </div>
    <div class="columns is-marginless is-vcentered reverse-desktop">
      <div class="column has-text-centered-mobile has-text-left-desktop">
        <img src="/images/device.png" />
      </div>
      <div class="column description">
        <div class="rounded-icon-wrapper">
          <img src="/images/icon_1.png" >
        </div>
        <h3 class="title is-3">
          Work on slides together
        </h3>
        <p>
          Take your docks anywhere. Save files on your computer then acces them
          on your phone from the road.Everything you keep in Dropbox is synced
          automatically to all your devices.
        </p>
        <a href="#" class="button is-purple has-shadown is-rounded">
          Buy now
        </a>
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
    @media screen and (min-width: 1024px){
      padding-left: 5vw;
      padding-right: 5vw;
    }
    margin-bottom: 4rem;


    .reverse-desktop {
      padding-top: 5rem;
    }

    .description {
      @media screen and (min-width: 1024px){
        padding-left: 5rem;
        padding-right: 5rem;
      }

      .rounded-icon-wrapper {
        width: 55px;
        height: 55px;
        margin-bottom: 1rem;
        text-align: center;
        padding: 1rem;
        border-radius: 50%;
        background-color: white;
        -webkit-box-shadow: 0 9px 10px 0 rgba(0,0,0,0.06);
        -moz-box-shadow: 0 9px 10px 0 rgba(0,0,0,0.06);
        box-shadow: 0 9px 10px 0 rgba(0,0,0,0.06);
      }

      a {
        margin-top: 2rem;
        padding: 1.5rem 3rem;
      }
    }

  }
</style>
