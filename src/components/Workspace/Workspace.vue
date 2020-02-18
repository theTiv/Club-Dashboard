<template>
  <div>
    <div class="workspace__container">
      <div class="workspace__favourites">
        <header class="workspace__header">
          <h2 class="workspace__title">My Favourites</h2>
        </header>
        <section class="workspace__content">
        </section>
      </div>
      <div class="workspace__sections">
        <header class="workspace__title">
          <h2 class="workspace__header">Workspace</h2>
        </header>
        <section class="workspace__content">
          <!-- <Card v-for="section in sections" :key="section"></Card> -->
          <Card />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
/* Your JS goes here */
import Card from "../Card/Card";

export default {
  components: {
    Card
  },
  props: {
    direction: String
  }
};
</script>

<style>
.workspace__container {
  margin-left: 50px;
}

.workspace__title {
  text-align: left;
}

.workspace__content {
  /* display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  align-content: space-around;
  justify-content: space-between;
  grid-gap: 10px;
  color: #444;
  position: relative; */
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
   position: relative;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}
</style>
