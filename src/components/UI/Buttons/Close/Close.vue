<template>
  <div class="close__wrapper">
    <div
      v-if="actionOn === 'notification'"
      class="close__button"
      :class="{ clicked: isMinimized }"
      @click="isMinimized ? maximize() : minimize()"
    ></div>
    <div
      v-else-if="actionOn === 'overlay'"
      class="close__button close__button--white"
      @click="closeOverlay()"
    ></div>
  </div>
</template>

<script>
import { eventBus } from "../../../../main";

export default {
  props: {
    notificationData: Object,
    isMinimized: Boolean,
    actionOn: {
      type: String,
      required: true
    }
  },
  methods: {
    minimize() {
      eventBus.$emit("minimized", this.notificationData.id);
    },
    maximize() {
      eventBus.$emit("maximized", this.notificationData.id);
    },
    closeOverlay() {
      eventBus.$emit("close-panel", true);
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../../less/vars.less";
@import "../../../../less/mixins.less";

.close__wrapper {
  position: relative;
}

.close__button {
  position: absolute;
  width: 16px;
  height: 16px;
  opacity: 0.3;
  top: 0;
  right: 0;
  transition: 0.5s;
}
.close__button:hover {
  opacity: 1;
}

.close__button:before,
.close__button:after {
  position: absolute;
  left: 0px;
  content: " ";
  height: 18px;
  width: 2px;
  background-color: #333;
}
.close__button:before {
  transform: rotate(45deg);
  transition: 0.5s;
}
.close__button:after {
  transform: rotate(-45deg);
  transition: 0.5s;
}

.close__button--white {
  opacity: 1;
  &:after,
  &:before {
    background-color: white;
  }
}

.clicked {
  &:before,
  &:after {
    transform: rotate(90deg);
    transition: 0.5s;
  }
}
</style>
