
window.onload=function(){
    // 显示日期
 document.getElementById('date').innerText=getTodayDate();
 //选择箴言
    randomSentence();


}
// 读取json文件
function readJSONFile(dataPath, callback) {
    var request = new XMLHttpRequest();
    request.open("get", dataPath);
    request.send("null");
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            callback(null, json);
        } else {
            callback("读取失败", null);

        }
    }
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
      readJSONFile('/myGithubPage/data/sentence.json',function (err,data){
           if(err){
               //go to error page
           }else{
               console.log(data);
               var id=parseInt(Math.random()*((data.length-1)-0)+0);
               document.getElementById("json_content").innerText=data[id].content;
               document.getElementById("json_author").innerText="---"+data[id].author;
           }
      });
}