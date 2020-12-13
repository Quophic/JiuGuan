<template>
  <div class="charts">
    <div class="quit">
      <a href="/home">
        <v-btn icon color="#E16C6C" class="quitIcon">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
      </a>
    </div>
    <div class="top3">
      <img :src="topTop" class="up">
      <a href="/others">
        <v-btn height="60px" width="60px" class="toOthers"></v-btn>
      </a>
    </div>
    <div class="others">
      <div class="otherList">
        <p class="Top1">4</p>
        <p class="Top2">5</p>
        <p class="Top3">6</p>
        <p class="Top4">7</p>
        <p class="Top5">8</p>
        <ul id="ulList">
          <li id="topList" v-for="item in topList" :key="item.id">
            <div class="eachPeople">
              {{ item.UserName }}
            </div>
            <div class="eachPeople">
              {{ item.Alcohol }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bot">
      <div class="myName">
        {{ myName }}
      </div>
      <div class="myRank">NO.{{ myRank }}</div>
      <div class="myAlco">
        {{ myAlcohol }}
      </div>
      <div class="myImg">
        <img :src="myHead" width="40px" height="40px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topTop: require("../images/top3.png"),
      myHead: require("../images/personal-head.png"),
      topList: [],
      myRank: ""
    };
  },
  created() {
    this.convert();
  },
  methods: {
    convert: function() {
      var that = this; //保留this
      this.$axios
        .get(
          "/getrank?PageSize=5&PageNum=1&UserId=" +
            sessionStorage.getItem("userID")
        )
        .then(function(res) {
          console.log(res);
          that.topList = res.data.date;
          that.myRank = res.data.rank;
          that.myAlcohol = res.data.alcohol;
          that.myName = sessionStorage.getItem("userName");
        });
    }
  }
};
</script>

<style scoped>
.charts {
  height: 100%;
  width: 100%;
  background-color: #ffefe5;
}

.top {
  margin-top: 24px;
}

.quit {
  position: absolute;
  left: 25px;
  top: 55px;
  width: 28px;
  height: 28px;
  box-shadow: 0px 3px 6px rgba(173, 53, 0, 0.16);
  background-color: #ffffff;
}

.quitIcon {
  position: absolute;
}

.eachPeople {
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 39.5px;
}

.botPeople {
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 39.5px;
}

.up {
  position: absolute;
  top: 42px;
  left: 32px;
}

.toOthers {
  position: absolute;
  left: 140px;
  top: 40px;
  opacity: 0;
}

.Top1,
.Top2,
.Top3,
.Top4,
.Top5 {
  position: absolute;
  width: 8px;
  height: 20px;
    left: 68px;
  margin-top: 20px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 20px;
  color: #611010;
  opacity: 1;
}

.Top2 {
  bottom: 220px;
}

.Top3 {
  bottom: 160px;
}

.Top4 {
  bottom: 100px;
}

.Top5 {
  bottom: 40px;
}

#ulList {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 224px;
  right: 0px;
}

#topList {
  display: flex;
  margin-top: 20px;
}

.top3 {
  position: absolute;
  top: 102px;
  left: 20px;
  width: 335px;
  height: 207px;
  background: #ffc9bc;
  box-shadow: 0px 3px 6px rgba(173, 53, 0, 0.16);
  border-radius: 14px;
}

.others {
  position: absolute;
  bottom: 58px;
  left: 20px;
  width: 335px;
  height: 281px;
  background: #ffffff;
  border-radius: 15px;
}

.bot {
  position: absolute;
  bottom: 0px;
  height: 58px;
  width: 375px;
  background-color: #ffffff;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.05);
}

.myImg {
  position: absolute;
  left: 18px;
  bottom: 2px;
}

.myName {
  position: absolute;
  left: 80px;
  bottom: 19px;
  font-size: 15px;
  font-family: Impact;
  font-weight: 400;
  line-height: 18px;
  color: #611010;
}

.myRank {
  position: absolute;
  right: 24px;
  bottom: 19px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 20px;
  color: #611010;
}

.myAlco {
  position: absolute;
  bottom: 19px;
  right: 92px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 20px;
  color: #611010;
}

li {
  list-style: none;
}
</style>
