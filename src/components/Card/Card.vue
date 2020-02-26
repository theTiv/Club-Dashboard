<template>
  <div :class="[`item-${cardData.id}`]">
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
    <styled-button
      :color="dynColor"
      :br="dynBr + 'px'"
      :pad="dynPad + 'px'"
      :bgc="dynBgc"
    >I am a dynamically styled button. Change the fields below!</styled-button>
    </div>
  </div>
</template>

<script>
import Icon from "../UI/Icons/Icons";
import { StyledButton } from "../../styled-components/styled-cards";

export default {
  data() {
    return {
      hover: false,
      dynColor: "#ffffff",
      dynBr: 10,
      dynPad: 15,
      dynBgc: "#4ABB00"
    };
  },
  name: "Card",
  props: {
    cardData: Object,
    favourite: Boolean
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
    Icon,
    StyledButton
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

[class^="item"] {
  text-align: center;
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

[class^="item"]:hover {
  transition: 0.5s;
  z-index: 2; /*we increase the z-index to cover the other*/
}

[class^="item"]:nth-child(3n + 1):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
[class^="item"]:nth-child(3n + 2):hover {
  margin-right: calc(-100% - 10px); /* we remove (2 x grid items + 2 x gap) */
}
[class^="item"]:nth-child(3n + 3):hover {
  margin-left: calc(-100% - 10px);
}

.item .card__favourite {
  transition: 0.5s;
}

[class^="item"]:hover .card__favourite {
  margin-bottom: 0;
}

[class^="item"]:hover .card__description {
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
