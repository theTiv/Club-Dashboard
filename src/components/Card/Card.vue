<template>
  <div class="card" :class="[`card--${noCards}`]">
    <div class="card__favourite">
      <div v-if="favourite" @click="removeFav">
        <Icon name="star-full" fill="#FFC425" />
      </div>
      <div v-else @click="addFav">
        <Icon name="star-empty" fill="#FFC425" />
      </div>
    </div>
    <div class="card__icon">
      <Icon :name="cardData.icon" fill="#E55300" />
    </div>
    <div class="card__title">{{ cardData.title }}</div>
    <div class="card__description">
      {{ cardData.description }}
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
    favourite: Boolean,
    noCards: Number
  },
  methods: {
    addFav() {
      this.$emit("CardFavourited", this.cardData.id);
    },
    removeFav() {
      this.$emit("CardUnfavourited", this.cardData.id);
    }
  },
  components: {
    Icon
  }
};
</script>

<!-- Scoped to encapsulate CSS(Less) to this component only -->
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
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 22px;
  height: 180px;
  color: black;
  transition: 0.5s;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
}

.card:hover {
  transition: 0.5s;
  z-index: 2; /*we increase the z-index to cover the other*/
}

// 2 Card Row ***************************************************************/

.card--2:nth-child(2n + 1):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--2:nth-child(2n + 2):hover {
  margin-left: calc(-100% - 10px);
}

// 3 Card Row ***************************************************************/

.card--3:nth-child(3n + 1):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--3:nth-child(3n + 2):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--3:nth-child(3n + 3):hover {
  margin-left: calc(-100% - 10px);
}

// 4 Card Row ***************************************************************/

.card--4:nth-child(4n + 1):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--4:nth-child(4n + 2):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--4:nth-child(4n + 3):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--4:nth-child(4n + 4):hover {
  margin-left: calc(-100% - 10px);
}

// 5 Card Row ***************************************************************/

.card--5:nth-child(5n + 1):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--5:nth-child(5n + 2):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--5:nth-child(5n + 3):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--5:nth-child(5n + 4):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
.card--5:nth-child(5n + 5):hover {
  margin-left: calc(-100% - 10px);
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

.card__description {
  align-self: flex-start;
  margin-bottom: 12px;
  font-size: 14px;
  display: none;
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
