avlHelperModule.embedTracking("https://demo.yomedia.vn/tracking.gif?evt=impression");
avlHelperModule.embedTracking("https://bs.serving-sys.com/serving/adServer.bs?cn=display&c=19&mc=imp&pli=24912381&PluID=0&ord=[timestamp]&rtu=-1");    
//Minimize popup
function minYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-balloon', 'top-down', sPos, 'min', parseInt('300'), parseInt('250'), parseInt('500'), parseInt('300'), parseInt('100'));
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
	var clickTag = 'http://www.pinetech.vn/';
	window.open(clickTag);
}

function startTrackingYomedia_104(){
    avlHelperModule.embedTracking("http://demo.yomedia.vn/tracking.gif?evt=start");
    }
function firstQuartileTrackingYomedia_104(){
    avlHelperModule.embedTracking("http://demo.yomedia.vn/tracking.gif?evt=firstQuartile");
    }
function midpointTrackingYomedia_104 (){
    avlHelperModule.embedTracking("http://demo.yomedia.vn/tracking.gif?evt=midpoint");
    }
function thirdQuartileTrackingYomedia_104(){
    avlHelperModule.embedTracking("http://demo.yomedia.vn/tracking.gif?evt=thirdQuartile");
    }
function completeTrackingYomedia_104(){
    avlHelperModule.embedTracking("http://demo.yomedia.vn/tracking.gif?evt=complete");
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