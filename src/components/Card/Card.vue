<template>
  <div
    class="card"
    :class="[{ active: hover }]"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card__favourite">
      <div v-if="favourite" @click="removeFav"><Icon name="star-full" fill="#FFC425" /></div>
      <div v-else @click="addFav"><Icon name="star-empty" fill="#FFC425" /></div>
    </div>
    <div class="card__icon">
      <Icon name="tickets" fill="#E55300" />
    </div>
    <div class="card__title">Tickets </div>
    <div class="card__description">
      {{ cardData.id }}
    </div>
  </div>
</template>

<script>
import Icon from "../UI/Icons/Icons";

export default {
  data() {
    return {
      hover: false
    };
  },
  name: "Card",
  props: {
    cardData: Object,
    favourite: Boolean
  },
  methods: {
  addFav(){
    this.$emit('CardFavourited', this.cardData.id)
  },
  removeFav(){
    this.$emit('CardUnfavourited', this.cardData.id)
  }
  },
  // methods: {
  //   addFav() {
  //     const cardData = this.cardData;
  //     this.newFav = cardData.id;
  //     this.favourites.push(this.newFav);
  //     this.saveFavs();
  //   },
  //   removeFav(x) {
  //     this.favourites.splice(x,1);
  //     this.saveFavs();
  //   },
  //   saveFavs() {
  //     let parsed = JSON.stringify(this.favourites);
  //     localStorage.setItem('favourites', parsed);
  //   }
  // },
  // methods: {
  //   addFav() {
  //     const cardData = this.cardData;
  //     this.newFav = cardData.id;
  //     this.favourites.push(this.newFav);
  //     this.saveFavs();
  //   },
  //   removeFav(x) {
  //     this.favourites.splice(x,1);
  //     this.saveFavs();
  //   },
  //   saveFavs() {
  //     let parsed = JSON.stringify(this.favourites);
  //     localStorage.setItem('favourites', parsed);
  //   }
  // },
  components: {
    Icon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../less/vars.less";
@import "../../less/mixins.less";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  // animation: animate 5s;
  box-sizing: border-box;
  height: 180px;
  width: 180px;
  min-width: 180px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  color: black;
  display: flex;
  flex-direction: column;
  padding: 22px;
  margin-right: 10px;
  transition: 0.5s;
  z-index: 1;
}

.card:hover {
  width: 390px;
  transition: 0.5s;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.card .card__favourite {
  transition: 0.5s;
}

.card:hover .card__favourite {
  margin-bottom: 0;
}

.card:hover .card__description {
  animation: fadein 2s;
  display: block;
  text-align: left;
  transition: 1s;
}

.card .card__description {
  /* animation: fadeout 2s; */
  display: block;
  text-align: left;
  transition: 1s;
}

.card__favourite {
  align-self: flex-end;
  margin-bottom: 36px;
}

.card__favourite svg {
  height: 24px;
  width: 24px;
}

.card__icon {
  align-self: flex-start;
  margin-bottom: 6px;
}

.card__title {
  align-self: flex-start;
  margin-bottom: 6px;
  .rem-px(font-size, 16);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
}

.card .card__description {
  align-self: flex-start;
  margin-bottom: 12px;
  font-size: 14px;
  display: none;
  width: 350px;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate {
  0% {
    opacity: 0;
    z-index: 2;
  }
  99% {
    opacity: 1;
    z-index: 2;
  }
  100% {
    z-index: 1;
  }
}
</style>
