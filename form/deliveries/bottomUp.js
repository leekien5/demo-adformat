// avlInteractModule.innerHTMLAds('104', '<iframe id=\"YoMediaBalloon\" name=\"banner\" style=\"width:1200px; height:600px;bottom:0px;display:block;line-height:normal;overflow:hidden;position:fixed;z-index:2000!important;border:0;margin-left: auto;margin-right: auto;left: 0;right: 0;clip: rect(0px 1200px 600px 0px);\"></iframe>', 'popup');
avlHelperModule.embedTracking("");
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
    var clickTag = 'http://yomedia.vn';          
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
