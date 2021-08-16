/* MOBILE FOOTER - WHEEL */
var advId_1936d003c150434a8f90e7e97ee11377 = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_1936d003c150434a8f90e7e97ee11377 = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_1936d003c150434a8f90e7e97ee11377 = '5565e302fb2e489cae28103f6c66db12';
var chanId_1936d003c150434a8f90e7e97ee11377 = '3d58e13cbef3493682fe6107ac13e262';
var placementId_1936d003c150434a8f90e7e97ee11377 = '1936d003c150434a8f90e7e97ee11377';

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
var yomediaId_1936d003c150434a8f90e7e97ee11377 = 'yomedia-wrapper-mobile-wheel-1936d003c150434a8f90e7e97ee11377';
var yomediaContentId_1936d003c150434a8f90e7e97ee11377 = 'yomedia-mobile-content-wheel-1936d003c150434a8f90e7e97ee11377';
var iOS_1936d003c150434a8f90e7e97ee11377 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var min_w_1936d003c150434a8f90e7e97ee11377 = (750 != 0)?750:screen.width;
var min_h_1936d003c150434a8f90e7e97ee11377 = (400 != 0)?400:screen.height;
var max_w_1936d003c150434a8f90e7e97ee11377 = (750 != 0)?750:screen.width;
var max_h_1936d003c150434a8f90e7e97ee11377 = (400 != 0)?400:screen.height;

var ratio_1936d003c150434a8f90e7e97ee11377 = 220/660;
if (750 && 400) {
    ratio_1936d003c150434a8f90e7e97ee11377 =  parseInt(400) / parseInt(750);
}

function showBannerYomedia_1936d003c150434a8f90e7e97ee11377(s) {
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
    if (document.getElementById(yomediaId_1936d003c150434a8f90e7e97ee11377)) {
        return false;
    }
    if (domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    let show_logo = true;
    let show_close_button = true;
    
    var banner_height = window.innerWidth * ratio_1936d003c150434a8f90e7e97ee11377;
    const zone_ads = document.createElement('div');
    zone_ads.id = `yz-1936d003c150434a8f90e7e97ee11377`;
    zone_ads.style.cssText = `width: 100%; height: 100%; position: fixed; bottom: 0px; z-index: 2147483500 !important;`;
    document.body.appendChild(zone_ads);

    if (zone_ads.clientWidth > 0) {
        banner_height = zone_ads.clientWidth * ratio_1936d003c150434a8f90e7e97ee11377;
        zone_ads.style.height = `${banner_height}px`;
    }

    if (bannerURL) {
        log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);
        var banner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_1936d003c150434a8f90e7e97ee11377());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=1936d003c150434a8f90e7e97ee11377&aid=0db3b40c349d4a40b46b4411cdfbf258&fid=12b9ee13084a46d794409a0286d5b368&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
        banner.setAttribute('src', creative_src);
        banner.setAttribute('id', yomediaContentId_1936d003c150434a8f90e7e97ee11377);
        banner.setAttribute('allowFullScreen', '');
        banner.setAttribute('frameborder', '0');
        banner.setAttribute('scrolling', 'no');
        banner.setAttribute('width', '100%');
        banner.setAttribute('height', '100%');
        banner.setAttribute('marginheight', 0);
        banner.setAttribute('align', 'top');
        banner.setAttribute('scrolling', 'No');
        banner.setAttribute('frameborder', 0);
        banner.setAttribute('hspace', 0);
        banner.setAttribute('vspace', 0);
        banner.setAttribute('style', `overflow: hidden; position: relative; border: 0; background: transparent; margin: auto; width: 100% !important; height: 100% !important; z-index: 2147483500 !important;`);
        zone_ads.appendChild(banner);
    }

    var rect_top = Math.floor(zone_ads.clientHeight * ratio_1936d003c150434a8f90e7e97ee11377);
    zone_ads.style.clip = `clip: rect(${zone_ads.clientHeight - rect_top}px, ${screen.width}px, ${zone_ads.clientHeight}px, 0px) !important;`;

    if (show_close_button) {
        const btn_close = document.createElement('div');
        btn_close.setAttribute('id', `yo-close-1936d003c150434a8f90e7e97ee11377`);
        btn_close.setAttribute('style', `width: 34px !important; height: 34px !important; position: absolute; bottom: 0px !important; right: 0px !important; z-index: 2147483647 !important;`);
        let close_image = new Image();
        close_image.src = 'https://media.yomedia.vn/images/btn_close.png';
        close_image.setAttribute('style', 'width: 100% !important; height: 100% !important;')
        btn_close.appendChild(close_image);
        zone_ads.appendChild(btn_close);
        addAnEventListener_1936d003c150434a8f90e7e97ee11377(close_image, 'click', function() {
        closeYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377();
        });
    }

    if (show_logo) {
        const logo = document.createElement('div');
        logo.setAttribute('style', `position: absolute; display: inline-block; height: 25px; cursor: pointer; z-index: 2147483647 !important; left: 0px !important; bottom: 0px !important;`);
        const a_logo = document.createElement('a');
        a_logo.setAttribute('href', 'https://yomedia.vn');
        a_logo.setAttribute('target', '_blank');
        logo.appendChild(a_logo);
        let image_logo = new Image();
        image_logo.src = 'https://media.yomedia.vn/images/yo-bl-logo.png';
        image_logo.setAttribute('style', 'width: auto !important; height: 25px !important;');
        image_logo.setAttribute('onmouseover', `this.src='https://media.yomedia.vn/images/yo-bl-f-logo.png'`);
        image_logo.setAttribute('onmouseout', `this.src='https://media.yomedia.vn/images/yo-bl-logo.png'`);
        a_logo.appendChild(image_logo);
        zone_ads.appendChild(logo);
    }
    document.body.appendChild(zone_ads);
    addAnEventListener_1936d003c150434a8f90e7e97ee11377(banner, 'load', function() {
        isVisiabilityYomedia_1936d003c150434a8f90e7e97ee11377(banner);
    });
    addAnEventListener_1936d003c150434a8f90e7e97ee11377(window, 'scroll', function() {
        var scrollTop = e=document.documentElement.scrollTop;
        sendMessageToIframe_1936d003c150434a8f90e7e97ee11377(JSON.stringify({pid: '1936d003c150434a8f90e7e97ee11377', scrt: scrollTop}));
    });
    impressionTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
}

function sendMessageToIframe_1936d003c150434a8f90e7e97ee11377($message) {
    var banner = document.getElementById(yomediaContentId_1936d003c150434a8f90e7e97ee11377);
    if (banner) {
        banner.contentWindow.postMessage($message, '*'); 
    }
}

function minYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377() {
    var banner = document.getElementById(yomediaContentId_1936d003c150434a8f90e7e97ee11377);
    var rect_top = Math.floor(screen.width * ratio_1936d003c150434a8f90e7e97ee11377);
    banner.style.clip = 'rect(' + (screen.height - rect_top) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaPre_1936d003c150434a8f90e7e97ee11377() {
    var banner = document.getElementById(yomediaContentId_1936d003c150434a8f90e7e97ee11377);
    var rect_top = Math.floor(screen.width * ratio_1936d003c150434a8f90e7e97ee11377);
    banner.style.clip = 'rect(' + (screen.height - rect_top) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function setYoMediaExpand_1936d003c150434a8f90e7e97ee11377() {
    var banner = document.getElementById(yomediaContentId_1936d003c150434a8f90e7e97ee11377);
    var rect_top = Math.floor(screen.width * parseInt(max_h_1936d003c150434a8f90e7e97ee11377) / screen.height);
    banner.style.clip = 'rect(' + (screen.height - rect_top) + 'px, ' + screen.width + 'px, ' + screen.height + 'px, 0px)';
}

function closeYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377() {
    if (document.getElementById('yz-1936d003c150434a8f90e7e97ee11377')) {
        document.getElementById('yz-1936d003c150434a8f90e7e97ee11377').remove();
    }
}

function rotateYomedia_1936d003c150434a8f90e7e97ee11377() {
    var portraitBanner = document.getElementById(yomediaContentId_1936d003c150434a8f90e7e97ee11377);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_1936d003c150434a8f90e7e97ee11377);

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

var trackingViewable_1936d003c150434a8f90e7e97ee11377 = false, interval_1936d003c150434a8f90e7e97ee11377 = null, timeTrackingViewable_1936d003c150434a8f90e7e97ee11377 = 1000;

function viewableBannerYomedia_1936d003c150434a8f90e7e97ee11377(event) {
    if (!trackingViewable_1936d003c150434a8f90e7e97ee11377) {
        if (viewHalfBannerYomedia_1936d003c150434a8f90e7e97ee11377(this)) {
            if (interval_1936d003c150434a8f90e7e97ee11377 === null) {
                var time = 0;
                interval_1936d003c150434a8f90e7e97ee11377 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_1936d003c150434a8f90e7e97ee11377) {
                        if (!trackingViewable_1936d003c150434a8f90e7e97ee11377) {
                            viewableTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                            trackingViewable_1936d003c150434a8f90e7e97ee11377 = true;
                            clearInterval(interval_1936d003c150434a8f90e7e97ee11377);
                            interval_1936d003c150434a8f90e7e97ee11377 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_1936d003c150434a8f90e7e97ee11377()
        }
    }
}

function viewableBySzieBannerYomedia_1936d003c150434a8f90e7e97ee11377(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_1936d003c150434a8f90e7e97ee11377) {
        var rect = getClientRectBannerYomedia_1936d003c150434a8f90e7e97ee11377(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_1936d003c150434a8f90e7e97ee11377 === null) {
                var time = 0;
                interval_1936d003c150434a8f90e7e97ee11377 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_1936d003c150434a8f90e7e97ee11377) {
                        if (!trackingViewable_1936d003c150434a8f90e7e97ee11377) {
                            viewableTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                            trackingViewable_1936d003c150434a8f90e7e97ee11377 = true;
                            clearInterval(interval_1936d003c150434a8f90e7e97ee11377);
                            interval_1936d003c150434a8f90e7e97ee11377 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_1936d003c150434a8f90e7e97ee11377()
        }
    }
}

function destroyViewableBannerYomedia_1936d003c150434a8f90e7e97ee11377() {
    if (interval_1936d003c150434a8f90e7e97ee11377 !== null) {
        clearInterval(interval_1936d003c150434a8f90e7e97ee11377);
        interval_1936d003c150434a8f90e7e97ee11377 = null;
    }
}

function viewHalfBannerYomedia_1936d003c150434a8f90e7e97ee11377(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_1936d003c150434a8f90e7e97ee11377(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_1936d003c150434a8f90e7e97ee11377(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_1936d003c150434a8f90e7e97ee11377(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_1936d003c150434a8f90e7e97ee11377(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_1936d003c150434a8f90e7e97ee11377(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_1936d003c150434a8f90e7e97ee11377(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_1936d003c150434a8f90e7e97ee11377(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_1936d003c150434a8f90e7e97ee11377(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_1936d003c150434a8f90e7e97ee11377(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_1936d003c150434a8f90e7e97ee11377(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_1936d003c150434a8f90e7e97ee11377(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_1936d003c150434a8f90e7e97ee11377() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_1936d003c150434a8f90e7e97ee11377(wd) {
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

function getOffsetYYomedia_1936d003c150434a8f90e7e97ee11377(obj) {
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

function getClientRectBannerYomedia_1936d003c150434a8f90e7e97ee11377(obj) {
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
let visibleAdsYomedia_1936d003c150434a8f90e7e97ee11377 = null, viewabilityIntervalID_1936d003c150434a8f90e7e97ee11377, timerViewability_1936d003c150434a8f90e7e97ee11377 = 0, trackedViewability_1936d003c150434a8f90e7e97ee11377 = false;
const durationViewability_1936d003c150434a8f90e7e97ee11377 = 10;

function isVisiabilityYomedia_1936d003c150434a8f90e7e97ee11377(el) {
    if (el) {
        try {
            let thresholdSets_1936d003c150434a8f90e7e97ee11377 = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_1936d003c150434a8f90e7e97ee11377.push(i/100);
            }
            var adObserverVisiability_1936d003c150434a8f90e7e97ee11377 = new IntersectionObserver(intersectionCallback_1936d003c150434a8f90e7e97ee11377, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_1936d003c150434a8f90e7e97ee11377
            });
            viewabilityIntervalID_1936d003c150434a8f90e7e97ee11377 = window.setInterval(function() {
                handleTrackingViewability_1936d003c150434a8f90e7e97ee11377(el);
            }, durationViewability_1936d003c150434a8f90e7e97ee11377);
            adObserverVisiability_1936d003c150434a8f90e7e97ee11377.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_1936d003c150434a8f90e7e97ee11377) {
                window.clearInterval(viewabilityIntervalID_1936d003c150434a8f90e7e97ee11377);   
            }
        }
    }
}

function intersectionCallback_1936d003c150434a8f90e7e97ee11377(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_1936d003c150434a8f90e7e97ee11377 = entry.target;
            } else {
                visibleAdsYomedia_1936d003c150434a8f90e7e97ee11377 = null;
            }
        } else {
            visibleAdsYomedia_1936d003c150434a8f90e7e97ee11377 = null;
        }
    });
}

function handleTrackingViewability_1936d003c150434a8f90e7e97ee11377(el) {
    if (visibleAdsYomedia_1936d003c150434a8f90e7e97ee11377 !== null && el === visibleAdsYomedia_1936d003c150434a8f90e7e97ee11377) {
        timerViewability_1936d003c150434a8f90e7e97ee11377 += durationViewability_1936d003c150434a8f90e7e97ee11377;
        if (!trackedViewability_1936d003c150434a8f90e7e97ee11377 && timerViewability_1936d003c150434a8f90e7e97ee11377 >= 1000) {
            trackedViewability_1936d003c150434a8f90e7e97ee11377 = true;
            viewableTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
            window.clearInterval(viewabilityIntervalID_1936d003c150434a8f90e7e97ee11377);
        }
    } else {
        timerViewability_1936d003c150434a8f90e7e97ee11377 = 0;
    }
}showBannerYomedia_1936d003c150434a8f90e7e97ee11377(1);
function impressionTrackingYomedia_1936d003c150434a8f90e7e97ee11377() {
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_1936d003c150434a8f90e7e97ee11377 === 'function') {
        _YoImpCallback_1936d003c150434a8f90e7e97ee11377();
    }
}

function viewableTrackingYomedia_1936d003c150434a8f90e7e97ee11377() {
}

function clickTrackingYomedia_1936d003c150434a8f90e7e97ee11377() {
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

function clickThroughYomedia_1936d003c150434a8f90e7e97ee11377() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_1936d003c150434a8f90e7e97ee11377() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function getClickTagYomedia_1936d003c150434a8f90e7e97ee11377() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_1936d003c150434a8f90e7e97ee11377(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_1936d003c150434a8f90e7e97ee11377(event){
    try {
        var fn_1936d003c150434a8f90e7e97ee11377 = event.data;
        processMessage_1936d003c150434a8f90e7e97ee11377(fn_1936d003c150434a8f90e7e97ee11377);
    }
    catch(err) {}
}
addAnEventListener_1936d003c150434a8f90e7e97ee11377(window,'message',iFrameListener_1936d003c150434a8f90e7e97ee11377);

function createTrackingIframe_1936d003c150434a8f90e7e97ee11377(id, src) {
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

function getRandom_1936d003c150434a8f90e7e97ee11377(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_1936d003c150434a8f90e7e97ee11377;
var ms_1936d003c150434a8f90e7e97ee11377;
function processMessage_1936d003c150434a8f90e7e97ee11377(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_1936d003c150434a8f90e7e97ee11377();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377':
                    minYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'restoreYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377':
                    restoreYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'setYoMediaExpand_1936d003c150434a8f90e7e97ee11377':
                    setYoMediaExpand_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'setYoMediaPre_1936d003c150434a8f90e7e97ee11377':
                    setYoMediaPre_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'closeYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377':
                    closeYoMediaPopupAd_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'closeYoMediaExpand_1936d003c150434a8f90e7e97ee11377':
                    closeYoMediaExpand_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'impressionTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    impressionTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'viewableTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    viewableTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'clickTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    clickTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'clickTracking3rdYomedia_1936d003c150434a8f90e7e97ee11377':
                    clickTracking3rdYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'startTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    startTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'firstQuartileTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    firstQuartileTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'midpointTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    midpointTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'thirdQuartileTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    thirdQuartileTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
                case 'completeTrackingYomedia_1936d003c150434a8f90e7e97ee11377':
                    completeTrackingYomedia_1936d003c150434a8f90e7e97ee11377();
                    break;
            }
            
        }
    } catch(error){}
}