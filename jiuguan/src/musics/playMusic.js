
function play(){
    console.log("d真正的音乐b")

    var audio = new Audio("https://www.w3school.com.cn/i/song.mp3");//这里的路径写上mp3文件在项目中的绝对路径
 
    audio.play();
}
export {			//关键
    play
}