var advId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_e8b0aea36ee54d4eadbb5d0028b68d2e = '5565e302fb2e489cae28103f6c66db12';
var chanId_e8b0aea36ee54d4eadbb5d0028b68d2e = '3d58e13cbef3493682fe6107ac13e262';
var placementId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'e8b0aea36ee54d4eadbb5d0028b68d2e';

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
var yomediaId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'yomedia-wrapper-mobile-bottom-e8b0aea36ee54d4eadbb5d0028b68d2e';
var yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'yomedia-mobile-content-bottom-e8b0aea36ee54d4eadbb5d0028b68d2e';
var iOS_e8b0aea36ee54d4eadbb5d0028b68d2e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var min_w_e8b0aea36ee54d4eadbb5d0028b68d2e = (300 != 0)?300:screen.width;
var min_h_e8b0aea36ee54d4eadbb5d0028b68d2e = (50 != 0)?50:screen.height;
var max_w_e8b0aea36ee54d4eadbb5d0028b68d2e = (300 != 0)?300:screen.width;
var max_h_e8b0aea36ee54d4eadbb5d0028b68d2e = (0 != 0)?0:screen.height;

var ratio_e8b0aea36ee54d4eadbb5d0028b68d2e = 220/660;
// if (300 && 50) {
//     ratio_e8b0aea36ee54d4eadbb5d0028b68d2e =  parseInt(50) / parseInt(300);
// }


function showBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(s) {
    if (document.getElementById(yomediaId_e8b0aea36ee54d4eadbb5d0028b68d2e)) {
        return false;
    }
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');

    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if(bannerURL) {
        console.log("Banner: ", bannerURL);
        var banner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=e8b0aea36ee54d4eadbb5d0028b68d2e&aid=f9d9e173fb13401b820d6700fd05382d&fid=2c72ac5fc5014c8f8a2f701d99c23395&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
        banner.setAttribute('src', creative_src);
        banner.setAttribute('id', yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
        banner.setAttribute('allowFullScreen', '');
        banner.setAttribute('frameborder', '0');
        banner.setAttribute('scrolling', 'no');
        banner.style.cssText = `position: fixed; z-index: 2347483647 !important;bottom: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important;line-height:normal; border:0; width: 100% !important; height: 100%  !important;`;
    
        document.body.appendChild(banner);
        addAnEventListener_e8b0aea36ee54d4eadbb5d0028b68d2e(banner, 'load', function() {
            isVisiabilityYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(banner);
        });
        addAnEventListener_e8b0aea36ee54d4eadbb5d0028b68d2e(window, 'scroll', function() {
            var scrollTop = e=document.documentElement.scrollTop;
            sendMessageToIframe_e8b0aea36ee54d4eadbb5d0028b68d2e(JSON.stringify({pid: 'e8b0aea36ee54d4eadbb5d0028b68d2e', scrt: scrollTop}));
        });
    }
    impressionTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
}

function sendMessageToIframe_e8b0aea36ee54d4eadbb5d0028b68d2e($message) {
    var banner = document.getElementById(yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
    if(banner) {
        banner.contentWindow.postMessage($message, '*'); 
    }
}

function minYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var banner = document.getElementById(yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
    var rect_top = Math.floor(screen.width * ratio_e8b0aea36ee54d4eadbb5d0028b68d2e);
    banner.style.clip = 'rect(' + (screen.height - rect_top) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaPre_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var banner = document.getElementById(yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
    var rect_top = Math.floor(screen.width * ratio_e8b0aea36ee54d4eadbb5d0028b68d2e);
    banner.style.clip = 'rect(' + (screen.height - rect_top) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaExpand_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var banner = document.getElementById(yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
    var ra = screen.height/screen.width;
    if (300 && 0) {
        ra =  parseInt(0) / parseInt(300);
    }
    var rect_top = Math.floor(screen.width * ra);
    banner.style.clip = 'rect(' + (screen.height - rect_top) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function closeYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    document.getElementById(yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e).remove();
}

function rotateYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var portraitBanner = document.getElementById(yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_e8b0aea36ee54d4eadbb5d0028b68d2e);

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

var trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e = false, interval_e8b0aea36ee54d4eadbb5d0028b68d2e = null, timeTrackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e = 1000;

function viewableBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(event) {
    if (!trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e) {
        if (viewHalfBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(this)) {
            if (interval_e8b0aea36ee54d4eadbb5d0028b68d2e === null) {
                var time = 0;
                interval_e8b0aea36ee54d4eadbb5d0028b68d2e = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e) {
                        if (!trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e) {
                            viewableTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                            trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e = true;
                            clearInterval(interval_e8b0aea36ee54d4eadbb5d0028b68d2e);
                            interval_e8b0aea36ee54d4eadbb5d0028b68d2e = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e()
        }
    }
}

function viewableBySzieBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e) {
        var rect = getClientRectBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_e8b0aea36ee54d4eadbb5d0028b68d2e === null) {
                var time = 0;
                interval_e8b0aea36ee54d4eadbb5d0028b68d2e = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e) {
                        if (!trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e) {
                            viewableTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                            trackingViewable_e8b0aea36ee54d4eadbb5d0028b68d2e = true;
                            clearInterval(interval_e8b0aea36ee54d4eadbb5d0028b68d2e);
                            interval_e8b0aea36ee54d4eadbb5d0028b68d2e = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e()
        }
    }
}

function destroyViewableBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    if (interval_e8b0aea36ee54d4eadbb5d0028b68d2e !== null) {
        clearInterval(interval_e8b0aea36ee54d4eadbb5d0028b68d2e);
        interval_e8b0aea36ee54d4eadbb5d0028b68d2e = null;
    }
}

function viewHalfBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_e8b0aea36ee54d4eadbb5d0028b68d2e(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_e8b0aea36ee54d4eadbb5d0028b68d2e(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_e8b0aea36ee54d4eadbb5d0028b68d2e(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_e8b0aea36ee54d4eadbb5d0028b68d2e(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_e8b0aea36ee54d4eadbb5d0028b68d2e(wd) {
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

function getOffsetYYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj) {
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

function getClientRectBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(obj) {
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
let visibleAdsYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e = null, viewabilityIntervalID_e8b0aea36ee54d4eadbb5d0028b68d2e, timerViewability_e8b0aea36ee54d4eadbb5d0028b68d2e = 0, trackedViewability_e8b0aea36ee54d4eadbb5d0028b68d2e = false;
const durationViewability_e8b0aea36ee54d4eadbb5d0028b68d2e = 10;

function isVisiabilityYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(el) {
    if (el) {
        try {
            let thresholdSets_e8b0aea36ee54d4eadbb5d0028b68d2e = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_e8b0aea36ee54d4eadbb5d0028b68d2e.push(i/100);
            }
            var adObserverVisiability_e8b0aea36ee54d4eadbb5d0028b68d2e = new IntersectionObserver(intersectionCallback_e8b0aea36ee54d4eadbb5d0028b68d2e, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_e8b0aea36ee54d4eadbb5d0028b68d2e
            });
            viewabilityIntervalID_e8b0aea36ee54d4eadbb5d0028b68d2e = window.setInterval(function() {
                handleTrackingViewability_e8b0aea36ee54d4eadbb5d0028b68d2e(el);
            }, durationViewability_e8b0aea36ee54d4eadbb5d0028b68d2e);
            adObserverVisiability_e8b0aea36ee54d4eadbb5d0028b68d2e.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_e8b0aea36ee54d4eadbb5d0028b68d2e) {
                window.clearInterval(viewabilityIntervalID_e8b0aea36ee54d4eadbb5d0028b68d2e);   
            }
        }
    }
}

function intersectionCallback_e8b0aea36ee54d4eadbb5d0028b68d2e(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e = entry.target;
            } else {
                visibleAdsYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e = null;
            }
        } else {
            visibleAdsYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e = null;
        }
    });
}

function handleTrackingViewability_e8b0aea36ee54d4eadbb5d0028b68d2e(el) {
    if (visibleAdsYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e !== null && el === visibleAdsYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e) {
        timerViewability_e8b0aea36ee54d4eadbb5d0028b68d2e += durationViewability_e8b0aea36ee54d4eadbb5d0028b68d2e;
        if (!trackedViewability_e8b0aea36ee54d4eadbb5d0028b68d2e && timerViewability_e8b0aea36ee54d4eadbb5d0028b68d2e >= 1000) {
            trackedViewability_e8b0aea36ee54d4eadbb5d0028b68d2e = true;
            viewableTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
            window.clearInterval(viewabilityIntervalID_e8b0aea36ee54d4eadbb5d0028b68d2e);
        }
    } else {
        timerViewability_e8b0aea36ee54d4eadbb5d0028b68d2e = 0;
    }
}showBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(1);
function impressionTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
}

function viewableTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
}

function clickTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
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

function clickThroughYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function getClickTagYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_e8b0aea36ee54d4eadbb5d0028b68d2e(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_e8b0aea36ee54d4eadbb5d0028b68d2e(event){
    try {
        var fn_e8b0aea36ee54d4eadbb5d0028b68d2e = event.data;
        processMessage_e8b0aea36ee54d4eadbb5d0028b68d2e(fn_e8b0aea36ee54d4eadbb5d0028b68d2e);
    }
    catch(err) {}
}
addAnEventListener_e8b0aea36ee54d4eadbb5d0028b68d2e(window,'message',iFrameListener_e8b0aea36ee54d4eadbb5d0028b68d2e);

function createTrackingIframe_e8b0aea36ee54d4eadbb5d0028b68d2e(id, src) {
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

function getRandom_e8b0aea36ee54d4eadbb5d0028b68d2e(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_e8b0aea36ee54d4eadbb5d0028b68d2e;
var ms_e8b0aea36ee54d4eadbb5d0028b68d2e;
function processMessage_e8b0aea36ee54d4eadbb5d0028b68d2e(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_e8b0aea36ee54d4eadbb5d0028b68d2e();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    minYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'restoreYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    restoreYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'setYoMediaExpand_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    setYoMediaExpand_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'setYoMediaPre_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    setYoMediaPre_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'closeYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    closeYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'closeYoMediaExpand_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    closeYoMediaExpand_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'impressionTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    impressionTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'viewableTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    viewableTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'clickTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    clickTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'clickTracking3rdYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    clickTracking3rdYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'startTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    startTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'firstQuartileTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    firstQuartileTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'midpointTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    midpointTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'thirdQuartileTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    thirdQuartileTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
                case 'completeTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e':
                    completeTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
                    break;
            }
            
        }
    } catch(error){}
}