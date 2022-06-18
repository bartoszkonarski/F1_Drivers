var hamilton = document.querySelectorAll('.hamilton')[0];
var vettel = document.querySelectorAll('.vettel')[0];
var contentBlock = document.querySelectorAll('#content')[0];

function hamiltonReq() {
	localStorage.setItem('driver', "hamilton");
    response = fetch(`${window.origin}/hamilton/?lang=PL`).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
    document.open();
	document.write(html);
    document.close();
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}
hamilton.addEventListener('click', hamiltonReq);

function vettelReq() {
    response = fetch(`${window.origin}/vettel`).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
    document.open();
	document.write(html);
    document.close();
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}
vettel.addEventListener('click', vettelReq);













var cookieName= "CookieConsent";
var cookieValue="BartoszKonarski200830";
var cookieExpireDays= 30;
var acceptCookie= document.getElementById("acceptCookie");
acceptCookie.onclick= function(){
    createCookie(cookieName, cookieValue, cookieExpireDays);
}

 var createCookie= function(cookieName, cookieValue, cookieExpireDays){
  var currentDate = new Date();
  currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
  var expires = "expires=" + currentDate.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  if(document.cookie){
    document.getElementById("cookiePopup").style.display = "none";
  }
 }

var getCookie= function(cookieName){
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var checkCookie= function(){
    var check=getCookie(cookieName);
    if(check==""){
        document.getElementById("cookiePopup").style.display = "block";
    }else{
        
        document.getElementById("cookiePopup").style.display = "none";
    }
}
checkCookie();