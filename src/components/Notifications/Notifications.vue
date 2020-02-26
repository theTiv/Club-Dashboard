<template>
  <aside class="notifications__container">
    <div class="notifications__title-container">
      <h3 class="notifications__title">Notifications Overview</h3>
    </div>
    <template v-for="(notification, i) in displayNotifications">
      <Notification
        :notificationData="notification"
        :key="i"
        :minimized="notification.isActive"
      />
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
      minifiedNotifications: [],
      minify: {}
    };
  },
  props: {
    notifications: Array
  },
  computed: {
    displayNotifications() {
      let results;
      if (this.minifiedNotifications) {
        results = [];
        this.notifications.forEach(sourceElement => {
          this.minifiedNotifications.find(targetElement => {
            if (sourceElement["id"] === targetElement["id"]) {
              sourceElement.isMinimized = true;
            }
            results.push(sourceElement);
          });
        });
      } else {
        results = this.notifications;
      }

      console.log('results');
      console.log(results);
      return results;
    }
  },
  mounted() {
    if (localStorage.getItem("minifiedNotifications")) {
      try {
        this.minifiedNotifications = JSON.parse(
          localStorage.getItem("minifiedNotifications")
        );
      } catch (e) {
        localStorage.removeItem("minifiedNotifications");
      }
    }
  },
  created() {
    eventBus.$on("minimized", value => {
      this.minify = value;
      const matchingValue = this.minifiedNotifications.includes(this.minify);
      if (!matchingValue) {
        this.minifiedNotifications.push(this.minify);
        this.saveNotifications();
        this.minimized(true);
      }
    });
    eventBus.$on("maximized", value => {
      for (var i = 0; i < this.minifiedNotifications.length; i++) {
        if (this.minifiedNotifications[i] === value) {
          this.minifiedNotifications.splice(i, 1);
        }
      }
      this.saveNotifications();
      this.minimized(false);
    });
  },
  methods: {
    saveNotifications() {
      let parsed = JSON.stringify(this.minifiedNotifications);
      localStorage.setItem("minifiedNotifications", parsed);
    },
    minimized(bool) {
      return bool ? true : false;
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
