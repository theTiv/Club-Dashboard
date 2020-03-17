<template>
  <div id="app" class="club-dashboard__container">
    <header class="header">
      <Icon
        class="header__logo"
        name="GAAlogo"
        fill="#006792"
        :iconWidth="74"
        :iconHeight="28"
        iconViewBox="0 0 74 28"
      />
      <div
        class="header__notifications-container"
        @click="notificationWindow()"
      >
        <div class="header__notifications" :class="+unreadCounter == 0 ? 'header__notification-no-counter' : ''"> 
          <Icon
            name="alarm"
            fill="#006792"
            :iconWidth="16"
            :iconHeight="16"
            iconViewBox="0 0 16 16"
          />
        </div>
        <div v-if="+unreadCounter > 0" class="header__notification-counter" v-html="unreadCounter"></div>
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
      :width="window.width"
      :height="window.height"
    />
  </div>
</template>

<script>
import Workspace from "@/components/workspace/workspace";
import Notifications from "@/components/notifications/notifications";
import Icon from "@/components/UI/icons/icons";
import { eventBus } from "@/main";
import { store, mutations } from "@/store/store";

export default {
  name: "ClubDashboard",
  data() {
    return {
      sections: this.$root.$data.sections,
      notifications: this.$root.$data.notifications,
      favourites: [],
      isInactive: true,
      minifiedCount: Number,
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
    eventBus.$on("close-panel", value => {
      this.isInactive = value;
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    unreadCounter() {
      return store.count;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.window.height = this.$el.clientHeight;
    })

    if (localStorage.getItem("minifiedNotifications")) {
      try {
        let storedCount = localStorage.getItem("minifiedNotifications");
        this.minifiedCount = JSON.parse(storedCount).length;
        this.minifiedCount = +this.minifiedCount || 0;
        let unreadItems = this.notifications.length - this.minifiedCount;
        this.setCount(unreadItems);
      } catch (e) {
        localStorage.removeItem("minifiedNotifications");
        this.setCount(this.notifications.length);
      }
    }
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
    },
    notificationWindow() {
      this.isInactive = !this.isInactive;
    },
    setCount: mutations.setCount
  }
}
</script>

<style lang="less">
@import "./less/base.less";

body {
  margin: 0;
}

#app {
  font-family: proxima-nova, sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @base-text;
}

.header {
  grid-area: header;
  background-color: @white;
  color: @base-text;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 68px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 57px;
}

.header__logo {
  flex: 1;
}

.header__notifications-container {
  display: flex;
  margin-right: 18px;
  .responsive(768px, { display: none; });
}

.header__notifications {
  border-radius: 50%;
  display: inline-flex;
  margin-left: auto;
  box-sizing: border-box;
  height: 41px;
  width: 41px;
  margin-top: 4px;
  margin-right: -14px;
  border: 1px solid @noticiation-icon-blue;
  align-items: center;
  justify-content: center;
}

.header__notification-counter {
  width: 24px;
  height: 24px;
  position: relative;
  background-color: red;
  color: @white-text;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__notification-no-counter {
  margin-right: 30px;
}

.workspace {
  grid-area: main;
  background-color: @workspace-blue-bg;
  color: @white-text;
  padding-bottom: 50px;
}

aside.notifications {
  background-color: @notifications-blue-bg;
  color: @white-text;
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
  top: 0;
  right: 0;
  transition: right 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
  .responsive(
    768px,
    {display: grid; grid-area: sidebar; background-color: @notifications-blue-bg; color: white;
      padding-left: 20px; padding-right: 20px;}
  );
  &.notifications__inactive {
    right: -100%;
  }
}

.club-dashboard__container {
  background-color: @app-bg;
  display: block;
  width: 100%;
  .responsive(768px, {display: grid; grid-template-columns: 1fr 1fr 300px;});
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
