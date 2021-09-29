window.onload=function (){
    //检查环境
    checkWebContent();
    //获取运行时间并计时
    setInterval(getPageRunTime,1000);

}



//翻译
function getTranslateResult(){
    let table=document.getElementById("content-table");


    let text=document.getElementById("trans-text").value;
    Nbnhhsh.guess(text,function (data){
        if(!data[0].trans){
            table.innerHTML=searchHTML;
            document.getElementById("trans-text").value=text;
            document.getElementById("trans-result").value=text;
        }else{
            showTransList(text,data);
            document.getElementById("trans-result").value=getTransText(text,data);
        }
    })
}
//词语翻译罗列
function showTransList(text,data){
    let table=document.getElementById("content-table");
    table.innerHTML=searchHTML;
    table.innerHTML+=`<tr style="height: 50px"><td colspan="2" style="text-align:left;font-size: large;font-weight: bold;">词语翻译</td></tr>`;
    for(let i in data){
        let token=data[i].name;
        let line="";
        if(data[i].trans){
            for(let j in data[i].trans){
                line+=data[i].trans[j]+"；";
            }
        }else{
            line+="未找到翻译"
        }
        table.innerHTML+=`<tr><td colspan="2" style="text-align: left;height: 35px;"><span class="tokens">${token}</span>${line}</td></tr>`;
        //
        document.getElementById("trans-text").value=text;
        //
    }
}
//原文替换
function getTransText(text,data){
    let tranRes=text;
    for(let i in data){
           let token=data[i].name;
           if(data[i].trans) {
               let primaryChoose = data[i].trans[0];
               if (primaryChoose) {
                   tranRes = tranRes.replaceAll(token, primaryChoose);
               }
           }
        }
    console.log(tranRes);
    return tranRes;
}


//表单
let searchHTML=`
              <tr><td style="text-align: left"><button onclick="getTranslateResult()" class="btn btn-primary" id="trans-btn">&nbsp;&nbsp;翻&nbsp;&nbsp;&nbsp;&nbsp;译&nbsp;&nbsp;</button></td>
             <td style="text-align: right"><a href="https://lab.magiconch.com/nbnhhsh/" target="_blank">词库及API支持...</a></td>
        </tr>
        <tr>
            <td style="text-align: left"><textarea class="form-control" id="trans-text" rows="10" placeholder="请输入原文..."></textarea></td>
            <td><textarea class="form-control" id="trans-result" rows="10" disabled="false"></textarea></td>
        </tr>
`;
