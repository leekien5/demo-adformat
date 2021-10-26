/* DISPLAY BIG BALLOON */
function showAds() {
    let urlParams = new URLSearchParams(window.location.search);
	let bannerURL = urlParams.get('b');
	let domainURL = urlParams.get('c');
    let log = {
        style:'color: #FFFFFF; font-size: 12px; padding: 5px;',
        info:(msg)=>{
            console.log(`%c${msg}`,`background: #5DADE2; ${log.style}`)
        },
        success:(msg)=>{
            console.log(`%c${msg}`,`background: #008000; ${log.style}`)
        },
    }
		
	if (domainURL == null || domainURL == 'null') {
		domainURL = 'demo';
	}
    log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);
    document.getElementById('ads-big-balloon').src = `https://${domainURL}.yomedia.vn/` + `${bannerURL}?pid=104`;
}
showAds();    
//Minimize popup
function minYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-big-balloon', 'top-down', sPos, 'min', parseInt('300'), parseInt('250'), parseInt('800'), parseInt('500'), parseInt('100'));
}

function restoreYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-big-balloon', 'top-down', sPos, 'max', parseInt('300'), parseInt('250'), parseInt('800'), parseInt('500'), 100);
}

function setYoMediaExpand_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectExpand('ads-big-balloon', 'ex', sPos, parseInt('300'), parseInt('250'), parseInt('800'), parseInt('500'));
}

function setYoMediaPre_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectExpand('ads-big-balloon', 'pre', sPos, parseInt('300'), parseInt('250'), parseInt('800'), parseInt('500'), 50);
}

function closeYoMediaPopupAd_104() {
    avlInteractModule.closeAd('ads-big-balloon', parseInt('900000'), 'showYoMediaPopupAd_104');
}

function clickTrackingYomedia_104() {
	var clickTag = 'http://yomedia.vn';
	window.open(clickTag);
}

function startTrackingYomedia_104(){
    }
function firstQuartileTrackingYomedia_104(){
    }
function midpointTrackingYomedia_104(){
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
