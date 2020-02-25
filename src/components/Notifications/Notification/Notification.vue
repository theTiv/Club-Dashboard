<template>
  <div class="notification__container" :class="{ clicked: minmax }">
    <div class="notification__details-container">
      <Date :date="notificationData.date" :time="notificationData.time" />
      <Close
        @NotificationMinimized="minmax = $event"
        :notificationData="notificationData"
      />
    </div>
    <div class="notification__article">
      {{ notificationData.description }}
    </div>
  </div>
</template>

<script>
import Date from "../Date/Date";
import Close from "../../UI/Buttons/Close/Close";

export default {
  components: {
    Date,
    Close
  },
  props: {
    notificationData: Object,
    minmax: Boolean
  },
  computed: {
    // activate() {
    //   console.log("ACTIVE OR NOT?");
    //   const isActive = this.notificationData.isActive ? true : false;
    //   console.log(this.notificationData.isActive);
    //   console.log(isActive);
    //   return isActive;
    // }
  }
};
</script>

<style scoped>
.notification__container {
  height: 140px;
  width: 340px;
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;
  color: black;
  padding: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: 0.5s;
}

.clicked {
  height: 70px;
  transition: 0.5s;
  color: rgba(255, 255, 255, 0.4);
  background-color: #ccc;
}

.notification__details-container {
  display: flex;
  justify-content: space-between;
}

.notification__article {
  font-size: 14px;
  color: black;
  text-align: left;
  margin-top: 16px;
}
</style>
