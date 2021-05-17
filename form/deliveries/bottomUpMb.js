var advId_aa7c62743ab0414c9aec968895303026 = '2f5576e9954248b3a9acb8e73bc91cad';
var campId_aa7c62743ab0414c9aec968895303026 = 'cbed67958312425580d907d9e5cd8e65';
var pubId_aa7c62743ab0414c9aec968895303026 = '5565e302fb2e489cae28103f6c66db12';
var chanId_aa7c62743ab0414c9aec968895303026 = '3d58e13cbef3493682fe6107ac13e262';
var placementId_aa7c62743ab0414c9aec968895303026 = 'aa7c62743ab0414c9aec968895303026';

var d = new Date();
d.setTime(d.getTime() + 31536000000);
var expires = 'expires='+ d.toUTCString();
document.cookie = '__yoid__=5167b305748ed9a9d0142b0a3061199b;' + expires + ';path=/';
if (!window.localStorage.getItem('__yoid__')) {
	window.localStorage.setItem('__yoid__', '5167b305748ed9a9d0142b0a3061199b');
}

function isValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
        alert("Please enter valid URL.");
        return false;
    } else {
        return true;
    }
}

function getTrackingYomedia(url) {
	var img = new Image();
	img.src = url;
}
var yomediaId_aa7c62743ab0414c9aec968895303026 = 'yomedia-wrapper-mobile-bottom-aa7c62743ab0414c9aec968895303026';
var yomediaContentId_aa7c62743ab0414c9aec968895303026 = 'yomedia-mobile-content-bottom-aa7c62743ab0414c9aec968895303026';
var iOS_aa7c62743ab0414c9aec968895303026 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var min_w = (0 != 0)?0:screen.width;
var min_h = (200 != 0)?300:screen.height;
var max_w = (0 != 0)?0:screen.width;
var max_h = (350 != 0)?450:screen.height;

function showBannerYomedia_aa7c62743ab0414c9aec968895303026(s) {
    if (document.getElementById(yomediaId_aa7c62743ab0414c9aec968895303026)) {
        return false;
    }
    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get('b');

    if(bannerURL){
        if(isValidURL(bannerURL)) {
            var banner = document.createElement('iframe');
            var clickTag = encodeURIComponent(getClickTagYomedia_aa7c62743ab0414c9aec968895303026());
            var creative_src = `${bannerURL}?pid=aa7c62743ab0414c9aec968895303026&aid=5f461adbb881401ca9148ff042856f5a&fid=7782039bfe2d415686491532bb53ec27&advId=2f5576e9954248b3a9acb8e73bc91cad&campId=cbed67958312425580d907d9e5cd8e65&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
            banner.setAttribute('src', creative_src);
            banner.setAttribute('id', yomediaContentId_aa7c62743ab0414c9aec968895303026);
            banner.setAttribute('allowFullScreen', '');
            banner.setAttribute('frameborder', '0');
            banner.setAttribute('scrolling', 'no');
            banner.style.cssText = `position: fixed; z-index: 2347483647 !important;bottom: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important;line-height:normal; border:0; width: 100% !important; height: 100%  !important;`;
        
            document.body.appendChild(banner);
            addAnEventListener_aa7c62743ab0414c9aec968895303026(banner, 'load', function() {
                isVisiabilityYomedia_aa7c62743ab0414c9aec968895303026(banner);
            });
            addAnEventListener_aa7c62743ab0414c9aec968895303026(window, 'scroll', function() {
                var scrollTop = e=document.documentElement.scrollTop;
                sendMessageToIframe_aa7c62743ab0414c9aec968895303026(JSON.stringify({pid: 'aa7c62743ab0414c9aec968895303026', scrt: scrollTop}));
            });
            impressionTrackingYomedia_aa7c62743ab0414c9aec968895303026();
        }
    }
}

function sendMessageToIframe_aa7c62743ab0414c9aec968895303026($message) {
    var banner = document.getElementById(yomediaContentId_aa7c62743ab0414c9aec968895303026);
    banner.contentWindow.postMessage($message, '*'); 
}

function minYoMediaPopupAd_aa7c62743ab0414c9aec968895303026() {
    var banner = document.getElementById(yomediaContentId_aa7c62743ab0414c9aec968895303026);
    banner.style.clip = 'rect(' + (screen.height - parseInt(min_h)) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaPre_aa7c62743ab0414c9aec968895303026() {
    var banner = document.getElementById(yomediaContentId_aa7c62743ab0414c9aec968895303026);
    banner.style.clip = 'rect(' + (screen.height - parseInt(min_h)) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaExpand_aa7c62743ab0414c9aec968895303026() {
    var banner = document.getElementById(yomediaContentId_aa7c62743ab0414c9aec968895303026);
    banner.style.clip = 'rect(' + (screen.height - parseInt(max_h)) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function closeYoMediaPopupAd_aa7c62743ab0414c9aec968895303026() {
    document.getElementById(yomediaContentId_aa7c62743ab0414c9aec968895303026).remove();
}

function rotateYomedia_aa7c62743ab0414c9aec968895303026() {
    var portraitBanner = document.getElementById(yomediaContentId_aa7c62743ab0414c9aec968895303026);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_aa7c62743ab0414c9aec968895303026);

    window.addEventListener("orientationchange", function() {
        if (readDeviceOrientation() === 'portrait') {
            landscapeBanner.style.display = 'none';
            portraitBanner.style.display = 'block';
        } else {
            portraitBanner.style.display = 'none';
            landscapeBanner.style.display = 'block';
        }
    });
}

function readDeviceOrientation() {     
    if (typeof window.orientation !== 'undefined') {
        if (Math.abs(window.orientation) === 90) {
            return 'landscape';
        } else {
            return 'portrait';
        }
    } else {
        if(window.innerHeight > window.innerWidth){
            return 'portrait';
        } else {
            return 'landscape';
        }
    }
}

var trackingViewable_aa7c62743ab0414c9aec968895303026 = false, interval_aa7c62743ab0414c9aec968895303026 = null, timeTrackingViewable_aa7c62743ab0414c9aec968895303026 = 1000;

function viewableBannerYomedia_aa7c62743ab0414c9aec968895303026(event) {
    if (!trackingViewable_aa7c62743ab0414c9aec968895303026) {
        if (viewHalfBannerYomedia_aa7c62743ab0414c9aec968895303026(this)) {
            if (interval_aa7c62743ab0414c9aec968895303026 === null) {
                var time = 0;
                interval_aa7c62743ab0414c9aec968895303026 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_aa7c62743ab0414c9aec968895303026) {
                        if (!trackingViewable_aa7c62743ab0414c9aec968895303026) {
                            viewableTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                            trackingViewable_aa7c62743ab0414c9aec968895303026 = true;
                            clearInterval(interval_aa7c62743ab0414c9aec968895303026);
                            interval_aa7c62743ab0414c9aec968895303026 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_aa7c62743ab0414c9aec968895303026()
        }
    }
}

function viewableBySzieBannerYomedia_aa7c62743ab0414c9aec968895303026(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_aa7c62743ab0414c9aec968895303026) {
        var rect = getClientRectBannerYomedia_aa7c62743ab0414c9aec968895303026(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_aa7c62743ab0414c9aec968895303026 === null) {
                var time = 0;
                interval_aa7c62743ab0414c9aec968895303026 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_aa7c62743ab0414c9aec968895303026) {
                        if (!trackingViewable_aa7c62743ab0414c9aec968895303026) {
                            viewableTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                            trackingViewable_aa7c62743ab0414c9aec968895303026 = true;
                            clearInterval(interval_aa7c62743ab0414c9aec968895303026);
                            interval_aa7c62743ab0414c9aec968895303026 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_aa7c62743ab0414c9aec968895303026()
        }
    }
}

function destroyViewableBannerYomedia_aa7c62743ab0414c9aec968895303026() {
    if (interval_aa7c62743ab0414c9aec968895303026 !== null) {
        clearInterval(interval_aa7c62743ab0414c9aec968895303026);
        interval_aa7c62743ab0414c9aec968895303026 = null;
    }
}

function viewHalfBannerYomedia_aa7c62743ab0414c9aec968895303026(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_aa7c62743ab0414c9aec968895303026(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_aa7c62743ab0414c9aec968895303026(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_aa7c62743ab0414c9aec968895303026(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_aa7c62743ab0414c9aec968895303026(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_aa7c62743ab0414c9aec968895303026(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_aa7c62743ab0414c9aec968895303026(wd, obj) {
    if (!obj) {
        return false;
    }
    if (typeof wd.scroller !== 'function') {
        wd.scroller = function() {
            var x = 0;
            var y = 0;
            if (typeof wd.pageYOffset == "number") {
                y = wd.pageYOffset;
                x = wd.pageXOffset;
            } else if (wd.document.body && (wd.document.body.scrollLeft || wd.document.body.scrollTop)) {
                y = wd.document.body.scrollTop;
                x = wd.document.body.scrollLeft;
            } else if (wd.document.documentElement && (wd.document.documentElement.scrollLeft || wd.document.documentElement.scrollTop)) {
                y = wd.document.documentElement.scrollTop;
                x = wd.document.documentElement.scrollLeft;
            }
            return {
                x: x,
                y: y
            };
        }
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomediaNew_aa7c62743ab0414c9aec968895303026(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_aa7c62743ab0414c9aec968895303026(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_aa7c62743ab0414c9aec968895303026(wd, obj) {
    if (!obj) {
        return false;
    }
    if (typeof wd.scroller !== 'function') {
        wd.scroller = function() {
            var x = 0;
            var y = 0;
            if (typeof wd.pageYOffset == "number") {
                y = wd.pageYOffset;
                x = wd.pageXOffset;
            } else if (wd.document.body && (wd.document.body.scrollLeft || wd.document.body.scrollTop)) {
                y = wd.document.body.scrollTop;
                x = wd.document.body.scrollLeft;
            } else if (wd.document.documentElement && (wd.document.documentElement.scrollLeft || wd.document.documentElement.scrollTop)) {
                y = wd.document.documentElement.scrollTop;
                x = wd.document.documentElement.scrollLeft;
            }
            return {
                x: x,
                y: y
            };
        }
    }
    var vpH = getViewPortHeightYomediaNew_aa7c62743ab0414c9aec968895303026(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_aa7c62743ab0414c9aec968895303026(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_aa7c62743ab0414c9aec968895303026() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_aa7c62743ab0414c9aec968895303026(wd) {
    var de = wd.document.documentElement;

    if (!!wd.innerWidth) {
        return wd.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

window.scroller = function() {
    var x = 0;
    var y = 0;
    if (typeof window.pageYOffset == "number") {
        y = window.pageYOffset;
        x = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        y = document.body.scrollTop;
        x = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        y = document.documentElement.scrollTop;
        x = document.documentElement.scrollLeft;
    }
    return {
        x: x,
        y: y
    };
}

function getOffsetYYomedia_aa7c62743ab0414c9aec968895303026(obj) {
    var y = 0;
    if (obj.offsetParent) {
        while (obj) {
            y += obj.offsetTop;
            obj = obj.offsetParent;
        }
    } else if (obj.y) {
        y += obj.y;
    }
    return y;
}

function getClientRectBannerYomedia_aa7c62743ab0414c9aec968895303026(obj) {
    var rect = null;
    var clip = obj.style.clip;
    if (clip) {
        if (clip == 'auto' || clip == 'initial' || clip == 'inherit') {
            rect = obj.getBoundingClientRect();
        } else {
            var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(px)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
            var ARGUMENT_NAMES = /([^\s]+)/g;
            clip = clip.toString().replace(STRIP_COMMENTS, '');
            var result = clip.slice(clip.indexOf('(')+1, clip.indexOf(')')).match(ARGUMENT_NAMES);
            if(result) {
                rect = {
                    top: parseInt(result[0]),
                    right: parseInt(result[1]),
                    bottom: parseInt(result[2]),
                    left: parseInt(result[3])
                }
                rect.width = (rect.right > rect.left) ? (rect.right - rect.left) : 0;
                rect.height = (rect.bottom > rect.top) ? (rect.bottom - rect.top) : 0;
            }
        }
    }
    return rect;
}
let visibleAdsYomedia_aa7c62743ab0414c9aec968895303026 = null, viewabilityIntervalID_aa7c62743ab0414c9aec968895303026, timerViewability_aa7c62743ab0414c9aec968895303026 = 0, trackedViewability_aa7c62743ab0414c9aec968895303026 = false;
const durationViewability_aa7c62743ab0414c9aec968895303026 = 10;

function isVisiabilityYomedia_aa7c62743ab0414c9aec968895303026(el) {
    if (el) {
        try {
            let thresholdSets_aa7c62743ab0414c9aec968895303026 = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_aa7c62743ab0414c9aec968895303026.push(i/100);
            }
            var adObserverVisiability_aa7c62743ab0414c9aec968895303026 = new IntersectionObserver(intersectionCallback_aa7c62743ab0414c9aec968895303026, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_aa7c62743ab0414c9aec968895303026
            });
            viewabilityIntervalID_aa7c62743ab0414c9aec968895303026 = window.setInterval(function() {
                handleTrackingViewability_aa7c62743ab0414c9aec968895303026(el);
            }, durationViewability_aa7c62743ab0414c9aec968895303026);
            adObserverVisiability_aa7c62743ab0414c9aec968895303026.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_aa7c62743ab0414c9aec968895303026) {
                window.clearInterval(viewabilityIntervalID_aa7c62743ab0414c9aec968895303026);   
            }
        }
    }
}

function intersectionCallback_aa7c62743ab0414c9aec968895303026(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_aa7c62743ab0414c9aec968895303026 = entry.target;
            } else {
                visibleAdsYomedia_aa7c62743ab0414c9aec968895303026 = null;
            }
        } else {
            visibleAdsYomedia_aa7c62743ab0414c9aec968895303026 = null;
        }
    });
}

function handleTrackingViewability_aa7c62743ab0414c9aec968895303026(el) {
    if (visibleAdsYomedia_aa7c62743ab0414c9aec968895303026 !== null && el === visibleAdsYomedia_aa7c62743ab0414c9aec968895303026) {
        timerViewability_aa7c62743ab0414c9aec968895303026 += durationViewability_aa7c62743ab0414c9aec968895303026;
        if (!trackedViewability_aa7c62743ab0414c9aec968895303026 && timerViewability_aa7c62743ab0414c9aec968895303026 >= 1000) {
            trackedViewability_aa7c62743ab0414c9aec968895303026 = true;
            viewableTrackingYomedia_aa7c62743ab0414c9aec968895303026();
            window.clearInterval(viewabilityIntervalID_aa7c62743ab0414c9aec968895303026);
        }
    } else {
        timerViewability_aa7c62743ab0414c9aec968895303026 = 0;
    }
}showBannerYomedia_aa7c62743ab0414c9aec968895303026(1);
function impressionTrackingYomedia_aa7c62743ab0414c9aec968895303026() { 
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_aa7c62743ab0414c9aec968895303026 === 'function') {
        _YoImpCallback_aa7c62743ab0414c9aec968895303026();
    }
}

function viewableTrackingYomedia_aa7c62743ab0414c9aec968895303026() {
}

function clickTrackingYomedia_aa7c62743ab0414c9aec968895303026() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://www.pinetech.vn/' ;
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
    window.parent.postMessage("LgTopBanner","*");
}

function clickThroughYomedia_aa7c62743ab0414c9aec968895303026() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://www.pinetech.vn/';
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_aa7c62743ab0414c9aec968895303026() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function getClickTagYomedia_aa7c62743ab0414c9aec968895303026() {
    var landingPage = '';
    landingPage = 'https://www.pinetech.vn/';
    return landingPage;
}

function addAnEventListener_aa7c62743ab0414c9aec968895303026(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_aa7c62743ab0414c9aec968895303026(event){
    try {
        var fn_aa7c62743ab0414c9aec968895303026 = event.data;
        processMessage_aa7c62743ab0414c9aec968895303026(fn_aa7c62743ab0414c9aec968895303026);
    }
    catch(err) {}
}
addAnEventListener_aa7c62743ab0414c9aec968895303026(window,'message',iFrameListener_aa7c62743ab0414c9aec968895303026);



//flight: Wipro Aiken Sach Khuan Tu Doi Tay MB Bottom Up Q1 2021

function createTrackingIframe_aa7c62743ab0414c9aec968895303026(id, src) {
	var trackingIframe = document.createElement("iframe");
	trackingIframe.id = 'trackIFrame-' + id;
	trackingIframe.setAttribute('frameborder', '0');
	trackingIframe.setAttribute('allowtransparency', 'true');
	trackingIframe.setAttribute('height', '0');
	trackingIframe.setAttribute('width', '0');
	trackingIframe.setAttribute('marginheight', '0');
	trackingIframe.setAttribute('marginwidth', '0');
	trackingIframe.setAttribute('vspace', '0');
	trackingIframe.setAttribute('hspace', '0');
	trackingIframe.setAttribute('src', src);
	return trackingIframe;
}

function getRandom_aa7c62743ab0414c9aec968895303026(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_aa7c62743ab0414c9aec968895303026;
var ms_aa7c62743ab0414c9aec968895303026;
function processMessage_aa7c62743ab0414c9aec968895303026(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_aa7c62743ab0414c9aec968895303026();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_aa7c62743ab0414c9aec968895303026':
                    minYoMediaPopupAd_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'restoreYoMediaPopupAd_aa7c62743ab0414c9aec968895303026':
                    restoreYoMediaPopupAd_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'setYoMediaExpand_aa7c62743ab0414c9aec968895303026':
                    setYoMediaExpand_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'setYoMediaPre_aa7c62743ab0414c9aec968895303026':
                    setYoMediaPre_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'closeYoMediaPopupAd_aa7c62743ab0414c9aec968895303026':
                    closeYoMediaPopupAd_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'closeYoMediaExpand_aa7c62743ab0414c9aec968895303026':
                    closeYoMediaExpand_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'impressionTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    impressionTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'viewableTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    viewableTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'clickTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    clickTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'clickTracking3rdYomedia_aa7c62743ab0414c9aec968895303026':
                    clickTracking3rdYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'startTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    startTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'firstQuartileTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    firstQuartileTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'midpointTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    midpointTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'thirdQuartileTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    thirdQuartileTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
                case 'completeTrackingYomedia_aa7c62743ab0414c9aec968895303026':
                    completeTrackingYomedia_aa7c62743ab0414c9aec968895303026();
                    break;
            }
            
        }
    } catch(error){}
}