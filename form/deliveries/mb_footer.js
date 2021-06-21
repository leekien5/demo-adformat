
var advId_e3d1135c1d184a47b09388aed33c4dfa = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_e3d1135c1d184a47b09388aed33c4dfa = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_e3d1135c1d184a47b09388aed33c4dfa = '5565e302fb2e489cae28103f6c66db12';
var chanId_e3d1135c1d184a47b09388aed33c4dfa = '3d58e13cbef3493682fe6107ac13e262';
var placementId_e3d1135c1d184a47b09388aed33c4dfa = 'e3d1135c1d184a47b09388aed33c4dfa';

var d = new Date();
d.setTime(d.getTime() + 31536000000);
var expires = 'expires='+ d.toUTCString();
document.cookie = '__yoid__=83d157703201c2c829975747e78db277;' + expires + ';path=/';
if (!window.localStorage.getItem('__yoid__')) {
	window.localStorage.setItem('__yoid__', '83d157703201c2c829975747e78db277');
}

function getTrackingYomedia(url) {
	var img = new Image();
	img.src = url;
}
var yomediaId_e3d1135c1d184a47b09388aed33c4dfa = 'yomedia-wrapper-mobile-adhesion-e3d1135c1d184a47b09388aed33c4dfa';
var yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa = 'yomedia-mobile-content-adhesion-e3d1135c1d184a47b09388aed33c4dfa';
var iOS_e3d1135c1d184a47b09388aed33c4dfa = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var min_w = (384 != 0)?384:window.innerWidth;
var min_h = (280 != 0)?280:window.innerHeight;
var max_w = (384 != 0)?384:window.innerWidth;
var max_h = (683 != 0)?683:window.innerHeight;

function showBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(s) {
    if (document.getElementById(yomediaId_e3d1135c1d184a47b09388aed33c4dfa)) {
        return false;
    }

    var domIframe = document.createElement('iframe');
    var clickTag = encodeURIComponent(getClickTagYomedia_e3d1135c1d184a47b09388aed33c4dfa());

    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');
    
    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if(bannerURL ){
        creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=e3d1135c1d184a47b09388aed33c4dfa&clk=${clickTag}`;
        domIframe.setAttribute('src', creative_src);
    
        domIframe.setAttribute('id', yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa);
        domIframe.setAttribute('allowFullScreen', '');
        domIframe.setAttribute('frameborder', '0');
        domIframe.setAttribute('scrolling', 'no');
        domIframe.style.cssText = 'position: fixed; z-index: 2347483647 !important;bottom: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important;line-height:normal; border:0; width: 100% !important; height: 100% !important;';

        document.body.appendChild(domIframe);
        addAnEventListener_e3d1135c1d184a47b09388aed33c4dfa(domIframe, 'load', function() {
            isVisiabilityYomedia_e3d1135c1d184a47b09388aed33c4dfa(domIframe);
        });
        impressionTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();   
    }else {
        console.log('Empty banner, please add one!');
    }
}

function minYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa() {
    var domIframe = document.getElementById(yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa);
    domIframe.style.clip = 'rect(' + (window.innerHeight - parseInt(min_h)) + 'px, ' + window.innerWidth + 'px, ' + window.innerHeight + 'px, 0px)';
}

function setYoMediaPre_e3d1135c1d184a47b09388aed33c4dfa() {
    var domIframe = document.getElementById(yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa);
    domIframe.style.clip = 'rect(' + (window.innerHeight - parseInt(min_h)) + 'px, ' + window.innerWidth + 'px, ' + window.innerHeight + 'px, 0px)';
}

function setYoMediaExpand_e3d1135c1d184a47b09388aed33c4dfa() {
    var domIframe = document.getElementById(yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa);
    domIframe.style.clip = 'rect(0px, ' + window.innerWidth + 'px, ' + window.innerHeight + 'px, 0px)';
}

function closeYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa() {
    document.getElementById(yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa).remove();
}

function rotateYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
    var portraitBanner = document.getElementById(yomediaContentId_e3d1135c1d184a47b09388aed33c4dfa);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_e3d1135c1d184a47b09388aed33c4dfa);

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

var trackingViewable_e3d1135c1d184a47b09388aed33c4dfa = false, interval_e3d1135c1d184a47b09388aed33c4dfa = null, timeTrackingViewable_e3d1135c1d184a47b09388aed33c4dfa = 1000;

function viewableBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(event) {
    if (!trackingViewable_e3d1135c1d184a47b09388aed33c4dfa) {
        if (viewHalfBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(this)) {
            if (interval_e3d1135c1d184a47b09388aed33c4dfa === null) {
                var time = 0;
                interval_e3d1135c1d184a47b09388aed33c4dfa = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_e3d1135c1d184a47b09388aed33c4dfa) {
                        if (!trackingViewable_e3d1135c1d184a47b09388aed33c4dfa) {
                            viewableTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                            trackingViewable_e3d1135c1d184a47b09388aed33c4dfa = true;
                            clearInterval(interval_e3d1135c1d184a47b09388aed33c4dfa);
                            interval_e3d1135c1d184a47b09388aed33c4dfa = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa()
        }
    }
}

function viewableBySzieBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_e3d1135c1d184a47b09388aed33c4dfa) {
        var rect = getClientRectBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_e3d1135c1d184a47b09388aed33c4dfa === null) {
                var time = 0;
                interval_e3d1135c1d184a47b09388aed33c4dfa = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_e3d1135c1d184a47b09388aed33c4dfa) {
                        if (!trackingViewable_e3d1135c1d184a47b09388aed33c4dfa) {
                            viewableTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                            trackingViewable_e3d1135c1d184a47b09388aed33c4dfa = true;
                            clearInterval(interval_e3d1135c1d184a47b09388aed33c4dfa);
                            interval_e3d1135c1d184a47b09388aed33c4dfa = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa()
        }
    }
}

function destroyViewableBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
    if (interval_e3d1135c1d184a47b09388aed33c4dfa !== null) {
        clearInterval(interval_e3d1135c1d184a47b09388aed33c4dfa);
        interval_e3d1135c1d184a47b09388aed33c4dfa = null;
    }
}

function viewHalfBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_e3d1135c1d184a47b09388aed33c4dfa(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_e3d1135c1d184a47b09388aed33c4dfa(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_e3d1135c1d184a47b09388aed33c4dfa(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_e3d1135c1d184a47b09388aed33c4dfa(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_e3d1135c1d184a47b09388aed33c4dfa(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_e3d1135c1d184a47b09388aed33c4dfa(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_e3d1135c1d184a47b09388aed33c4dfa(wd) {
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

function getOffsetYYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj) {
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

function getClientRectBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(obj) {
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
let visibleAdsYomedia_e3d1135c1d184a47b09388aed33c4dfa = null, viewabilityIntervalID_e3d1135c1d184a47b09388aed33c4dfa, timerViewability_e3d1135c1d184a47b09388aed33c4dfa = 0, trackedViewability_e3d1135c1d184a47b09388aed33c4dfa = false;
const durationViewability_e3d1135c1d184a47b09388aed33c4dfa = 10;

function isVisiabilityYomedia_e3d1135c1d184a47b09388aed33c4dfa(el) {
    if (el) {
        try {
            let thresholdSets_e3d1135c1d184a47b09388aed33c4dfa = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_e3d1135c1d184a47b09388aed33c4dfa.push(i/100);
            }
            var adObserverVisiability_e3d1135c1d184a47b09388aed33c4dfa = new IntersectionObserver(intersectionCallback_e3d1135c1d184a47b09388aed33c4dfa, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_e3d1135c1d184a47b09388aed33c4dfa
            });
            viewabilityIntervalID_e3d1135c1d184a47b09388aed33c4dfa = window.setInterval(function() {
                handleTrackingViewability_e3d1135c1d184a47b09388aed33c4dfa(el);
            }, durationViewability_e3d1135c1d184a47b09388aed33c4dfa);
            adObserverVisiability_e3d1135c1d184a47b09388aed33c4dfa.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_e3d1135c1d184a47b09388aed33c4dfa) {
                window.clearInterval(viewabilityIntervalID_e3d1135c1d184a47b09388aed33c4dfa);   
            }
        }
    }
}

function intersectionCallback_e3d1135c1d184a47b09388aed33c4dfa(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_e3d1135c1d184a47b09388aed33c4dfa = entry.target;
            } else {
                visibleAdsYomedia_e3d1135c1d184a47b09388aed33c4dfa = null;
            }
        } else {
            visibleAdsYomedia_e3d1135c1d184a47b09388aed33c4dfa = null;
        }
    });
}

function handleTrackingViewability_e3d1135c1d184a47b09388aed33c4dfa(el) {
    if (visibleAdsYomedia_e3d1135c1d184a47b09388aed33c4dfa !== null && el === visibleAdsYomedia_e3d1135c1d184a47b09388aed33c4dfa) {
        timerViewability_e3d1135c1d184a47b09388aed33c4dfa += durationViewability_e3d1135c1d184a47b09388aed33c4dfa;
        if (!trackedViewability_e3d1135c1d184a47b09388aed33c4dfa && timerViewability_e3d1135c1d184a47b09388aed33c4dfa >= 1000) {
            trackedViewability_e3d1135c1d184a47b09388aed33c4dfa = true;
            viewableTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
            window.clearInterval(viewabilityIntervalID_e3d1135c1d184a47b09388aed33c4dfa);
        }
    } else {
        timerViewability_e3d1135c1d184a47b09388aed33c4dfa = 0;
    }
}showBannerYomedia_e3d1135c1d184a47b09388aed33c4dfa(1);
function impressionTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
}

function viewableTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
}

function clickTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
    window.parent.postMessage("LgTopBanner","*");
}

function clickThroughYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function getClickTagYomedia_e3d1135c1d184a47b09388aed33c4dfa() {
}

function addAnEventListener_e3d1135c1d184a47b09388aed33c4dfa(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_e3d1135c1d184a47b09388aed33c4dfa(event){
    try {
        var fn_e3d1135c1d184a47b09388aed33c4dfa = event.data;
        processMessage_e3d1135c1d184a47b09388aed33c4dfa(fn_e3d1135c1d184a47b09388aed33c4dfa);
    }
    catch(err) {}
}
addAnEventListener_e3d1135c1d184a47b09388aed33c4dfa(window,'message',iFrameListener_e3d1135c1d184a47b09388aed33c4dfa);
// http

//flight: Yomedia Service Testing MB Footer
function createTrackingIframe_e3d1135c1d184a47b09388aed33c4dfa(id, src) {
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

var trackingIframes = {};
function processMessage_e3d1135c1d184a47b09388aed33c4dfa(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_e3d1135c1d184a47b09388aed33c4dfa();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa':
                    minYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'restoreYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa':
                    restoreYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'setYoMediaExpand_e3d1135c1d184a47b09388aed33c4dfa':
                    setYoMediaExpand_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'setYoMediaPre_e3d1135c1d184a47b09388aed33c4dfa':
                    setYoMediaPre_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'closeYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa':
                    closeYoMediaPopupAd_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'closeYoMediaExpand_e3d1135c1d184a47b09388aed33c4dfa':
                    closeYoMediaExpand_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'impressionTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    impressionTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'viewableTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    viewableTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'clickTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    clickTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'clickTracking3rdYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    clickTracking3rdYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'startTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    startTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'firstQuartileTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    firstQuartileTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'midpointTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    midpointTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'thirdQuartileTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    thirdQuartileTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
                case 'completeTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa':
                    completeTrackingYomedia_e3d1135c1d184a47b09388aed33c4dfa();
                    break;
            }
            
        }
    } catch(error){}
}