<template>
  <div id="app" class="container">
    <header class="header">
      <h2 class="site-title">GAA {{ favourites }}</h2>
    </header>
    <Workspace class="workspace" :sections="sections" :favourites="favourites"/>
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
      favourites: []
    }
  },
  beforeCreate: () => {
    console.log("Before Create");
    // const favourites = [ 1, 5, 9, 10 ];
    // return { 
    //   const favourites = [ 1, 5, 9, 10 ]
    // }
  },
  components: {
    Workspace,
    Notifications
  },
  
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
