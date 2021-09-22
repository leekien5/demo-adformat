/* MOBILE INTERSTITIAL (FIRSTVIEW) */
var advId_9d3a74db38164ebf889697f844c94afd = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_9d3a74db38164ebf889697f844c94afd = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_9d3a74db38164ebf889697f844c94afd = '5565e302fb2e489cae28103f6c66db12';
var chanId_9d3a74db38164ebf889697f844c94afd = '3d58e13cbef3493682fe6107ac13e262';
var placementId_9d3a74db38164ebf889697f844c94afd = '9d3a74db38164ebf889697f844c94afd';

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

var wrapper_ads_9d3a74db38164ebf889697f844c94afd = 'wrapper-mobile-interstitial-itvc-9d3a74db38164ebf889697f844c94afd';
var close_ads_9d3a74db38164ebf889697f844c94afd = 'close-mobile-interstitial-itvc-9d3a74db38164ebf889697f844c94afd';
var iOS_9d3a74db38164ebf889697f844c94afd = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function showBannerYomedia_9d3a74db38164ebf889697f844c94afd(s) {
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
    };
    let show_logo = true;
    let show_close_button = false;
    if (document.getElementById(wrapper_ads_9d3a74db38164ebf889697f844c94afd)) {
        return false;
    }
    if (domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    var domWrapper = document.createElement('div');
    domWrapper.setAttribute('id', wrapper_ads_9d3a74db38164ebf889697f844c94afd);
    domWrapper.style.cssText = 'top: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important; display:block; line-height:normal; overflow: hidden; position:fixed; z-index: 2147483500 !important; border:0; width: 100% !important; height: 100% !important; background-color: rgba(0, 0, 0, 0.8);';

    var iframe_banner = document.createElement('iframe');
    var clickTag = encodeURIComponent(getClickTagYomedia_9d3a74db38164ebf889697f844c94afd());
    log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);
    var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=9d3a74db38164ebf889697f844c94afd&aid=c1303846f05845899558c6819dde733a&fid=818a5119cafc46d6b98512c76f8c213d&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
    iframe_banner.setAttribute('src', creative_src);
    iframe_banner.setAttribute('id', wrapper_ads_9d3a74db38164ebf889697f844c94afd);
    iframe_banner.setAttribute('allowFullScreen', '');
    iframe_banner.style.cssText = 'top: 0px !important; left:0px !important; right:0px !important; margin: 0px auto  !important; display:block; line-height:normal; overflow: scroll; position:absolute; z-index: 2147483500 !important; border:0; width: 100% !important; height: 100% !important;';
    iframe_banner.width = screen.width;
    iframe_banner.height = screen.height;

    const btn_close = document.createElement('div');
    btn_close.setAttribute('id', `yo-close-9d3a74db38164ebf889697f844c94afd`);
    btn_close.setAttribute('style', `width: 34px !important; height: 34px !important; position: absolute; top: 0px !important; right: 0px !important; z-index: 2147483647 !important;`);
    let close_image = new Image();
    close_image.src = 'https://media.yomedia.vn/images/btn_close.png';
    close_image.setAttribute('style', 'width: 100% !important; height: 100% !important;')
    btn_close.appendChild(close_image);
    domWrapper.appendChild(btn_close);
    addAnEventListener_9d3a74db38164ebf889697f844c94afd(close_image, 'click', function() {
        closeYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd();
    });

    if (show_logo) {
        const logo = document.createElement('div');
        logo.setAttribute('style', `position: absolute; display: inline-block; height: 25px; cursor: pointer; z-index: 2147483647 !important; left: 0px !important; top: 0px !important;`);
        const a_logo = document.createElement('a');
        a_logo.setAttribute('href', 'https://yomedia.vn');
        a_logo.setAttribute('target', '_blank');
        logo.appendChild(a_logo);
        let image_logo = new Image();
        image_logo.src = 'https://media.yomedia.vn/images/yo-tl-logo.png';
        image_logo.setAttribute('style', 'width: auto !important; height: 25px !important;');
        image_logo.setAttribute('onmouseover', `this.src='https://media.yomedia.vn/images/yo-tl-f-logo.png'`);
        image_logo.setAttribute('onmouseout', `this.src='https://media.yomedia.vn/images/yo-tl-logo.png'`);
        a_logo.appendChild(image_logo);
        domWrapper.appendChild(logo);
    }

    domWrapper.appendChild(iframe_banner);
    document.body.appendChild(domWrapper);
    document.body.style.overflow = 'hidden';
    
    addAnEventListener_9d3a74db38164ebf889697f844c94afd(iframe_banner, 'load', function() {
        isVisiabilityYomedia_9d3a74db38164ebf889697f844c94afd(iframe_banner);
    });
    impressionTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
}
function closeYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd() {
    document.getElementById(wrapper_ads_9d3a74db38164ebf889697f844c94afd).remove();
    document.body.style.overflow = 'auto';
}
var trackingViewable_9d3a74db38164ebf889697f844c94afd = false, interval_9d3a74db38164ebf889697f844c94afd = null, timeTrackingViewable_9d3a74db38164ebf889697f844c94afd = 1000;

function viewableBannerYomedia_9d3a74db38164ebf889697f844c94afd(event) {
    if (!trackingViewable_9d3a74db38164ebf889697f844c94afd) {
        if (viewHalfBannerYomedia_9d3a74db38164ebf889697f844c94afd(this)) {
            if (interval_9d3a74db38164ebf889697f844c94afd === null) {
                var time = 0;
                interval_9d3a74db38164ebf889697f844c94afd = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_9d3a74db38164ebf889697f844c94afd) {
                        if (!trackingViewable_9d3a74db38164ebf889697f844c94afd) {
                            viewableTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                            trackingViewable_9d3a74db38164ebf889697f844c94afd = true;
                            clearInterval(interval_9d3a74db38164ebf889697f844c94afd);
                            interval_9d3a74db38164ebf889697f844c94afd = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_9d3a74db38164ebf889697f844c94afd()
        }
    }
}

function viewableBySzieBannerYomedia_9d3a74db38164ebf889697f844c94afd(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_9d3a74db38164ebf889697f844c94afd) {
        var rect = getClientRectBannerYomedia_9d3a74db38164ebf889697f844c94afd(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_9d3a74db38164ebf889697f844c94afd === null) {
                var time = 0;
                interval_9d3a74db38164ebf889697f844c94afd = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_9d3a74db38164ebf889697f844c94afd) {
                        if (!trackingViewable_9d3a74db38164ebf889697f844c94afd) {
                            viewableTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                            trackingViewable_9d3a74db38164ebf889697f844c94afd = true;
                            clearInterval(interval_9d3a74db38164ebf889697f844c94afd);
                            interval_9d3a74db38164ebf889697f844c94afd = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_9d3a74db38164ebf889697f844c94afd()
        }
    }
}

function destroyViewableBannerYomedia_9d3a74db38164ebf889697f844c94afd() {
    if (interval_9d3a74db38164ebf889697f844c94afd !== null) {
        clearInterval(interval_9d3a74db38164ebf889697f844c94afd);
        interval_9d3a74db38164ebf889697f844c94afd = null;
    }
}

function viewHalfBannerYomedia_9d3a74db38164ebf889697f844c94afd(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_9d3a74db38164ebf889697f844c94afd(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_9d3a74db38164ebf889697f844c94afd(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_9d3a74db38164ebf889697f844c94afd(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_9d3a74db38164ebf889697f844c94afd(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_9d3a74db38164ebf889697f844c94afd(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_9d3a74db38164ebf889697f844c94afd(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_9d3a74db38164ebf889697f844c94afd(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_9d3a74db38164ebf889697f844c94afd(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_9d3a74db38164ebf889697f844c94afd(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_9d3a74db38164ebf889697f844c94afd(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_9d3a74db38164ebf889697f844c94afd(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_9d3a74db38164ebf889697f844c94afd() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_9d3a74db38164ebf889697f844c94afd(wd) {
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

function getOffsetYYomedia_9d3a74db38164ebf889697f844c94afd(obj) {
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

function getClientRectBannerYomedia_9d3a74db38164ebf889697f844c94afd(obj) {
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
let visibleAdsYomedia_9d3a74db38164ebf889697f844c94afd = null, viewabilityIntervalID_9d3a74db38164ebf889697f844c94afd, timerViewability_9d3a74db38164ebf889697f844c94afd = 0, trackedViewability_9d3a74db38164ebf889697f844c94afd = false;
const durationViewability_9d3a74db38164ebf889697f844c94afd = 10;

function isVisiabilityYomedia_9d3a74db38164ebf889697f844c94afd(el) {
    if (el) {
        try {
            let thresholdSets_9d3a74db38164ebf889697f844c94afd = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_9d3a74db38164ebf889697f844c94afd.push(i/100);
            }
            var adObserverVisiability_9d3a74db38164ebf889697f844c94afd = new IntersectionObserver(intersectionCallback_9d3a74db38164ebf889697f844c94afd, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_9d3a74db38164ebf889697f844c94afd
            });
            viewabilityIntervalID_9d3a74db38164ebf889697f844c94afd = window.setInterval(function() {
                handleTrackingViewability_9d3a74db38164ebf889697f844c94afd(el);
            }, durationViewability_9d3a74db38164ebf889697f844c94afd);
            adObserverVisiability_9d3a74db38164ebf889697f844c94afd.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_9d3a74db38164ebf889697f844c94afd) {
                window.clearInterval(viewabilityIntervalID_9d3a74db38164ebf889697f844c94afd);   
            }
        }
    }
}

function intersectionCallback_9d3a74db38164ebf889697f844c94afd(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_9d3a74db38164ebf889697f844c94afd = entry.target;
            } else {
                visibleAdsYomedia_9d3a74db38164ebf889697f844c94afd = null;
            }
        } else {
            visibleAdsYomedia_9d3a74db38164ebf889697f844c94afd = null;
        }
    });
}

function handleTrackingViewability_9d3a74db38164ebf889697f844c94afd(el) {
    if (visibleAdsYomedia_9d3a74db38164ebf889697f844c94afd !== null && el === visibleAdsYomedia_9d3a74db38164ebf889697f844c94afd) {
        timerViewability_9d3a74db38164ebf889697f844c94afd += durationViewability_9d3a74db38164ebf889697f844c94afd;
        if (!trackedViewability_9d3a74db38164ebf889697f844c94afd && timerViewability_9d3a74db38164ebf889697f844c94afd >= 1000) {
            trackedViewability_9d3a74db38164ebf889697f844c94afd = true;
            viewableTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
            window.clearInterval(viewabilityIntervalID_9d3a74db38164ebf889697f844c94afd);
        }
    } else {
        timerViewability_9d3a74db38164ebf889697f844c94afd = 0;
    }
}showBannerYomedia_9d3a74db38164ebf889697f844c94afd(1);
function impressionTrackingYomedia_9d3a74db38164ebf889697f844c94afd() {
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=002&token=b42499c3c3ce8789ff69b0f52695d5e74375bed61c&ord=1632318791930' + Date.now());
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_9d3a74db38164ebf889697f844c94afd === 'function') {
        _YoImpCallback_9d3a74db38164ebf889697f844c94afd();
    }
}

function viewableTrackingYomedia_9d3a74db38164ebf889697f844c94afd() {
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=008&token=b42499c3c3ce8789ff69b0f52695d5e7437517ebbb&ord=1632318791930' + Date.now());
}

function clickTrackingYomedia_9d3a74db38164ebf889697f844c94afd() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://tracking.yomedia.vn/mobile?evt=009&token=b42499c3c3ce8789ff69b0f52695d5e74375a14170&to=http%3A%2F%2Fwww.yomedia.vn%2F&ord=1632318791930' + Date.now();
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
    window.parent.postMessage("LgTopBanner","*");
}

function clickThroughYomedia_9d3a74db38164ebf889697f844c94afd() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://tracking.yomedia.vn/mobile?evt=009&token=b42499c3c3ce8789ff69b0f52695d5e74375a14170&to=http%3A%2F%2Fwww.yomedia.vn%2F&ord=1632318791930' + Date.now();
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_9d3a74db38164ebf889697f844c94afd() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function startTrackingYomedia_9d3a74db38164ebf889697f844c94afd(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=003&token=b42499c3c3ce8789ff69b0f52695d5e74375aec686&ord=1632318791930' + Date.now());
}

function firstQuartileTrackingYomedia_9d3a74db38164ebf889697f844c94afd(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=004&token=b42499c3c3ce8789ff69b0f52695d5e74375fc98a7&ord=1632318791930' + Date.now());
}

function midpointTrackingYomedia_9d3a74db38164ebf889697f844c94afd(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=005&token=b42499c3c3ce8789ff69b0f52695d5e74375f7c9e6&ord=1632318791930' + Date.now());
}

function thirdQuartileTrackingYomedia_9d3a74db38164ebf889697f844c94afd(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=006&token=b42499c3c3ce8789ff69b0f52695d5e7437595daad&ord=1632318791930' + Date.now());
}

function completeTrackingYomedia_9d3a74db38164ebf889697f844c94afd(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=007&token=b42499c3c3ce8789ff69b0f52695d5e74375e7f3fc&ord=1632318791930' + Date.now());
}

function getClickTagYomedia_9d3a74db38164ebf889697f844c94afd() {
    var landingPage = '';
    landingPage = 'https://tracking.yomedia.vn/mobile?evt=009&token=b42499c3c3ce8789ff69b0f52695d5e74375a14170&to=http%3A%2F%2Fwww.yomedia.vn%2F&ord=1632318791930' + Date.now();
    return landingPage;
}

function addAnEventListener_9d3a74db38164ebf889697f844c94afd(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_9d3a74db38164ebf889697f844c94afd(event){
    try {
        var fn_9d3a74db38164ebf889697f844c94afd = event.data;
        processMessage_9d3a74db38164ebf889697f844c94afd(fn_9d3a74db38164ebf889697f844c94afd);
    }
    catch(err) {}
}
addAnEventListener_9d3a74db38164ebf889697f844c94afd(window,'message',iFrameListener_9d3a74db38164ebf889697f844c94afd);
// http
var __yoComScore = __yoComScore || [];
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}


//flight: Yomedia Service Testing Interstitial itvc

function createTrackingIframe_9d3a74db38164ebf889697f844c94afd(id, src) {
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

function getRandom_9d3a74db38164ebf889697f844c94afd(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_9d3a74db38164ebf889697f844c94afd;
var ms_9d3a74db38164ebf889697f844c94afd;
function processMessage_9d3a74db38164ebf889697f844c94afd(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_9d3a74db38164ebf889697f844c94afd();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd':
                    minYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'restoreYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd':
                    restoreYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'setYoMediaExpand_9d3a74db38164ebf889697f844c94afd':
                    setYoMediaExpand_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'setYoMediaPre_9d3a74db38164ebf889697f844c94afd':
                    setYoMediaPre_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'closeYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd':
                    closeYoMediaPopupAd_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'closeYoMediaExpand_9d3a74db38164ebf889697f844c94afd':
                    closeYoMediaExpand_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'impressionTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    impressionTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'viewableTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    viewableTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'clickTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    clickTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'clickTracking3rdYomedia_9d3a74db38164ebf889697f844c94afd':
                    clickTracking3rdYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'startTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    startTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'firstQuartileTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    firstQuartileTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'midpointTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    midpointTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'thirdQuartileTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    thirdQuartileTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
                case 'completeTrackingYomedia_9d3a74db38164ebf889697f844c94afd':
                    completeTrackingYomedia_9d3a74db38164ebf889697f844c94afd();
                    break;
            }
            
        }
    } catch(error){}
}