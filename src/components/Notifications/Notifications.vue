<template>
    <aside class="notifications__container">
      <div class="notifications__title-container">
        <h3 class="notifications__title">Notifications Overview</h3>
      </div>
      <template v-for="(notification, i) in notifications">
        <Notification :notificationData="notification" :key="i" :isMinimized="isMinimized" />
      </template>
    </aside>
</template>

<script>
import Notification from "./Notification/Notification";
import { eventBus } from "../../main";

export default {
  components: {
    Notification
  },
  data() {
    return {
      minifiedNotifications:[],
      minify:{},
      isMinimized: false
    };
  },
  props: {
    notifications: Array
  },
  mounted() {
    if(localStorage.getItem('minifiedNotifications')) {
      try {
        this.favourites = JSON.parse(localStorage.getItem('minifiedNotifications'));
      } catch(e) {
        localStorage.removeItem('minifiedNotifications');
      }
    }
  },
  created() {
    eventBus.$on("minimized", (value) => {
      this.minify = value;
      const matchingValue = this.minifiedNotifications.includes(this.minify);
      if (!matchingValue) {
        this.minifiedNotifications.push(this.minify);
        this.saveNotifications();
        this.isMinimized = true;
      }
    });

    eventBus.$on("maximized", (value) => {
      for( var i = 0; i < this.minifiedNotifications.length; i++){ 
        if ( this.minifiedNotifications[i] === value) {
        this.minifiedNotifications.splice(i, 1); 
        }
      }
      this.isMinimized = false;
      this.saveNotifications();
    });
  },
  methods: {
    saveNotifications() {
      let parsed = JSON.stringify(this.minifiedNotifications);
      localStorage.setItem('minifiedNotifications', parsed);
    }
  }
};

</script>

<style>

.notifications__container {
  display: inline-flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}

.notifications__title-container {
  text-align: left;
  width: 340px;
}

.notifications__title {
  text-align: left;
}

</style>