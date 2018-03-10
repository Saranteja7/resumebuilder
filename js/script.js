function page1() {
  // location.href="p1.html";
  // location.reload("p1.html");
  // location.assign("p1.html");
  window.location.href="p1.html";
  // window.open("p1.html","_self");
  // document.location="p1.html";
}
function loadJSON(file,callback) {
  var rawFile = new xmlHttpRequest();
  rawFile.overRideMimeType("application/json");
  rawFile.open("GET",file,true);
  // open(method(get,post,head),url,async);
  rawFile.onreadystatechange=function() {
    if(rawFile.readystate===4 && rawFile.status="200") { //404 not found ------ 200 ok
      callback(rawFile.responseText);
    }
  }
  rawFile.send();
}
loadJSON("../resources/resume.json",function(text) {
  var data=JSON.parse(text);
});
