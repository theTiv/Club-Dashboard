<template>
  <div class="notification__container">
    <div class="notification__details-container">
        <Date />
        <Close />
    </div>
    <div class="notification__article">
        The deadline for submitting expenses is this Friday 11th October.
    </div>
  </div>
</template>

<script>
import Date from "../Date/Date"
import Close from "../../UI/Buttons/Close/Close"

export default {
  components: {
    Date,
    Close
  }
};
</script>

<style>

.notification__container {
  height: 140px;
  width: 340px;
  background-color: white;
  border-radius: 12px;
  box-sizing: border-box;
  color: black;
  padding: 16px;
  margin-bottom: 20px;
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