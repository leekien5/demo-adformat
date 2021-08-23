function minYoMediaPopupAd_104() {
    // var sPos = 'right-bottom';
    // avlInteractModule.rectAd('ads-balloon-popup', 'top-down', sPos, 'min', parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'), parseInt('120'));
}

function restoreYoMediaPopupAd_104() {
    // var sPos = 'right-bottom';
    // avlInteractModule.rectAd('ads-balloon-popup', 'top-down', sPos, 'max', parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'), 100);
}

function setYoMediaExpand_104() {
    // var sPos = 'right-bottom';
    // avlInteractModule.rectExpand('ads-balloon-popup', 'ex', sPos, parseInt('475'), parseInt('325'), parseInt('120'), parseInt('235'));
}

function setYoMediaPre_104() {
    // var sPos = 'right-bottom';
    // avlInteractModule.rectExpand('ads-balloon-popup', 'pre', sPos, parseInt('120'), parseInt('235'), parseInt('475'), parseInt('325'), 50);
}

function closeYoMediaPopupAd_104() {
    avlInteractModule.closeAd('ads-balloon-popup', parseInt('900000'), 'showYoMediaPopupAd_104');
}

function clickTrackingYomedia_104() {
	var clickTag = 'http://www.pinetech.vn/';
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