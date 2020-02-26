<template>
  <aside class="notifications__container">
    <div class="notifications__title-container">
      <h3 class="notifications__title">Notifications Overview</h3>
    </div>
    <template v-for="(notification, i) in notifications">
      <Notification
        :notificationData="notification"
        :key="i"
        :isMinimized="isItMinimized(notification.id)"
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
      const matchingValue = this.minifiedNotifications.includes(value);
      if (!matchingValue) {
        this.minifiedNotifications.push(value);
        this.saveNotifications();
      }
    });
    eventBus.$on("maximized", value => {
      const matchingValue = this.minifiedNotifications.includes(value);
      if (matchingValue) {
        this.minifiedNotifications = this.minifiedNotifications.filter(
          item => item !== value
        );
      }
      this.saveNotifications();
    });
  },
  methods: {
    saveNotifications() {
      let parsed = JSON.stringify(this.minifiedNotifications);
      localStorage.setItem("minifiedNotifications", parsed);
    },
    isItMinimized(id) {
      let status;

      if (
        Array.isArray(this.minifiedNotifications) &&
        this.minifiedNotifications.length
      ) {
        status = this.minifiedNotifications.indexOf(id) !== -1 ? true : false;
      } else {
        status = false;
      }
      return status;
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
