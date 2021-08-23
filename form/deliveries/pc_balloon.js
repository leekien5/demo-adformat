avlHelperModule.embedTracking("");
avlHelperModule.embedTracking("");    
//Minimize popup
function minYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-balloon-p', 'top-down', sPos, 'min', parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'), parseInt('100'));
}

function restoreYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-balloon', 'top-down', sPos, 'max', parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'), 100);
}

function setYoMediaExpand_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectExpand('ads-balloon', 'ex', sPos, parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'));
}


function setYoMediaPre_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectExpand('ads-balloon', 'pre', sPos, parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'), 50);
}

function closeYoMediaPopupAd_104() {
    avlInteractModule.closeAd('ads-balloon', parseInt('900000'), 'showYoMediaPopupAd_104');
}

function clickTrackingYomedia_104() {
	var clickTag = 'https://yomedia.vn';
	window.open(clickTag);
}

function startTrackingYomedia_104(){

}
function firstQuartileTrackingYomedia_104(){

}
function midpointTrackingYomedia_104 (){

}
function thirdQuartileTrackingYomedia_104(){

}
function completeTrackingYomedia_104(){

}

function addAnEventListener_104(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_104(event){
     fn_104 = event.data;
     if ('string' == typeof fn_104 && fn_104.toLowerCase().indexOf("yomedia") >= 0) {
    	 eval(fn_104);
     }
}

var fn_104='';
addAnEventListener_104(window,'message',iFrameListener_104);