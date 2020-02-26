<template>
  <div>
    <div class="workspace__container">
      <div class="workspace__favourites">
        <header class="workspace__header">
          <h2 class="workspace__title">My Favourites</h2>
        </header>
        <section class="workspace__content">
          <template v-for="(section, i) in favourites">
            <Card
              :favourite="true"
              :cardData="section"
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
        <section class="workspace__content">
          <template v-for="(section, i) in displaySections">
            <Card
              :favourite="false"
              :cardData="section"
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
// var results = [];

export default {
  components: {
    Card
  },
  data() {
    return {
      favourites: [],
      // results: [],
      newFav: {}
    };
  },
  computed: {
    displaySections: function() {
      var results = [];
      this.sections.forEach(sourceElement => {
        // console.log(this.favourites)
        let targetElement = this.favourites.find(targetElement => {
          return sourceElement["id"] === targetElement["id"];
        });
        //  console.log('targetElements')
        // console.log(this.favourites)
        targetElement ? "" : results.push(sourceElement);
      });
      //  console.log('results')
      //  console.log(results)
      return results;
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
    sections: Array
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
  /* max-width: 1200px;
  margin: 0 auto;
  display: grid;
  position: relative;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 180px)); */
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, minmax(100px, auto));
  grid-template-rows: repeat(3, minmax(100px, auto));
}

@media only screen and (min-width: 789px) {
  .workspace__content {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
