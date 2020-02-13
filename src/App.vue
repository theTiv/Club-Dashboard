<template>
  <div id="app" class="container">
    <header class="header">
        <h2 class="site-title">GAA</h2>
    </header>
    <Workspace class="workspace" />
    <Notifications class="notifications" />
  </div>
</template>

<script>
import Workspace from './components/Workspace/Workspace'
import Notifications from './components/Notifications/Notifications'

export default {
  name: 'App',
  components: {
    Workspace,
    Notifications
  }
}
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
  color: #005E82;
}
.workspace {
  grid-area: main;
  background-color: #005E82;
  color: white;
}
.notifications {
  grid-area: sidebar;
  background-color: #3485AB;
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
