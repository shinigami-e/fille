if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        } else {
            console.log('Notification permission denied.');
        }
    });
}
if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('service-worker.js')
       .then(function(registration) {
         console.log('تم تسجيل خدمة الواجهة بنجاح:', registration);
       })
       .catch(function(error) {
         console.log('فشل تسجيل خدمة الواجهة:', error);
       });
   }
   
   if ('serviceWorker' in navigator && 'SyncManager' in window) {
   navigator.serviceWorker.register('/service-worker.js')
   .then(function(registration) {
   console.log('Service Worker registered');
   })
   .catch(function(error) {
   console.log('Service Worker registration failed:', error);
   });
   window.addEventListener('online', function() {
   console.log('Connected to the Internet');
   navigator.serviceWorker.ready.then(function(registration) {
   registration.sync.register('send-notification');
   });
   });
   }
   



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
  
x = ["MOROCCO","ORDAN","IRAQ","IRAN","ALGERIA","EGYPT","SUDAN"]
/*   morocco   */
if(nam.value==x[0]&card.value!="inwi"&card.value!="orange"){
if(card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
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
if(card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="inwi" || card.value=="iranesel" ||card.value=="orange"|| card.value=="iraq"){
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
if(card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="zain" ||card.value=="iranesel" ||  card.value=="inwi" || card.value=="orange"){
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
if(card.value=="zain."||card.value=="idoom"||card.value=="vodafone"||card.value=="inwi" || card.value=="orange"|| card.value=="iraq" ||card.value=="zain"){
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

/*algeria*/
if(nam.value==x[4]&card.value!="idoom"){
if(card.value=="vodafone"||card.value=="zain."||card.value=="orange" ||card.value=="inwi"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("idoom");
const textnode2 = document.createTextNode("idoom");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*egypt*/
if(nam.value==x[5]&card.value!="vodafone"){
if(card.value=="zain."||card.value=="idoom" ||card.value=="orange" ||card.value=="inwi"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("vodafone");
const textnode2 = document.createTextNode("vodafone");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*sudan*/
if(nam.value==x[6]&card.value!="zain."){
if(card.value=="idoom"||card.value=="vodafone"||card.value=="orange" ||card.value=="inwi"||card.value=="zain"|| card.value=="iraq"||card.value=="iranesel" ){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const textnode1 = document.createTextNode("zain.");
const textnode2 = document.createTextNode("zain.");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node2);
}
/*else*/




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
 barre()
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
            barre()
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
 let server = document.querySelector("#server")
 let div = document.querySelector("#div_02")
 

 function removeServer(){
 newDiv.remove()
 barre()
 }
 function fetchTextFile() {
 fetch('server.txt')
 .then(response => response.text())
 .then(data => {
  
 document.getElementById('content').textContent = data;
  //document.getElementById('content').style.fontSize="1px"
 })
 .catch(error=> console.error(error));
 }
 function removeServerr(){
 w+=1
 newDiv.remove()
 
 }
  function copyServer(){
 setTimeout(()=>{
 newDiv.style.backgroundImage='url()'
 fetchTextFile() 
 },2000) 
 

 body = document.getElementById("body")
 newDiv = document.createElement("div")
 newDiv.style=`
 position:fixed;
 margin-block:-30%; margin-left:-0.5%;background-color:black;width:95%;height:70%;
 border:double;border-color:black;
 z-index:100; 
 opacity:100%;
 background-image:url('loading_nqrtqvns.gif');
 background-size:80%;
 background-repeat:no-repeat;
 background-position:center;
 `
 text = document.createElement("p")
 text.setAttribute("id","content")
 btnCopy = document.createElement("button")
 btnCencel = document.createElement("button")
 btnCopy.style  = `
 width:80px;
 height:40px;
 position:fixed;
 top:75.5%;left:52%;
 color:black;
 opacity:20%;
 ` 
 btnCencel.style = `
 width:80px;
 height:40px;
 position:fixed;
 top:75.5%;left:28%;
 color:black;
 opacity:20%;
 `
 text.style=`
 max-height:; /* تحديد أقصى ارتفاع للعنصر */
 overflow-y: scroll; /* تمكين التمرير العمودي إذا كان النص كبيرًا */
 border:; /* إضافة حدود لعنصر */
 
 
 `
 text.style.color="green"
 text.style.width="95%"
 text.style.height="85%"
 text.style.textAlign="center"
 text.style.backgroundColor=""
 text.style.fontSize="10px"
 text.style.backgroundAttachment="scroll"
 text.style.zIndex=10

 btnCopy.setAttribute("max","7")
 btnCopy.append(document.createTextNode("COPPY"))
 btnCopy.setAttribute("id","btncopy")
  btnCencel.append(document.createTextNode("CONCEL"))
  btnCencel.setAttribute("onclick",`removeServerr()`)
  btnCopy.setAttribute("onclick",`copyToClipboard()`)
  newDiv.append(text)
 newDiv.append(btnCopy)
 newDiv.append(btnCencel)
 div.append(newDiv) 
 barre()
  }
  function copyToClipboard() {
                 barre()
                 text = document.getElementById("btncopy").append(document.createTextNode("ED✓"))
                 text = document.getElementById("content").textContent
                 const textarea = document.createElement('textarea');
                 textarea.value = text;
                 document.body.appendChild(textarea);
                 textarea.select();
                 document.execCommand('copy');
                 
                 document.body.removeChild(textarea);
                 }
                 w=0
                 function servver(){
                 barre()
                 w+=1
                 if(w%2==0){
                 removeServer()
                 }
                 else{
                 copyServer()
                 }
                 
                 }
  server.setAttribute("onclick",`servver()`);
  
  function barre(){
  const styleSheet = document.styleSheets[0];
  const keyframes = `
  @keyframes myAnimation {
  0% { width: 10%; background-color: yellow; }
  10% { width: 18%; background-color:green; }
  25% { width: 25%; background-color: green; }
  50% { width: 50%; background-color: green; }
  75% { width: 75%; background-color: green; }
  80% { width: 80%; background-color: green; }
  90% { width: 90%; background-color: green; }
  100% { width: 100%; background-color: transparent; }
  }
  `;
  // التحقق من وجود التحريك مسبقًا، وإزالته إن وجد
  if (styleSheet.cssRules[styleSheet.cssRules.length - 1].name === "myAnimation") {
  styleSheet.deleteRule(styleSheet.cssRules.length - 1);
  }
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  
  // تطبيق التحريك على العنصر
  const element = document.getElementById('hr0');
  element.style.animation = 'none'; // إعادة تعيين التحريك
  element.offsetWidth; // إعادة التشغيل
  element.style.animation = 'myAnimation 4s 1 2s';
  }
  setTimeout(barre,2000)
  code = document.getElementById("code")
  lead =document.getElementById("lead")
  function generateCode(){
  code.innerHTML="code is : 1234"
  lead.src=""
  }
  function getCode(){
 lead.src="images.gif"
 setTimeout(generateCode,3000)
 setTimeout(()=>{
 code.innerHTML="get code !"
 },6000)
  }

