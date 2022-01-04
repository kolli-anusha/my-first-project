let _currtime = new Date();
function timedCount() {
  _currtime = new Date();  
 
  postMessage(_currtime);
  setTimeout("timedCount()",1000);
  
}

timedCount(); 