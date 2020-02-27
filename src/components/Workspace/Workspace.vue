<template>
  <div>
    <div class="workspace__container">
      <div class="workspace__favourites">
        <header class="workspace__header">
          <h2 class="workspace__title">My Favourites</h2>
        </header>
        <section class="workspace__content" :class="cardsPerRow">
          <template v-for="(section, i) in favourites">
            <Card
              :favourite="true"
              :cardData="section"
              :noCards="cards"
              :key="i"
              @CardFavourited="addFav(section)"
              @CardUnfavourited="removeFav(section)"
            ></Card>
          </template>
        </section>
      </div>
      <div class="workspace__sections">
        <header class="workspace__title">
          <h2 class="workspace__header">Workspace</h2>
        </header>
        <section class="workspace__content" :class="cardsPerRow">
          <template v-for="(section, i) in displaySections">
            <Card
              :favourite="false"
              :cardData="section"
              :noCards="cards"
              :key="i"
              @CardFavourited="addFav(section)"
              @CardUnfavourited="removeFav(section)"
            ></Card>
          </template>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      favourites: [],
      newFav: {}
    };
  },
  computed: {
    displaySections() {
      var results = [];
      this.sections.forEach(sourceElement => {
        let targetElement = this.favourites.find(targetElement => {
          return sourceElement["id"] === targetElement["id"];
        });
        targetElement ? "" : results.push(sourceElement);
      });
      return results;
    },
    cardsPerRow() {
      return `workspace__row--${this.cards}-cards`;
    }
  },
  mounted() {
    if (localStorage.getItem("favourites")) {
      try {
        this.favourites = JSON.parse(localStorage.getItem("favourites"));
      } catch (e) {
        localStorage.removeItem("favourites");
      }
    }
  },
  methods: {
    addFav(value) {
      // console.log(value)
      this.newFav = value;
      const matchingValue = this.favourites.includes(this.newFav);
      if (!matchingValue) {
        this.favourites.push(this.newFav);
        this.saveFavs();
      }
    },
    removeFav(value) {
      for (var i = 0; i < this.favourites.length; i++) {
        if (this.favourites[i] === value) {
          this.favourites.splice(i, 1);
        }
      }
      this.saveFavs();
    },
    saveFavs() {
      let parsed = JSON.stringify(this.favourites);
      localStorage.setItem("favourites", parsed);
    }
  },
  props: {
    sections: Array,
    cards: Number
  }
};
</script>

<style>
.workspace__container {
  margin: 0 32px;
}

.workspace__title {
  text-align: left;
}

.workspace__content {
  display: grid;
  grid-gap: 10px;
}

.workspace__row--2-cards {
  grid-template-columns: repeat(2, minmax(auto, 1fr));
}

.workspace__row--3-cards {
  grid-template-columns: repeat(3, minmax(100px, 180px));
}

.workspace__row--4-cards {
  grid-template-columns: repeat(4, minmax(100px, 180px));
}

.workspace__row--5-cards {
  grid-template-columns: repeat(5, minmax(100px, 180px));
}
</style>
