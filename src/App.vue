<template>
  <div id="app" class="container">
    <header class="header">
      <h2 class="site-title">GAA</h2>
    </header>
    <Workspace
      class="workspace"
      :sections="sections"
      :favourites="favourites"
    />
    <Notifications
      class="notifications"
      :notifications="notifications"
      :class="[{ fadeOut: fade }]"
    />
  </div>
</template>

<script>
import Workspace from "./components/Workspace/Workspace";
import Notifications from "./components/Notifications/Notifications";
import { eventBus } from "./main";

export default {
  name: "App",
  data() {
    return {
      sections: this.$root.$data.sections,
      notifications: this.$root.$data.notifications,
      favourites: [],
      fade: false
    };
  },
  created() {
    // Listen for the button-was-clicked event and its payload
    eventBus.$on("i-got-moused-over", data => {
      this.fade = data;
    });
  },
  components: {
    Workspace,
    Notifications
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

@media only screen and (min-width: 768px) {
.notifications {
  grid-area: sidebar;
  background-color: #3485ab;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}

} 
/* 
.notifications {
    position: absolute;
    right: 0;
    margin-right: -390px;
} */



.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header header"
    "main main sidebar";
}

.fadeOut {
    background-color: #999;
    transition: 0.5s;
    opacity: 0.5;
}
</style>
