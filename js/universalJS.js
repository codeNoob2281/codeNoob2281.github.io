// 读取json文件
function readJSONFile(dataPath,isInGitHub, callback) {
    var realDataPath=dataPath;
    if(!isInGitHub){
        realDataPath='/myGithubPage'+realDataPath;
    }
    var request = new XMLHttpRequest();
    request.open("get", realDataPath);
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


