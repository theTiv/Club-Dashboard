<template>
  <div id="app" class="container">
    <header class="header">
      <Icon
        class="header__logo"
        name="GAAlogo"
        fill="#006792"
        :iconWidth="74"
        :iconHeight="28"
        iconViewBox="0 0 74 28"
      />
      <div class="header__notifications">
        <Icon
          name="alarm"
          fill="#006792"
          :iconWidth="16"
          :iconHeight="16"
          iconViewBox="0 0 16 16"
          @click="notificationWindow()"
        />
      </div>
    </header>
    <Workspace
      class="workspace"
      :sections="sections"
      :favourites="favourites"
      :cards="window.cards"
    />
    <Notifications
      class="notifications"
      :class="{ notifications__inactive: isInactive }"
      :notifications="notifications"
    />
  </div>
</template>

<script>
import Workspace from "./components/Workspace/Workspace";
import Notifications from "./components/Notifications/Notifications";
import Icon from "./components/UI/Icons/Icons";

export default {
  name: "App",
  data() {
    return {
      sections: this.$root.$data.sections,
      notifications: this.$root.$data.notifications,
      favourites: [],
      isInactive: true,
      window: {
        width: 0,
        height: 0,
        cards: 0
      }
    };
  },
  components: {
    Workspace,
    Notifications,
    Icon
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      const width = this.window.width;
      let cards;
      /* Device detection required to calculate number of cards per row and which end card to animate left */
      switch (true) {
        // Small devices
        case width < 992:
          cards = 2;
          break;
        // Medium devices
        case width < 1100:
          // code block
          cards = 3;
          break;
        // Large devices
        case width < 1400:
          // code block
          cards = 4;
          break;
        // Extra large devices
        case width >= 1400:
          cards = 5;
          break;
      }
      this.window.cards = cards;
      console.log("GAA: Window Object");
      console.log(`Width: ${this.window.width}`);
      console.log(`Height: ${this.window.height}`);
      console.log(`Cards per row: ${this.window.cards}`);
    },
    notificationWindow() {
      this.isInactive = !this.isInactive;
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
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 68px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 36px;
}

.header__logo {
  flex: 1;
}

.header__notifications {
  margin-left: auto;
  margin-right: 18px;
  width: 16px;
}

.workspace {
  padding-top: 30px;
  grid-area: main;
  background-color: #005e82;
  color: white;
  padding-bottom: 50px;
}

.workspace__sections {
  padding-top: 30px;
}

aside.notifications {
  background-color: #3485ab;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
  top: 0;
  right: 0;
  transition: right 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  .responsive(
    768px,
    {display: grid; grid-area: sidebar; background-color: #3485ab; color: white;
      padding-left: 20px; padding-right: 20px;}
  );
  &.notifications__inactive {
    right: -100%;
  }
}

.container {
  display: block;
  width: 100%;
  .responsive(
      768px,
      {display: grid; // height: 100vh;
        grid-template-columns: 1fr 1fr 300px;}
    )
    ;;
  .responsive(840px, {grid-template-columns: 1fr 1fr 1fr;});
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
  .responsive(
    768px,
    {grid-template-areas: "header header header" "main main sidebar" ;}
  );
}
</style>
