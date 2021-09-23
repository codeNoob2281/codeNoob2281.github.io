// 读取json文件
function readJSONFile(dataPath,callback){
   var request=new XMLHttpRequest();
   request.open("get",dataPath);
   request.send("null");
   request.onload=function (){
         if(request.status==200){
             var json=JSON.parse(request.responseText);
             callback(null,json);
         }
         else {
             callback("读取失败",null);

         }
   }
}