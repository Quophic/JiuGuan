<template>
  <div>
    <div class="center">
      <div class="between">
        <a href="/home">
          <v-btn icon color="#E16C6C">
            <v-icon large>keyboard_arrow_left</v-icon>
          </v-btn>
        </a>
      </div>
      <div class="between">
        <v-card class="user" :elevation="6">
          <v-avatar size="70">
            <v-img max-height="100%" src="../assets/charts1.png"></v-img>
          </v-avatar>

          <span class="userName">
            {{ userName }}
          </span>
          <span class="happy">
            HAPPY EVERYDAY
          </span>

          <v-card-actions class="action">
            <v-btn
              class="rounded-pill"
              width="120px"
              height="35px"
              color="#FFE1D8"
              ><span style="color: #e95a5a">likes</span>
            </v-btn>
            <v-btn
              class="rounded-pill"
              width="120px"
              height="35px"
              color="#FFE1D8"
              ><span style="color: #e95a5a">friends</span></v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
      <div class="between">
        <v-card height="80px" color="#FFE2C7">
          <span class="money">1210.20</span>
        </v-card>
      </div>
      <div class="between">
        <v-card>
          <v-tabs v-model="tab" background-color="#FFB295" dark centered>
            <v-tab color="#FFB295" v-for="item in items" :key="item.tab">
              {{ item.tab }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <v-card flat>
                <v-card-text
                  v-for="(item, index) in item.content"
                  :key="index"
                  >{{ item.a }}</v-card-text
                >
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </div>
    </div>
    <!-- 底端导航栏 -->
    <div class="bottomNav">
      <v-bottom-navigation height="44px" v-model="value" class="nav">
        <a href="/second">
          <v-btn value="second" class="navBtn">
            <v-icon large>stairs</v-icon>
          </v-btn>
        </a>
        <a href="/home">
          <v-btn value="home" class="navBtn">
            <v-icon large>home</v-icon>
          </v-btn>
        </a>
        <a href="/user">
          <v-btn value="user" class="navBtn">
            <v-icon large>person</v-icon>
          </v-btn>
        </a>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "user",
      userName: sessionStorage.getItem("userName"),
      tab: null,
      items: [
        { tab: "我的发布", content: [{ a: "2" }, { a: "3" }] },
        { tab: "我的评论", content: [{ a: "2" }] },
        { tab: "我的成就", content: [{ a: "3" }] }
      ]
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.center {
  width: 86%;
  margin: 0 auto;
  margin-top:30px;
}
.between {
  margin: 10px 0;
}
.user {
  padding: 30px 20px;
  background-color: #fffaf6;
  height:166px;
  width:335px
}
.userName {
  width: 200px;
  font-size: 24px;
  position: absolute;
  top: 30px;
  left: 120px;
}
.happy {
  background-color: white;
  font-size: 8px;
  position: absolute;
  top: 70px;
  left: 120px;
 
}
.action {
  margin-top: 8px;
  margin-left: 4%;
}
.money {
  position: relative;
  top: 20px;
  left: 100px;
  font-size: 30px;
  color: red;
}

/* 导航栏相关 */
.bottomNav {
  position: absolute;
  bottom: 0px;
  width: 375px;
  height: 44px;
  background: #ffffff;
  box-shadow: 0px -3px 6px rgba(163, 109, 22, 0.16);
  opacity: 1;
}

.navBtn {
  position: absolute;
  margin-right: 25px;
}

a:link {
  text-decoration: none;
} /* 指正常的未被访问过的链接*/

a:visited {
  text-decoration: none;
} /*指已经访问过的链接*/

a:hover {
  text-decoration: none;
} /*指鼠标在链接*/

a:active {
  text-decoration: none;
} /* 指正在点的链接*/
</style>
