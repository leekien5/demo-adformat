var advId_aed6af3371fd4660835b1165f55508f4 = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_aed6af3371fd4660835b1165f55508f4 = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_aed6af3371fd4660835b1165f55508f4 = '5565e302fb2e489cae28103f6c66db12';
var chanId_aed6af3371fd4660835b1165f55508f4 = '3d58e13cbef3493682fe6107ac13e262';
var placementId_aed6af3371fd4660835b1165f55508f4 = 'aed6af3371fd4660835b1165f55508f4';

var d = new Date();
d.setTime(d.getTime() + 31536000000);
var expires = 'expires='+ d.toUTCString();
document.cookie = '__yoid__=56cc1c8e1086a575364ff1cb8238ea6b;' + expires + ';path=/';
if (!window.localStorage.getItem('__yoid__')) {
	window.localStorage.setItem('__yoid__', '56cc1c8e1086a575364ff1cb8238ea6b');
}

function getTrackingYomedia(url) {
	var img = new Image();
	img.src = url;
}


var yomediaId_aed6af3371fd4660835b1165f55508f4 = 'yomedia-inpage-aed6af3371fd4660835b1165f55508f4';
function showBannerYomedia_aed6af3371fd4660835b1165f55508f4(s) {
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');

    if (document.getElementById(yomediaId_aed6af3371fd4660835b1165f55508f4)) {
        return false;
    }
    var banner;

    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if (bannerURL.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        console.log("Banner: ", bannerURL);
        var clickTag = getClickTagYomedia_aed6af3371fd4660835b1165f55508f4();
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=aed6af3371fd4660835b1165f55508f4&clk=${clickTag}`;
        banner = document.createElement('a');
        if (clickTag) {
            banner.setAttribute('href', clickTag);
            banner.setAttribute('target', '_blank');
        }
        banner.setAttribute('id', yomediaId_aed6af3371fd4660835b1165f55508f4);
        var img = document.createElement("IMG");
        img.setAttribute('src', creative_src);
        img.width = '300';
        img.height = '250';
        //addAnEventListener_aed6af3371fd4660835b1165f55508f4(img, 'click', clickTracking3rdYomedia_aed6af3371fd4660835b1165f55508f4());
        img.addEventListener("click", clickTracking3rdYomedia_aed6af3371fd4660835b1165f55508f4, false);
        banner.appendChild(img);
    } else {
        banner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_aed6af3371fd4660835b1165f55508f4());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=aed6af3371fd4660835b1165f55508f4&clk=${clickTag}`;
        banner.setAttribute('src', creative_src);
        banner.setAttribute('id', yomediaId_aed6af3371fd4660835b1165f55508f4);
        banner.setAttribute('allowFullScreen', '');
        banner.style.cssText = 'right:0px;left:0px;margin-right:auto;margin-left:auto;display:block;line-height:normal;overflow:hidden;z-index:4999 !important;border:0;width:300px !important;height:600px !important;';
        banner.width = '300';
        banner.height = '600';
    }
    
    var mainContain =  document.currentScript || (function() {
        var script = null;
        Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
            null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=aed6af3371fd4660835b1165f55508f4") && (script = a)
        });
        return script;
    })();
    var nextNode = mainContain.nextSibling;
    if (nextNode) {
        nextNode.parentNode.insertBefore(banner, nextNode);
    } else {
        mainContain.parentNode.appendChild(banner);
    }
    addAnEventListener_aed6af3371fd4660835b1165f55508f4(banner, 'load', function() {
        isVisiabilityYomedia_aed6af3371fd4660835b1165f55508f4(banner);
    });
    impressionTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
}
var trackingViewable_aed6af3371fd4660835b1165f55508f4 = false, interval_aed6af3371fd4660835b1165f55508f4 = null, timeTrackingViewable_aed6af3371fd4660835b1165f55508f4 = 1000;

function viewableBannerYomedia_aed6af3371fd4660835b1165f55508f4(event) {
    if (!trackingViewable_aed6af3371fd4660835b1165f55508f4) {
        if (viewHalfBannerYomedia_aed6af3371fd4660835b1165f55508f4(this)) {
            if (interval_aed6af3371fd4660835b1165f55508f4 === null) {
                var time = 0;
                interval_aed6af3371fd4660835b1165f55508f4 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_aed6af3371fd4660835b1165f55508f4) {
                        if (!trackingViewable_aed6af3371fd4660835b1165f55508f4) {
                            viewableTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                            trackingViewable_aed6af3371fd4660835b1165f55508f4 = true;
                            clearInterval(interval_aed6af3371fd4660835b1165f55508f4);
                            interval_aed6af3371fd4660835b1165f55508f4 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_aed6af3371fd4660835b1165f55508f4()
        }
    }
}

function viewableBySzieBannerYomedia_aed6af3371fd4660835b1165f55508f4(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_aed6af3371fd4660835b1165f55508f4) {
        var rect = getClientRectBannerYomedia_aed6af3371fd4660835b1165f55508f4(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_aed6af3371fd4660835b1165f55508f4 === null) {
                var time = 0;
                interval_aed6af3371fd4660835b1165f55508f4 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_aed6af3371fd4660835b1165f55508f4) {
                        if (!trackingViewable_aed6af3371fd4660835b1165f55508f4) {
                            viewableTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                            trackingViewable_aed6af3371fd4660835b1165f55508f4 = true;
                            clearInterval(interval_aed6af3371fd4660835b1165f55508f4);
                            interval_aed6af3371fd4660835b1165f55508f4 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_aed6af3371fd4660835b1165f55508f4()
        }
    }
}

function destroyViewableBannerYomedia_aed6af3371fd4660835b1165f55508f4() {
    if (interval_aed6af3371fd4660835b1165f55508f4 !== null) {
        clearInterval(interval_aed6af3371fd4660835b1165f55508f4);
        interval_aed6af3371fd4660835b1165f55508f4 = null;
    }
}

function viewHalfBannerYomedia_aed6af3371fd4660835b1165f55508f4(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_aed6af3371fd4660835b1165f55508f4(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_aed6af3371fd4660835b1165f55508f4(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_aed6af3371fd4660835b1165f55508f4(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_aed6af3371fd4660835b1165f55508f4(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_aed6af3371fd4660835b1165f55508f4(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_aed6af3371fd4660835b1165f55508f4(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_aed6af3371fd4660835b1165f55508f4(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_aed6af3371fd4660835b1165f55508f4(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_aed6af3371fd4660835b1165f55508f4(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_aed6af3371fd4660835b1165f55508f4(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_aed6af3371fd4660835b1165f55508f4(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_aed6af3371fd4660835b1165f55508f4() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_aed6af3371fd4660835b1165f55508f4(wd) {
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

function getOffsetYYomedia_aed6af3371fd4660835b1165f55508f4(obj) {
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

function getClientRectBannerYomedia_aed6af3371fd4660835b1165f55508f4(obj) {
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
let visibleAdsYomedia_aed6af3371fd4660835b1165f55508f4 = null, viewabilityIntervalID_aed6af3371fd4660835b1165f55508f4, timerViewability_aed6af3371fd4660835b1165f55508f4 = 0, trackedViewability_aed6af3371fd4660835b1165f55508f4 = false;
const durationViewability_aed6af3371fd4660835b1165f55508f4 = 10;

function isVisiabilityYomedia_aed6af3371fd4660835b1165f55508f4(el) {
    if (el) {
        try {
            let thresholdSets_aed6af3371fd4660835b1165f55508f4 = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_aed6af3371fd4660835b1165f55508f4.push(i/100);
            }
            var adObserverVisiability_aed6af3371fd4660835b1165f55508f4 = new IntersectionObserver(intersectionCallback_aed6af3371fd4660835b1165f55508f4, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_aed6af3371fd4660835b1165f55508f4
            });
            viewabilityIntervalID_aed6af3371fd4660835b1165f55508f4 = window.setInterval(function() {
                handleTrackingViewability_aed6af3371fd4660835b1165f55508f4(el);
            }, durationViewability_aed6af3371fd4660835b1165f55508f4);
            adObserverVisiability_aed6af3371fd4660835b1165f55508f4.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_aed6af3371fd4660835b1165f55508f4) {
                window.clearInterval(viewabilityIntervalID_aed6af3371fd4660835b1165f55508f4);   
            }
        }
    }
}

function intersectionCallback_aed6af3371fd4660835b1165f55508f4(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_aed6af3371fd4660835b1165f55508f4 = entry.target;
            } else {
                visibleAdsYomedia_aed6af3371fd4660835b1165f55508f4 = null;
            }
        } else {
            visibleAdsYomedia_aed6af3371fd4660835b1165f55508f4 = null;
        }
    });
}

function handleTrackingViewability_aed6af3371fd4660835b1165f55508f4(el) {
    if (visibleAdsYomedia_aed6af3371fd4660835b1165f55508f4 !== null && el === visibleAdsYomedia_aed6af3371fd4660835b1165f55508f4) {
        timerViewability_aed6af3371fd4660835b1165f55508f4 += durationViewability_aed6af3371fd4660835b1165f55508f4;
        if (!trackedViewability_aed6af3371fd4660835b1165f55508f4 && timerViewability_aed6af3371fd4660835b1165f55508f4 >= 1000) {
            trackedViewability_aed6af3371fd4660835b1165f55508f4 = true;
            viewableTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
            window.clearInterval(viewabilityIntervalID_aed6af3371fd4660835b1165f55508f4);
        }
    } else {
        timerViewability_aed6af3371fd4660835b1165f55508f4 = 0;
    }
}showBannerYomedia_aed6af3371fd4660835b1165f55508f4(1);
function impressionTrackingYomedia_aed6af3371fd4660835b1165f55508f4() {
}

function viewableTrackingYomedia_aed6af3371fd4660835b1165f55508f4() {
}

function clickTrackingYomedia_aed6af3371fd4660835b1165f55508f4() {
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

function clickThroughYomedia_aed6af3371fd4660835b1165f55508f4() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_aed6af3371fd4660835b1165f55508f4() {
}

function getClickTagYomedia_aed6af3371fd4660835b1165f55508f4() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}
function addAnEventListener_aed6af3371fd4660835b1165f55508f4(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}
function iFrameListener_aed6af3371fd4660835b1165f55508f4(event){
    try {
        var fn_aed6af3371fd4660835b1165f55508f4 = event.data;
        processMessage_aed6af3371fd4660835b1165f55508f4(fn_aed6af3371fd4660835b1165f55508f4);
    }
    catch(err) {}
}
addAnEventListener_aed6af3371fd4660835b1165f55508f4(window,'message',iFrameListener_aed6af3371fd4660835b1165f55508f4);

function createTrackingIframe_aed6af3371fd4660835b1165f55508f4(id, src) {
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

function getRandom_aed6af3371fd4660835b1165f55508f4(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_aed6af3371fd4660835b1165f55508f4;
var ms_aed6af3371fd4660835b1165f55508f4;
function processMessage_aed6af3371fd4660835b1165f55508f4(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_aed6af3371fd4660835b1165f55508f4();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_aed6af3371fd4660835b1165f55508f4':
                    minYoMediaPopupAd_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'restoreYoMediaPopupAd_aed6af3371fd4660835b1165f55508f4':
                    restoreYoMediaPopupAd_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'setYoMediaExpand_aed6af3371fd4660835b1165f55508f4':
                    setYoMediaExpand_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'setYoMediaPre_aed6af3371fd4660835b1165f55508f4':
                    setYoMediaPre_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'closeYoMediaPopupAd_aed6af3371fd4660835b1165f55508f4':
                    closeYoMediaPopupAd_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'closeYoMediaExpand_aed6af3371fd4660835b1165f55508f4':
                    closeYoMediaExpand_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'impressionTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    impressionTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'viewableTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    viewableTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'clickTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    clickTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'clickTracking3rdYomedia_aed6af3371fd4660835b1165f55508f4':
                    clickTracking3rdYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'startTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    startTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'firstQuartileTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    firstQuartileTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'midpointTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    midpointTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'thirdQuartileTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    thirdQuartileTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
                case 'completeTrackingYomedia_aed6af3371fd4660835b1165f55508f4':
                    completeTrackingYomedia_aed6af3371fd4660835b1165f55508f4();
                    break;
            }
            
        }
    } catch(error){}
}