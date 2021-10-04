window.onload=function (){
    //检查环境
    checkWebContent();
    //获取运行时间并计时
    setInterval(getPageRunTime,1000);

}


//关注按钮显示"已关注"(你被骗了)
function changeBtnStyle(){
    let btn=document.getElementById("btn_focus");
    btn.innerText="你被骗了!";
    btn.style.width="80px";
    btn.style.background="black";
    btn.style.opacity="70%";
    btn.style.border="white";
}






