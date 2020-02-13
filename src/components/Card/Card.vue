<template>
  <div class="card" :class="direction">
    <div class="card__favourite">
      <Icon name="star-full" fill="#FFC425" />
    </div>
    <div class="card__icon">
      <Icon name="tickets" fill="#E55300" />
    </div>
    <div class="card__title">Tickets {{ direction }}</div>
    <div class="card__description">Welcome to the Purchase Power portal here you can find lorem ipsum dolor sit amet consequescat.</div>
  </div>
</template>

<script>
import Icon from "../UI/Icons/Icons";

export default {
  name: "Card",
  props: {
    title: String,
    icon: String,
    description: String,
    link: String,
    direction: String  },
  components: {
    Icon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  box-sizing: border-box;
  height: 180px;
  width: 180px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(186, 186, 186, 0.25);
  color: black;
  display: flex;
  flex-direction: column;
  padding: 22px;
  transition: 0.5s;
  margin-right: 20px;
}

.card.right:hover {
    z-index: 2;
}

.card.left {
    position: absolute;
    top:0; right:0;
    z-index: 1;
}

.card.left:hover {
    width: 392px;
    transition: 0.5s;
}

.card:hover {
    width: 392px;
    transition: 0.5s;
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
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,0.6);
}

.card .card__description {
    align-self: flex-start;
    margin-bottom: 12px;
    font-size: 14px;
    display: none;
    width: 350px;
    /* animation: fadeout 1s; */
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

@keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
}

</style>
