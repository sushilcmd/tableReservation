<template>
  <div class="dashboardContainer">
    <div class="row small">
      <div class="addNew">
        <img src="../assets/images/add.png" class="addIcon" />
      </div>
    </div>
    <div class="row semiLarge padding">
      <div class="container">
        <stats></stats>
        <tableStatus></tableStatus>
      </div>
    </div>
  </div>
</template>

<script>
import tableStatus from "../components/tableStatus";
import stats from "../components/tableStats";
export default {
  name: "dashboard",
  components: {
    tableStatus,
    stats
  }
};
</script>

<style lang="less" scoped>
.dashboardContainer {
  position: absolute;
  height: 100%;
  width: 100%;
  .row {
    position: relative;
    float: left;
    height: 100%;
    background: #333333;
    box-sizing: border-box;
    &.small {
      width: 45%;
      border-right: 1px solid #f0c517;
    }
    &.semiLarge {
      width: 55%;
    }
    &.padding {
      padding: 5rem;
    }
    .addNew {
      position: absolute;
      height: 20rem;
      width: 20rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #f0c517;
      .addIcon {
        position: absolute;
        height: 8rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .container {
      position: absolute;
      top: 3rem;
      bottom: 3rem;
      left: 3rem;
      right: 3rem;
    }
  }
}
</style>