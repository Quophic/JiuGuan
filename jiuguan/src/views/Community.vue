<template>
  <div>
    
    <div style=" margin:30px 10px;">
      <v-card
      style="margin:20px 0;"
      v-for="(item, index) in contents"
      :key="index"
    >
     <v-card-title >
      <v-avatar>
        <v-img max-height="100%" src="../assets/logo.png"></v-img>
      </v-avatar>
       <span class="id">{{item.ID}}</span>
     </v-card-title>
     <v-card-text>
       {{item.Content}}
     </v-card-text>

     <v-card-actions>
      <v-row
        justify="end"
      >
        <v-btn
        text
        height="30px"
        width="80px"
        elevation="0"
       >
         <v-icon color="grey" >mdi-thumb-up</v-icon>
         <!-- 点赞数为零时不显示 -->
        <span v-show="item.LikeNum">{{item.LikeNum}}</span> 
       </v-btn>
       <v-btn
        text
        height="30px"
        width="80px"
        elevation="0"
       >
         <v-icon color="grey" >mdi-message-processing-outline</v-icon>
        <!-- <span class="num">评论数</span>  -->
       </v-btn>
      </v-row>
     </v-card-actions>
      
    </v-card>
    
       <v-btn  text @click="test">点击刷新</v-btn>
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
      <v-icon
      color="white" 
      size="50px"
      >mdi-plus</v-icon>
      </v-btn>
    </a>
    
  </div>
</template>

<script>
export default {
    data(){
      return{
        contents:[]
      }
    },
    methods:{
      //  请求comment测试
        test(){
            this.$axios.get('/getcommentbytime').then(response => {
                    if (response.data) {
                        console.log(response.data.date)
                        this.contents.push(...response.data.date)
                    }
                }).catch(err => {
                    console.log(err)                    
                })

        },
    }
};
</script>

<style  scoped>

.contentPlace{
  margin:30px 10px;
}
.id{
  margin-left:30px;
}


.num{
  font-size:10px
}
.addNewContent{
  background-color:rgb(247, 247, 247);
  position:fixed;
  bottom:30px;
  right:20px;
}



</style>