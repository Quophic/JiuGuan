<template>
  <div class="homeBg">
    
    <div class="community">
      <div class="toCommunityBot"></div>
      <div class="toCommunityTop"></div>
      <div class="toCommunityBtn">
        <a href="/community">
          <v-btn height="140px" width="120px" class="toBtn"></v-btn>
          <p class="com">留言板</p>
        </a>
      </div>
    </div>
    <div class="everyday">
      <p class="title">每日一句</p>
      <div class="line"></div>
      <div class="content">Good Morning</div>
    </div>
    <div class="together">
      <p class="togetherTitle">一起玩</p>
    </div>
    <div class="chart">
      <p class="chartTitle">酒精排行榜</p>
      <div class="chartBtn">
        <a href="/charts">
          <v-btn block class="toChart" height="150px"></v-btn>
        </a>
      </div>
      <img class="battery" />
      <div class="point"></div>
    </div>
    <div class="music">
      <a href="/music">
        <v-btn height="58px" width="128px" class="toMusic"></v-btn>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.homeBg {
  width: 100%;
  height: 100%;
  background-color: #ffd79f;
}

.date {
  position: absolute;
  left: 65px;
  top: 67px;
  width: 84px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
}

.quitbtn {
  position: absolute;
  left: 20px;
  top: 61px;
  width: 28px;
  height: 28px;
  background-color: #ffffff;
  border-radius: 50%;
}

.quitIcon {
  position: absolute;
  left: -5px;
  top: -4px;
}

.com {
  position: absolute;
  top: 73px;
  left: 70px;
  width: 20px;
  height: 56px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 28px;
  color: #a77343;
  opacity: 1;
}

.community {
  position: absolute;
  top: 121px;
  left: 20px;
  width: 335px;
  height: 202px;
  background: #fcf0d5;
  box-shadow: 0px 3px 6px rgba(188, 130, 130, 0.16);
  border-radius: 11px;
}

.toCommunityBot {
  position: absolute;
  top: 32px;
  left: 21px;
  width: 124px;
  height: 142px;
  background: #c98c54;
  border-radius: 8px;
}

.toCommunityTop {
  position: absolute;
  top: 32px;
  left: 18px;
  width: 124px;
  height: 142px;
  background: #ffce8b;
  opacity: 1;
  border-radius: 8px;
}

.toBtn {
  position: absolute;
  left: 20px;
  top: 30px;
  height: 70px;
  widows: 70px;
  opacity: 0;
}

.everyday {
  position: absolute;
  top: 136px;
  left: 179px;
  width: 163px;
  height: 173px;
  background: #fffbf2;
  opacity: 1;
  border-radius: 11px;
}

.title {
  position: absolute;
  top: 37px;
  right: 45px;
  width: 100px;
  height: 22px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 22px;
  color: #bf8989;
  opacity: 1;
}

.line {
  position: absolute;
  top: 70px;
  left: 20px;
  width: 64px;
  height: 0px;
  border: 1px solid #dedede;
  opacity: 1;
}

.content {
  position: absolute;
  top: 75px;
  left: 20px;
  width: 120px;
  height: 56px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 28px;
  color: #bf8989;
  opacity: 1;
}

.line1 {
  position: absolute;
  left: 28px;
  top: 351px;
  width: 314px;
  height: 0px;
  border: 3px solid #fff7ea;
  opacity: 1;
}

.together {
  position: absolute;
  left: 27px;
  bottom: 59px;
  width: 161px;
  height: 223px;
  background: #fff9ed;
  opacity: 1;
  border-radius: 10px;
}

.togetherTitle {
  position: absolute;
  left: 68px;
  top: 11px;
  width: 78px;
  height: 37px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 37px;
  color: #985e00;
  opacity: 1;
}

.chart {
  position: absolute;
  right: 33px;
  bottom: 131px;
  width: 129px;
  height: 151px;
  background: #ffa995;
  opacity: 1;
  border-radius: 10px;
}

.chartTitle {
  position: absolute;
  top: 38px;
  left: 16px;
  width: 100px;
  height: 28px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 28px;
  color: #ffffff;
  opacity: 1;
}

.chartBtn {
  position: absolute;
  width: 130px;
  height: 150px;
}

.toChart {
  position: absolute;
  width: 100%;
  opacity: 0;
}

.point {
  position: absolute;
  top: -2px;
  right: 32px;
  width: 9px;
  height: 9px;
  background: #e05050;
  border-radius: 50%;
  opacity: 1;
}

.music {
  position: absolute;
  right: 33px;
  bottom: 59px;
  width: 129px;
  height: 58px;
  background: #fcf0d5;
  opacity: 1;
  border-radius: 10px;
}

.toMusic {
  opacity: 0;
}

</style>
