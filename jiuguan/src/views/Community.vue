<template >
  <div style="background-color:#FFEBDB;">
    <div class="quit">
      <a href="/home">
        <v-btn icon color="#E16C6C" class="quitIcon">
          <v-icon large>keyboard_arrow_left</v-icon>
        </v-btn>
      </a>
    </div>
    <div class="search">
      <v-text-field v-model="search" heght="100" append-icon="mdi-magnify" >
        
      </v-text-field>
    </div>
    <div class="play">
      
    <v-carousel
    cycle
    interval="6000"
    :show-arrows="false"
    height="150px"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    >
        <v-carousel-item
        v-for="(item,index) in items"
        :key="index"
        :src="item.src"
       
        >

        </v-carousel-item>
      </v-carousel>
    </div>
    <div  class="container">
      <v-card
        style="margin: 15px 3px;background-color:#FFF2D8"
        v-for="(item, index) in contents"
        :key="index"
      >
        <v-card-title>
          <v-avatar>
            <v-img max-height="100%" src="../assets/charts1.png"></v-img>
          </v-avatar>
          <span class="id">{{ item.FromName }}</span>
        </v-card-title>
        <v-card-text>
          {{ item.Content }}
        </v-card-text>

        <v-card-actions>
          <v-row justify="end">
            <v-btn
              @click="like(item.ID, index)"
              text
              height="30px"
              width="80px"
              elevation="0"
            >
              <v-icon color="grey">mdi-thumb-up</v-icon>
              <!-- 点赞数为零时不显示 -->
              <span v-show="item.LikeNum" style="color:grey">{{ item.LikeNum }}</span>
            </v-btn>
            <v-btn text height="30px" width="80px" elevation="0">
              <v-icon color="grey">mdi-message-processing-outline</v-icon>
              <span class="num" v-show="item.ReplyNum" style="color:grey">{{
                item.ReplyNum
              }}</span>
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>

      <v-btn text @click="test">加载过去</v-btn>
    </div>
    <a href="/community/addContent">
      <v-btn
        color="red"
        height="70px"
        width="70px"
        :elevation="3"
        size="70px"
        class="addNewContent rounded-circle"
      >
        <v-icon color="white" size="50px">mdi-plus</v-icon>
      </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [],
      pageNum: 1,
      search:"",
      items:[
        {src:require("../images/society .png")},
        {src:require("../images/society .png")},
        {src:require("../images/society .png")},
      ],
      
    };
  },
  created(){
      this.test()
  },
  methods: {
    //  请求comment测试
    test() {
      //当contents被清空时，pageNum要赋值为1
      this.$axios
        .get("/getcommentbytime?PageSize=20&PageNum=" + this.pageNum++)
        .then((response) => {
          if (response.data) {
            console.log(response.data.date);
            this.contents.push(...response.data.date);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    like(ID, index) {
      this.$axios.get("/zan?ToId=" + ID + "&FromId=" + 10).then((response) => {
        console.log(response.data);
        if ((response.data.msg == "赞成功")) {
          //点赞后点赞数+1，无需重新请求
          this.contents[index].LikeNum++;
        }
        alert(response.data.msg);
      });
    },
  },
};
</script>

<style  scoped>
.contentPlace {
  margin: 30px 10px;
}
.id {
  margin-left: 30px;
}

.num {
  font-size: 10px;
}
.addNewContent {
  background-color: rgb(247, 247, 247);
  position: fixed;
  bottom: 30px;
  right: 20px;
}
.play{
  width:90%;
  margin: 0 auto;
}
.quit{
 position:absolute;
 top:10px;
 left:10px;
  width:20px;
}
.search{
  background-color:#FCC192;
  width:90%;
  height:45px;
  margin:45px auto;
  margin-bottom:10px;
}
.container{
  margin: 30px auto;
  width:90%;
  border-radius: 10px;
  background-color:#FFFAF6
}
</style>