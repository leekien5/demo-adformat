/* MOBILE FOOTER - SCRATCHER */
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
var yomediaId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'yomedia-wrapper-mobile-c-e8b0aea36ee54d4eadbb5d0028b68d2e';
var yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e = 'yomedia-mobile-content-scratcher-e8b0aea36ee54d4eadbb5d0028b68d2e';
var iOS_e8b0aea36ee54d4eadbb5d0028b68d2e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var min_w_e8b0aea36ee54d4eadbb5d0028b68d2e = (384 != 0)?384:screen.width;
var min_h_e8b0aea36ee54d4eadbb5d0028b68d2e = (110 != 0)?110:screen.height;

var ratio_e8b0aea36ee54d4eadbb5d0028b68d2e = 384/683;
if (384 && 110) {
    ratio_e8b0aea36ee54d4eadbb5d0028b68d2e =  parseInt(110) / parseInt(384);
}

function showBannerYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(s) {
    if (document.getElementById(yomediaId_e8b0aea36ee54d4eadbb5d0028b68d2e)) {
        return false;
    }
    let show_logo = false;
    let show_close_button = true;
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
    
    if (domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if (bannerURL) {
        log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);
        const zone_ads = document.createElement('div');
        zone_ads.id = `yz-e8b0aea36ee54d4eadbb5d0028b68d2e`;
        zone_ads.style.cssText = `width: 100%; height: 100vh; position: fixed; bottom: 0px; z-index: 2147483500 !important;`;
        document.body.appendChild(zone_ads);
    
        var banner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=e8b0aea36ee54d4eadbb5d0028b68d2e&aid=c7fa86a2155c4c4899eff7a7552745e3&fid=397dfdab308c44ec80ec00ac84c702eb&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
        banner.setAttribute('src', creative_src);
        banner.setAttribute('id', yomediaContentId_e8b0aea36ee54d4eadbb5d0028b68d2e);
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
        if (show_close_button) {
            const btn_close = document.createElement('div');
            btn_close.setAttribute('id', `yo-close-e8b0aea36ee54d4eadbb5d0028b68d2e`);
            btn_close.setAttribute('style', `width: 34px !important; height: 34px !important; position: absolute; bottom: 0px !important; right: 0px !important; z-index: 2147483647 !important;`);
            let close_image = new Image();
            close_image.src = 'https://media.yomedia.vn/images/btn_close.png';
            close_image.setAttribute('style', 'width: 100% !important; height: 100% !important;')
            btn_close.appendChild(close_image);
            zone_ads.appendChild(btn_close);
            addAnEventListener_e8b0aea36ee54d4eadbb5d0028b68d2e(close_image, 'click', function() {
              closeYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e();
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
        addAnEventListener_e8b0aea36ee54d4eadbb5d0028b68d2e(banner, 'load', function() {
            isVisiabilityYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(banner);
        });
        impressionTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e();
    }
}

function minYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var zone_ads = document.getElementById('yz-e8b0aea36ee54d4eadbb5d0028b68d2e');
    if (zone_ads) {
        var rect_top = Math.ceil(zone_ads.clientWidth * ratio_e8b0aea36ee54d4eadbb5d0028b68d2e);
        zone_ads.style.clip = `rect(${zone_ads.clientHeight - rect_top}px, ${screen.width}px, ${zone_ads.clientHeight}px, 0px)`;
        if (document.getElementById('yo-collapse-e8b0aea36ee54d4eadbb5d0028b68d2e')) {
            document.getElementById('yo-collapse-e8b0aea36ee54d4eadbb5d0028b68d2e').style.display = 'none';
        }
    }
}

function setYoMediaPre_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var zone_ads = document.getElementById('yz-e8b0aea36ee54d4eadbb5d0028b68d2e');
    if (zone_ads) {
        var rect_top = Math.ceil(zone_ads.clientWidth * ratio_e8b0aea36ee54d4eadbb5d0028b68d2e);
        zone_ads.style.clip = `rect(${zone_ads.clientHeight - rect_top}px, ${screen.width}px, ${zone_ads.clientHeight}px, 0px)`;
        if (document.getElementById('yo-collapse-e8b0aea36ee54d4eadbb5d0028b68d2e')) {
            document.getElementById('yo-collapse-e8b0aea36ee54d4eadbb5d0028b68d2e').style.display = 'none';
        }
    }
}

function setYoMediaExpand_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    var zone_ads = document.getElementById('yz-e8b0aea36ee54d4eadbb5d0028b68d2e');
    if (zone_ads) {
        var rect_top = Math.ceil(zone_ads.clientWidth * ratio_e8b0aea36ee54d4eadbb5d0028b68d2e);
        zone_ads.style.clip = `rect(0px, ${screen.width}px, ${zone_ads.clientHeight}px, 0px)`;
        if (document.getElementById('yo-collapse-e8b0aea36ee54d4eadbb5d0028b68d2e')) {
            document.getElementById('yo-collapse-e8b0aea36ee54d4eadbb5d0028b68d2e').style.display = 'block';
        }
    }
}

function closeYoMediaPopupAd_e8b0aea36ee54d4eadbb5d0028b68d2e() {
    if (document.getElementById('yz-e8b0aea36ee54d4eadbb5d0028b68d2e')) {
        document.getElementById('yz-e8b0aea36ee54d4eadbb5d0028b68d2e').remove();
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
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_e8b0aea36ee54d4eadbb5d0028b68d2e === 'function') {
        _YoImpCallback_e8b0aea36ee54d4eadbb5d0028b68d2e();
    }
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

function startTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(){
}

function firstQuartileTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(){
}

function midpointTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(){
}

function thirdQuartileTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(){
}

function completeTrackingYomedia_e8b0aea36ee54d4eadbb5d0028b68d2e(){
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