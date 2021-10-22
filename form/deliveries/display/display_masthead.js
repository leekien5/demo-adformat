/* DISPLAY MASTHEAD (BILLBOARD)*/
var advId_5b8149ae5b164b2b94ac73f90c67c86f = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_5b8149ae5b164b2b94ac73f90c67c86f = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_5b8149ae5b164b2b94ac73f90c67c86f = '5565e302fb2e489cae28103f6c66db12';
var chanId_5b8149ae5b164b2b94ac73f90c67c86f = '3d58e13cbef3493682fe6107ac13e262';
var placementId_5b8149ae5b164b2b94ac73f90c67c86f = '5b8149ae5b164b2b94ac73f90c67c86f';

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

var yomediaId_5b8149ae5b164b2b94ac73f90c67c86f = 'yomedia-billboard-itvc-5b8149ae5b164b2b94ac73f90c67c86f';
var yomediaBannerId_5b8149ae5b164b2b94ac73f90c67c86f = 'yomedia-billboard-5b8149ae5b164b2b94ac73f90c67c86f';
var positionInsert_5b8149ae5b164b2b94ac73f90c67c86f = '';
var positionType_5b8149ae5b164b2b94ac73f90c67c86f = '';
var positionName_5b8149ae5b164b2b94ac73f90c67c86f = '';
var positionIndex_5b8149ae5b164b2b94ac73f90c67c86f = '';
function showBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(s) {
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

    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }
    let show_logo = true;
    let show_close_button = true;
    if (document.getElementById(yomediaId_5b8149ae5b164b2b94ac73f90c67c86f)) {
        return false;
    }
    
    var mainContain;
    if (positionInsert_5b8149ae5b164b2b94ac73f90c67c86f === '') {
        positionInsert_5b8149ae5b164b2b94ac73f90c67c86f = 'after';
    }
    if (positionType_5b8149ae5b164b2b94ac73f90c67c86f === '') {
        positionType_5b8149ae5b164b2b94ac73f90c67c86f = 'id';
    }
    if (positionType_5b8149ae5b164b2b94ac73f90c67c86f === 'class') {
        if (positionIndex_5b8149ae5b164b2b94ac73f90c67c86f === '') {
            positionIndex_5b8149ae5b164b2b94ac73f90c67c86f = 0;
        } else {
            positionIndex_5b8149ae5b164b2b94ac73f90c67c86f = parseInt(positionIndex_5b8149ae5b164b2b94ac73f90c67c86f);
        }        
        mainContain = document.getElementsByClassName(positionName_5b8149ae5b164b2b94ac73f90c67c86f)[positionIndex_5b8149ae5b164b2b94ac73f90c67c86f];
    } else {
        mainContain = document.getElementById(positionName_5b8149ae5b164b2b94ac73f90c67c86f);
    }
    if (!mainContain) {
        mainContain =  document.currentScript || (function() {
            var script = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=5b8149ae5b164b2b94ac73f90c67c86f") && (script = a)
            });
            return script;
        })();
    }
    var domWrapper = document.createElement('div');
    domWrapper.setAttribute('id', yomediaId_5b8149ae5b164b2b94ac73f90c67c86f);
    domWrapper.style.cssText = 'display: block; overflow: hidden; background: transparent; width: 970px !important; height: 250px !important; right: 0px; left: 0px; padding: 0px; position: relative; border: 0; max-width: 970px !important; max-height: 250px !important; left: 0px; right: 0px; margin: auto; transition: height 0.4s ease-in;';

    switch (positionInsert_5b8149ae5b164b2b94ac73f90c67c86f) {
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
                if (!document.getElementById(yomediaId_5b8149ae5b164b2b94ac73f90c67c86f)) {
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
    log.success(`Banner source: https://${domainURL}.yomedia.vn/${bannerURL}`);

    var banner = document.createElement('iframe');
    var clickTag = encodeURIComponent(getClickTagYomedia_5b8149ae5b164b2b94ac73f90c67c86f());
    var creative_src = `https://${domainURL}.yomedia.vn/${bannerURL}?pid=5b8149ae5b164b2b94ac73f90c67c86f&aid=205932b80d21451ba225055bbabc8ee2&fid=1a5034d41da54fb5b4937f1bb112dfe5&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=` + clickTag;
    banner.setAttribute('src', creative_src);
    banner.setAttribute('id', yomediaBannerId_5b8149ae5b164b2b94ac73f90c67c86f);
    banner.setAttribute('allowFullScreen', '');
    banner.style.cssText = 'left:0px;right:0px;margin:0px auto;display:block; line-height:normal;overflow:hidden;position:relative;border:0; width: 970px !important; height: 250px !important;';
    banner.width = '970';
    banner.height = '250';
    domWrapper.appendChild(banner);

    if (show_close_button) {
        const btn_close = document.createElement('div');
        btn_close.setAttribute('id', `yo-close-5b8149ae5b164b2b94ac73f90c67c86f`);
        btn_close.setAttribute('style', `width: 34px !important; height: 34px !important; position: absolute; top: 0px !important; right: 0px !important; z-index: 9999 !important;`);
        let close_image = new Image();
        close_image.src = 'https://media.yomedia.vn/images/btn_close.png';
        close_image.setAttribute('style', 'width: 100% !important; height: 100% !important;')
        btn_close.appendChild(close_image);
        domWrapper.appendChild(btn_close);
        addAnEventListener_5b8149ae5b164b2b94ac73f90c67c86f(close_image, 'click', function() {
            closeYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f();
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
    addAnEventListener_5b8149ae5b164b2b94ac73f90c67c86f(banner, 'load', function() {
        isVisiabilityYomedia_5b8149ae5b164b2b94ac73f90c67c86f(banner);
    });
    impressionTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
    try {
        var obj = document.getElementById(yomediaId_5b8149ae5b164b2b94ac73f90c67c86f);
        intersectionObserverYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj);
    } catch(err) {
        var wd = window;
        var obj = document.getElementById(yomediaId_5b8149ae5b164b2b94ac73f90c67c86f);
        viewBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj);
        document.addEventListener("scroll", function() {
            viewBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj);
        });
        document.addEventListener("touchmove", function() {
            viewBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj);
        });
    }
}
function closeYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f() {
    var domWrapper = document.getElementById(yomediaId_5b8149ae5b164b2b94ac73f90c67c86f);
    if (domWrapper) {
        domWrapper.style.height = '0px';
        setTimeout(function() {
            domWrapper.remove();
        }, 500);
    }
}
function easingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(e, n) {
    if (!e) return;
    var pos = e.style.height;
    pos = pos.replace("px","");
    pos = pos.replace("%","");
    pos = parseFloat(pos);
    var change = n - pos;

    var total = change > 0 ? pos + Math.ceil((change / 2)) : pos + Math.floor((change / 2));
    e.style.height = total + "px";
    function r() {
        easingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(e, n);
    }
    
    n = n > 0 ? Math.ceil(n) : Math.floor(n);
    if(change == 0) {
        clearTimeout(timer);
        return;
    }
    timer = setTimeout(r, 10);
}

function viewBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj) {
    if (obj) {
        if (viewFullBannerYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj)) {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f('yomedia_in_banner_5b8149ae5b164b2b94ac73f90c67c86f');
        } else {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f('yomedia_out_banner_5b8149ae5b164b2b94ac73f90c67c86f');
        }
        if (viewHalfBannerYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj)) {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f('yomedia_in_half_banner_5b8149ae5b164b2b94ac73f90c67c86f');
        } else {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f('yomedia_out_half_banner_5b8149ae5b164b2b94ac73f90c67c86f');
        }
    }    
}

function sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f($message) {
    var banner = document.getElementById(yomediaBannerId_5b8149ae5b164b2b94ac73f90c67c86f);
    if (banner) {
        banner.contentWindow.postMessage($message, '*'); 
    }
}

function intersectionObserverYomedia_5b8149ae5b164b2b94ac73f90c67c86f(el) {
    var intersectionObserver = new IntersectionObserver(entries => {
        inViewYomedia_5b8149ae5b164b2b94ac73f90c67c86f(el, entries);
    }, {
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
    });
    intersectionObserver.observe(el);
}

function inViewYomedia_5b8149ae5b164b2b94ac73f90c67c86f(el, entries) {
    if (typeof entries[0] === 'undefined' || typeof entries[0].intersectionRatio === 'undefined' || entries[0].intersectionRatio <= 0) {
        sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f('yomedia_out_banner_5b8149ae5b164b2b94ac73f90c67c86f');
    } else {
        sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f('yomedia_in_banner_5b8149ae5b164b2b94ac73f90c67c86f');
        if (entries[0].intersectionRatio >= 0.25 && entries[0].intersectionRatio < 0.5) {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f(JSON.stringify({pid: '5b8149ae5b164b2b94ac73f90c67c86f', inview: 25}));
        } else if (entries[0].intersectionRatio >= 0.5 && entries[0].intersectionRatio < 0.75) {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f(JSON.stringify({pid: '5b8149ae5b164b2b94ac73f90c67c86f', inview: 50}));
        } else if (entries[0].intersectionRatio >= 0.75 && entries[0].intersectionRatio < 0.95) {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f(JSON.stringify({pid: '5b8149ae5b164b2b94ac73f90c67c86f', inview: 75}));
        } else if (entries[0].intersectionRatio >= 0.95) {
            sendMessageToIframe_5b8149ae5b164b2b94ac73f90c67c86f(JSON.stringify({pid: '5b8149ae5b164b2b94ac73f90c67c86f', inview: 100}));
        }
    }
}

var trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f = false, interval_5b8149ae5b164b2b94ac73f90c67c86f = null, timeTrackingViewable_5b8149ae5b164b2b94ac73f90c67c86f = 1000;

function viewableBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(event) {
    if (!trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f) {
        if (viewHalfBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(this)) {
            if (interval_5b8149ae5b164b2b94ac73f90c67c86f === null) {
                var time = 0;
                interval_5b8149ae5b164b2b94ac73f90c67c86f = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_5b8149ae5b164b2b94ac73f90c67c86f) {
                        if (!trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f) {
                            viewableTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                            trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f = true;
                            clearInterval(interval_5b8149ae5b164b2b94ac73f90c67c86f);
                            interval_5b8149ae5b164b2b94ac73f90c67c86f = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f()
        }
    }
}

function viewableBySzieBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f) {
        var rect = getClientRectBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_5b8149ae5b164b2b94ac73f90c67c86f === null) {
                var time = 0;
                interval_5b8149ae5b164b2b94ac73f90c67c86f = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_5b8149ae5b164b2b94ac73f90c67c86f) {
                        if (!trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f) {
                            viewableTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                            trackingViewable_5b8149ae5b164b2b94ac73f90c67c86f = true;
                            clearInterval(interval_5b8149ae5b164b2b94ac73f90c67c86f);
                            interval_5b8149ae5b164b2b94ac73f90c67c86f = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f()
        }
    }
}

function destroyViewableBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
    if (interval_5b8149ae5b164b2b94ac73f90c67c86f !== null) {
        clearInterval(interval_5b8149ae5b164b2b94ac73f90c67c86f);
        interval_5b8149ae5b164b2b94ac73f90c67c86f = null;
    }
}

function viewHalfBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_5b8149ae5b164b2b94ac73f90c67c86f(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_5b8149ae5b164b2b94ac73f90c67c86f(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_5b8149ae5b164b2b94ac73f90c67c86f(wd) {
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

function getOffsetYYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj) {
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

function getClientRectBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(obj) {
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
let visibleAdsYomedia_5b8149ae5b164b2b94ac73f90c67c86f = null, viewabilityIntervalID_5b8149ae5b164b2b94ac73f90c67c86f, timerViewability_5b8149ae5b164b2b94ac73f90c67c86f = 0, trackedViewability_5b8149ae5b164b2b94ac73f90c67c86f = false;
const durationViewability_5b8149ae5b164b2b94ac73f90c67c86f = 10;

function isVisiabilityYomedia_5b8149ae5b164b2b94ac73f90c67c86f(el) {
    if (el) {
        try {
            let thresholdSets_5b8149ae5b164b2b94ac73f90c67c86f = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_5b8149ae5b164b2b94ac73f90c67c86f.push(i/100);
            }
            var adObserverVisiability_5b8149ae5b164b2b94ac73f90c67c86f = new IntersectionObserver(intersectionCallback_5b8149ae5b164b2b94ac73f90c67c86f, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_5b8149ae5b164b2b94ac73f90c67c86f
            });
            viewabilityIntervalID_5b8149ae5b164b2b94ac73f90c67c86f = window.setInterval(function() {
                handleTrackingViewability_5b8149ae5b164b2b94ac73f90c67c86f(el);
            }, durationViewability_5b8149ae5b164b2b94ac73f90c67c86f);
            adObserverVisiability_5b8149ae5b164b2b94ac73f90c67c86f.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_5b8149ae5b164b2b94ac73f90c67c86f) {
                window.clearInterval(viewabilityIntervalID_5b8149ae5b164b2b94ac73f90c67c86f);   
            }
        }
    }
}

function intersectionCallback_5b8149ae5b164b2b94ac73f90c67c86f(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_5b8149ae5b164b2b94ac73f90c67c86f = entry.target;
            } else {
                visibleAdsYomedia_5b8149ae5b164b2b94ac73f90c67c86f = null;
            }
        } else {
            visibleAdsYomedia_5b8149ae5b164b2b94ac73f90c67c86f = null;
        }
    });
}

function handleTrackingViewability_5b8149ae5b164b2b94ac73f90c67c86f(el) {
    if (visibleAdsYomedia_5b8149ae5b164b2b94ac73f90c67c86f !== null && el === visibleAdsYomedia_5b8149ae5b164b2b94ac73f90c67c86f) {
        timerViewability_5b8149ae5b164b2b94ac73f90c67c86f += durationViewability_5b8149ae5b164b2b94ac73f90c67c86f;
        if (!trackedViewability_5b8149ae5b164b2b94ac73f90c67c86f && timerViewability_5b8149ae5b164b2b94ac73f90c67c86f >= 1000) {
            trackedViewability_5b8149ae5b164b2b94ac73f90c67c86f = true;
            viewableTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
            window.clearInterval(viewabilityIntervalID_5b8149ae5b164b2b94ac73f90c67c86f);
        }
    } else {
        timerViewability_5b8149ae5b164b2b94ac73f90c67c86f = 0;
    }
}showBannerYomedia_5b8149ae5b164b2b94ac73f90c67c86f(1);
function impressionTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_5b8149ae5b164b2b94ac73f90c67c86f === 'function') {
        _YoImpCallback_5b8149ae5b164b2b94ac73f90c67c86f();
    }
}

function viewableTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
}

function clickTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
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

function clickThroughYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
    getTrackingYomedia('//dmp-log.yomedia.vn/api/log/dmp-event?fid=525001841&ev=click&rd=[timestamp]&uuid=c3be84574f456ce291a73aab800ab560&urlRef=https%3A%2F%2Fdemo.yomedia.vn%2FMThanh%2FFull-Format-Test%2F'.replace('[timestamp]', Math.floor(Date.now())));
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://tracking.yomedia.vn/display?evt=009&token=b9257c53676ab0b7e1a4c946757e5d7b846854664c&to=https%3A%2F%2Fwww.w3schools.com&ord=1631179001756' + Date.now();
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function startTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(){
}

function firstQuartileTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(){
}

function midpointTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(){
}

function thirdQuartileTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(){
}

function completeTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f(){
}

function getClickTagYomedia_5b8149ae5b164b2b94ac73f90c67c86f() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_5b8149ae5b164b2b94ac73f90c67c86f(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_5b8149ae5b164b2b94ac73f90c67c86f(event){
    try {
        var fn_5b8149ae5b164b2b94ac73f90c67c86f = event.data;
        processMessage_5b8149ae5b164b2b94ac73f90c67c86f(fn_5b8149ae5b164b2b94ac73f90c67c86f);
    }
    catch(err) {}
}

addAnEventListener_5b8149ae5b164b2b94ac73f90c67c86f(window,'message',iFrameListener_5b8149ae5b164b2b94ac73f90c67c86f);

function createTrackingIframe_5b8149ae5b164b2b94ac73f90c67c86f(id, src) {
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

function getRandom_5b8149ae5b164b2b94ac73f90c67c86f(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_5b8149ae5b164b2b94ac73f90c67c86f;
var ms_5b8149ae5b164b2b94ac73f90c67c86f;
function processMessage_5b8149ae5b164b2b94ac73f90c67c86f(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_5b8149ae5b164b2b94ac73f90c67c86f();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f':
                    minYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'restoreYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f':
                    restoreYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'setYoMediaExpand_5b8149ae5b164b2b94ac73f90c67c86f':
                    setYoMediaExpand_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'setYoMediaPre_5b8149ae5b164b2b94ac73f90c67c86f':
                    setYoMediaPre_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'closeYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f':
                    closeYoMediaPopupAd_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'closeYoMediaExpand_5b8149ae5b164b2b94ac73f90c67c86f':
                    closeYoMediaExpand_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'impressionTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    impressionTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'viewableTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    viewableTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'clickTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    clickTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'clickTracking3rdYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    clickTracking3rdYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'startTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    startTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'firstQuartileTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    firstQuartileTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'midpointTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    midpointTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'thirdQuartileTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    thirdQuartileTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
                case 'completeTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f':
                    completeTrackingYomedia_5b8149ae5b164b2b94ac73f90c67c86f();
                    break;
            }  
        }
    } catch(error){}
}