<template>
  <div class="charts">
    <div class="quit">
      <v-btn icon color="#E16C6C" class="quitIcon">
        <v-icon large>keyboard_arrow_left</v-icon>
      </v-btn>
    </div>
    <div class="top3"></div>
    <div class="others">
      <ul id="topList">
        <li v-for="item in topList" :key="item.id">
          <div class="eachPeople">
            {{ item.UserName }}
          </div>
          <div class="eachPeople">
            {{ item.Alcohol }}
          </div>
        </li>
      </ul>
    </div>
    <div class="bot"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topList: []
    };
  },
  created() {
    this.convert();
  },
  methods: {
    convert: function() {
      var that = this; //保留this
      this.$axios.get("/getrank?PageSize=5&PageNum=1").then(function(res) {
        console.log(res);
        that.topList = res.data.date;
        console.log(that.topList);
      });
    }
  }
};
</script>

<style>
.charts {
  height: 100%;
  width: 100%;
  background-color: #ffefe5;
}

#topList {
  position: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
}

.top {
  margin-top: 24px;
}

.quit {
  position: fixed;
  left: 25px;
  top: 55px;
  width: 28px;
  height: 28px;
  box-shadow: 0px 3px 6px rgba(173, 53, 0, 0.16);
  background-color: #ffffff;
}

.quitIcon {
  position: fixed;
  left: 20px;
  top: 51px;
}

.top3 {
  position: fixed;
  top: 102px;
  left: 20px;
  width: 335px;
  height: 207px;
  background: #ffc9bc;
  box-shadow: 0px 3px 6px rgba(173, 53, 0, 0.16);
  border-radius: 14px;
}

.others {
  position: fixed;
  bottom: 58px;
  left: 20px;
  width: 335px;
  height: 281px;
  background: #ffffff;
  border-radius: 15px;
}

.bot {
  position: fixed;
  bottom: 0px;
  height: 58px;
  width: 375px;
  background-color: #ffffff;
}

li {
  list-style: none;
}
</style>
