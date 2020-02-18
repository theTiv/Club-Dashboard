<template>
    <div class="close__wrapper">
        <div class="close__button" :class="{ clicked: isActive }" @click="toggleClass"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        isActive: false
    }
  },
  methods: {
    toggleClass(){
       this.isActive = !this.isActive
       this.$emit('NotificationMinimized', this.isActive)
    }
   } 
};
</script>

<style scoped lang="less">
@import "../../../../less/vars.less";
@import "../../../../less/mixins.less";

/* .close__wrapper {
    margin-top: -8px;
}

.close__button:after {
    content: '\2807';
    font-size: 24px;
    color:rgba(0,0,0, 0.4);
} */

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

.close__button:before, .close__button:after {
  position: absolute;
  left: 0px;
  content: ' ';
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

.clicked {
    &:before, &:after {
    transform: rotate(90deg);
    transition: 0.5s;
  }
}

</style>