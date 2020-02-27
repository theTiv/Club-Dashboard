<template>
  <div class="notification__container" :class="{ active: isMinimized }">
    <div class="notification__details-container">
      <Date :date="notificationData.date" :time="notificationData.time" />
      <Close
        :notificationData="notificationData"
        :isMinimized="isMinimized"
        actionOn="notification"
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
    isMinimized: Boolean
  },
  computed: {
    isItMinimized() {
      return this.notificationData.isMinimized ? true : false;
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../less/vars.less";
@import "../../../less/mixins.less";

.notification__container {
  height: 140px;
  width: 100%;
  .responsive(768px, {width: 250px;});
  .responsive(992px, {width: 340px;});
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;
  color: black;
  padding: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: 0.5s;
}

.active {
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
