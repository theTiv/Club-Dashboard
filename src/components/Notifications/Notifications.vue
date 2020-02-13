<template>
    <aside class="notifications__container">
      <div class="notifications__title-container">
        <h3 class="notifications__title">Notifications Overview</h3>
      </div>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </aside>
</template>

<script>
import Notification from "./Notification/Notification";
export default {
  components: {
    Notification
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