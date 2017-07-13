var iframe = document.getElementById('interactiveExperience');
var guidMessage;
var guid = $.cookie("GLOBALID");


iframe.addEventListener("load", function() {
	guidMessage = {"guid": guid};
	iframe.contentWindow.postMessage(guidMessage, iframe.src)
})

function toggleFullScreen() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement) {
    var element = document.getElementById('interactiveExperience');
    if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  } else {
    if (document.exitFullscreen){
      document.exitFullscreen();
    }
    if (document.webkitExitFullscreen){
      document.webkitExitFullscreen();
    }
    if(document.mozCancelFullScreen){
      document.mozCancelFullScreen();
    }
  }
}

$(document).ready(function(){
	var _fullscreenButton = $('<p id="fullscreen-button"><img src="http://ixd.invodo.com/verizon_embed/img/fullscreen-button.png" style="height: 15px !important; width: 15px;"/></p>');
	_fullscreenButton.css({"position": "absolute", "bottom" : "25px","right" : "5px","z-index" : "2147483647", "cursor":"pointer", "color": "white", "height" : "15px !important", "width" : "15px"});
	_fullscreenButton.insertAfter('#interactiveExperience');
	$('#fullscreen-button').on('click', function(){
		toggleFullScreen();
	})
	document.querySelector('style').textContent +=
	    "@media screen and (max-width:1024px) { #fullscreen-button { display: none !important; }}"
})
