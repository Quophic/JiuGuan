<template>
    <div>
        sss
    </div>
</template>

<script>
export default {
    data(){
        return{
            replies:[

            ]
        }
    },
    create(){
        getReply()
    },
    methods:{
          getReply(){
      this.$axios.get("/getreply?CommentId="+sessionStorage.getItem("commentId")+"&PageSize=100"+"&PageNum=1")
      .then((response)=>{
        if(response.data){
          console.log(response.data)
        }
      }) .catch((err) => {
          console.log(err);
        });
    }
    }
}
</script>