<template>
  <div class="newReservationForm">
    <div class="wrapper">
      <div class="tableInfo">
        <div class="box">
          <div class="time"></div>
          <div class="day"></div>
          <div class="timeSlot"></div>
        </div>
        <div class="box extraHeight">
          <div class="paxInfo">
            <div class="pax">
              <div class="btn left">
                <img src="../assets/images/minus.png" class="arrowIcon" />
              </div>
              <div class="paxValue">2</div>
              <div class="btn right">
                <img src="../assets/images/plus.png" class="arrowIcon" />
              </div>
            </div>
            <div class="isPremium">
              <img src="../assets/images/star.png" class="icon" />
            </div>
          </div>
          <div class="tableType">
            <div class="type">
              <div class="imgIcon">
                <img src="../assets/images/cake.png" class="typeIcon" />
              </div>
              <div class="label">birthday</div>
            </div>
            <div class="type">
              <div class="imgIcon">
                <img src="../assets/images/kiss.png" class="typeIcon" />
              </div>
              <div class="label">couple</div>
            </div>
            <div class="type">
              <div class="imgIcon">
                <img src="../assets/images/wedding-rings.png" class="typeIcon" />
              </div>
              <div class="label">anniversary</div>
            </div>
            <div class="type">
              <div class="imgIcon">
                <img src="../assets/images/family.png" class="typeIcon" />
              </div>
              <div class="label">family</div>
            </div>
            <div class="type">
              <div class="imgIcon">
                <img src="../assets/images/cocktail.png" class="typeIcon" />
              </div>
              <div class="label">cocktail</div>
            </div>
            <div class="type">
              <div class="imgIcon">
                <img src="../assets/images/interview.png" class="typeIcon" />
              </div>
              <div class="label">business</div>
            </div>
            <div class="type"></div>
          </div>
        </div>
      </div>
      <div class="contactForm">
        <div class="form">
          <div class="inputText">
            <input type="text" placeholder="full name" />
          </div>
          <div class="inputText">
            <input type="text" placeholder="mobile number" />
          </div>
          <div class="inputText">
            <input type="text" placeholder="email" />
          </div>
          <div class="inputText">
            <input type="text" placeholder="name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newReservation"
};
</script>

<style lang="less" scoped>
.newReservationForm {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url("../assets/images/background-black.jpg");
  .wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #ffffff17;
    .tableInfo {
      position: relative;
      float: left;
      height: 100%;
      width: 50%;
      padding-left: 2rem;
      box-sizing: border-box;
      .box {
        position: relative;
        float: left;
        height: 40%;
        width: 100%;
        background: #ffffff;
        margin-top: 2rem;
        .paxInfo {
          position: absolute;
          height: 15rem;
          width: 100%;
          .pax {
            position: relative;
            float: left;
            height: 100%;
            width: 50%;
            padding-left: 1rem;
            box-sizing: border-box;
            .btn {
              position: relative;
              float: left;
              height: 100%;
              width: 25%;
              .arrowIcon {
                position: absolute;
                height: 6rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
            .paxValue {
              position: relative;
              float: left;
              height: 100%;
              text-align: center;
              width: 50%;
              font-size: 10rem;
              line-height: 15rem;
            }
          }
          .isPremium {
            position: relative;
            float: left;
            height: 100%;
            width: 50%;
            .icon {
              position: absolute;
              height: 10rem;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        .tableType {
          position: absolute;
          top: 15rem;
          bottom: 0rem;
          width: 100%;
          .type {
            position: relative;
            float: left;
            height: 13rem;
            width: 13rem;
            margin-top: 2rem;
            margin-left: 2rem;
            border-radius: 10px;
            border: 1px solid #333333;
            box-sizing: border-box;
            .imgIcon {
              position: relative;
              float: left;
              height: 9rem;
              width: 100%;
              .typeIcon {
                position: absolute;
                height: 7rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
            .label {
              position: relative;
              float: left;
              height: 4rem;
              width: 100%;
              text-align: center;
              font-size: 2rem;
              text-transform: uppercase;
              line-height: 3rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-left: 0.5rem;
              box-sizing: border-box;
            }
          }
        }
        &.extraHeight {
          height: 53.5%;
        }
      }
    }
    .contactForm {
      position: relative;
      float: left;
      height: 100%;
      width: 50%;
      padding: 2rem;
      box-sizing: border-box;
      .form {
        position: relative;
        float: left;
        height: 100%;
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
        background: #ffffff;
        .inputText {
          position: relative;
          float: left;
          height: 8rem;
          width: 100%;
          border: 1px solid #333333;
          box-sizing: border-box;
          border-radius: 5px;
          margin-top: 2rem;
          input {
            position: relative;
            height: 100%;
            width: 100%;
            outline: none;
            border: none;
            box-sizing: border-box;
            text-align: left;
            background: #d3d3d347;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 2.3rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      }
    }
  }
}
</style>