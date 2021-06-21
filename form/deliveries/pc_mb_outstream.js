var advId_5feec6f890d3485bb6f43576f47714ac = 'c23b9c109f7a4f89a3cb23f694f1d7cb';
var campId_5feec6f890d3485bb6f43576f47714ac = 'd6692db2a2dd441c9ab9741ee05b127d';
var pubId_5feec6f890d3485bb6f43576f47714ac = '5565e302fb2e489cae28103f6c66db12';
var chanId_5feec6f890d3485bb6f43576f47714ac = '3d58e13cbef3493682fe6107ac13e262';
var placementId_5feec6f890d3485bb6f43576f47714ac = '5feec6f890d3485bb6f43576f47714ac';

function getTrackingYomedia(url) {
    (new Image).src = url;
}

var wrapper_ads_5feec6f890d3485bb6f43576f47714ac = 'wrapper-inread-video-5feec6f890d3485bb6f43576f47714ac';
var content_ads_5feec6f890d3485bb6f43576f47714ac = 'content-inread-video-5feec6f890d3485bb6f43576f47714ac';
var player_ads_5feec6f890d3485bb6f43576f47714ac = 'yomedia-player-5feec6f890d3485bb6f43576f47714ac';
var positionInsert_5feec6f890d3485bb6f43576f47714ac = 'middle_child';
var positionType_5feec6f890d3485bb6f43576f47714ac = 'id';
var positionName_5feec6f890d3485bb6f43576f47714ac = 'abdf';
var positionIndex_5feec6f890d3485bb6f43576f47714ac = '';
var show_5feec6f890d3485bb6f43576f47714ac = false, playing_5feec6f890d3485bb6f43576f47714ac = false, position_5feec6f890d3485bb6f43576f47714ac;
var expanded_5feec6f890d3485bb6f43576f47714ac = false;
var error_5feec6f890d3485bb6f43576f47714ac = false;
var state_5feec6f890d3485bb6f43576f47714ac = null;
var timer_5feec6f890d3485bb6f43576f47714ac;

var videoWitth = _yoWidth = parseInt('640');
var videoHeight = _yoHeight = parseInt('360');
var ratio = 16/9;
if (videoHeight != 0 && videoWitth != 0) {
    ratio = videoWitth/videoHeight;
}

function showBannerYomedia_5feec6f890d3485bb6f43576f47714ac() {
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get('b');
    var domainURL = urlParams.get('c');

    if(domainURL == null || domainURL == 'null') {
        domainURL = 'demo';
    }

    if (document.getElementById(wrapper_ads_5feec6f890d3485bb6f43576f47714ac)) {
        return false;
    }
    var mainContain;
    if (positionInsert_5feec6f890d3485bb6f43576f47714ac === '') {
        positionInsert_5feec6f890d3485bb6f43576f47714ac = 'after';
    }
    if (positionType_5feec6f890d3485bb6f43576f47714ac === '') {
        positionType_5feec6f890d3485bb6f43576f47714ac = 'id';
    }
    if (positionType_5feec6f890d3485bb6f43576f47714ac === 'class') {
        if (positionIndex_5feec6f890d3485bb6f43576f47714ac === '') {
            positionIndex_5feec6f890d3485bb6f43576f47714ac = 0;
        } else {
            positionIndex_5feec6f890d3485bb6f43576f47714ac = parseInt(positionIndex_5feec6f890d3485bb6f43576f47714ac);
        }
        mainContain = document.getElementsByClassName(positionName_5feec6f890d3485bb6f43576f47714ac)[positionIndex_5feec6f890d3485bb6f43576f47714ac];        
    } else {
        mainContain = document.getElementById(positionName_5feec6f890d3485bb6f43576f47714ac);
    }
    if (!mainContain) {
        positionInsert_5feec6f890d3485bb6f43576f47714ac = 'after';
        mainContain =  document.currentScript || (function() {
            var script = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=5feec6f890d3485bb6f43576f47714ac") && (script = a)
            });
            return script;
        })();
    }

    var domWrapper = document.createElement('div');
    domWrapper.setAttribute('id', wrapper_ads_5feec6f890d3485bb6f43576f47714ac);
    domWrapper.style.cssText = 'display: block; overflow: hidden;background: transparent; width: 100%; height: 0px; right: 0px; left: 0px; margin-left: auto; margin-right: auto; padding: 0px; border: none;';
    var contentAds = document.createElement('iframe');
    contentAds.setAttribute('id', content_ads_5feec6f890d3485bb6f43576f47714ac);
    contentAds.style.cssText = 'display: block; overflow: hidden;background: transparent; width: 100%; height:' + _yoHeight + 'px; right: 0px; left: 0px; margin-left: auto; margin-right: auto; padding: 0px; position: relative; z-index: 3; border: none;';
    domWrapper.appendChild(contentAds);

    switch (positionInsert_5feec6f890d3485bb6f43576f47714ac) {
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
                var append = false;
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
                if (!document.getElementById(wrapper_ads_5feec6f890d3485bb6f43576f47714ac)) {
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
    var contentHTML_5feec6f890d3485bb6f43576f47714ac = `
        <body style="padding: 0px!; margin: 0px; background-color: transparent;">
            <div id="yomedia-player-5feec6f890d3485bb6f43576f47714ac" style="z-index: 10;"></div>
            <script type="text/javascript" src="https://media.yomedia.vn/lib/jwplayer/jwplayer.js"></script>
            <script type="text/javascript">
                var pid = "5feec6f890d3485bb6f43576f47714ac";
                jwplayer.key="XYS/ica6YQUMq9rC6J2E77obUFoIPLeM";
                playerInstance = jwplayer("yomedia-player-5feec6f890d3485bb6f43576f47714ac");
                var poster = 'https://media.yomedia.vn/';
                if (!(poster.match(/\.(jpeg|jpg|gif|png)$/) != null)) {
                    poster = '';
                }
                playerInstance.setup(
                    {
                        file: "https://media.yomedia.vn/video/blank-1.mp4",
                        image: poster,
                        advertising: {
                            client: "vast",
                            tag: 'https://${domainURL}.yomedia.vn/${bannerURL}',
                            skipmessage: "xx",
                            skiptext: "Skip",
                            autoplayadsmuted: true,
                        },
                        width: "100%",
                        height: "100%",
                        mute: true,
                        skin : {
                            url :"https://media.yomedia.vn/lib/jwplayer/css/jwplayer.css?v=2",
                            name : "myskin"
                        },
                    }
                );
                playerInstance.on('ready', function() {
                    window.parent.postMessage(JSON.stringify({"event": "ready", "pid": pid, "auth": "Yomedia"}), '*');
                    var dom = document.getElementById('yomedia-player-' + pid);
                    var element = dom.querySelector(".jw-controlbar.jw-background-color.jw-reset");
                    element.classList.remove("jw-controlbar");
                    element.classList.add("jw-controlbarfix");
                    playerInstance.on('adPlay', function() {
                        window.parent.postMessage(JSON.stringify({"event": "adPlay", "pid": pid, "auth": "Yomedia"}), '*');
                    });
                    playerInstance.on('adPause', function() {
                       window.parent.postMessage(JSON.stringify({"event": "adPause", "pid": pid, "auth": "Yomedia"}), '*');
                    });
                    playerInstance.on('complete', function() {
                        window.parent.postMessage(JSON.stringify({"event": "complete", "pid": pid, "auth": "Yomedia"}), '*');
                    });
                    playerInstance.on('adComplete', function() {
                        window.parent.postMessage(JSON.stringify({"event": "adComplete", "pid": pid, "auth": "Yomedia"}), '*');
                    });
                    playerInstance.on('adSkipped', function() {
                        window.parent.postMessage(JSON.stringify({"event": "adSkipped", "pid": pid, "auth": "Yomedia"}), '*');
                    });
                    playerInstance.on('adError', function() {
                        window.parent.postMessage(JSON.stringify({"event": "adError", "pid": pid, "auth": "Yomedia"}), '*');
                    });
                });
                addEventListenerYomedia(window, "message", function(e) {
                    try {
                        var data = JSON.parse(e.data);
                        if (typeof data === "object" && data.pid && data.auth && data.event && data.pid === pid && data.auth === "YomediaDelivery") {
                            switch(data.event) {
                                case "play":
                                    if (playerInstance.getState() === 'idle' || playerInstance.getState() === 'paused') {
                                        setTimeout(function() {                    
                                            playerInstance.play();
                                        }, 0);
                                    }
                                    break;
                                case "pause":
                                    if (playerInstance.getState() === 'playing') {
                                        playerInstance.pause();
                                    }
                                    break;
                            }
                        }
                    } catch(e){}
                    
                });
                function addEventListenerYomedia(dom, event, func, useCapture) {
                    useCapture = useCapture ? useCapture : false;
                    if ("addEventListener" in dom) {
                        dom.addEventListener(event, func, useCapture);
                    } else if ("attachEvent" in obj) {//IE
                        dom.attachEvent("on" + event, func);
                    }
                }
            </script>
        </body>`;
    contentAds.contentWindow.document.open();
    contentAds.contentWindow.document.write(contentHTML_5feec6f890d3485bb6f43576f47714ac);
    contentAds.contentWindow.document.close();
    _yoWidth = domWrapper.clientWidth;
    _yoHeight = Math.ceil(_yoWidth/ratio);
    contentAds.style.height = _yoHeight + 'px';
}

function viewBannerYomedia_5feec6f890d3485bb6f43576f47714ac() {
    var domWrapper = document.getElementById(wrapper_ads_5feec6f890d3485bb6f43576f47714ac);
    var contentAds = document.getElementById(content_ads_5feec6f890d3485bb6f43576f47714ac);
    if (domWrapper) {
        if (view90BannerYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper)) {
            if (expanded_5feec6f890d3485bb6f43576f47714ac && state_5feec6f890d3485bb6f43576f47714ac === 'adPlay' && contentAds.style.position === 'fixed') {
                contentAds.style.cssText = 'display: block; overflow: hidden;background: transparent; width: 100%; height:' + _yoHeight + 'px; right: 0px; left: 0px; margin-left: auto; margin-right: auto; padding: 0px; position: relative; z-index: 3; border: none;';
            }
            if (state_5feec6f890d3485bb6f43576f47714ac === 'idle' || state_5feec6f890d3485bb6f43576f47714ac === 'adPause') {
                setTimeout(function() {                    
                    sendMessageToIframeYomedia_5feec6f890d3485bb6f43576f47714ac(contentAds, JSON.stringify({"event": "play", "pid": "5feec6f890d3485bb6f43576f47714ac", "auth": "YomediaDelivery"}));
                }, 0);
            }
        } else {
            if (expanded_5feec6f890d3485bb6f43576f47714ac && state_5feec6f890d3485bb6f43576f47714ac === 'adPlay' && contentAds.style.position === 'relative') {
                var width = Math.ceil(_yoWidth / 2);
                var height = Math.ceil(width/ratio);
                contentAds.style.cssText = 'display: block; overflow: hidden;background: transparent; width: ' + width + 'px; height:' + height + 'px; left: 0px; bottom: 0px; position: fixed; z-index: 2347483647; border: none;';
            }
        }
    }
}

function view90BannerYomedia_5feec6f890d3485bb6f43576f47714ac(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_5feec6f890d3485bb6f43576f47714ac(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_5feec6f890d3485bb6f43576f47714ac(obj);
    
    elementHeight = (obj.clientHeight/2) + (obj.clientHeight/4);
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    var elementYstart = elementY + (obj.clientHeight/4);

    return !(elementYstart > endViewPort || ybottom < windowY);
}

function addEventListenerYomedia_5feec6f890d3485bb6f43576f47714ac(dom, event, func, useCapture) {
    useCapture = useCapture ? useCapture : false;
    if ("addEventListener" in dom) {
        dom.addEventListener(event, func, useCapture);
    } else if ("attachEvent" in obj) {//IE
        dom.attachEvent("on" + event, func);
    }
}

function sendMessageToIframeYomedia_5feec6f890d3485bb6f43576f47714ac(dom, $message) {
    dom.contentWindow.postMessage($message, '*'); 
}

function closeYoMediaPopupAd_5feec6f890d3485bb6f43576f47714ac() {
    var d = document.getElementById(wrapper_ads);
    easingYomedia_5feec6f890d3485bb6f43576f47714ac(d, 0);
}

function easingYomedia_5feec6f890d3485bb6f43576f47714ac(e, n) {
    if (!e) return;
    var pos = e.style.height;
    pos = pos.replace("px","");
    pos = pos.replace("%","");
    pos = parseFloat(pos);
    var change = n - pos;
    var total = change > 0 ? pos + Math.ceil((change / 5)) : pos + Math.floor((change / 5));
    e.style.height = total + "px";
    if (total <= 0 || error_5feec6f890d3485bb6f43576f47714ac) {
        setTimeout(function(){ e.remove(); }, 500);
    }
    function r() {
        easingYomedia_5feec6f890d3485bb6f43576f47714ac(e, n);
    }
    
    n = n > 0 ? Math.ceil(n) : Math.floor(n);
    if(change == 0) {
        clearTimeout(timer_5feec6f890d3485bb6f43576f47714ac);
        return;
    }
    timer_5feec6f890d3485bb6f43576f47714ac = setTimeout(r, 15);
}

function iFrameInreadListenerYomedia_5feec6f890d3485bb6f43576f47714ac(event){
    try {
        var domWrapper = document.getElementById(wrapper_ads_5feec6f890d3485bb6f43576f47714ac);
        var data = JSON.parse(event.data);
        if (typeof data === "object" && data.pid && data.auth && data.event && data.pid === placementId_5feec6f890d3485bb6f43576f47714ac && data.auth === "Yomedia") {
            switch(data.event) {
                case "ready":
                    state_5feec6f890d3485bb6f43576f47714ac = "idle";
                    viewBannerYomedia_5feec6f890d3485bb6f43576f47714ac();
                    if (window!=window.top) {
                        addEventListenerYomedia_5feec6f890d3485bb6f43576f47714ac(parent.document, 'scroll', viewBannerYomedia_5feec6f890d3485bb6f43576f47714ac);
                        addEventListenerYomedia_5feec6f890d3485bb6f43576f47714ac(parent.document, 'touchmove', viewBannerYomedia_5feec6f890d3485bb6f43576f47714ac);
                    } else {
                        addEventListenerYomedia_5feec6f890d3485bb6f43576f47714ac(document, 'scroll', viewBannerYomedia_5feec6f890d3485bb6f43576f47714ac);
                        addEventListenerYomedia_5feec6f890d3485bb6f43576f47714ac(document, 'touchmove', viewBannerYomedia_5feec6f890d3485bb6f43576f47714ac);
                    }
                    if (avlInteractModule.isMobile() && !expanded_5feec6f890d3485bb6f43576f47714ac && domWrapper.clientHeight == 0 && state_5feec6f890d3485bb6f43576f47714ac === 'idle') {
                        expanded_5feec6f890d3485bb6f43576f47714ac = true;
                        easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, parseInt(_yoHeight));
                    }
                    break;
                case "adPlay":
                    state_5feec6f890d3485bb6f43576f47714ac = "adPlay";
                    if (!expanded_5feec6f890d3485bb6f43576f47714ac) {
                        expanded_5feec6f890d3485bb6f43576f47714ac = true;
                        easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, parseInt(_yoHeight));
                    }
                    break;
                case "adPause":
                    state_5feec6f890d3485bb6f43576f47714ac = "adPause";
                    if (!expanded_5feec6f890d3485bb6f43576f47714ac) {
                        expanded_5feec6f890d3485bb6f43576f47714ac = true;
                        easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, parseInt(_yoHeight));
                    }
                    break;
                case "complete":
                    state_5feec6f890d3485bb6f43576f47714ac = "complete";
                    easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, 0);
                    break;
                case "adComplete":
                    state_5feec6f890d3485bb6f43576f47714ac = "adComplete";
                    easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, 0);
                    break;
                case "adSkipped":
                    state_5feec6f890d3485bb6f43576f47714ac = "adSkipped";
                    easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, 0);
                    break;
                case "adError":
                    error_5feec6f890d3485bb6f43576f47714ac = true;
                    easingYomedia_5feec6f890d3485bb6f43576f47714ac(domWrapper, 0);
                    break;
            }
        }
    } catch(err) {}
}

addEventListenerYomedia_5feec6f890d3485bb6f43576f47714ac(window, 'message', iFrameInreadListenerYomedia_5feec6f890d3485bb6f43576f47714ac);

var trackingViewable_5feec6f890d3485bb6f43576f47714ac = false, interval_5feec6f890d3485bb6f43576f47714ac = null, timeTrackingViewable_5feec6f890d3485bb6f43576f47714ac = 2000;

function viewableBannerYomedia_5feec6f890d3485bb6f43576f47714ac(event) {
    if (!trackingViewable_5feec6f890d3485bb6f43576f47714ac) {
        if (viewHalfBannerYomedia_5feec6f890d3485bb6f43576f47714ac(this)) {
            if (interval_5feec6f890d3485bb6f43576f47714ac === null) {
                var time = 0;
                interval_5feec6f890d3485bb6f43576f47714ac = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_5feec6f890d3485bb6f43576f47714ac) {
                        if (!trackingViewable_5feec6f890d3485bb6f43576f47714ac) {
                            viewableTrackingYomedia_5feec6f890d3485bb6f43576f47714ac();
                            trackingViewable_5feec6f890d3485bb6f43576f47714ac = true;
                            clearInterval(interval_5feec6f890d3485bb6f43576f47714ac);
                            interval_5feec6f890d3485bb6f43576f47714ac = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_5feec6f890d3485bb6f43576f47714ac()
        }
    }
}

function viewableBySzieBannerYomedia_5feec6f890d3485bb6f43576f47714ac(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_5feec6f890d3485bb6f43576f47714ac) {
        var rect = getClientRectBannerYomedia_5feec6f890d3485bb6f43576f47714ac(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_5feec6f890d3485bb6f43576f47714ac === null) {
                var time = 0;
                interval_5feec6f890d3485bb6f43576f47714ac = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_5feec6f890d3485bb6f43576f47714ac) {
                        if (!trackingViewable_5feec6f890d3485bb6f43576f47714ac) {
                            viewableTrackingYomedia_5feec6f890d3485bb6f43576f47714ac();
                            trackingViewable_5feec6f890d3485bb6f43576f47714ac = true;
                            clearInterval(interval_5feec6f890d3485bb6f43576f47714ac);
                            interval_5feec6f890d3485bb6f43576f47714ac = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_5feec6f890d3485bb6f43576f47714ac()
        }
    }
}

function destroyViewableBannerYomedia_5feec6f890d3485bb6f43576f47714ac() {
    if (interval_5feec6f890d3485bb6f43576f47714ac !== null) {
        clearInterval(interval_5feec6f890d3485bb6f43576f47714ac);
        interval_5feec6f890d3485bb6f43576f47714ac = null;
    }
}

function viewHalfBannerYomedia_5feec6f890d3485bb6f43576f47714ac(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_5feec6f890d3485bb6f43576f47714ac(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_5feec6f890d3485bb6f43576f47714ac(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_5feec6f890d3485bb6f43576f47714ac(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_5feec6f890d3485bb6f43576f47714ac(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_5feec6f890d3485bb6f43576f47714ac(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_5feec6f890d3485bb6f43576f47714ac() {
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

function getOffsetYYomedia_5feec6f890d3485bb6f43576f47714ac(obj) {
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

function getClientRectBannerYomedia_5feec6f890d3485bb6f43576f47714ac(obj) {
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
showBannerYomedia_5feec6f890d3485bb6f43576f47714ac();
