
window.onload=function(){
    //检查环境
    checkWebContent();
    //获取运行时间并计时
    setInterval(getPageRunTime,1000);
    // 显示日期
 document.getElementById('date').innerText=getTodayDate();
 //选择箴言
    randomSentence();
    //缩放mcmod文字
    setInterval(mcmod_FontAction,500);
    //获取mcmod随机链接
    mcmod_randomLink();

}

// 获取今日日期
function getTodayDate(){
     let date=new Date();
     let dayNum=date.getDay();
     let day;
     switch (dayNum){
         case 0:day="日";break;
         case 1:day="一";break;
         case 2:day="二";break;
         case 3:day="三";break;
         case 4:day="四";break;
         case 5:day="五";break;
         default:day="六";
     }
     let dateStr="今天是"+date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate()+" "+"星期"+day;
     return dateStr;
}
//展示鸡汤句子
function showSentence(){
    document.getElementById("container_jiTang_lead").style.display="none";
    document.getElementById("container_jiTang_show").style.display="block";
}
//随机选择句子
function randomSentence(){
      readJSONFile('/data/sentence.json',isOnServer,function (err,data){
           if(err){
               //go to error page
           }else{
               var id=parseInt(Math.random()*((data.length-1)-0)+0);
               document.getElementById("json_content").innerText=data[id].content;
               document.getElementById("json_author").innerText="---"+data[id].author;
           }
      });
}
//mcmod部分文字先放大与缩小
let flag=true;
function mcmod_FontAction(){
    const maxSize=25;
    const minSize=18;
    let title=document.getElementById("mcmod-blinkTitle");
    if(flag){
        title.style.fontSize=maxSize+"px";
        flag=!flag;
    }else{
        title.style.fontSize=minSize+"px";
        flag=!flag;
    }
}
//生成mcmod随机链接
function mcmod_randomLink(){
    const maxPage=4854;
    var num=parseInt(Math.random()*(maxPage+1));
    document.getElementById("mcmod_randomBtn").href=`https://www.mcmod.cn/class/${num}.html`;

}
