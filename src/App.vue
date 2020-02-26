<template>
  <div id="app" class="container">
    <header class="header">
      <h2 class="site-title">GAA Width: {{ window.width }}, Height: {{ window.height }}, Cards: {{ window.cards }}</h2>
    </header>
    <Workspace
      class="workspace"
      :sections="sections"
      :favourites="favourites"
    />
    <Notifications class="notifications" :notifications="notifications" />
  </div>
</template>

<script>
import Workspace from "./components/Workspace/Workspace";
import Notifications from "./components/Notifications/Notifications";

export default {
  name: "App",
  data() {
    return {
      sections: this.$root.$data.sections,
      notifications: this.$root.$data.notifications,
      favourites: [],
      window: {
        width: 0,
        height: 0,
        cards: 0
      }
    };
  },
  components: {
    Workspace,
    Notifications
  },
created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      const width = this.window.width;
      let cards;
      switch(true) {
        // Small devices
        case (width < 576):
          cards = 2;
        break;
        // Medium devices
        case (width < 768):
          // code block
            cards = 2;
          break;
          // Large devices
        case (width < 992):
          // code block
            cards = 3;
          break;
        // Large devices
        case (width < 1200):
            cards = 4;
          break;
        // Extra large devices
        case (width >= 1200):
            cards = 5;
          break;
      }
            this.window.cards = cards;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  grid-area: header;
  color: #005e82;
}
.workspace {
  grid-area: main;
  background-color: #005e82;
  color: white;
  padding-right: 20px;
}
.notifications {
  grid-area: sidebar;
  background-color: #3485ab;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}

.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header header"
    "main main sidebar";
}
</style>
