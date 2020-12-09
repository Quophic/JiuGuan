<template>
  <div>
    <div>
    <h1>这是社区</h1>
    </div>
    
    <div style=" margin:30px 10px;">
      <v-card
      style="margin:20px 0;"
      v-for="(item, index) in contents"
      :key="index"
    >
     <v-card-title >
       <div class="userHead">
         <v-img max-height="100%" src="../assets/logo.png"></v-img>
        </div>
       <span class="id">{{item.id}}佚名</span>
     </v-card-title>
     <v-card-text>
       我咋知道
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
         <v-icon >mdi-thumb-up</v-icon>
        <span >{{item.likeNum}}7777</span> 
       </v-btn>
       
    
       <v-btn
        text
        height="30px"
        width="80px"
        elevation="0"
       >
         <v-icon >mdi-message-processing-outline</v-icon>
        <span class="num">{{item}}22</span> 
       </v-btn>
      </v-row>
       
       
    
     </v-card-actions>
     
    </v-card>
  
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
      return{
        contents:[
          {},
          {}
        ]
      }
    },
    methods:{
        //请求comment测试
        // test(){
        //     this.$axios.get('/getcommentbytime').then(response => {
        //             if (response.data) {
        //                 console.log(response.data)
        //             }
        //         }).catch(err => {
        //             alert('请求失败')
        //         })
        // }
    }
};
</script>

<style  scoped>
.userHead{
  height:30px;
  width:30px;
  border-radius: 100%;
  overflow: hidden;
  margin-right:6%;
}
.contentPlace{
  margin:30px 10px;
}


.num{
  font-size:10px
}



</style>