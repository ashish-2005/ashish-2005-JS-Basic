// console.log("Hello");

// let a = 25;
// console.log("a is"+a);

// var a = 40;

// if(a>10){
//     var a = 200;
//     console.log("a in side",a);

// }
// else{
//     console.log("else conditon");
// }

// console.log("a="+a);


// const data = function msg(name){
//     return name+"welcome to js";
// }

// const msg = data("Rahul ");
// console.log(msg);

// Arrow function

// const data =(myname)=>{
//     // console.log("hii "+myname);
//     return "hii"+myname;
// }
// var result=data("Ashish");
// console.log(result)

// single line
// const data=msg=>msg;
// console.log(data("greeting..."));

// IIFE

// (function(){
//     console.log("welcome to js");
// })();
// (()=>{
//     console.log("welcome to js");
// })();

// setTimeout(()=>{
//     console.log("hiii")
// },1000)
function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javaCompiler(){
            return "java compiler selected";
        }
        data = javaCompiler();
    } else if(lang=='c'){
        function cCompiler(){
            return "C compiler selected";
        }
        data = cCompiler();
    }
    else{
      data = "no such compiler";
    }
    
    console.log(data);
}
selectlanguage(java);