var advId_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_c0d26b72b7754f0b9c91d7cd57b2dd64 = '5565e302fb2e489cae28103f6c66db12';
var chanId_c0d26b72b7754f0b9c91d7cd57b2dd64 = '3d58e13cbef3493682fe6107ac13e262';
var placementId_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'c0d26b72b7754f0b9c91d7cd57b2dd64';

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

var yomediaId_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'wrapper-mobile-interscroller-c0d26b72b7754f0b9c91d7cd57b2dd64';
var yomediaBannerId_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'yomedia_interscroller_iframe-c0d26b72b7754f0b9c91d7cd57b2dd64';
var yomediaLandscapeId_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'yomedia-mobile-landscape-interscroller-c0d26b72b7754f0b9c91d7cd57b2dd64';
var positionInsert_c0d26b72b7754f0b9c91d7cd57b2dd64 = '';
var positionType_c0d26b72b7754f0b9c91d7cd57b2dd64 = '';
var positionName_c0d26b72b7754f0b9c91d7cd57b2dd64 = '';
var positionIndex_c0d26b72b7754f0b9c91d7cd57b2dd64 = '';
var iOS_c0d26b72b7754f0b9c91d7cd57b2dd64 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var wrapper_c0d26b72b7754f0b9c91d7cd57b2dd64;
var holder_c0d26b72b7754f0b9c91d7cd57b2dd64;
var frameHolder_c0d26b72b7754f0b9c91d7cd57b2dd64;
var content_c0d26b72b7754f0b9c91d7cd57b2dd64;
var banner_c0d26b72b7754f0b9c91d7cd57b2dd64;
var viewWidth = parseInt(window.innerWidth || document.documentElement.clientWidth);
var viewHeight = parseInt(window.innerHeight || document.documentElement.clientHeight);
var maxWidth_c0d26b72b7754f0b9c91d7cd57b2dd64 = '0';
if (!maxWidth_c0d26b72b7754f0b9c91d7cd57b2dd64 || maxWidth_c0d26b72b7754f0b9c91d7cd57b2dd64 <= 0) {
    maxWidth_c0d26b72b7754f0b9c91d7cd57b2dd64 = screen.width;
}
var maxHeight_c0d26b72b7754f0b9c91d7cd57b2dd64 = '0';
if (!maxHeight_c0d26b72b7754f0b9c91d7cd57b2dd64 || maxHeight_c0d26b72b7754f0b9c91d7cd57b2dd64 <= 0) {
    maxHeight_c0d26b72b7754f0b9c91d7cd57b2dd64 = screen.height;
}


function showBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(s) {
    let show_logo = true;
    let show_close_button = true;
    if (document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64')) {
        return false;
    }
    var mainContain;
    if (positionInsert_c0d26b72b7754f0b9c91d7cd57b2dd64 === '') {
        positionInsert_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'after';
    }
    if (positionType_c0d26b72b7754f0b9c91d7cd57b2dd64 === '') {
        positionType_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'id';
    }
    if (positionType_c0d26b72b7754f0b9c91d7cd57b2dd64 === 'class') {
        if (positionIndex_c0d26b72b7754f0b9c91d7cd57b2dd64 === '') {
            positionIndex_c0d26b72b7754f0b9c91d7cd57b2dd64 = 0;
        } else {
            positionIndex_c0d26b72b7754f0b9c91d7cd57b2dd64 = parseInt(positionIndex_c0d26b72b7754f0b9c91d7cd57b2dd64);
        }
        mainContain = document.getElementsByClassName(positionName_c0d26b72b7754f0b9c91d7cd57b2dd64)[positionIndex_c0d26b72b7754f0b9c91d7cd57b2dd64];        
    } else {
        mainContain = document.getElementById(positionName_c0d26b72b7754f0b9c91d7cd57b2dd64);
    }
    if (!mainContain) {
        positionInsert_c0d26b72b7754f0b9c91d7cd57b2dd64 = 'after';
        mainContain =  document.currentScript || (function() {
            var script = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=c0d26b72b7754f0b9c91d7cd57b2dd64") && (script = a)
            });
            return script;
        })();
    }

    viewHeight = parseInt(window.innerHeight || document.documentElement.clientHeight);

    let wrapper = document.createElement("div");
    wrapper.id = `yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64`;
    wrapper.setAttribute('style', `padding: 0px !important; z-index: 1 !important; height: ${screen.height}px !important; margin: 0px auto !important; position: relative !important; overflow: initial; !important`);

    switch (positionInsert_c0d26b72b7754f0b9c91d7cd57b2dd64) {
        case 'before':
            mainContain.parentNode.insertBefore(wrapper, mainContain);
            break;
        case 'first_child':
            var firstChild = mainContain.firstChild;
            if (firstChild) {
                mainContain.insertBefore(wrapper, firstChild);
            } else {
                mainContain.appendChild(wrapper);
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
                        mainContain.childNodes[eleToInsert].parentNode.insertBefore(wrapper, mainContain.childNodes[eleToInsert].nextSibling);
                        break;
                    }
                }
                if (!document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64')) {
                    mainContain.childNodes[Math.ceil(childNodes.length/2)].parentNode.insertBefore(wrapper, mainContain.childNodes[Math.ceil(childNodes.length/2)].nextSibling);
                }
            } else {
                mainContain.appendChild(wrapper);
            }
            break;
        case 'last_child':
            mainContain.appendChild(wrapper);
            break;
        case 'after':
            var nextNode = mainContain.nextSibling;
            if (nextNode) {
                nextNode.parentNode.insertBefore(wrapper, nextNode);
            } else {
                mainContain.parentNode.appendChild(wrapper);
            }
            break;
        case 'random':
            var childNodes = mainContain.childNodes;
            if ( childNodes.length > 0) {
                var randomIndex= Math.floor(Math.random() * childNodes.length);
                mainContain.insertBefore(wrapper, mainContain.childNodes[randomIndex]);
            } else {
                mainContain.appendChild(wrapper);
            }
            break;
        default:
            document.body.appendChild(wrapper);
            break;
    }  

    let top = document.createElement('div');
    top.id = 'yo-top-c0d26b72b7754f0b9c91d7cd57b2dd64';
    top.setAttribute('style', `position: relative; height: 0px !important; overflow: hidden; display: block !important; margin-bottom: 0px;`);
    let top_first = document.createElement('div');
    top_first.setAttribute('style', `height: ${screen.height}px !important; clear: both; background-color: rgb(255, 255, 255); position: relative; z-index: 9;`);
    top.appendChild(top_first);
    wrapper.parentNode.insertBefore(top, wrapper);

    let bottom = document.createElement('div');
    bottom.id = 'yo-bottom-c0d26b72b7754f0b9c91d7cd57b2dd64';
    bottom.setAttribute('style', `clear: both; position: relative; opacity: 0; height: 0px !important; display: block; overflow: hidden; margin-bottom: 0px;`);
    let bottom_end = document.createElement('div');
    bottom_end.setAttribute('style', `height: ${screen.height}px !important; display: block; visibility: visible; opacity: 1; background-color: rgb(255, 255, 255); position: relative; z-index: 9;`);
    bottom.appendChild(top_first);

    let next = wrapper.nextSibling;
    console.log(next)
    if (next) {
        next.parentNode.insertBefore(bottom, next);
    } else {
        wrapper.parentNode.appendChild(bottom);
    }

    let inner = document.createElement('div');
    inner.id = 'yo-inner-c0d26b72b7754f0b9c91d7cd57b2dd64';
    inner.setAttribute('style', `position: absolute; width: 100%; height: ${screen.height}px; clip: rect(0px, ${screen.width}px, ${screen.height}px, ${document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64').clientWidth - screen.width}px);`);
    wrapper.appendChild(inner);
    
    if (show_close_button) {
        let btn_close = document.createElement('div');
        btn_close.setAttribute('id', `yo-close-c0d26b72b7754f0b9c91d7cd57b2dd64`);
        btn_close.setAttribute('style', `width: 34px !important; height: 34px !important; position: fixed; display: block; top: 0px !important; right: 0px !important; z-index: 1 !important;`);
        let close_image = new Image();
        close_image.src = 'https://media.yomedia.vn/images/btn_close.png';
        close_image.setAttribute('style', 'width: 100% !important; height: 100% !important;')
        btn_close.appendChild(close_image);
        inner.appendChild(btn_close);
        addAnEventListener_c0d26b72b7754f0b9c91d7cd57b2dd64(close_image, 'click', function() {
            closeYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64();
        });
    }
    let frame = document.createElement('div');
    frame.id = 'yo-frame-c0d26b72b7754f0b9c91d7cd57b2dd64';
    frame.setAttribute('style', `display: inline-block; width: ${screen.width}px; height: ${screen.height}px; position: fixed; top: 0; left: 0;-webkit-backface-visibility: hidden; -webkit-transform: translate3d(0,0,0);`);
    inner.appendChild(frame);

    let content = document.createElement('div');
    content.id = 'yo-content-c0d26b72b7754f0b9c91d7cd57b2dd64';
    content.setAttribute('style', `display: block; height: ${screen.height}px; position: relative;`);
    frame.appendChild(content);
    
    let banner = document.createElement('iframe');
    banner.id = 'yo-banner-c0d26b72b7754f0b9c91d7cd57b2dd64';
    let clickTag = encodeURIComponent(getClickTagYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64());
    let creative_src = 'https://demo.yomedia.vn/kien.tt/mb-inpage-tvc-v2/index.html?pid=c0d26b72b7754f0b9c91d7cd57b2dd64&aid=4b5aa73eadec4555ad063251c2498a97&fid=50df0294ce1f47c1921940892b19754d&advId=c23b9c109f7a4f89a3cb23f694f1d7cb&campId=d6692db2a2dd441c9ab9741ee05b127d&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=' + clickTag;
    banner.src = creative_src;
    banner.setAttribute('style', `border: none; height: ${screen.height}px; width: ${screen.width}px; overflow: hidden; margin:0 auto;`);
    content.appendChild(banner);

    if (show_logo) {
        let logo = document.createElement('div');
        logo.setAttribute('style', `visibility: visible; float: right; z-index: 1; clear: both; position: fixed; top: 0px; left: 0px; background: transparent;`);
        let a_logo = document.createElement('a');
        a_logo.setAttribute('href', 'https://yomedia.vn');
        a_logo.setAttribute('target', '_blank');
        logo.appendChild(a_logo);
        let image_logo = new Image();
        image_logo.src = 'https://media.yomedia.vn/images/yo-tl-logo.png';
        image_logo.setAttribute('style', 'width: auto !important; height: 25px !important;');
        image_logo.setAttribute('onmouseover', `this.src='https://media.yomedia.vn/images/yo-tl-f-logo.png'`);
        image_logo.setAttribute('onmouseout', `this.src='https://media.yomedia.vn/images/yo-tl-logo.png'`);
        a_logo.appendChild(image_logo);
        inner.appendChild(logo);
    }

    addAnEventListener_c0d26b72b7754f0b9c91d7cd57b2dd64(banner, 'load', function() {
        isVisiabilityYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(banner);
    });
    impressionTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
    setInterval(function(){
        getTrackingYomedia('https://tracking.yomedia.vn/rtk?evt=001&token=05818df5ba16c51a25fe340a7c944ee74730e8a577&ord=1628871387560' + Date.now());
    }, 1620000);
    try {
        var obj = document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64');
        intersectionObserverYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj);
    } catch(err) {
        var wd = window;
        var obj = document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64');
        viewBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj);
        document.addEventListener("scroll", function() {
            viewBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj);
        });
        document.addEventListener("touchmove", function() {
            viewBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj);
        });
    }
}



function viewBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj) {
    var wrapper_c0d26b72b7754f0b9c91d7cd57b2dd64 = document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64');
    if (obj) {
        if (viewFullBannerYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj)) {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64('yomedia_in_banner_c0d26b72b7754f0b9c91d7cd57b2dd64');
        } else {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64('yomedia_out_banner_c0d26b72b7754f0b9c91d7cd57b2dd64');
        }
        if (viewHalfBannerYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj)) {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64('yomedia_in_half_banner_c0d26b72b7754f0b9c91d7cd57b2dd64');
        } else {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64('yomedia_out_half_banner_c0d26b72b7754f0b9c91d7cd57b2dd64');
        }
    }
}

function sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64($message) {
    var banner = document.getElementById('yo-banner-c0d26b72b7754f0b9c91d7cd57b2dd64');
    banner.contentWindow.postMessage($message, '*'); 
}

function intersectionObserverYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(el) {
    var thresholdSets = [];
    for (let i=0; i<=100; i++) {
        thresholdSets.push(i/100);
    }
    var intersectionObserver_c0d26b72b7754f0b9c91d7cd57b2dd64 = new IntersectionObserver(entries => {
        inViewYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(el, entries);
    }, {
        rootMargin: '0px 0px 0px 0px',
        threshold: thresholdSets
    });
    intersectionObserver_c0d26b72b7754f0b9c91d7cd57b2dd64.observe(el);
}

function inViewYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(el, entries) {
    var wrapper_c0d26b72b7754f0b9c91d7cd57b2dd64 = document.getElementById('yo-wrapper-c0d26b72b7754f0b9c91d7cd57b2dd64');
    if (typeof entries[0] === 'undefined' || typeof entries[0].intersectionRatio === 'undefined' || entries[0].intersectionRatio <= 0) {
        wrapper_c0d26b72b7754f0b9c91d7cd57b2dd64.style.visibility = 'hidden';
        sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64('yomedia_out_banner_c0d26b72b7754f0b9c91d7cd57b2dd64');
    } else {
        wrapper_c0d26b72b7754f0b9c91d7cd57b2dd64.style.visibility = 'visible';
        sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64('yomedia_in_banner_c0d26b72b7754f0b9c91d7cd57b2dd64');
        if (entries[0].intersectionRatio >= 0.25 && entries[0].intersectionRatio < 0.5) {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64(JSON.stringify({pid: 'c0d26b72b7754f0b9c91d7cd57b2dd64', inview: 25}));
        } else if (entries[0].intersectionRatio >= 0.5 && entries[0].intersectionRatio < 0.75) {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64(JSON.stringify({pid: 'c0d26b72b7754f0b9c91d7cd57b2dd64', inview: 50}));
        } else if (entries[0].intersectionRatio >= 0.75 && entries[0].intersectionRatio < 0.95) {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64(JSON.stringify({pid: 'c0d26b72b7754f0b9c91d7cd57b2dd64', inview: 75}));
        } else if (entries[0].intersectionRatio >= 0.95) {
            sendMessageToIframe_c0d26b72b7754f0b9c91d7cd57b2dd64(JSON.stringify({pid: 'c0d26b72b7754f0b9c91d7cd57b2dd64', inview: 100}));
        }
    }
}

var trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64 = false, interval_c0d26b72b7754f0b9c91d7cd57b2dd64 = null, timeTrackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64 = 1000;

function viewableBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(event) {
    if (!trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64) {
        if (viewHalfBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(this)) {
            if (interval_c0d26b72b7754f0b9c91d7cd57b2dd64 === null) {
                var time = 0;
                interval_c0d26b72b7754f0b9c91d7cd57b2dd64 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64) {
                        if (!trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64) {
                            viewableTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                            trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64 = true;
                            clearInterval(interval_c0d26b72b7754f0b9c91d7cd57b2dd64);
                            interval_c0d26b72b7754f0b9c91d7cd57b2dd64 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64()
        }
    }
}

function viewableBySzieBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64) {
        var rect = getClientRectBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_c0d26b72b7754f0b9c91d7cd57b2dd64 === null) {
                var time = 0;
                interval_c0d26b72b7754f0b9c91d7cd57b2dd64 = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64) {
                        if (!trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64) {
                            viewableTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                            trackingViewable_c0d26b72b7754f0b9c91d7cd57b2dd64 = true;
                            clearInterval(interval_c0d26b72b7754f0b9c91d7cd57b2dd64);
                            interval_c0d26b72b7754f0b9c91d7cd57b2dd64 = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64()
        }
    }
}

function destroyViewableBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    if (interval_c0d26b72b7754f0b9c91d7cd57b2dd64 !== null) {
        clearInterval(interval_c0d26b72b7754f0b9c91d7cd57b2dd64);
        interval_c0d26b72b7754f0b9c91d7cd57b2dd64 = null;
    }
}

function viewHalfBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewHalfBannerYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd),
        windowY = wd.scroller().y,
        elementY = getOffsetYYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd, obj) {
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
    var vpH = getViewPortHeightYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd),
        windowY = wd.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    var de = document.documentElement;

    if (!!window.innerWidth) {
        return window.innerHeight;
    } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight;
    }

    return 0;
}

function getViewPortHeightYomediaNew_c0d26b72b7754f0b9c91d7cd57b2dd64(wd) {
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

function getOffsetYYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj) {
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

function getClientRectBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(obj) {
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
let visibleAdsYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64 = null, viewabilityIntervalID_c0d26b72b7754f0b9c91d7cd57b2dd64, timerViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 = 0, trackedViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 = false;
const durationViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 = 10;

function isVisiabilityYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(el) {
    if (el) {
        try {
            let thresholdSets_c0d26b72b7754f0b9c91d7cd57b2dd64 = [];
            for (let i=0; i<=100; i++) {
                thresholdSets_c0d26b72b7754f0b9c91d7cd57b2dd64.push(i/100);
            }
            var adObserverVisiability_c0d26b72b7754f0b9c91d7cd57b2dd64 = new IntersectionObserver(intersectionCallback_c0d26b72b7754f0b9c91d7cd57b2dd64, {
                root: null,
                rootMargin: '0px',
                threshold: thresholdSets_c0d26b72b7754f0b9c91d7cd57b2dd64
            });
            viewabilityIntervalID_c0d26b72b7754f0b9c91d7cd57b2dd64 = window.setInterval(function() {
                handleTrackingViewability_c0d26b72b7754f0b9c91d7cd57b2dd64(el);
            }, durationViewability_c0d26b72b7754f0b9c91d7cd57b2dd64);
            adObserverVisiability_c0d26b72b7754f0b9c91d7cd57b2dd64.observe(el);
        } catch (e) {
            if (viewabilityIntervalID_c0d26b72b7754f0b9c91d7cd57b2dd64) {
                window.clearInterval(viewabilityIntervalID_c0d26b72b7754f0b9c91d7cd57b2dd64);   
            }
        }
    }
}

function intersectionCallback_c0d26b72b7754f0b9c91d7cd57b2dd64(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.5) {
                visibleAdsYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64 = entry.target;
            } else {
                visibleAdsYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64 = null;
            }
        } else {
            visibleAdsYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64 = null;
        }
    });
}

function handleTrackingViewability_c0d26b72b7754f0b9c91d7cd57b2dd64(el) {
    if (visibleAdsYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64 !== null && el === visibleAdsYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64) {
        timerViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 += durationViewability_c0d26b72b7754f0b9c91d7cd57b2dd64;
        if (!trackedViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 && timerViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 >= 1000) {
            trackedViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 = true;
            viewableTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
            window.clearInterval(viewabilityIntervalID_c0d26b72b7754f0b9c91d7cd57b2dd64);
        }
    } else {
        timerViewability_c0d26b72b7754f0b9c91d7cd57b2dd64 = 0;
    }
}
showBannerYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(1);

function impressionTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=002&token=05818df5ba16c51a25fe340a7c944ee74730ebaf95&ord=1628871387560' + Date.now());
    if (typeof _YoImp != 'undefined' && avlHelperModule.validateUrl(_YoImp)) {
        getTrackingYomedia(_YoImp);
    } else if (typeof _YoImpCallback_c0d26b72b7754f0b9c91d7cd57b2dd64 === 'function') {
        _YoImpCallback_c0d26b72b7754f0b9c91d7cd57b2dd64();
    }
}

function viewableTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=008&token=05818df5ba16c51a25fe340a7c944ee74730889085&ord=1628871387560' + Date.now());
}

function clickTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://tracking.yomedia.vn/mobile?evt=009&token=05818df5ba16c51a25fe340a7c944ee7473049b8a8&to=https%3A%2F%2Fwww.pinetech.vn%2F&ord=1628871387560' + Date.now();
        var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
        if (!isMac) {
            window.open(landingPage, '_blank');
        }
    window.parent.postMessage("LgTopBanner","*");
}

function clickThroughYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
        var landingPage = 'https://tracking.yomedia.vn/mobile?evt=009&token=05818df5ba16c51a25fe340a7c944ee7473049b8a8&to=https%3A%2F%2Fwww.pinetech.vn%2F&ord=1628871387560' + Date.now();
        window.open(landingPage, '_blank');
    window.parent.postMessage("LgTopBanner","*");
}

function clickTracking3rdYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    window.parent.postMessage("LgTopBanner","*");
}

function startTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=003&token=05818df5ba16c51a25fe340a7c944ee7473011a055&ord=1628871387560' + Date.now());
}

function firstQuartileTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=004&token=05818df5ba16c51a25fe340a7c944ee74730cb4313&ord=1628871387560' + Date.now());
}

function midpointTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=005&token=05818df5ba16c51a25fe340a7c944ee74730e32f1f&ord=1628871387560' + Date.now());
}

function thirdQuartileTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=006&token=05818df5ba16c51a25fe340a7c944ee74730620bb0&ord=1628871387560' + Date.now());
}

function completeTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=007&token=05818df5ba16c51a25fe340a7c944ee7473088de71&ord=1628871387560' + Date.now());
}

function getClickTagYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64() {
    var landingPage = '';
    landingPage = 'https://tracking.yomedia.vn/mobile?evt=009&token=05818df5ba16c51a25fe340a7c944ee7473049b8a8&to=https%3A%2F%2Fwww.pinetech.vn%2F&ord=1628871387560' + Date.now();
    return landingPage;
}

function addAnEventListener_c0d26b72b7754f0b9c91d7cd57b2dd64(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_c0d26b72b7754f0b9c91d7cd57b2dd64(event){
    try {
        var fn_c0d26b72b7754f0b9c91d7cd57b2dd64 = event.data;
        processMessage_c0d26b72b7754f0b9c91d7cd57b2dd64(fn_c0d26b72b7754f0b9c91d7cd57b2dd64);
    }
    catch(err) {}
}
addAnEventListener_c0d26b72b7754f0b9c91d7cd57b2dd64(window,'message',iFrameListener_c0d26b72b7754f0b9c91d7cd57b2dd64);
// http
var __yoComScore = __yoComScore || [];
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016090700000000013") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000013&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000013");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000013") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000013&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000013");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016090700000000010") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000010&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000010");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000010") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000010&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000010");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000013") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000013&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000013");
}
if (__yoComScore.indexOf("2016090700000000015") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000015&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000015");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016090700000000010") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000010&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000010");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000010") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000010&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000010");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000002") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000002&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000002");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000010") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000010&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000010");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000013") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000013&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000013");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000013") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000013&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000013");
}
if (__yoComScore.indexOf("2016090700000000013") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000013&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000013");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000015") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000015&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000015");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016090700000000015") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000015&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000015");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016070110000000001") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000001&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000001");
}
if (__yoComScore.indexOf("2016090700000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000006");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016070110000000006") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000006&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000006");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016070110000000020") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016070110000000020&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016070110000000020");
}
if (__yoComScore.indexOf("2016090700000000007") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000007&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000007");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016090700000000014") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000014&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000014");
}
if (__yoComScore.indexOf("2016090700000000011") === -1) {
    getTrackingYomedia('https://sb.scorecardresearch.com/p?c1=8&c2=18889311&c3=2016090700000000011&ns_ap_it=b&rn=' + Math.floor(Date.now()));
    __yoComScore.push("2016090700000000011");
}


//flight: Yomedia Service Testing Interscroller TVC

function createTrackingIframe_c0d26b72b7754f0b9c91d7cd57b2dd64(id, src) {
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

function getRandom_c0d26b72b7754f0b9c91d7cd57b2dd64(min, max) {
  	return Math.floor(Math.random() * (max - min) + min);
}

var trackingIframes = {};
var ga_url_c0d26b72b7754f0b9c91d7cd57b2dd64;
var ms_c0d26b72b7754f0b9c91d7cd57b2dd64;
function processMessage_c0d26b72b7754f0b9c91d7cd57b2dd64(msg) {
    try {
        if ('string' == typeof msg &&  msg.toLowerCase().indexOf('yomedia') >= 0 && msg.indexOf('_c0d26b72b7754f0b9c91d7cd57b2dd64();') >= 0 ) {
            msg = msg.replace('();', '');
            switch(msg) {
                case 'minYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    minYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'restoreYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    restoreYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'setYoMediaExpand_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    setYoMediaExpand_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'setYoMediaPre_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    setYoMediaPre_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'closeYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    closeYoMediaPopupAd_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'closeYoMediaExpand_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    closeYoMediaExpand_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'impressionTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    impressionTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'viewableTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    viewableTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'clickTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    clickTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'clickTracking3rdYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    clickTracking3rdYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'startTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    startTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'firstQuartileTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    firstQuartileTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'midpointTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    midpointTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'thirdQuartileTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    thirdQuartileTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
                case 'completeTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64':
                    completeTrackingYomedia_c0d26b72b7754f0b9c91d7cd57b2dd64();
                    break;
            }
            
        }
    } catch(error){}
}