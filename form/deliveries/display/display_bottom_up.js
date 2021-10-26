/* DISPLAY BOTTOM UP */
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
    document.getElementById('ads-bottom-up').src = `https://${domainURL}.yomedia.vn/` + `${bannerURL}?pid=104&ord=12`;
}
showAds();
//Minimize popup
function minYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-bottom-up', 'top-down', sPos, 'min', parseInt('1200'), parseInt('170'), parseInt('1200'), parseInt('600'), parseInt('100'));
}

function restoreYoMediaPopupAd_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectAd('ads-bottom-up', 'top-down', sPos, 'max', parseInt('1200'), parseInt('170'), parseInt('1200'), parseInt('600'), 0);
}

function setYoMediaExpand_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectExpand('ads-bottom-up', 'ex', sPos, parseInt('1200'), parseInt('170'), parseInt('1200'), parseInt('600'));
}

function setYoMediaPre_104() {
    var sPos = 'right-bottom';
    avlInteractModule.rectExpand('ads-bottom-up', 'pre', sPos, parseInt('1200'), parseInt('170'), parseInt('1200'), parseInt('600'), 0);
}

function closeYoMediaPopupAd_104() {
    avlInteractModule.closeAd('ads-bottom-up', parseInt('900000'), 'showYoMediaPopupAd_104');
}

function clickTrackingYomedia_104() {
    var clickTag = 'https://yomedia.vn';          
        if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        avlHelperModule.embedTracking(_YoClick);
    }
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
