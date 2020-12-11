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
            HAPPY EVERYDAY<v-btn
              height="24px"
              text
              class="rounded-pill changeName"
            >
              改变昵称</v-btn
            >
          </span>

          <v-card-actions class="action">
            <v-btn
              class="rounded-pill"
              width="120px"
              height="35px"
              color="#FFD7D5"
              ><span style="color: #e95a5a">likes</span>
            </v-btn>
            <v-btn
              class="rounded-pill"
              width="120px"
              height="35px"
              color="#FFD7D5"
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
                <v-card-text>{{ item.content }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: sessionStorage.getItem("userName"),
       tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
       
        ],
    };
  },
};
</script>

<style  scoped>
a {
  text-decoration: none;
}
.center {
  width: 86%;
  margin: 0 auto;
}
.between {
  margin: 10px 0;
}
.user {
  padding: 30px 20px;
  background-color: #fffaf6;
}
.userName {
  width: 100px;
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
  margin-top: 20px;
  margin-left: 4%;
}
.money {
  position: relative;
  top: 20px;
  left: 100px;
  font-size: 30px;
  color: red;
}
</style>