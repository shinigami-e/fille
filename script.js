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
 link.setAttribute("download","confing by ᑭᖇᝪᎢᝪᑕᝪし ᙭.hc")
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

if(nam.value==x[0]&&card.value=="SIM"){
validation()
const node1 = document.createElement("option");
const node2 = document.createElement("option");
const node3 = document.createElement("option");
const node4 = document.createElement("option");
const textnode1 = document.createTextNode("inwi");
const textnode2 = document.createTextNode("win 0 dh");
const textnode3 = document.createTextNode("iam");
const textnode4 = document.createTextNode("orange 0 dh");
node1.appendChild(textnode1);
node2.appendChild(textnode2);
node3.appendChild(textnode3);
node4.appendChild(textnode4)
document.getElementById("card").appendChild(node1);
document.getElementById("card").appendChild(node3);
document.getElementById("card").appendChild(node2);
document.getElementById("card").appendChild(node4);
}
if(nam.value=="COUNTRY"){
card.innerHTML=`<select><option>SIM</option></select>`
validation()
}
}

  
  
  
 function backg(){
 if(nam.value!="COUNTRY" & card.value!="SIM"){
 btn.style.boxShadow="2px 2px 2px 9px #1E90FF"
  btn.style.backgroundColor="#1E90FF"

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
 nam.style.backgroundColor="#1E90FF"
 }
 
 else{
   nam.style.backgroundColor="#FF9999"
     link.removeAttribute("href")
}
 if(card.value!="SIM"){
 card.style.backgroundColor="#1E90FF"

 }
 else{
 backg()
  card.style.backgroundColor="#FF9999"
  link.removeAttribute("href")
 }
 }





 function reset(){
 location.reload()
 barre()
 }

setInterval(reset,60000)
 
 function download(){
  if(nam.value!="COUNTRY" & card.value!="SIM"){
   setTimeout(adss,4000)
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

function sendMessageToTelegram(message) {

const botToken = '7995082033:AAEnH6RC5kpssSyHe9D0ZhfUiDb-kvB4Kyk';
const chatId = '7563513857';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message,
      
    };

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.ok) {
            console.log("✅ تم إرسال الرسالة بنجاح!");
        } else {
            console.error("❌ فشل في إرسال الرسالة:", result);
        }
    })
    .catch(error => console.error("❌ خطأ في الطلب:", error));

}


$(document).ready(() => {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        $("#p").html(" Local IP : "+data.ip);
        sendMessageToTelegram(`user ip ${data.ip}`)
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

function fetchTextFile2() {
fetch('server2.txt')
.then(response => response.text())
.then(data => {
 
document.getElementById('content2').textContent = data;
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
fetchTextFile2()
},1000) 

body = document.getElementById("body")
newDiv = document.createElement("div")
newDiv.style=`
position:fixed;
margin-block:-30%; margin-left:-0.5%;background-color:black;width:95%;height:63%;
border:double;border-color:black;
z-index:60; 
opacity:100%;
background-image:url('img/loading_nqrtqvns.gif');
background-size:80%;
background-repeat:no-repeat;
background-position:center;
padding-top:40px;
`

// العنوان 1
nameServer=document.createElement("p") 
nameServer.append(document.createTextNode("iam v2ray server"))
nameServer.style.cssText="color:#00ff88; text-align:center; font-family:Tahoma; font-weight:bold; margin:5px 0; font-size:14px;"

// النص 1 - دابا p بحال اللي تحت
text = document.createElement("p")
text.setAttribute("id","content")
text.style.cssText=`
color:#3399FF;
width:90%;
margin:10px auto;
text-align:center;
font-size:11px;
font-family:monospace;
word-break: break-all; /* باش يتكسر الرابط */
white-space: pre-wrap;
max-height:120px;
overflow-y:auto;
padding:5px;
background:#111;
border-radius:5px;
`

// زر نسخ 1
btnCopy = document.createElement("button")
btnCopy.style.cssText = `
width:90%;
height:25px;
display:block;
margin:5px auto 15px auto;
color:black;
background:#333;
border:none;
border-radius:5px;
` 
btnCopy.append(document.createTextNode("COPPY"))
btnCopy.setAttribute("id","btncopy")
btnCopy.setAttribute("onclick",`copyToClipboard()`)

// العنوان 2
nameServer1=document.createElement("p") 
nameServer1.append(document.createTextNode("inwi ssh server"))
nameServer1.style.cssText="color:#00ff88; text-align:center; font-family:Tahoma; font-weight:bold; margin:5px 0; font-size:14px;"

// النص 2 - p بحال اللي فوق
text2 = document.createElement("p")
text2.setAttribute("id","content2")
text2.style.cssText=`
color:#3399FF;
width:90%;
margin:10px auto;
text-align:center;
font-size:11px;
font-family:monospace;
word-break: break-all;
white-space: pre-wrap;
max-height:120px;
overflow-y:auto;
padding:5px;
background:#111;
border-radius:5px;
`

// زر نسخ 2
btnCopy2 = document.createElement("button")
btnCopy2.style.cssText = `
width:90%;
height:25px;
display:block;
margin:5px auto;
color:black;
background:#333;
border:none;
border-radius:5px;
` 
btnCopy2.append(document.createTextNode("COPPY"))
btnCopy2.setAttribute("id","btncopy2")
btnCopy2.setAttribute("onclick",`copyToClipboard2()`)

// زر الإلغاء
btnCencel = document.createElement("button")
btnCencel.style.cssText = `
width:80px;
height:30px;
display:block;
margin:10px auto 0 auto;
color:black;
background:#ff3333;
border:none;
border-radius:5px;
`
btnCencel.append(document.createTextNode("CANCEL"))
btnCencel.setAttribute("onclick",`removeServerr()`)

// تجميع كلشي
newDiv.append(nameServer)
newDiv.append(text)
newDiv.append(btnCopy)
newDiv.append(nameServer1)
newDiv.append(text2)
newDiv.append(btnCopy2)
newDiv.append(btnCencel)
div.append(newDiv) 
barre()
}





 function copyToClipboard() {
                barre()
                let btn = document.getElementById("btncopy");
                if(btn.textContent.length <= 5){ // 4 "COPY" + 3 "ED✓" = 7 < 8
                    btn.append(document.createTextNode("ED✓"))
                }
                text = document.getElementById("content").textContent
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                
                document.body.removeChild(textarea);
                }



 function copyToClipboard2() {
                barre()
                let btn = document.getElementById("btncopy2");
                if(btn.textContent.length <= 5){ // 4 "COPY" + 3 "ED✓" = 7 < 8
                    btn.append(document.createTextNode("ED✓"))
                }
                text2 = document.getElementById("content2").textContent
                const textarea = document.createElement('textarea');
                textarea.value = text2;
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
  0% { width: 25%; background-color: #1E90FF; }
  10% { width: 18%; background-color:green; }
  25% { width: 25%; background-color: #1E90FF; }
  50% { width: 50%; background-color: #1E90FF; }
  75% { width: 75%; background-color: #1E90FF; }
  80% { width: 80%; background-color: #1E90FF; }
  90% { width: 90%; background-color: #1E90FF; }
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
  element.style.animation = 'myAnimation 5s 1 1s';
  }
  setTimeout(barre,1000)
  code = document.getElementById("code")
  lead =document.getElementById("lead")
  function generateCode(){
  code.innerHTML="code is :9999"
  lead.src=""
  }
  function getCode(){
 lead.src="img/images.gif"
 setTimeout(generateCode,3000)
 setTimeout(()=>{
 code.innerHTML="get code !"
 },6000)
  }
  ll=0
  function subscribe(){
  body = document.getElementById("body")
  nnewDiv = document.createElement("div")
  newh3 = document.createElement("p")
  newh3.append(document.createTextNode("مرحبًا ! 🤩 إذا كنت ترغب في الحصول على كلمة المرور الحصرية لموقعنا 🤫، لا تنسى متابعة حسابنا على انستقرام! 📸 سنقوم بنشر الكلمة السرية في قصصتنا، لذا تأكد من أنك تتابعنا للحصول على هذه الفرصة الفريدة! 💥 لا تفوت فرصة الحصول على كلمة المرور الحصرية! 🔓 متابعة حسابنا الآن وكن من بين الأوائل الذين يحصلون على الكلمة السرية ! 🚀 "))
  nnewDiv.style=`
  position:relative;
  margin-block:-270%; margin-left:;background-color:black;width:100%;height:100%;
  border:double;border-color:black;
  z-index:100; 
  opacity:;
  background-image:url('img/anonymous.gif');
  background-size:80%;
  background-repeat:no-repeat;
  background-position:50% 30%;
  `
  newh3.style=`
 height:100%; margin-block:150%;margin-left:15%;background-color:;width:70%;
     font-family: Arial, sans-serif;text-align:center;
  `

  
  nnewDiv.setAttribute("onclick","subsc()")
  
  a = document.createElement("a")
  a.setAttribute("href","")
 a.append(nnewDiv)
  nnewDiv.append(newh3)
  body.append(a)
  }


 
 function subsc(){ 
 ll+=1
 }
 
 function ext(){
 if(ll==1){
   body = document.getElementById("body")
    setTimeout(function(){
  nnewDiv.remove()
  
   },10)
 }
 }
 jj=0
 function loading(){
 jj+=1
 if(jj==1){
  setTimeout(subscribe,5000)
 }
 }
 setInterval(ext,500)
 
 function adss(){
window.location.href='https://workplaceanticipatedtribe.com/kh1n5fv09h?key=a69072ec5f8caa2cd93b94413a683d6f'
 }