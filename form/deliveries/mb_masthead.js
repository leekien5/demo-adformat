getTrackingYomedia('');
var advId_d05d05051d9b48ad9451562f5edac04f = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_d05d05051d9b48ad9451562f5edac04f = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_d05d05051d9b48ad9451562f5edac04f = '5565e302fb2e489cae28103f6c66db12';
var chanId_d05d05051d9b48ad9451562f5edac04f = '3d58e13cbef3493682fe6107ac13e262';
var placementId_d05d05051d9b48ad9451562f5edac04f = 'd05d05051d9b48ad9451562f5edac04f';

//uuid: 95cffcb9c10117479c56c215d5310af5
function getTrackingYomedia(url) {
	(new Image).src = url;
}

var yomediaId_d05d05051d9b48ad9451562f5edac04f = 'wrapper-mobile-masthead-d05d05051d9b48ad9451562f5edac04f';
var yomediaPortraitId_d05d05051d9b48ad9451562f5edac04f = 'yomedia-mobile-portrait-masthead-d05d05051d9b48ad9451562f5edac04f';
var yomediaLandscapeId_d05d05051d9b48ad9451562f5edac04f = 'yomedia-mobile-landscape-masthead-d05d05051d9b48ad9451562f5edac04f';
var positionInsert_d05d05051d9b48ad9451562f5edac04f = '';
var positionType_d05d05051d9b48ad9451562f5edac04f = '';
var positionName_d05d05051d9b48ad9451562f5edac04f = '';
var positionIndex_d05d05051d9b48ad9451562f5edac04f = '';

var Iframe_width = parseInt('480');
var Iframe_height = parseInt('270');
var ratio = 1.8;    

function showBannerYomedia_d05d05051d9b48ad9451562f5edac04f(s) {
    if (document.getElementById(yomediaId_d05d05051d9b48ad9451562f5edac04f)) {
        return false;
    }
    var mainContain;
    if (positionInsert_d05d05051d9b48ad9451562f5edac04f === '') {
        positionInsert_d05d05051d9b48ad9451562f5edac04f = 'after';
    }
    if (positionType_d05d05051d9b48ad9451562f5edac04f === '') {
        positionType_d05d05051d9b48ad9451562f5edac04f = 'id';
    }
    if (positionType_d05d05051d9b48ad9451562f5edac04f === 'class') {
        if (positionIndex_d05d05051d9b48ad9451562f5edac04f === '') {
            positionIndex_d05d05051d9b48ad9451562f5edac04f = 0;
        } else {
            positionIndex_d05d05051d9b48ad9451562f5edac04f = parseInt(positionIndex_d05d05051d9b48ad9451562f5edac04f);
        }
        mainContain = document.getElementsByClassName(positionName_d05d05051d9b48ad9451562f5edac04f)[positionIndex_d05d05051d9b48ad9451562f5edac04f];        
    } else {
        mainContain = document.getElementById(positionName_d05d05051d9b48ad9451562f5edac04f);
    }
    if (!mainContain) {
        positionInsert_d05d05051d9b48ad9451562f5edac04f = 'after';
        mainContain =  document.currentScript || (function() {
            var script = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=d05d05051d9b48ad9451562f5edac04f") && (script = a)
            });
            return script;
        })();
    }
    var domWrapper = document.createElement('div');
    domWrapper.setAttribute('id', yomediaId_d05d05051d9b48ad9451562f5edac04f);
    domWrapper.style.cssText = 'display: block; overflow: hidden;background: transparent; width: 100%; right: 0px; left: 0px; padding: 0px; position: reletive; border: 0;';

    var portraitBanner = document.createElement('iframe');
    var clickTag = encodeURIComponent(getClickTagYomedia_d05d05051d9b48ad9451562f5edac04f());

    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get('b');

    if(bannerURL){
        creative_src = `https://demo.yomedia.vn/${bannerURL}?pid=d05d05051d9b48ad9451562f5edac04f&aid=6f4dcddae70e4dc3977e34c341727fba&fid=1f97d1e992ff495589e97eb0571f54bb&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=${clickTag}`;
        portraitBanner.setAttribute('src', creative_src);
        portraitBanner.setAttribute('scrolling','no');
        portraitBanner.setAttribute('id', yomediaPortraitId_d05d05051d9b48ad9451562f5edac04f);
        portraitBanner.setAttribute('allowFullScreen', '');
        portraitBanner.style.cssText = 'left:0px; right:0px; margin: 0px auto; display:block; overflow: hidden; border: 0;';
        
        domWrapper.appendChild(portraitBanner);

        switch (positionInsert_d05d05051d9b48ad9451562f5edac04f) {
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
                    if (!document.getElementById(yomediaId_d05d05051d9b48ad9451562f5edac04f)) {
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
        resizeYomedia_d05d05051d9b48ad9451562f5edac04f();
        impressionTrackingYomedia_d05d05051d9b48ad9451562f5edac04f();
    }
}

function getRatioIframeYomedia_d05d05051d9b48ad9451562f5edac04f(){
    ratio = Iframe_width/Iframe_height;
}

function resizeYomedia_d05d05051d9b48ad9451562f5edac04f(){
    getRatioIframeYomedia_d05d05051d9b48ad9451562f5edac04f();
    var portraitBanner = document.getElementById(yomediaPortraitId_d05d05051d9b48ad9451562f5edac04f);
    if (portraitBanner) {
        portraitBanner.setAttribute('style','left:0px; right:0px;width:100%;height:'+(window.innerWidth/ratio)+'px; display:block; overflow: hidden; border: 0;');
    }
}

addAnEventListener_d05d05051d9b48ad9451562f5edac04f(window,'resize',function(){
    resizeYomedia_d05d05051d9b48ad9451562f5edac04f();
});

function rotateYomedia_d05d05051d9b48ad9451562f5edac04f() {
    var portraitBanner = document.getElementById(yomediaPortraitId_d05d05051d9b48ad9451562f5edac04f);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_d05d05051d9b48ad9451562f5edac04f);

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

function closeYoMediaPopupAd_d05d05051d9b48ad9451562f5edac04f() {
    var d = document.getElementById(yomediaId_d05d05051d9b48ad9451562f5edac04f);
    easingYomedia_d05d05051d9b48ad9451562f5edac04f(d, 0);
}

function easingYomedia_d05d05051d9b48ad9451562f5edac04f(e, n) {
    if (!e) return;
    var pos = e.clientHeight;
    var change = n - pos;
    var total = change > 0 ? pos + Math.ceil((change / 5)) : pos + Math.floor((change / 5));
    e.style.height = total + "px";
    if (total == 0) {
        e.remove();
    }
    function r() {
        easingYomedia_d05d05051d9b48ad9451562f5edac04f(e, n);
    }
    
    n = n > 0 ? Math.ceil(n) : Math.floor(n);
    if(change == 0) {
        clearTimeout(timer);
        return;
    }
    timer = setTimeout(r, 15);
}

function viewBannerYomedia_d05d05051d9b48ad9451562f5edac04f() {
    var domWrapper = document.getElementById(yomediaPortraitId_d05d05051d9b48ad9451562f5edac04f);
    if (domWrapper) {
        if (viewFullBannerYomedia_d05d05051d9b48ad9451562f5edac04f(domWrapper)) {
            sendMessageToIframe_d05d05051d9b48ad9451562f5edac04f('yomedia_in_banner_d05d05051d9b48ad9451562f5edac04f');
        } else {
            sendMessageToIframe_d05d05051d9b48ad9451562f5edac04f('yomedia_out_banner_d05d05051d9b48ad9451562f5edac04f');
        }
        if (viewHalfBannerYomedia_d05d05051d9b48ad9451562f5edac04f(domWrapper)) {
            sendMessageToIframe_d05d05051d9b48ad9451562f5edac04f('yomedia_in_half_banner_d05d05051d9b48ad9451562f5edac04f');
        } else {
            sendMessageToIframe_d05d05051d9b48ad9451562f5edac04f('yomedia_out_half_banner_d05d05051d9b48ad9451562f5edac04f');
        }
    }    
}

function sendMessageToIframe_d05d05051d9b48ad9451562f5edac04f($message) {
    var banner = document.getElementById(yomediaPortraitId_d05d05051d9b48ad9451562f5edac04f);
    banner.contentWindow.postMessage($message, '*'); 
}

var trackingViewable_d05d05051d9b48ad9451562f5edac04f = false, interval_d05d05051d9b48ad9451562f5edac04f = null, timeTrackingViewable_d05d05051d9b48ad9451562f5edac04f = 2000;

function viewableBannerYomedia_d05d05051d9b48ad9451562f5edac04f(event) {
    if (!trackingViewable_d05d05051d9b48ad9451562f5edac04f) {
        if (viewHalfBannerYomedia_d05d05051d9b48ad9451562f5edac04f(this)) {
            if (interval_d05d05051d9b48ad9451562f5edac04f === null) {
                var time = 0;
                interval_d05d05051d9b48ad9451562f5edac04f = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_d05d05051d9b48ad9451562f5edac04f) {
                        if (!trackingViewable_d05d05051d9b48ad9451562f5edac04f) {
                            viewableTrackingYomedia_d05d05051d9b48ad9451562f5edac04f();
                            trackingViewable_d05d05051d9b48ad9451562f5edac04f = true;
                            clearInterval(interval_d05d05051d9b48ad9451562f5edac04f);
                            interval_d05d05051d9b48ad9451562f5edac04f = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_d05d05051d9b48ad9451562f5edac04f()
        }
    }
}

function viewableBySzieBannerYomedia_d05d05051d9b48ad9451562f5edac04f(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_d05d05051d9b48ad9451562f5edac04f) {
        var rect = getClientRectBannerYomedia_d05d05051d9b48ad9451562f5edac04f(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_d05d05051d9b48ad9451562f5edac04f === null) {
                var time = 0;
                interval_d05d05051d9b48ad9451562f5edac04f = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_d05d05051d9b48ad9451562f5edac04f) {
                        if (!trackingViewable_d05d05051d9b48ad9451562f5edac04f) {
                            viewableTrackingYomedia_d05d05051d9b48ad9451562f5edac04f();
                            trackingViewable_d05d05051d9b48ad9451562f5edac04f = true;
                            clearInterval(interval_d05d05051d9b48ad9451562f5edac04f);
                            interval_d05d05051d9b48ad9451562f5edac04f = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_d05d05051d9b48ad9451562f5edac04f()
        }
    }
}

function destroyViewableBannerYomedia_d05d05051d9b48ad9451562f5edac04f() {
    if (interval_d05d05051d9b48ad9451562f5edac04f !== null) {
        clearInterval(interval_d05d05051d9b48ad9451562f5edac04f);
        interval_d05d05051d9b48ad9451562f5edac04f = null;
    }
}

function viewHalfBannerYomedia_d05d05051d9b48ad9451562f5edac04f(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_d05d05051d9b48ad9451562f5edac04f(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_d05d05051d9b48ad9451562f5edac04f(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_d05d05051d9b48ad9451562f5edac04f(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_d05d05051d9b48ad9451562f5edac04f(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_d05d05051d9b48ad9451562f5edac04f(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_d05d05051d9b48ad9451562f5edac04f() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
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

function getOffsetYYomedia_d05d05051d9b48ad9451562f5edac04f(obj) {
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

function getClientRectBannerYomedia_d05d05051d9b48ad9451562f5edac04f(obj) {
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
showBannerYomedia_d05d05051d9b48ad9451562f5edac04f(1);
window.onload = function() {
    viewBannerYomedia_d05d05051d9b48ad9451562f5edac04f();
};
if (window!=window.top) {
    parent.document.addEventListener("scroll", viewBannerYomedia_d05d05051d9b48ad9451562f5edac04f, true);
    parent.document.addEventListener("touchmove", viewBannerYomedia_d05d05051d9b48ad9451562f5edac04f, true);
} else {
    document.addEventListener("scroll", viewBannerYomedia_d05d05051d9b48ad9451562f5edac04f, false);
    document.addEventListener("touchmove", viewBannerYomedia_d05d05051d9b48ad9451562f5edac04f, false);
}

function impressionTrackingYomedia_d05d05051d9b48ad9451562f5edac04f() {
}

function viewableTrackingYomedia_d05d05051d9b48ad9451562f5edac04f() {
}

function clickTrackingYomedia_d05d05051d9b48ad9451562f5edac04f() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
}

function startTrackingYomedia_d05d05051d9b48ad9451562f5edac04f(){
}

function firstQuartileTrackingYomedia_d05d05051d9b48ad9451562f5edac04f(){
}

function midpointTrackingYomedia_d05d05051d9b48ad9451562f5edac04f(){
}

function thirdQuartileTrackingYomedia_d05d05051d9b48ad9451562f5edac04f(){
}

function completeTrackingYomedia_d05d05051d9b48ad9451562f5edac04f(){
}

function getClickTagYomedia_d05d05051d9b48ad9451562f5edac04f() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_d05d05051d9b48ad9451562f5edac04f(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_d05d05051d9b48ad9451562f5edac04f(event){
    try {
        fn_d05d05051d9b48ad9451562f5edac04f = event.data;
        if ('string' == typeof fn_d05d05051d9b48ad9451562f5edac04f &&  fn_d05d05051d9b48ad9451562f5edac04f.toLowerCase().indexOf('yomedia') >= 0 && fn_d05d05051d9b48ad9451562f5edac04f.indexOf('_d05d05051d9b48ad9451562f5edac04f();') >= 0 ) {
            eval(fn_d05d05051d9b48ad9451562f5edac04f);
        }
    }
    catch(err) {}
}

var fn_d05d05051d9b48ad9451562f5edac04f='';
addAnEventListener_d05d05051d9b48ad9451562f5edac04f(window,'message',iFrameListener_d05d05051d9b48ad9451562f5edac04f);

getTrackingYomedia('');
