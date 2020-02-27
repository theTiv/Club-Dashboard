<template>
  <div id="app" class="container">
    <header class="header">
      <h2 class="site-title">GAA Width: {{ window.width }}, Height: {{ window.height }}, Cards: {{ window.cards }}</h2>
    </header>
    <Workspace
      class="workspace"
      :sections="sections"
      :favourites="favourites"
      :cards="window.cards"
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
        case (width < 992):
          cards = 2;
        break;
        // Medium devices
        case (width < 1100):
          // code block
            cards = 3;
          break;
          // Large devices
        case (width < 1400):
          // code block
            cards = 4;
          break;
        // Large devices
        // case (width < 1680):
        //     cards = 4;
        //   break;
        // Extra large devices
        case (width >= 1400):
            cards = 5;
          break;
      }
            this.window.cards = cards;
    }
  }
};
</script>

<style lang="less">
@import "./less/vars.less";
@import "./less/mixins.less";

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
  padding-top: 30px;
  grid-area: main;
  background-color: #005e82;
  color: white;
  padding-right: 20px;
      padding-bottom: 50px;
}

.workspace__sections {
  padding-top: 30px;
}

aside.notifications {
  display: none;
  background-color: #3485ab;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
    .responsive(768px, {
      display: grid;
  grid-area: sidebar;
  background-color: #3485ab;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
    });

}

.container {
display: block;
width: 100%;
    .responsive(768px, {
    display: grid;
  // height: 100vh;
      grid-template-columns: 1fr 1fr 300px;
    });
    .responsive(840px, {
        grid-template-columns: 1fr 1fr 1fr;
    });
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
    .responsive(768px, {
      grid-template-areas:
      "header header header"
      "main main sidebar";
    });
}
</style>
