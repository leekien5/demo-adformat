/* MOBILE MASTHEAD */
var advId_7dee1a8924b1445ab081191f971c0ad2 = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_7dee1a8924b1445ab081191f971c0ad2 = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_7dee1a8924b1445ab081191f971c0ad2 = '5565e302fb2e489cae28103f6c66db12';
var chanId_7dee1a8924b1445ab081191f971c0ad2 = '3d58e13cbef3493682fe6107ac13e262';
var placementId_7dee1a8924b1445ab081191f971c0ad2 = '7dee1a8924b1445ab081191f971c0ad2';

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

var yomediaId_7dee1a8924b1445ab081191f971c0ad2 = 'wrapper-mobile-masthead-7dee1a8924b1445ab081191f971c0ad2';
var yomediaPortraitId_7dee1a8924b1445ab081191f971c0ad2 = 'yomedia-mobile-portrait-masthead-7dee1a8924b1445ab081191f971c0ad2';
var yomediaLandscapeId_7dee1a8924b1445ab081191f971c0ad2 = 'yomedia-mobile-landscape-masthead-7dee1a8924b1445ab081191f971c0ad2';
var positionInsert_7dee1a8924b1445ab081191f971c0ad2 = '';
var positionType_7dee1a8924b1445ab081191f971c0ad2 = '';
var positionName_7dee1a8924b1445ab081191f971c0ad2 = '';
var positionIndex_7dee1a8924b1445ab081191f971c0ad2 = '';

var w_7dee1a8924b1445ab081191f971c0ad2 = '480';
var h_7dee1a8924b1445ab081191f971c0ad2 = '270';
var viewWidth_7dee1a8924b1445ab081191f971c0ad2 = 480;
var viewHeight_7dee1a8924b1445ab081191f971c0ad2 = 270;
var ratio_7dee1a8924b1445ab081191f971c0ad2 = 480/270;    
if (w_7dee1a8924b1445ab081191f971c0ad2) {
    viewWidth_7dee1a8924b1445ab081191f971c0ad2 = parseInt(w_7dee1a8924b1445ab081191f971c0ad2);
} 
if (h_7dee1a8924b1445ab081191f971c0ad2) {
    viewHeight_7dee1a8924b1445ab081191f971c0ad2 = parseInt(h_7dee1a8924b1445ab081191f971c0ad2);
} 

if (viewWidth_7dee1a8924b1445ab081191f971c0ad2 != 0 && viewHeight_7dee1a8924b1445ab081191f971c0ad2 != 0) {
    ratio_7dee1a8924b1445ab081191f971c0ad2 = viewWidth_7dee1a8924b1445ab081191f971c0ad2/viewHeight_7dee1a8924b1445ab081191f971c0ad2;
}
var maxWidth_7dee1a8924b1445ab081191f971c0ad2 = screen.width;
var maxHeight_7dee1a8924b1445ab081191f971c0ad2 = maxWidth_7dee1a8924b1445ab081191f971c0ad2 / ratio_7dee1a8924b1445ab081191f971c0ad2;

function showBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(s) {
    let show_logo = true;
    let show_close_button = false;
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
    if (domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    if (document.getElementById(yomediaId_7dee1a8924b1445ab081191f971c0ad2)) {
        return false;
    }
    var mainContain;
    if (positionInsert_7dee1a8924b1445ab081191f971c0ad2 === '') {
        positionInsert_7dee1a8924b1445ab081191f971c0ad2 = 'after';
    }
    if (positionType_7dee1a8924b1445ab081191f971c0ad2 === '') {
        positionType_7dee1a8924b1445ab081191f971c0ad2 = 'id';
    }
    if (positionType_7dee1a8924b1445ab081191f971c0ad2 === 'class') {
        if (positionIndex_7dee1a8924b1445ab081191f971c0ad2 === '') {
            positionIndex_7dee1a8924b1445ab081191f971c0ad2 = 0;
        } else {
            positionIndex_7dee1a8924b1445ab081191f971c0ad2 = parseInt(positionIndex_7dee1a8924b1445ab081191f971c0ad2);
        }
        mainContain = document.getElementsByClassName(positionName_7dee1a8924b1445ab081191f971c0ad2)[positionIndex_7dee1a8924b1445ab081191f971c0ad2];        
    } else {
        mainContain = document.getElementById(positionName_7dee1a8924b1445ab081191f971c0ad2);
    }
    if (!mainContain) {
        positionInsert_7dee1a8924b1445ab081191f971c0ad2 = 'after';
        mainContain =  document.currentScript || (function() {
            var script = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=7dee1a8924b1445ab081191f971c0ad2") && (script = a)
            });
            return script;
        })();
    }
    if (bannerURL) {
        log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);
        var domWrapper = document.createElement('div');
        domWrapper.setAttribute('id', yomediaId_7dee1a8924b1445ab081191f971c0ad2);
        domWrapper.style.cssText = 'display: block; overflow: hidden; background: transparent; width: 100%; height: ' + viewHeight_7dee1a8924b1445ab081191f971c0ad2 + 'px; right: 0px; left: 0px; padding: 0px; position: relative; border: 0; max-width: ' + maxWidth_7dee1a8924b1445ab081191f971c0ad2 + 'px; left: 0px; right: 0px; margin: auto; transition: height 0.4s ease-in;';
    
        switch (positionInsert_7dee1a8924b1445ab081191f971c0ad2) {
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
                    if (!document.getElementById(yomediaId_7dee1a8924b1445ab081191f971c0ad2)) {
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
        viewWidth_7dee1a8924b1445ab081191f971c0ad2 = domWrapper.clientWidth;   
        viewHeight_7dee1a8924b1445ab081191f971c0ad2 = Math.ceil(domWrapper.clientWidth/ratio_7dee1a8924b1445ab081191f971c0ad2); 
        var portraitBanner = document.createElement('iframe');
        var clickTag = encodeURIComponent(getClickTagYomedia_7dee1a8924b1445ab081191f971c0ad2());
        var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=7dee1a8924b1445ab081191f971c0ad2&aid=6b6be38d469543eaa6162caaa49f4960&fid=bfefe229810d4a27ac0a423cc675b236&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
        portraitBanner.setAttribute('src', creative_src);
        portraitBanner.setAttribute('scrolling','no');
        portraitBanner.setAttribute('id', yomediaPortraitId_7dee1a8924b1445ab081191f971c0ad2);
        portraitBanner.setAttribute('allowFullScreen', '');
        
        portraitBanner.style.cssText = 'left:0px; right:0px; margin: 0px auto; display:block; overflow: hidden; border: 0; width: ' + viewWidth_7dee1a8924b1445ab081191f971c0ad2 + 'px; height: ' + viewHeight_7dee1a8924b1445ab081191f971c0ad2 + 'px; max-width: ' + maxWidth_7dee1a8924b1445ab081191f971c0ad2 + 'px; max-height: ' + maxHeight_7dee1a8924b1445ab081191f971c0ad2 + 'px; min-width: 300px;';
        
        domWrapper.appendChild(portraitBanner);
        
        resizeYomedia_7dee1a8924b1445ab081191f971c0ad2();
    
        if (show_close_button) {
            const btn_close = document.createElement('div');
            btn_close.setAttribute('id', `yo-close-7dee1a8924b1445ab081191f971c0ad2`);
            btn_close.setAttribute('style', `width: 34px !important; height: 34px !important; position: absolute; top: 0px !important; right: 0px !important; z-index: 9999 !important;`);
            let close_image = new Image();
            close_image.src = 'https://media.yomedia.vn/images/btn_close.png';
            close_image.setAttribute('style', 'width: 100% !important; height: 100% !important;')
            btn_close.appendChild(close_image);
            domWrapper.appendChild(btn_close);
            addAnEventListener_7dee1a8924b1445ab081191f971c0ad2(close_image, 'click', function() {
                closeYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2();
            });
        }
    
        if (show_logo) {
            const logo = document.createElement('div');
            logo.setAttribute('style', `position: absolute; display: inline-block; height: 25px; cursor: pointer; z-index: 9999 !important; left: 0px !important; top: 0px !important;`);
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
    }

    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            resizeYomedia_7dee1a8924b1445ab081191f971c0ad2();
        }
    }
    setTimeout(function() {
        resizeYomedia_7dee1a8924b1445ab081191f971c0ad2();
    }, 2000);
    addAnEventListener_7dee1a8924b1445ab081191f971c0ad2(portraitBanner, 'load', function() {
        isVisiabilityYomedia_7dee1a8924b1445ab081191f971c0ad2(portraitBanner);
    });
    impressionTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
    
}

function getRatioIframeYomedia_7dee1a8924b1445ab081191f971c0ad2(){
    ratio = Iframe_width/Iframe_height;
}

function getScaleValue_7dee1a8924b1445ab081191f971c0ad2(){
    return parseInt(document.getElementById('wrapper-mobile-masthead-7dee1a8924b1445ab081191f971c0ad2').clientWidth) / screen.width;
}

function resizeYomedia_7dee1a8924b1445ab081191f971c0ad2(){
    var portraitBanner = document.getElementById(yomediaPortraitId_7dee1a8924b1445ab081191f971c0ad2);
    if (portraitBanner) {
        portraitBanner.style.height = (document.getElementById(yomediaId_7dee1a8924b1445ab081191f971c0ad2).clientWidth/ratio_7dee1a8924b1445ab081191f971c0ad2) + 'px';
        portraitBanner.style.width = document.getElementById(yomediaId_7dee1a8924b1445ab081191f971c0ad2).clientWidth + 'px';
    }
}

addAnEventListener_7dee1a8924b1445ab081191f971c0ad2(window,'resize',function(){
    resizeYomedia_7dee1a8924b1445ab081191f971c0ad2();
});

function rotateYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    var portraitBanner = document.getElementById(yomediaPortraitId_7dee1a8924b1445ab081191f971c0ad2);
    var landscapeBanner = document.getElementById(yomediaLandscapeId_7dee1a8924b1445ab081191f971c0ad2);

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

function closeYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2() {
    var domWrapper = document.getElementById(yomediaId_7dee1a8924b1445ab081191f971c0ad2);
    if (domWrapper) {
        domWrapper.style.height = '0px';
        setTimeout(function() {
            domWrapper.remove();
        }, 500);
    }
}

function easingYomedia_7dee1a8924b1445ab081191f971c0ad2(e, n) {
    if (!e) return;
    var pos = e.clientHeight;
    var change = n - pos;
    var total = change > 0 ? pos + Math.ceil((change / 5)) : pos + Math.floor((change / 5));
    e.style.height = total + "px";
    if (total == 0) {
        e.remove();
    }
    function r() {
        easingYomedia_7dee1a8924b1445ab081191f971c0ad2(e, n);
    }
    
    n = n > 0 ? Math.ceil(n) : Math.floor(n);
    if(change == 0) {
        clearTimeout(timer);
        return;
    }
    timer = setTimeout(r, 15);
}

function viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    var domWrapper = document.getElementById(yomediaPortraitId_7dee1a8924b1445ab081191f971c0ad2);
    if (domWrapper) {
        if (viewFullBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(domWrapper)) {
            sendMessageToIframe_7dee1a8924b1445ab081191f971c0ad2('yomedia_in_banner_7dee1a8924b1445ab081191f971c0ad2');
        } else {
            sendMessageToIframe_7dee1a8924b1445ab081191f971c0ad2('yomedia_out_banner_7dee1a8924b1445ab081191f971c0ad2');
        }
        if (viewHalfBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(domWrapper)) {
            sendMessageToIframe_7dee1a8924b1445ab081191f971c0ad2('yomedia_in_half_banner_7dee1a8924b1445ab081191f971c0ad2');
        } else {
            sendMessageToIframe_7dee1a8924b1445ab081191f971c0ad2('yomedia_out_half_banner_7dee1a8924b1445ab081191f971c0ad2');
        }
    }    
}

function sendMessageToIframe_7dee1a8924b1445ab081191f971c0ad2($message) {
    var banner = document.getElementById(yomediaPortraitId_7dee1a8924b1445ab081191f971c0ad2);
    banner.contentWindow.postMessage($message, '*'); 
}

var trackingViewable_7dee1a8924b1445ab081191f971c0ad2 = false, interval_7dee1a8924b1445ab081191f971c0ad2 = null, timeTrackingViewable_7dee1a8924b1445ab081191f971c0ad2 = 1000;

function viewableBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(event) {
    if (!trackingViewable_7dee1a8924b1445ab081191f971c0ad2) {
        if (viewHalfBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(this)) {
            if (interval_7dee1a8924b1445ab081191f971c0ad2 === null) {
                var time = 0;
                interval_7dee1a8924b1445ab081191f971c0ad2 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_7dee1a8924b1445ab081191f971c0ad2) {
                        if (!trackingViewable_7dee1a8924b1445ab081191f971c0ad2) {
                            viewableTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                            trackingViewable_7dee1a8924b1445ab081191f971c0ad2 = true;
                            clearInterval(interval_7dee1a8924b1445ab081191f971c0ad2);
                            interval_7dee1a8924b1445ab081191f971c0ad2 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_7dee1a8924b1445ab081191f971c0ad2()
        }
    }
}

function viewableBySzieBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_7dee1a8924b1445ab081191f971c0ad2) {
        var rect = getClientRectBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_7dee1a8924b1445ab081191f971c0ad2 === null) {
                var time = 0;
                interval_7dee1a8924b1445ab081191f971c0ad2 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_7dee1a8924b1445ab081191f971c0ad2) {
                        if (!trackingViewable_7dee1a8924b1445ab081191f971c0ad2) {
                            viewableTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                            trackingViewable_7dee1a8924b1445ab081191f971c0ad2 = true;
                            clearInterval(interval_7dee1a8924b1445ab081191f971c0ad2);
                            interval_7dee1a8924b1445ab081191f971c0ad2 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_7dee1a8924b1445ab081191f971c0ad2()
        }
    }
}

function destroyViewableBannerYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    if (interval_7dee1a8924b1445ab081191f971c0ad2 !== null) {
        clearInterval(interval_7dee1a8924b1445ab081191f971c0ad2);
        interval_7dee1a8924b1445ab081191f971c0ad2 = null;
    }
}

function viewHalfBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_7dee1a8924b1445ab081191f971c0ad2(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_7dee1a8924b1445ab081191f971c0ad2(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_7dee1a8924b1445ab081191f971c0ad2(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_7dee1a8924b1445ab081191f971c0ad2(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_7dee1a8924b1445ab081191f971c0ad2(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_7dee1a8924b1445ab081191f971c0ad2(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_7dee1a8924b1445ab081191f971c0ad2(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_7dee1a8924b1445ab081191f971c0ad2(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_7dee1a8924b1445ab081191f971c0ad2(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_7dee1a8924b1445ab081191f971c0ad2(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_7dee1a8924b1445ab081191f971c0ad2(wd) {
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

function getOffsetYYomedia_7dee1a8924b1445ab081191f971c0ad2(obj) {
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

function getClientRectBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(obj) {
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
let visibleAdsYomedia_7dee1a8924b1445ab081191f971c0ad2 = null, viewabilityIntervalID_7dee1a8924b1445ab081191f971c0ad2, timerViewability_7dee1a8924b1445ab081191f971c0ad2 = 0, trackedViewability_7dee1a8924b1445ab081191f971c0ad2 = false;
const durationViewability_7dee1a8924b1445ab081191f971c0ad2 = 10;

function isVisiabilityYomedia_7dee1a8924b1445ab081191f971c0ad2(el) {
    if (el) {
        try {
            let thresholdSets_7dee1a8924b1445ab081191f971c0ad2 = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_7dee1a8924b1445ab081191f971c0ad2.push(i/100);
            }
            var adObserverVisiability_7dee1a8924b1445ab081191f971c0ad2 = new IntersectionObserver(intersectionCallback_7dee1a8924b1445ab081191f971c0ad2, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_7dee1a8924b1445ab081191f971c0ad2
            });
            viewabilityIntervalID_7dee1a8924b1445ab081191f971c0ad2 = window.setInterval(function() {
                handleTrackingViewability_7dee1a8924b1445ab081191f971c0ad2(el);
            }, durationViewability_7dee1a8924b1445ab081191f971c0ad2);
            adObserverVisiability_7dee1a8924b1445ab081191f971c0ad2.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_7dee1a8924b1445ab081191f971c0ad2) {
                window.clearInterval(viewabilityIntervalID_7dee1a8924b1445ab081191f971c0ad2);   
            }
        }
    }
}

function intersectionCallback_7dee1a8924b1445ab081191f971c0ad2(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_7dee1a8924b1445ab081191f971c0ad2 = entry.target;
            } else {
                visibleAdsYomedia_7dee1a8924b1445ab081191f971c0ad2 = null;
            }
        } else {
            visibleAdsYomedia_7dee1a8924b1445ab081191f971c0ad2 = null;
        }
    });
}

function handleTrackingViewability_7dee1a8924b1445ab081191f971c0ad2(el) {
    if (visibleAdsYomedia_7dee1a8924b1445ab081191f971c0ad2 !== null && el === visibleAdsYomedia_7dee1a8924b1445ab081191f971c0ad2) {
        timerViewability_7dee1a8924b1445ab081191f971c0ad2 += durationViewability_7dee1a8924b1445ab081191f971c0ad2;
        if (!trackedViewability_7dee1a8924b1445ab081191f971c0ad2 && timerViewability_7dee1a8924b1445ab081191f971c0ad2 >= 1000) {
            trackedViewability_7dee1a8924b1445ab081191f971c0ad2 = true;
            viewableTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
            window.clearInterval(viewabilityIntervalID_7dee1a8924b1445ab081191f971c0ad2);
        }
    } else {
        timerViewability_7dee1a8924b1445ab081191f971c0ad2 = 0;
    }
}
showBannerYomedia_7dee1a8924b1445ab081191f971c0ad2(1);
window.onload = function() {
    viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2();
};
try {
    if (window != parent.parent.window.top) {
        parent.parent.document.addEventListener("scroll", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
        parent.parent.document.addEventListener("touchmove", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
    } else if (window != window.top) {
        parent.document.addEventListener("scroll", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
        parent.document.addEventListener("touchmove", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
    } else {
        document.addEventListener("scroll", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
        document.addEventListener("touchmove", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
    }
} catch(e) {
    document.addEventListener("scroll", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
    document.addEventListener("touchmove", viewBannerYomedia_7dee1a8924b1445ab081191f971c0ad2, false);
}

function impressionTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_7dee1a8924b1445ab081191f971c0ad2 === 'function') {
        _YoImpCallback_7dee1a8924b1445ab081191f971c0ad2();
    }
}

function viewableTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2() {
}

function clickTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2() {
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

function clickThroughYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://yomedia.vn';
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function startTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2(){
}

function firstQuartileTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2(){
}

function midpointTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2(){
}

function thirdQuartileTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2(){
}

function completeTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2(){
}

function getClickTagYomedia_7dee1a8924b1445ab081191f971c0ad2() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_7dee1a8924b1445ab081191f971c0ad2(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_7dee1a8924b1445ab081191f971c0ad2(event){
    try {
        var fn_7dee1a8924b1445ab081191f971c0ad2 = event.data;
        processMessage_7dee1a8924b1445ab081191f971c0ad2(fn_7dee1a8924b1445ab081191f971c0ad2);
    }
    catch(err) {}
}
addAnEventListener_7dee1a8924b1445ab081191f971c0ad2(window,'message',iFrameListener_7dee1a8924b1445ab081191f971c0ad2);

function createTrackingIframe_7dee1a8924b1445ab081191f971c0ad2(id, src) {
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

function getRandom_7dee1a8924b1445ab081191f971c0ad2(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_7dee1a8924b1445ab081191f971c0ad2;
var ms_7dee1a8924b1445ab081191f971c0ad2;
function processMessage_7dee1a8924b1445ab081191f971c0ad2(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_7dee1a8924b1445ab081191f971c0ad2();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2':
                    minYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'restoreYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2':
                    restoreYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'setYoMediaExpand_7dee1a8924b1445ab081191f971c0ad2':
                    setYoMediaExpand_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'setYoMediaPre_7dee1a8924b1445ab081191f971c0ad2':
                    setYoMediaPre_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'closeYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2':
                    closeYoMediaPopupAd_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'closeYoMediaExpand_7dee1a8924b1445ab081191f971c0ad2':
                    closeYoMediaExpand_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'impressionTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    impressionTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'viewableTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    viewableTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'clickTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    clickTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'clickTracking3rdYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    clickTracking3rdYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'startTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    startTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'firstQuartileTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    firstQuartileTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'midpointTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    midpointTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'thirdQuartileTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    thirdQuartileTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
                case 'completeTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2':
                    completeTrackingYomedia_7dee1a8924b1445ab081191f971c0ad2();
                    break;
            }
            
        }
    } catch(error){}
}