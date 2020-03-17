<template>
  <aside  class="notifications__container" :style="{'height':`${ height }px`}">
    <div v-if="width < 768" class="notifications__title-container">
      <h3 class="notifications__title">Notifications</h3>
      <Close actionOn="overlay" />
    </div>
    <div v-else class="notifications__title-container">
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
import Notification from "@/components/notifications/notification/notification.vue";
import Close from "@/components/UI/buttons/close/close.vue";
import { eventBus } from "@/main";

export default {
  components: {
    Notification,
    Close
  },
  data() {
    return {
      minifiedNotifications: [],
      minify: {}
    };
  },
  props: {
    notifications: Array,
    width: Number,
    height: Number
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

<style scoped lang="less">
@import "../../less/vars.less";
@import "../../less/mixins.less";
@import "../../less/base.less";

.notifications__container {
  width: 100%;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  height: 100vh;
  .responsive(
    768px,
    {display: inline-flex; justify-content: flex-start; flex-direction: column; align-items:
      center; position: initial; top: initial; right: initial;}
  );
}

.notifications__title-container {
  text-align: left;
  width: 100%;
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .responsive(768px, {width: 250px;   border-bottom: none;});
  .responsive(992px, {width: 340px;});

  > div {
    margin-top: 21px;
  }
}

.notifications__title:extend(.section__title) {
  text-align: left;
}
</style>
