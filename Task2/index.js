let a = setTimeout(function(){
    alert("I am inside timeout")
},5000);

let b = prompt("do want set Timeout");
if("n"==b)
    {
    clearTimeout(a);
}




