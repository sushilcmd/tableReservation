<template>
  <div class="reservationStats">
    <div class="overlay">
        <div class="infoNav"></div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "stats"
};
</script>

<style lang="less" scoped>
.reservationStats {
  position: absolute;
  height: 15rem;
  width: 100%;
  background: url(../assets/images/city.jpg);
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #ffffff17;
  }
}
</style>