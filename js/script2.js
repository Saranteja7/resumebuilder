
function loadJSON(file,callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  // open(method(get,post,head),url,async);
  rawFile.onreadystatechange=function() {
    if(rawFile.readyState===4 && rawFile.status=="200") { //404 not found ------ 200 ok
      callback(rawFile.responseText);
    }
  }
  rawFile.send();
}
loadJSON("/resources/resume.json",function(text) {
  var data=JSON.parse(text);
  // console.log(data.basics.profiles[0].network);
  basic(data.basics);
});

var main=document.getElementById('maindiv');
var ldiv=document.getElementById('ldiv');
var rdiv=document.getElementById('rdiv');

function basic(basics) {
  var image=document.createElement("img");
  image.classList.add("simg");
  image.src=basics.picture;
  var hd1=document.createElement("h1");
  hd1.textContent=basics.name;
  var hd3=document.createElement("h3");
  hd3.textContent=basics.label;
  var hr=document.createElement("hr");
  ldiv.appendChild(image);
  ldiv.appendChild(hd1);
  ldiv.appendChild(hd3);
  ldiv.appendChild(hr);

  var sc2=document.createElement("div");
  sc2.classList.add("sc2");
  var h3_2=document.createElement("h3");
  h3_2.textContent=basics.phone;
  var h3_3=document.createElement("h3");
  h3_3.textContent=basics.email;
  var hr2=document.createElement("hr");
  sc2.appendChild(h3_2);
  sc2.appendChild(hr2);
  sc2.appendChild(h3_3);
  ldiv.appendChild(sc2);
  console.log("Thank You...!!");


}
