
//myHeading.textContent='hello world！'
/*document.querySelector("html").addEventListener("click",function(){
    alert("别点，疼！");
})*/
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/1.jpg'){
        myImage.setAttribute('src','images/2.jpg');
    }else{
        myImage.setAttribute('src','images/1.jpg');
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName(){
    let myName=prompt('请输入你的名字：');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='hello,'+myName;
    }
    
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name')
    myHeading.textContent='hello,'+storedName;
}
myButton.onclick=function(){
    setUserName();
}