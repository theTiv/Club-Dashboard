<template>
  <div>
    <div class="workspace__container">
      <div class="workspace__favourites">
        <header class="workspace__header">
          <h2 class="workspace__title">My Favourites</h2>
        </header>
        <section class="workspace__content">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </div>
      <div class="workspace__sections">
        <header class="workspace__title">
          <h2 class="workspace__header">Workspace</h2>
        </header>
        <section class="workspace__content">
          <Card direction="right" />
          <Card direction="right" />
          <Card direction="right" />
          <Card direction="left" />
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
  },
};
</script>

<style>
.workspace__container {
  margin-left: 50px;
}

.workspace__title {
  text-align: left;
}

/* .workspace__content {
  display: flex;
} */
.workspace__content {
  display: grid;
   width: 100%;
  grid-template-columns:repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 10px;
  color: #444;
  position: relative;
}


</style>
