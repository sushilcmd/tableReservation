<template>
  <div class="all">
    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>

    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>

    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>

    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>

    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>

    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>

    <div class="tableRow">
      <div class="type borderRight">
        <div class="icon">
          <img src="../assets/images/family.png" class="paxIcon" />
        </div>
        <div class="label">50 pax</div>
      </div>
      <div class="customerInfo borderRight">
        <div class="row name">sushil kumar singh</div>
        <div class="row contactNumber">8853474140</div>
      </div>
      <div class="time">04:59 PM</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableStatus"
};
</script>

<style lang="less" scoped>
.all {
  position: absolute;
  top: 15rem;
  bottom: 0rem;
  background: #ebd992;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  overflow: auto;
  .tableRow {
    position: relative;
    float: left;
    height: 13rem;
    width: 100%;
    border: 1px solid #333333;
    margin-top: 2rem;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 10px;
    .type {
      position: relative;
      float: left;
      height: 100%;
      width: 20%;
      .icon {
        position: relative;
        float: left;
        height: 8rem;
        width: 100%;
        .paxIcon {
          position: absolute;
          height: 5rem;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .label {
        position: relative;
        float: left;
        text-align: center;
        font-size: 2.3rem;
        font-weight: 600;
        text-transform: uppercase;
        width: 100%;
      }
    }
    .customerInfo {
      position: relative;
      float: left;
      height: 100%;
      width: 50%;
      text-transform: capitalize;
      box-sizing: border-box;
      padding-left: 1.5rem;
      .row {
        height: 50%;
        width: 100%;
      }
      .name {
        font-size: 2.5rem;
        line-height: 7rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .contactNumber {
        font-size: 2.5rem;
      }
    }
    .time {
      position: relative;
      float: left;
      height: 100%;
      width: 30%;
      line-height: 13rem;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
    }
    .borderRight {
      border-right: 1px solid #333333;
      box-sizing: border-box;
    }
  }
}
</style>