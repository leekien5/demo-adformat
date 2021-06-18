getTrackingYomedia('');
var advId_82e237b1f272486587de2dbd5c9478c0 = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_82e237b1f272486587de2dbd5c9478c0 = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_82e237b1f272486587de2dbd5c9478c0 = '5565e302fb2e489cae28103f6c66db12';
var chanId_82e237b1f272486587de2dbd5c9478c0 = '3d58e13cbef3493682fe6107ac13e262';
var placementId_82e237b1f272486587de2dbd5c9478c0 = '82e237b1f272486587de2dbd5c9478c0';

//uuid: 95cffcb9c10117479c56c215d5310af5
function getTrackingYomedia(bannerURL) {
	(new Image).src = bannerURL;
}

var yomediaId_82e237b1f272486587de2dbd5c9478c0 = 'yomedia-billboard-itvc-82e237b1f272486587de2dbd5c9478c0';
var positionInsert_82e237b1f272486587de2dbd5c9478c0 = '';
var positionType_82e237b1f272486587de2dbd5c9478c0 = '';
var positionName_82e237b1f272486587de2dbd5c9478c0 = '';
var positionIndex_82e237b1f272486587de2dbd5c9478c0 = '';

function showBannerYomedia_82e237b1f272486587de2dbd5c9478c0(s) {
    if (document.getElementById(yomediaId_82e237b1f272486587de2dbd5c9478c0)) {
        return false;
    }
    var banner = document.createElement('iframe');
    var clickTag = encodeURIComponent(getClickTagYomedia_82e237b1f272486587de2dbd5c9478c0());

    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');
    if(domainURL == null) {
        domainURL = 'demo';
    }
    if(bannerURL ){
        creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=82e237b1f272486587de2dbd5c9478c0&clk=${clickTag}`;
        banner.setAttribute('src', creative_src);
        banner.setAttribute('id', yomediaId_82e237b1f272486587de2dbd5c9478c0);
        banner.setAttribute('allowFullScreen', '');
        banner.style.cssText = 'left:0px;right:0px;margin:10px auto;display:block;line-height:normal;overflow:hidden;position:relative;border:0;width:970px !important;height:250px !important;';
        banner.width = '970';
        banner.height = '250';
        var mainContain;
        if (positionInsert_82e237b1f272486587de2dbd5c9478c0 === '') {
            positionInsert_82e237b1f272486587de2dbd5c9478c0 = 'after';
        }
        if (positionType_82e237b1f272486587de2dbd5c9478c0 === '') {
            positionType_82e237b1f272486587de2dbd5c9478c0 = 'id';
        }
        if (positionType_82e237b1f272486587de2dbd5c9478c0 === 'class') {
            if (positionIndex_82e237b1f272486587de2dbd5c9478c0 === '') {
                positionIndex_82e237b1f272486587de2dbd5c9478c0 = 0;
            } else {
                positionIndex_82e237b1f272486587de2dbd5c9478c0 = parseInt(positionIndex_82e237b1f272486587de2dbd5c9478c0);
            }        
            mainContain = document.getElementsByClassName(positionName_82e237b1f272486587de2dbd5c9478c0)[positionIndex_82e237b1f272486587de2dbd5c9478c0];
        } else {
            mainContain = document.getElementById(positionName_82e237b1f272486587de2dbd5c9478c0);
        }
        if (!mainContain) {
            mainContain =  document.currentScript || (function() {
                var script = null;
                Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                    null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=82e237b1f272486587de2dbd5c9478c0") && (script = a)
                });
                return script;
            })();
        }
        switch (positionInsert_82e237b1f272486587de2dbd5c9478c0) {
            case 'before':
                mainContain.parentNode.insertBefore(banner, mainContain);
                break;
            case 'first_child':
                var firstChild = mainContain.firstChild;
                if (firstChild) {
                    mainContain.insertBefore(banner, firstChild);
                } else {
                    mainContain.appendChild(banner);
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
                            mainContain.childNodes[eleToInsert].parentNode.insertBefore(banner, mainContain.childNodes[eleToInsert].nextSibling);
                            break;
                        }
                    }
                    if (!document.getElementById(yomediaId_82e237b1f272486587de2dbd5c9478c0)) {
                        mainContain.childNodes[Math.ceil(childNodes.length/2)].parentNode.insertBefore(banner, mainContain.childNodes[Math.ceil(childNodes.length/2)].nextSibling);
                    }
                } else {
                    mainContain.appendChild(banner);
                }
                break;
            case 'last_child':
                mainContain.appendChild(banner);
                break;
            case 'after':
                var nextNode = mainContain.nextSibling;
                if (nextNode) {
                    nextNode.parentNode.insertBefore(banner, nextNode);
                } else {
                    mainContain.parentNode.appendChild(banner);
                }
                break;
            case 'random':
                var childNodes = mainContain.childNodes;
                if ( childNodes.length > 0) {
                    var randomIndex= Math.floor(Math.random() * childNodes.length);
                    mainContain.insertBefore(banner, mainContain.childNodes[randomIndex]);
                } else {
                    mainContain.appendChild(banner);
                }
                break;
            default:
                document.body.appendChild(banner);
                break;
        }
    }else{
        alert('Empty banner, please add one!');
    }
    impressionTrackingYomedia_82e237b1f272486587de2dbd5c9478c0();
    banner.addEventListener("load", viewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0.bind(banner), false);
    if (window!=window.top) {
        parent.document.addEventListener("scroll", viewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0.bind(banner), false);
    } else {
        document.addEventListener("scroll", viewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0.bind(banner), false);
    }
}
function closeYoMediaPopupAd_82e237b1f272486587de2dbd5c9478c0() {
    var d = document.getElementById(yomediaId_82e237b1f272486587de2dbd5c9478c0);
    easingYomedia_82e237b1f272486587de2dbd5c9478c0(d, 0);
}
function easingYomedia_82e237b1f272486587de2dbd5c9478c0(e, n) {
    var pos = e.clientHeight;
    var change = n - pos;
    var total = change > 0 ? pos + Math.ceil((change / 2)) : pos + Math.floor((change / 2));
    e.style.height = total + "px";
    function r() {
        easingYomedia_82e237b1f272486587de2dbd5c9478c0(e, n);
    }
    
    n = n > 0 ? Math.ceil(n) : Math.floor(n);
    if(change == 0) {
        clearTimeout(timer);
        return;
    }
    timer = setTimeout(r, 100);
}

function viewBannerYomedia_82e237b1f272486587de2dbd5c9478c0() {
    var domWrapper = document.getElementById(yomediaId_82e237b1f272486587de2dbd5c9478c0);
    if (domWrapper) {
        if (viewFullBannerYomedia_82e237b1f272486587de2dbd5c9478c0(domWrapper)) {
            sendMessageToIframe_82e237b1f272486587de2dbd5c9478c0('yomedia_in_banner_82e237b1f272486587de2dbd5c9478c0');
        } else {
            sendMessageToIframe_82e237b1f272486587de2dbd5c9478c0('yomedia_out_banner_82e237b1f272486587de2dbd5c9478c0');
        }
        if (viewHalfBannerYomedia_82e237b1f272486587de2dbd5c9478c0(domWrapper)) {
            sendMessageToIframe_82e237b1f272486587de2dbd5c9478c0('yomedia_in_half_banner_82e237b1f272486587de2dbd5c9478c0');
        } else {
            sendMessageToIframe_82e237b1f272486587de2dbd5c9478c0('yomedia_out_half_banner_82e237b1f272486587de2dbd5c9478c0');
        }
    }    
}

function sendMessageToIframe_82e237b1f272486587de2dbd5c9478c0($message) {
    var banner = document.getElementById(yomediaId_82e237b1f272486587de2dbd5c9478c0);
    banner.contentWindow.postMessage($message, '*'); 
}

var trackingViewable_82e237b1f272486587de2dbd5c9478c0 = false, interval_82e237b1f272486587de2dbd5c9478c0 = null, timeTrackingViewable_82e237b1f272486587de2dbd5c9478c0 = 2000;

function viewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0(event) {
    if (!trackingViewable_82e237b1f272486587de2dbd5c9478c0) {
        if (viewHalfBannerYomedia_82e237b1f272486587de2dbd5c9478c0(this)) {
            if (interval_82e237b1f272486587de2dbd5c9478c0 === null) {
                var time = 0;
                interval_82e237b1f272486587de2dbd5c9478c0 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_82e237b1f272486587de2dbd5c9478c0) {
                        if (!trackingViewable_82e237b1f272486587de2dbd5c9478c0) {
                            viewableTrackingYomedia_82e237b1f272486587de2dbd5c9478c0();
                            trackingViewable_82e237b1f272486587de2dbd5c9478c0 = true;
                            clearInterval(interval_82e237b1f272486587de2dbd5c9478c0);
                            interval_82e237b1f272486587de2dbd5c9478c0 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0()
        }
    }
}

function viewableBySzieBannerYomedia_82e237b1f272486587de2dbd5c9478c0(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_82e237b1f272486587de2dbd5c9478c0) {
        var rect = getClientRectBannerYomedia_82e237b1f272486587de2dbd5c9478c0(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_82e237b1f272486587de2dbd5c9478c0 === null) {
                var time = 0;
                interval_82e237b1f272486587de2dbd5c9478c0 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_82e237b1f272486587de2dbd5c9478c0) {
                        if (!trackingViewable_82e237b1f272486587de2dbd5c9478c0) {
                            viewableTrackingYomedia_82e237b1f272486587de2dbd5c9478c0();
                            trackingViewable_82e237b1f272486587de2dbd5c9478c0 = true;
                            clearInterval(interval_82e237b1f272486587de2dbd5c9478c0);
                            interval_82e237b1f272486587de2dbd5c9478c0 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0()
        }
    }
}

function destroyViewableBannerYomedia_82e237b1f272486587de2dbd5c9478c0() {
    if (interval_82e237b1f272486587de2dbd5c9478c0 !== null) {
        clearInterval(interval_82e237b1f272486587de2dbd5c9478c0);
        interval_82e237b1f272486587de2dbd5c9478c0 = null;
    }
}

function viewHalfBannerYomedia_82e237b1f272486587de2dbd5c9478c0(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_82e237b1f272486587de2dbd5c9478c0(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_82e237b1f272486587de2dbd5c9478c0(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_82e237b1f272486587de2dbd5c9478c0(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_82e237b1f272486587de2dbd5c9478c0(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_82e237b1f272486587de2dbd5c9478c0(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_82e237b1f272486587de2dbd5c9478c0() {
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

function getOffsetYYomedia_82e237b1f272486587de2dbd5c9478c0(obj) {
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

function getClientRectBannerYomedia_82e237b1f272486587de2dbd5c9478c0(obj) {
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
}showBannerYomedia_82e237b1f272486587de2dbd5c9478c0(1);
window.onload = function() {
    viewBannerYomedia_82e237b1f272486587de2dbd5c9478c0();
};
if (window!=window.top) {
    parent.document.addEventListener("scroll", viewBannerYomedia_82e237b1f272486587de2dbd5c9478c0, false);
} else {
    document.addEventListener("scroll", viewBannerYomedia_82e237b1f272486587de2dbd5c9478c0, false);
}
function impressionTrackingYomedia_82e237b1f272486587de2dbd5c9478c0() {
    getTrackingYomedia('');
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    }
    getTrackingYomedia('');
}

function viewableTrackingYomedia_82e237b1f272486587de2dbd5c9478c0() {
    getTrackingYomedia('');
}

function clickTrackingYomedia_82e237b1f272486587de2dbd5c9478c0() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
}

function startTrackingYomedia_82e237b1f272486587de2dbd5c9478c0(){
    getTrackingYomedia('');
}

function firstQuartileTrackingYomedia_82e237b1f272486587de2dbd5c9478c0(){
    getTrackingYomedia('');
}

function midpointTrackingYomedia_82e237b1f272486587de2dbd5c9478c0(){
    getTrackingYomedia('');
}

function thirdQuartileTrackingYomedia_82e237b1f272486587de2dbd5c9478c0(){
    getTrackingYomedia('');
}

function completeTrackingYomedia_82e237b1f272486587de2dbd5c9478c0(){
    getTrackingYomedia('');
}

function getClickTagYomedia_82e237b1f272486587de2dbd5c9478c0() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_82e237b1f272486587de2dbd5c9478c0(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_82e237b1f272486587de2dbd5c9478c0(event){
    try {
        fn_82e237b1f272486587de2dbd5c9478c0 = event.data;
        if ('string' == typeof fn_82e237b1f272486587de2dbd5c9478c0 &&  fn_82e237b1f272486587de2dbd5c9478c0.toLowerCase().indexOf('yomedia') >= 0 && fn_82e237b1f272486587de2dbd5c9478c0.indexOf('_82e237b1f272486587de2dbd5c9478c0();') >= 0 ) {
            eval(fn_82e237b1f272486587de2dbd5c9478c0);
        }
    }
    catch(err) {}
}

var fn_82e237b1f272486587de2dbd5c9478c0='';
addAnEventListener_82e237b1f272486587de2dbd5c9478c0(window,'message',iFrameListener_82e237b1f272486587de2dbd5c9478c0);
// http