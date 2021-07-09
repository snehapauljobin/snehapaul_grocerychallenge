let serialNum=document.getElementById("serialNum");
let pdtname=document.getElementById("name");
let quantity=document.getElementById("quantity");
let department=document.getElementById("department");
let notes=document.getElementById("notes");
let units=document.getElementById("units");
var table=document.getElementById("myTable");
let brocoli=document.getElementById("brocoli");
let onion=document.getElementById("onion");
let oil=document.getElementById("oil");
let cabbage=document.getElementById("cabbage");
let rice=document.getElementById("rice");
let watermelon=document.getElementById("watermelon");

let gorcery=document.getElementById("gorcery");
let tablegrocery=document.getElementById("tablegrocery");
let th=document.querySelectorAll("th");












function ajax(){
    gorcery.style.display="none";
   
    // creating an XHR object
var xhttp=new XMLHttpRequest();
// event listener
xhttp.onreadystatechange=function(){
    // condition
    if(this.readyState==4&& this.status==200){
// for converting JSON format to normal   
var response=JSON.parse(this.responseText); 
console.log(response);
var Jgrocery=response.grocery;  
var output="";
output+=`<tr>`
output+=`<th>Sl No</th>`;
output+=`<th>Name</th>`;
output+=`<th>Quantity</th>`;
output+=`<th>Units</th>`;
output+=`<th>Notes</th>`;
output+=`<th>Department</th>`;
output+=`<tr>`

for(var i=0;i<Jgrocery.length;i++){
    output+= `<tr>`;
output+=`<td>${Jgrocery[i].SerialNo} </td>`;
output+=`<td>${Jgrocery[i].Name}</td>`;
output+=`<td>${Jgrocery[i].Quantity}</td>`;
output+=`<td>${Jgrocery[i].Unit}</td>`;
output+=`<td>${Jgrocery[i].Notes}</td>`;
output+=`<td>${Jgrocery[i].Department}</td>`;
    `<tr>`;
    // table.innerHTML+=output;
   
// output+="<li>"+Jgrocery[i].Name+"</li>"


}

table.innerHTML=output;

    }
}
xhttp.open("GET","grocery.json",true);
xhttp.send();


}