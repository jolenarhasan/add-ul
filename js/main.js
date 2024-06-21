const PL=["Java", "Java Script", "C++"];
var unorderedList=document.querySelector("ul");
console.log("jj");
var data=" ";

for(var i=0;i<PL.length;i++){
    data+="<li>"+PL[i]+"</li>";
}
unorderedList.innerHTML=data;