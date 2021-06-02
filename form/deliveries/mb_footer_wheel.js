var advId_72fc2575583347fca720dc25c4620f2b = '2f5576e9954248b3a9acb8e73bc91cad';
var campId_72fc2575583347fca720dc25c4620f2b = '89f481b0a7ea4004ba23d29dddf1cfe0';
var pubId_72fc2575583347fca720dc25c4620f2b = 'a01e41eaa62a41a091889abeaec0de5f';
var chanId_72fc2575583347fca720dc25c4620f2b = '3d58e13cbef3493682fe6107ac13e262';
var placementId_72fc2575583347fca720dc25c4620f2b = '72fc2575583347fca720dc25c4620f2b';

var d = new Date();
d.setTime(d.getTime() + 31536000000);
var expires = 'expires='+ d.toUTCString();
document.cookie = '__yoid__=c3be84574f456ce291a73aab800ab560;' + expires + ';path=/';
if (!window.localStorage.getItem('__yoid__')) {
    window.localStorage.setItem('__yoid__', 'c3be84574f456ce291a73aab800ab560');
}

function getTrackingYomedia(url) {
    var img = new Image();
    img.src = url;
}
var yomediaId_72fc2575583347fca720dc25c4620f2b = 'yomedia-wrapper-mobile-wheel-72fc2575583347fca720dc25c4620f2b';
var yomediaContentId_72fc2575583347fca720dc25c4620f2b = 'yomedia-mobile-content-wheel-72fc2575583347fca720dc25c4620f2b';
var iOS_72fc2575583347fca720dc25c4620f2b = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var min_w = (750 != 0)?750:screen.width;
var min_h = (300 != 0)?300:screen.height;
var max_w = (0 != 0)?0:screen.width;
var max_h = (0 != 0)?0:screen.height;

function showBannerYomedia_72fc2575583347fca720dc25c4620f2b(s) {
    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get('b');
    let domainURL = urlParams.get('c');

    if (document.getElementById(yomediaId_72fc2575583347fca720dc25c4620f2b)) {
        return false;
    }

    if(bannerURL && domainURL) {
        var banner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_72fc2575583347fca720dc25c4620f2b());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=72fc2575583347fca720dc25c4620f2b&clk=${clickTag}`;
        banner.setAttribute('src', creative_src);
        banner.setAttribute('id', yomediaContentId_72fc2575583347fca720dc25c4620f2b);
        banner.setAttribute('allowFullScreen', '');
        banner.setAttribute('frameborder', '0');
        banner.setAttribute('scrolling', 'no');
        banner.style.cssText = `position: fixed; z-index: 2347483647 !important;bottom: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important;line-height:normal; border:0; width: 100% !important; height: 100%  !important;`;
    
        document.body.appendChild(banner);
        addAnEventListener_72fc2575583347fca720dc25c4620f2b(banner, 'load', function() {
            isVisiabilityYomedia_72fc2575583347fca720dc25c4620f2b(banner);
        });
        addAnEventListener_72fc2575583347fca720dc25c4620f2b(window, 'scroll', function() {
            var scrollTop = e=document.documentElement.scrollTop;
            sendMessageToIframe_72fc2575583347fca720dc25c4620f2b(JSON.stringify({pid: '72fc2575583347fca720dc25c4620f2b', scrt: scrollTop}));
        });
        impressionTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
        
    }
}

function sendMessageToIframe_72fc2575583347fca720dc25c4620f2b($message) {
    var banner = document.getElementById(yomediaContentId_72fc2575583347fca720dc25c4620f2b);
    banner.contentWindow.postMessage($message, '*'); 
}

function minYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b() {
    var banner = document.getElementById(yomediaContentId_72fc2575583347fca720dc25c4620f2b);
    banner.style.clip = 'rect(' + (screen.height - parseInt(min_h)) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaPre_72fc2575583347fca720dc25c4620f2b() {
    var banner = document.getElementById(yomediaContentId_72fc2575583347fca720dc25c4620f2b);
    banner.style.clip = 'rect(' + (screen.height - parseInt(min_h)) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaExpand_72fc2575583347fca720dc25c4620f2b() {
    var banner = document.getElementById(yomediaContentId_72fc2575583347fca720dc25c4620f2b);
    banner.style.clip = 'rect(' + (screen.height - parseInt(max_h)) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function closeYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b() {
    document.getElementById(yomediaContentId_72fc2575583347fca720dc25c4620f2b).remove();
}

function rotateYomedia_72fc2575583347fca720dc25c4620f2b() {
    var portraitBanner = document.getElementById(yomediaContentId_72fc2575583347fca720dc25c4620f2b);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_72fc2575583347fca720dc25c4620f2b);

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

var trackingViewable_72fc2575583347fca720dc25c4620f2b = false, interval_72fc2575583347fca720dc25c4620f2b = null, timeTrackingViewable_72fc2575583347fca720dc25c4620f2b = 1000;

function viewableBannerYomedia_72fc2575583347fca720dc25c4620f2b(event) {
    if (!trackingViewable_72fc2575583347fca720dc25c4620f2b) {
        if (viewHalfBannerYomedia_72fc2575583347fca720dc25c4620f2b(this)) {
            if (interval_72fc2575583347fca720dc25c4620f2b === null) {
                var time = 0;
                interval_72fc2575583347fca720dc25c4620f2b = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_72fc2575583347fca720dc25c4620f2b) {
                        if (!trackingViewable_72fc2575583347fca720dc25c4620f2b) {
                            viewableTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                            trackingViewable_72fc2575583347fca720dc25c4620f2b = true;
                            clearInterval(interval_72fc2575583347fca720dc25c4620f2b);
                            interval_72fc2575583347fca720dc25c4620f2b = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_72fc2575583347fca720dc25c4620f2b()
        }
    }
}

function viewableBySzieBannerYomedia_72fc2575583347fca720dc25c4620f2b(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_72fc2575583347fca720dc25c4620f2b) {
        var rect = getClientRectBannerYomedia_72fc2575583347fca720dc25c4620f2b(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_72fc2575583347fca720dc25c4620f2b === null) {
                var time = 0;
                interval_72fc2575583347fca720dc25c4620f2b = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_72fc2575583347fca720dc25c4620f2b) {
                        if (!trackingViewable_72fc2575583347fca720dc25c4620f2b) {
                            viewableTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                            trackingViewable_72fc2575583347fca720dc25c4620f2b = true;
                            clearInterval(interval_72fc2575583347fca720dc25c4620f2b);
                            interval_72fc2575583347fca720dc25c4620f2b = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_72fc2575583347fca720dc25c4620f2b()
        }
    }
}

function destroyViewableBannerYomedia_72fc2575583347fca720dc25c4620f2b() {
    if (interval_72fc2575583347fca720dc25c4620f2b !== null) {
        clearInterval(interval_72fc2575583347fca720dc25c4620f2b);
        interval_72fc2575583347fca720dc25c4620f2b = null;
    }
}

function viewHalfBannerYomedia_72fc2575583347fca720dc25c4620f2b(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_72fc2575583347fca720dc25c4620f2b(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_72fc2575583347fca720dc25c4620f2b(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_72fc2575583347fca720dc25c4620f2b(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_72fc2575583347fca720dc25c4620f2b(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_72fc2575583347fca720dc25c4620f2b(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_72fc2575583347fca720dc25c4620f2b(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_72fc2575583347fca720dc25c4620f2b(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_72fc2575583347fca720dc25c4620f2b(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_72fc2575583347fca720dc25c4620f2b(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_72fc2575583347fca720dc25c4620f2b(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_72fc2575583347fca720dc25c4620f2b(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_72fc2575583347fca720dc25c4620f2b() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_72fc2575583347fca720dc25c4620f2b(wd) {
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

function getOffsetYYomedia_72fc2575583347fca720dc25c4620f2b(obj) {
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

function getClientRectBannerYomedia_72fc2575583347fca720dc25c4620f2b(obj) {
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
let visibleAdsYomedia_72fc2575583347fca720dc25c4620f2b = null, viewabilityIntervalID_72fc2575583347fca720dc25c4620f2b, timerViewability_72fc2575583347fca720dc25c4620f2b = 0, trackedViewability_72fc2575583347fca720dc25c4620f2b = false;
const durationViewability_72fc2575583347fca720dc25c4620f2b = 10;

function isVisiabilityYomedia_72fc2575583347fca720dc25c4620f2b(el) {
    if (el) {
        try {
            let thresholdSets_72fc2575583347fca720dc25c4620f2b = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_72fc2575583347fca720dc25c4620f2b.push(i/100);
            }
            var adObserverVisiability_72fc2575583347fca720dc25c4620f2b = new IntersectionObserver(intersectionCallback_72fc2575583347fca720dc25c4620f2b, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_72fc2575583347fca720dc25c4620f2b
            });
            viewabilityIntervalID_72fc2575583347fca720dc25c4620f2b = window.setInterval(function() {
                handleTrackingViewability_72fc2575583347fca720dc25c4620f2b(el);
            }, durationViewability_72fc2575583347fca720dc25c4620f2b);
            adObserverVisiability_72fc2575583347fca720dc25c4620f2b.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_72fc2575583347fca720dc25c4620f2b) {
                window.clearInterval(viewabilityIntervalID_72fc2575583347fca720dc25c4620f2b);   
            }
        }
    }
}

function intersectionCallback_72fc2575583347fca720dc25c4620f2b(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_72fc2575583347fca720dc25c4620f2b = entry.target;
            } else {
                visibleAdsYomedia_72fc2575583347fca720dc25c4620f2b = null;
            }
        } else {
            visibleAdsYomedia_72fc2575583347fca720dc25c4620f2b = null;
        }
    });
}

function handleTrackingViewability_72fc2575583347fca720dc25c4620f2b(el) {
    if (visibleAdsYomedia_72fc2575583347fca720dc25c4620f2b !== null && el === visibleAdsYomedia_72fc2575583347fca720dc25c4620f2b) {
        timerViewability_72fc2575583347fca720dc25c4620f2b += durationViewability_72fc2575583347fca720dc25c4620f2b;
        if (!trackedViewability_72fc2575583347fca720dc25c4620f2b && timerViewability_72fc2575583347fca720dc25c4620f2b >= 1000) {
            trackedViewability_72fc2575583347fca720dc25c4620f2b = true;
            viewableTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
            window.clearInterval(viewabilityIntervalID_72fc2575583347fca720dc25c4620f2b);
        }
    } else {
        timerViewability_72fc2575583347fca720dc25c4620f2b = 0;
    }
}showBannerYomedia_72fc2575583347fca720dc25c4620f2b(1);
function impressionTrackingYomedia_72fc2575583347fca720dc25c4620f2b() {
   
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_72fc2575583347fca720dc25c4620f2b === 'function') {
        _YoImpCallback_72fc2575583347fca720dc25c4620f2b();
    }
}

function viewableTrackingYomedia_72fc2575583347fca720dc25c4620f2b() {
}

function clickTrackingYomedia_72fc2575583347fca720dc25c4620f2b() {
    
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

function clickThroughYomedia_72fc2575583347fca720dc25c4620f2b() {
    
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://www.pinetech.vn/' ;
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_72fc2575583347fca720dc25c4620f2b() {
   
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function getClickTagYomedia_72fc2575583347fca720dc25c4620f2b() {
    var landingPage = '';
    landingPage = 'https://www.pinetech.vn/' ;
    return landingPage;
}

function addAnEventListener_72fc2575583347fca720dc25c4620f2b(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_72fc2575583347fca720dc25c4620f2b(event){
    try {
        var fn_72fc2575583347fca720dc25c4620f2b = event.data;
        processMessage_72fc2575583347fca720dc25c4620f2b(fn_72fc2575583347fca720dc25c4620f2b);
    }
    catch(err) {}
}
addAnEventListener_72fc2575583347fca720dc25c4620f2b(window,'message',iFrameListener_72fc2575583347fca720dc25c4620f2b);



function createTrackingIframe_72fc2575583347fca720dc25c4620f2b(id, src) {
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

function getRandom_72fc2575583347fca720dc25c4620f2b(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_72fc2575583347fca720dc25c4620f2b;
var ms_72fc2575583347fca720dc25c4620f2b;
function processMessage_72fc2575583347fca720dc25c4620f2b(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_72fc2575583347fca720dc25c4620f2b();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b':
                    minYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'restoreYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b':
                    restoreYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'setYoMediaExpand_72fc2575583347fca720dc25c4620f2b':
                    setYoMediaExpand_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'setYoMediaPre_72fc2575583347fca720dc25c4620f2b':
                    setYoMediaPre_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'closeYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b':
                    closeYoMediaPopupAd_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'closeYoMediaExpand_72fc2575583347fca720dc25c4620f2b':
                    closeYoMediaExpand_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'impressionTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    impressionTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'viewableTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    viewableTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'clickTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    clickTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'clickTracking3rdYomedia_72fc2575583347fca720dc25c4620f2b':
                    clickTracking3rdYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'startTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    startTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'firstQuartileTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    firstQuartileTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'midpointTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    midpointTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'thirdQuartileTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    thirdQuartileTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
                case 'completeTrackingYomedia_72fc2575583347fca720dc25c4620f2b':
                    completeTrackingYomedia_72fc2575583347fca720dc25c4620f2b();
                    break;
            }
            
        }
    } catch(error){}
}