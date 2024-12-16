

function send(){
if(nam.value!="COUNTRY" & card.value!="SIM"){
link.setAttribute("href",`fille/${card.value}/confing.hc`)
 link.setAttribute("download","confing.hc")
}
else
{
 link.removeAttribute("href")
//validation(nam)
//validation(card)
   //  label.innerHTML= "complate your Data <br>"
}}
function date()
{
let windo = document.querySelector("#time")

var hour = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();
if(hour<10){
hour = "0" +hour
}
if(minute<10){
minute = "0" +minute
}
if(second<10){
second = "0" +second
}

windo.innerHTML = `[${hour}:${minute}:${second}]`;
}
setInterval(date,100);



 let card = document.querySelector("#card")
 let nam = document.querySelector("#nam")
 let btn = document.querySelector("#btn")
 let link = document.querySelector("#link")
  let label = document.querySelector("#label")
  
  function countryy(){
  validation()
  
x = ["MOROCCO","ORDAN","IRAQ","IRAN"]
/*   morocco   */
if(nam.value==x[0]&card.value!="inwi"&card.value!="orange"){
if(card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("inwi");
const textnode2 = document.createTextNode("orange");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/* ordon   */
if(nam.value==x[1]&card.value!="zain"){
if(card.value=="inwi" || card.value=="iranesel" ||card.value=="orange"|| card.value=="iraq"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("zain");
const textnode2 = document.createTextNode("zain");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}

/*iraq */
if(nam.value==x[2]&card.value!="iraq"){
if(card.value=="zain" ||card.value=="iranesel" ||  card.value=="inwi" || card.value=="orange"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("iraq");
const textnode2 = document.createTextNode("iraq");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*irane*/
if(nam.value==x[3] & card.value!="iranesel"){
if(card.value=="inwi" || card.value=="orange"|| card.value=="iraq" ||card.value=="zain"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("iranesel");
const textnode2 = document.createTextNode("iranesel");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}







if(nam.value=="COUNTRY"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
}

  
  
  
 function backg(){
 if(nam.value!="COUNTRY" & card.value!="SIM"){
 btn.style.boxShadow="2px 2px 2px 9px green"
  btn.style.backgroundColor="#4dff4d"
  countdown()
 }
 else{
  btn.style.boxShadow="2px 2px 2px 9px #ff3333"
    btn.style.backgroundColor="#ff8080"
 }
 }

 
 function validation(){

 backg()
 if(nam.value!="COUNTRY"){
 nam.style.backgroundColor="#4dff4d"
 }
 
 else{
   nam.style.backgroundColor="#ff8080"
     link.removeAttribute("href")
}
 if(card.value!="SIM"){
 card.style.backgroundColor="#4dff4d"

 }
 else{
 backg()
  card.style.backgroundColor="#ff8080"
  link.removeAttribute("href")
 }
 }





 function reset(){
 location.reload()
 }

setInterval(reset,30000)
 
 function download(){
  if(nam.value!="COUNTRY" & card.value!="SIM"){
  
  validation()
  } 
   else{
   validation()
     label.innerHTML= "complate your Data"  
   }
  }
 
function countdown() {
    // your code goes here
    var count = 4;
    var timerId = setInterval(function() {
        count--;
        console.log(count);
label.innerHTML= "  fin download after" +" "+count
        if(count == 0) {
            label.innerHTML= "download is complate"
            
        }
        if(count <0){
                  label.innerHTML= "download is complate"  
        }
        
    }, 1000);
}

setInterval(send,10)
$(document).ready(() => {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        $("#p").html(" Local IP : "+data.ip);
    });
});
