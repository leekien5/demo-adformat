var iOS_ab1f7103e5354124a9d557162785eeb5 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function showBannerYomedia_ab1f7103e5354124a9d557162785eeb5(s) {
    if (document.getElementById('yomedia-mobile-interstitial-ab1f7103e5354124a9d557162785eeb5')) {
        return false;
    }
    var domWrapper = document.createElement('div');
    domWrapper.setAttribute('id', 'yomedia-mobile-interstitial-ab1f7103e5354124a9d557162785eeb5');
    domWrapper.style.cssText = 'top: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important; display:block; line-height:normal; overflow: hidden; position:fixed; z-index:4999 !important; border:0; width: 100% !important; height: 100% !important; z-index: 100000; background-color: rgba(0, 0, 0, 0.8);';

    var iframe_banner = document.createElement('iframe');
    var click_tag = encodeURIComponent(getClickTagYomedia_ab1f7103e5354124a9d557162785eeb5());
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');
    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if(bannerURL ){
        console.log("Banner: ", bannerURL);
        iframe_banner.setAttribute('src', `https://${domainURL}.yomedia.vn/${bannerURL}?pid=ab1f7103e5354124a9d557162785eeb5&clk=${click_tag}`);
        iframe_banner.setAttribute('id', 'yomedia-mobile-interstitial-ab1f7103e5354124a9d557162785eeb5');
        iframe_banner.setAttribute('scrolling', 'no');
        iframe_banner.setAttribute('allowFullScreen', '');
        iframe_banner.style.cssText = 'top: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important; display:block; line-height:normal; position:absolute; z-index:4999 !important; border:0; width: 100% !important; height: 100% !important;';
        iframe_banner.width = screen.width;
        iframe_banner.height = screen.height;

        var close_btn = document.createElement('div');
        close_btn.setAttribute('id', 'yomedia-close-btn-ab1f7103e5354124a9d557162785eeb5');
        close_btn.style.cssText = 'width: 40px;height: 40px;background-image: url("../../../resources/images/close_40x40-2.png");position: fixed;top: 0;right: 0px;z-index: 50000;';

        domWrapper.appendChild(iframe_banner);
        domWrapper.appendChild(close_btn);
        document.body.appendChild(domWrapper);
        document.body.style.overflow = 'hidden';
        close_btn.addEventListener("click", closeYoMediaPopupAd_ab1f7103e5354124a9d557162785eeb5, false);
        impressionTrackingYomedia_ab1f7103e5354124a9d557162785eeb5();
    }
}

function closeYoMediaPopupAd_ab1f7103e5354124a9d557162785eeb5() {
    document.getElementById('yomedia-mobile-interstitial-ab1f7103e5354124a9d557162785eeb5').remove();
    document.body.style.overflow = 'auto';
}

showBannerYomedia_ab1f7103e5354124a9d557162785eeb5(1);
function impressionTrackingYomedia_ab1f7103e5354124a9d557162785eeb5() {
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('impression');
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        avlHelperModule.embedTracking(_YoImp);
    }
}

function clickTrackingYomedia_ab1f7103e5354124a9d557162785eeb5() {
    var date = new Date();
    var time = date.getTime();
    var landing_page = 'https://www.yomedia.vn/';
    landing_page = landing_page.replace('[timestamp]', time);
    avlHelperModule.embedTracking('');

    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('click');
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        avlHelperModule.embedTracking(_YoClick);
    }
    var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
    if (!isMac && landing_page.length > 0) {
        window.open(landing_page, '_blank');
    }
}

function startTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('start');
}

function firstQuartileTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('firstQuartile');
}

function midpointTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('midpoint');
}

function thirdQuartileTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('thirdQuartile');
}

function completeTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('complete');
}

function muteTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('mute');
}

function unmuteTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('unmute');
}

function pauseTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('pause');
}

function fullscreenTrackingYomedia_ab1f7103e5354124a9d557162785eeb5(){
    avlHelperModule.embedTracking('');
    embedThirdTracking_ab1f7103e5354124a9d557162785eeb5('fullscreen');
}

function embedThirdTracking_ab1f7103e5354124a9d557162785eeb5(event) {
}

function getClickTagYomedia_ab1f7103e5354124a9d557162785eeb5() {
    var landing_page = 'https://yomedia.vn';
    return landing_page;

}

function addAnEventListener_ab1f7103e5354124a9d557162785eeb5(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_ab1f7103e5354124a9d557162785eeb5(event){
     fn_ab1f7103e5354124a9d557162785eeb5 = event.data;
     if ('string' == typeof fn_ab1f7103e5354124a9d557162785eeb5 &&  fn_ab1f7103e5354124a9d557162785eeb5.toLowerCase().indexOf('yomedia') >= 0) {
         eval(fn_ab1f7103e5354124a9d557162785eeb5);
     }
}

var fn_ab1f7103e5354124a9d557162785eeb5='';
addAnEventListener_ab1f7103e5354124a9d557162785eeb5(window,'message',iFrameListener_ab1f7103e5354124a9d557162785eeb5);