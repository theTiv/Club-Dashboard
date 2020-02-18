<template>
    <div class="date__wrapper">
        <div class="date__day-month">24 Jan</div>
        <div class="date__time">6pm</div>
    </div>
</template>

<script>

</script>

<style>

.date__wrapper {
  border-left: 4px solid #FF3052;
  padding-left: 10px;
}

.active .date__wrapper {
  border-left: 4px solid rgba(40,40,40, 0.4);
}

.date__day-month {
  font-size: 16px;
  font-weight: 600;
  color: black;
  text-align: left;
}

.active .date__day-month {
  color: rgba(0,0,0, 0.4);
}

.date__time {
  font-size: 12px;
  font-weight: 500;
  color:rgba(0,0,0, 0.4);
  text-align: left;
  margin-top: 6px; 
}


</style>