var advId_35bbe423812b462ab61875190345400a = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_35bbe423812b462ab61875190345400a = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_35bbe423812b462ab61875190345400a = '5565e302fb2e489cae28103f6c66db12';
var chanId_35bbe423812b462ab61875190345400a = '3d58e13cbef3493682fe6107ac13e262';
var placementId_35bbe423812b462ab61875190345400a = '35bbe423812b462ab61875190345400a';

var d = new Date();
d.setTime(d.getTime() + 31536000000);
var expires = 'expires='+ d.toUTCString();
document.cookie = '__yoid__=4aa7f13dcd514ca13807fafcd8032f02;' + expires + ';path=/';
if (!window.localStorage.getItem('__yoid__')) {
	window.localStorage.setItem('__yoid__', '4aa7f13dcd514ca13807fafcd8032f02');
}

function getTrackingYomedia(url) {
	var img = new Image();
	img.src = url;
}

var yomediaId_35bbe423812b462ab61875190345400a = 'wrapper-35bbe423812b462ab61875190345400a';
var yomediaPortraitId_35bbe423812b462ab61875190345400a = 'yomedia-ads-35bbe423812b462ab61875190345400a';
var yomediaLandscapeId_35bbe423812b462ab61875190345400a = 'yomedia-mobile-landscape-masthead-35bbe423812b462ab61875190345400a';
var positionInsert_35bbe423812b462ab61875190345400a = '';
var positionType_35bbe423812b462ab61875190345400a = '';
var positionName_35bbe423812b462ab61875190345400a = '';
var positionIndex_35bbe423812b462ab61875190345400a = '';

var w_35bbe423812b462ab61875190345400a = '414';
var h_35bbe423812b462ab61875190345400a = '500';
var viewWidth_35bbe423812b462ab61875190345400a = 400;
var viewHeight_35bbe423812b462ab61875190345400a = 450;
var ratio_35bbe423812b462ab61875190345400a = 400/450;   
let containerHalfHeight_ = 250 / 2;
let iframeEl_ = null; 
let version_ = '1.0.0';
if (w_35bbe423812b462ab61875190345400a) {
    viewWidth_35bbe423812b462ab61875190345400a = parseInt(w_35bbe423812b462ab61875190345400a);
} 
if (h_35bbe423812b462ab61875190345400a) {
    viewHeight_35bbe423812b462ab61875190345400a = parseInt(h_35bbe423812b462ab61875190345400a);
} 

if (viewWidth_35bbe423812b462ab61875190345400a != 0 && viewHeight_35bbe423812b462ab61875190345400a != 0) {
    ratio_35bbe423812b462ab61875190345400a = viewWidth_35bbe423812b462ab61875190345400a/viewHeight_35bbe423812b462ab61875190345400a;
}
var maxWidth_35bbe423812b462ab61875190345400a = screen.width;
var maxHeight_35bbe423812b462ab61875190345400a = maxWidth_35bbe423812b462ab61875190345400a / ratio_35bbe423812b462ab61875190345400a;
if (!isMobile()) {
    maxWidth_35bbe423812b462ab61875190345400a = 400;
    maxHeight_35bbe423812b462ab61875190345400a = 450;
}

function showBannerYomedia_35bbe423812b462ab61875190345400a(s) {
    if (document.getElementById(yomediaId_35bbe423812b462ab61875190345400a)) {
        return false;
    }
    var mainContain;
    if (positionInsert_35bbe423812b462ab61875190345400a === '') {
        positionInsert_35bbe423812b462ab61875190345400a = 'after';
    }
    if (positionType_35bbe423812b462ab61875190345400a === '') {
        positionType_35bbe423812b462ab61875190345400a = 'id';
    }
    if (positionType_35bbe423812b462ab61875190345400a === 'class') {
        if (positionIndex_35bbe423812b462ab61875190345400a === '') {
            positionIndex_35bbe423812b462ab61875190345400a = 0;
        } else {
            positionIndex_35bbe423812b462ab61875190345400a = parseInt(positionIndex_35bbe423812b462ab61875190345400a);
        }
        mainContain = document.getElementsByClassName(positionName_35bbe423812b462ab61875190345400a)[positionIndex_35bbe423812b462ab61875190345400a];        
    } else {
        mainContain = document.getElementById(positionName_35bbe423812b462ab61875190345400a);
    }
    if (!mainContain) {
        positionInsert_35bbe423812b462ab61875190345400a = 'after';
        mainContain =  document.currentScript || (function() {
            var script = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=35bbe423812b462ab61875190345400a") && (script = a)
            });
            return script;
        })();
    }
    var domWrapper = document.createElement('div');
    domWrapper.setAttribute('id', yomediaId_35bbe423812b462ab61875190345400a);
    domWrapper.style.cssText = 'display: block; overflow: hidden;background: transparent; width: 100%; right: 0px; left: 0px; padding: 0px; position: reletive; border: 0; max-width: ' + maxWidth_35bbe423812b462ab61875190345400a + 'px; max-height: ' + maxHeight_35bbe423812b462ab61875190345400a + 'px; min-width: 300px; left: 0px; right: 0px; margin: auto;';

    switch (positionInsert_35bbe423812b462ab61875190345400a) {
        case 'before':
            mainContain.parentNode.insertBefore(domWrapper, mainContain);
            break;
        case 'first_child':
            var firstChild = mainContain.firstChild;
            if (firstChild) {
                mainContain.insertBefore(domWrapper, firstChild);
            } else {
                mainContain.appendChild(domWrapper);
            }
            break;
        case 'middle_child':
            var childNodes = mainContain.childNodes;
            if ( childNodes.length > 0) {
                var p = 0;
                for (var i = 0; i < childNodes.length; i++) {
                    if (childNodes[i].clientHeight > 0) {
                        p = p + childNodes[i].clientHeight;
                    }
                    if (p >= (mainContain.clientHeight / 2)) {
                        if (typeof(mainContain.childNodes[i + 1]) != 'undefined') {
                            var eleToInsert = i + 1;
                        } else {
                            var eleToInsert = i;
                        }            
                        mainContain.childNodes[eleToInsert].parentNode.insertBefore(domWrapper, mainContain.childNodes[eleToInsert].nextSibling);
                        break;
                    }
                }
                if (!document.getElementById(yomediaId_35bbe423812b462ab61875190345400a)) {
                    mainContain.childNodes[Math.ceil(childNodes.length/2)].parentNode.insertBefore(domWrapper, mainContain.childNodes[Math.ceil(childNodes.length/2)].nextSibling);
                }
            } else {
                mainContain.appendChild(domWrapper);
            }
            break;
        case 'last_child':
            mainContain.appendChild(domWrapper);
            break;
        case 'after':
            var nextNode = mainContain.nextSibling;
            if (nextNode) {
                nextNode.parentNode.insertBefore(domWrapper, nextNode);
            } else {
                mainContain.parentNode.appendChild(domWrapper);
            }
            break;
        case 'random':
            var childNodes = mainContain.childNodes;
            if ( childNodes.length > 0) {
                var randomIndex= Math.floor(Math.random() * childNodes.length);
                mainContain.insertBefore(domWrapper, mainContain.childNodes[randomIndex]);
            } else {
                mainContain.appendChild(domWrapper);
            }
            break;
        default:
            document.body.appendChild(domWrapper);
            break;
    }  
    viewWidth_35bbe423812b462ab61875190345400a = domWrapper.clientWidth;   
    viewHeight_35bbe423812b462ab61875190345400a = Math.ceil(domWrapper.clientWidth/ratio_35bbe423812b462ab61875190345400a); 
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');
    
    if(domainURL == 'null') {
        domainURL = 'demo';
    }
    if(bannerURL ){
        var portraitBanner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_35bbe423812b462ab61875190345400a());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=35bbe423812b462ab61875190345400a&aid=21841d8067c1458d8c4595f35e1c46ea&fid=2400c5994a434822880d3319b96dcbff&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=${clickTag}`;
        portraitBanner.setAttribute('src', creative_src);
        portraitBanner.setAttribute('scrolling','no');
        portraitBanner.setAttribute('id', yomediaPortraitId_35bbe423812b462ab61875190345400a);
        portraitBanner.setAttribute('allowFullScreen', '');
        
        portraitBanner.style.cssText = 'left:0px; right:0px; margin: 0px auto; display:block; overflow: hidden; border: 0; width: ' + viewWidth_35bbe423812b462ab61875190345400a + 'px; height: ' + viewHeight_35bbe423812b462ab61875190345400a + 'px; max-width: ' + maxWidth_35bbe423812b462ab61875190345400a + 'px; max-height: ' + maxHeight_35bbe423812b462ab61875190345400a + 'px; min-width: 300px;';
        
        domWrapper.appendChild(portraitBanner);
        iframeEl_ = portraitBanner;
    }

    resizeYomedia_35bbe423812b462ab61875190345400a();
    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            resizeYomedia_35bbe423812b462ab61875190345400a();
        }
    }
    setTimeout(function() {
        resizeYomedia_35bbe423812b462ab61875190345400a();
    }, 2000);
    addAnEventListener_35bbe423812b462ab61875190345400a(portraitBanner, 'load', function() {
        isVisiabilityYomedia_35bbe423812b462ab61875190345400a(portraitBanner);
        
    });
    impressionTrackingYomedia_35bbe423812b462ab61875190345400a();
    if (isMobile()) {
        inViewYomedia_35bbe423812b462ab61875190345400a(domWrapper);
    }
    
}



function inViewYomedia_35bbe423812b462ab61875190345400a(el) {
    if (el) {
        try {
            let thresholdSets_35bbe423812b462ab61875190345400a = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_35bbe423812b462ab61875190345400a.push(i/100);
            }
            var adObserverVisiability_35bbe423812b462ab61875190345400a = new IntersectionObserver(checkTopBanner_35bbe423812b462ab61875190345400a, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_35bbe423812b462ab61875190345400a
            });
            
            adObserverVisiability_35bbe423812b462ab61875190345400a.observe(el);
        } catch (e) {
            
        }
    }
}

function checkTopBanner_35bbe423812b462ab61875190345400a(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio > 0) {
                let placementEl_ = document.getElementById(yomediaId_35bbe423812b462ab61875190345400a);
                let adContainerTop = placementEl_.getBoundingClientRect().top;

                let toBaseZero = (window.innerHeight - containerHalfHeight_) - adContainerTop;
                let topByPercent = toBaseZero / window.innerHeight * 100;
                sendMessageToIframe_35bbe423812b462ab61875190345400a({owner: 'Yomedia', adType: 'yomedia-apps-mrec', action: 'scroll', data: {topPercentage: topByPercent}})
            } else {
                return;
            }
        } else {
            return
        }
    });
}

function getRatioIframeYomedia_35bbe423812b462ab61875190345400a(){
    ratio = Iframe_width/Iframe_height;
}

function getScaleValue_35bbe423812b462ab61875190345400a(){
    return parseInt(document.getElementById('wrapper-mobile-masthead-35bbe423812b462ab61875190345400a').clientWidth) / screen.width;
}

function resizeYomedia_35bbe423812b462ab61875190345400a(){
    var portraitBanner = document.getElementById(yomediaPortraitId_35bbe423812b462ab61875190345400a);
    if (portraitBanner) {
        portraitBanner.style.height = (document.getElementById(yomediaId_35bbe423812b462ab61875190345400a).clientWidth/ratio_35bbe423812b462ab61875190345400a) + 'px';
        portraitBanner.style.width = document.getElementById(yomediaId_35bbe423812b462ab61875190345400a).clientWidth + 'px';
    }
}

addAnEventListener_35bbe423812b462ab61875190345400a(window,'resize',function(){
    resizeYomedia_35bbe423812b462ab61875190345400a();
});

function rotateYomedia_35bbe423812b462ab61875190345400a() {
    var portraitBanner = document.getElementById(yomediaPortraitId_35bbe423812b462ab61875190345400a);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_35bbe423812b462ab61875190345400a);

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

function closeYoMediaPopupAd_35bbe423812b462ab61875190345400a() {
    var d = document.getElementById(yomediaId_35bbe423812b462ab61875190345400a);
    easingYomedia_35bbe423812b462ab61875190345400a(d, 0);
}

function easingYomedia_35bbe423812b462ab61875190345400a(e, n) {
    if (!e) return;
    var pos = e.clientHeight;
    var change = n - pos;
    var total = change > 0 ? pos + Math.ceil((change / 5)) : pos + Math.floor((change / 5));
    e.style.height = total + "px";
    if (total == 0) {
        e.remove();
    }
    function r() {
        easingYomedia_35bbe423812b462ab61875190345400a(e, n);
    }
    
    n = n > 0 ? Math.ceil(n) : Math.floor(n);
    if(change == 0) {
        clearTimeout(timer);
        return;
    }
    timer = setTimeout(r, 15);
}

function viewBannerYomedia_35bbe423812b462ab61875190345400a() {
    var domWrapper = document.getElementById(yomediaPortraitId_35bbe423812b462ab61875190345400a);
    if (domWrapper) {
        if (viewFullBannerYomedia_35bbe423812b462ab61875190345400a(domWrapper)) {
            sendMessageToIframe_35bbe423812b462ab61875190345400a('yomedia_in_banner_35bbe423812b462ab61875190345400a');
        } else {
            sendMessageToIframe_35bbe423812b462ab61875190345400a('yomedia_out_banner_35bbe423812b462ab61875190345400a');
        }
        if (viewHalfBannerYomedia_35bbe423812b462ab61875190345400a(domWrapper)) {
            sendMessageToIframe_35bbe423812b462ab61875190345400a('yomedia_in_half_banner_35bbe423812b462ab61875190345400a');
        } else {
            sendMessageToIframe_35bbe423812b462ab61875190345400a('yomedia_out_half_banner_35bbe423812b462ab61875190345400a');
        }
    }    
}

function sendMessageToIframe_35bbe423812b462ab61875190345400a($message) {
    var banner = document.getElementById(yomediaPortraitId_35bbe423812b462ab61875190345400a);
    banner.contentWindow.postMessage($message, '*'); 
}

var trackingViewable_35bbe423812b462ab61875190345400a = false, interval_35bbe423812b462ab61875190345400a = null, timeTrackingViewable_35bbe423812b462ab61875190345400a = 1000;

function viewableBannerYomedia_35bbe423812b462ab61875190345400a(event) {
    if (!trackingViewable_35bbe423812b462ab61875190345400a) {
        if (viewHalfBannerYomedia_35bbe423812b462ab61875190345400a(this)) {
            if (interval_35bbe423812b462ab61875190345400a === null) {
                var time = 0;
                interval_35bbe423812b462ab61875190345400a = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_35bbe423812b462ab61875190345400a) {
                        if (!trackingViewable_35bbe423812b462ab61875190345400a) {
                            viewableTrackingYomedia_35bbe423812b462ab61875190345400a();
                            trackingViewable_35bbe423812b462ab61875190345400a = true;
                            clearInterval(interval_35bbe423812b462ab61875190345400a);
                            interval_35bbe423812b462ab61875190345400a = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_35bbe423812b462ab61875190345400a()
        }
    }
}

function viewableBySzieBannerYomedia_35bbe423812b462ab61875190345400a(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_35bbe423812b462ab61875190345400a) {
        var rect = getClientRectBannerYomedia_35bbe423812b462ab61875190345400a(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_35bbe423812b462ab61875190345400a === null) {
                var time = 0;
                interval_35bbe423812b462ab61875190345400a = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_35bbe423812b462ab61875190345400a) {
                        if (!trackingViewable_35bbe423812b462ab61875190345400a) {
                            viewableTrackingYomedia_35bbe423812b462ab61875190345400a();
                            trackingViewable_35bbe423812b462ab61875190345400a = true;
                            clearInterval(interval_35bbe423812b462ab61875190345400a);
                            interval_35bbe423812b462ab61875190345400a = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_35bbe423812b462ab61875190345400a()
        }
    }
}

function destroyViewableBannerYomedia_35bbe423812b462ab61875190345400a() {
    if (interval_35bbe423812b462ab61875190345400a !== null) {
        clearInterval(interval_35bbe423812b462ab61875190345400a);
        interval_35bbe423812b462ab61875190345400a = null;
    }
}

function viewHalfBannerYomedia_35bbe423812b462ab61875190345400a(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_35bbe423812b462ab61875190345400a(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_35bbe423812b462ab61875190345400a(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_35bbe423812b462ab61875190345400a(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_35bbe423812b462ab61875190345400a(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_35bbe423812b462ab61875190345400a(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_35bbe423812b462ab61875190345400a(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_35bbe423812b462ab61875190345400a(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_35bbe423812b462ab61875190345400a(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_35bbe423812b462ab61875190345400a(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_35bbe423812b462ab61875190345400a(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_35bbe423812b462ab61875190345400a(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_35bbe423812b462ab61875190345400a() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_35bbe423812b462ab61875190345400a(wd) {
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

function getOffsetYYomedia_35bbe423812b462ab61875190345400a(obj) {
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

function getClientRectBannerYomedia_35bbe423812b462ab61875190345400a(obj) {
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
let visibleAdsYomedia_35bbe423812b462ab61875190345400a = null, viewabilityIntervalID_35bbe423812b462ab61875190345400a, timerViewability_35bbe423812b462ab61875190345400a = 0, trackedViewability_35bbe423812b462ab61875190345400a = false;
const durationViewability_35bbe423812b462ab61875190345400a = 10;

function isVisiabilityYomedia_35bbe423812b462ab61875190345400a(el) {
    if (el) {
        try {
            let thresholdSets_35bbe423812b462ab61875190345400a = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_35bbe423812b462ab61875190345400a.push(i/100);
            }
            var adObserverVisiability_35bbe423812b462ab61875190345400a = new IntersectionObserver(intersectionCallback_35bbe423812b462ab61875190345400a, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_35bbe423812b462ab61875190345400a
            });
            viewabilityIntervalID_35bbe423812b462ab61875190345400a = window.setInterval(function() {
                handleTrackingViewability_35bbe423812b462ab61875190345400a(el);
            }, durationViewability_35bbe423812b462ab61875190345400a);
            adObserverVisiability_35bbe423812b462ab61875190345400a.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_35bbe423812b462ab61875190345400a) {
                window.clearInterval(viewabilityIntervalID_35bbe423812b462ab61875190345400a);   
            }
        }
    }
}

function intersectionCallback_35bbe423812b462ab61875190345400a(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_35bbe423812b462ab61875190345400a = entry.target;
            } else {
                visibleAdsYomedia_35bbe423812b462ab61875190345400a = null;
            }
        } else {
            visibleAdsYomedia_35bbe423812b462ab61875190345400a = null;
        }
    });
}

function handleTrackingViewability_35bbe423812b462ab61875190345400a(el) {
    if (visibleAdsYomedia_35bbe423812b462ab61875190345400a !== null && el === visibleAdsYomedia_35bbe423812b462ab61875190345400a) {
        timerViewability_35bbe423812b462ab61875190345400a += durationViewability_35bbe423812b462ab61875190345400a;
        if (!trackedViewability_35bbe423812b462ab61875190345400a && timerViewability_35bbe423812b462ab61875190345400a >= 1000) {
            trackedViewability_35bbe423812b462ab61875190345400a = true;
            viewableTrackingYomedia_35bbe423812b462ab61875190345400a();
            window.clearInterval(viewabilityIntervalID_35bbe423812b462ab61875190345400a);
        }
    } else {
        timerViewability_35bbe423812b462ab61875190345400a = 0;
    }
}
showBannerYomedia_35bbe423812b462ab61875190345400a(1);
window.onload = function() {
    viewBannerYomedia_35bbe423812b462ab61875190345400a();
};
if (window!=window.top) {
    parent.document.addEventListener("scroll", viewBannerYomedia_35bbe423812b462ab61875190345400a, false);
    parent.document.addEventListener("touchmove", viewBannerYomedia_35bbe423812b462ab61875190345400a, false);
} else {
    document.addEventListener("scroll", viewBannerYomedia_35bbe423812b462ab61875190345400a, false);
    document.addEventListener("touchmove", viewBannerYomedia_35bbe423812b462ab61875190345400a, false);
}

function impressionTrackingYomedia_35bbe423812b462ab61875190345400a() {
    
}

function viewableTrackingYomedia_35bbe423812b462ab61875190345400a() {
    
}

function clickTrackingYomedia_35bbe423812b462ab61875190345400a() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
    
}

function clickThroughYomedia_35bbe423812b462ab61875190345400a() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    var landingPage = 'https://yomedia.vn';
    window.open(landingPage, '_blank');
}

function clickTracking3rdYomedia_35bbe423812b462ab61875190345400a() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function getClickTagYomedia_35bbe423812b462ab61875190345400a() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_35bbe423812b462ab61875190345400a(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_35bbe423812b462ab61875190345400a(event){
    try {
        var fn_35bbe423812b462ab61875190345400a = event.data;
        processMessage_35bbe423812b462ab61875190345400a(fn_35bbe423812b462ab61875190345400a);
    }
    catch(err) {}
}
addAnEventListener_35bbe423812b462ab61875190345400a(window,'message',iFrameListener_35bbe423812b462ab61875190345400a);


function createTrackingIframe_35bbe423812b462ab61875190345400a(id, src) {
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

function getRandom_35bbe423812b462ab61875190345400a(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_35bbe423812b462ab61875190345400a;
var ms_35bbe423812b462ab61875190345400a;
function processMessage_35bbe423812b462ab61875190345400a(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_35bbe423812b462ab61875190345400a();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_35bbe423812b462ab61875190345400a':
                    minYoMediaPopupAd_35bbe423812b462ab61875190345400a();
                    break;
                case 'restoreYoMediaPopupAd_35bbe423812b462ab61875190345400a':
                    restoreYoMediaPopupAd_35bbe423812b462ab61875190345400a();
                    break;
                case 'setYoMediaExpand_35bbe423812b462ab61875190345400a':
                    setYoMediaExpand_35bbe423812b462ab61875190345400a();
                    break;
                case 'setYoMediaPre_35bbe423812b462ab61875190345400a':
                    setYoMediaPre_35bbe423812b462ab61875190345400a();
                    break;
                case 'closeYoMediaPopupAd_35bbe423812b462ab61875190345400a':
                    closeYoMediaPopupAd_35bbe423812b462ab61875190345400a();
                    break;
                case 'closeYoMediaExpand_35bbe423812b462ab61875190345400a':
                    closeYoMediaExpand_35bbe423812b462ab61875190345400a();
                    break;
                case 'impressionTrackingYomedia_35bbe423812b462ab61875190345400a':
                    impressionTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'viewableTrackingYomedia_35bbe423812b462ab61875190345400a':
                    viewableTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'clickTrackingYomedia_35bbe423812b462ab61875190345400a':
                    clickTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'clickTracking3rdYomedia_35bbe423812b462ab61875190345400a':
                    clickTracking3rdYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'startTrackingYomedia_35bbe423812b462ab61875190345400a':
                    startTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'firstQuartileTrackingYomedia_35bbe423812b462ab61875190345400a':
                    firstQuartileTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'midpointTrackingYomedia_35bbe423812b462ab61875190345400a':
                    midpointTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'thirdQuartileTrackingYomedia_35bbe423812b462ab61875190345400a':
                    thirdQuartileTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
                case 'completeTrackingYomedia_35bbe423812b462ab61875190345400a':
                    completeTrackingYomedia_35bbe423812b462ab61875190345400a();
                    break;
            }
            
        }
    } catch(error){}
}

function isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}