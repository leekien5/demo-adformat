getTrackingYomedia('');
var advId_26ae6e3c7c164aa08c839f0720c8839e = '5814c24020f6496d86d486d9ba2323bd';
var campId_26ae6e3c7c164aa08c839f0720c8839e = '4886170abcf2452993f34a1ee83e71d2';
var pubId_26ae6e3c7c164aa08c839f0720c8839e = '5565e302fb2e489cae28103f6c66db12';
var chanId_26ae6e3c7c164aa08c839f0720c8839e = '3d58e13cbef3493682fe6107ac13e262';
var placementId_26ae6e3c7c164aa08c839f0720c8839e = '26ae6e3c7c164aa08c839f0720c8839e';

function isValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
        alert("Please enter valid URL.");
        return false;
    } else {
        return true;
    }
}

//uuid: 4c92323787194eb89fd1782ecaa0d2e0
function getTrackingYomedia(url) {
  (new Image).src = url;
}

var yomediaId_26ae6e3c7c164aa08c839f0720c8839e = 'wrapper-mobile-interscroller-26ae6e3c7c164aa08c839f0720c8839e';
var yomediaBannerId_26ae6e3c7c164aa08c839f0720c8839e = 'yomedia_interscroller_iframe-26ae6e3c7c164aa08c839f0720c8839e';
var yomediaLandscapeId_26ae6e3c7c164aa08c839f0720c8839e = 'yomedia-mobile-landscape-interscroller-26ae6e3c7c164aa08c839f0720c8839e';
var positionInsert_26ae6e3c7c164aa08c839f0720c8839e = 'after';
var positionType_26ae6e3c7c164aa08c839f0720c8839e = 'id';
var positionName_26ae6e3c7c164aa08c839f0720c8839e = 'main';
var positionIndex_26ae6e3c7c164aa08c839f0720c8839e = '';
var iOS_26ae6e3c7c164aa08c839f0720c8839e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var wrapper_26ae6e3c7c164aa08c839f0720c8839e;
var holder_26ae6e3c7c164aa08c839f0720c8839e;
var frameHolder_26ae6e3c7c164aa08c839f0720c8839e;
var content_26ae6e3c7c164aa08c839f0720c8839e;
var banner_26ae6e3c7c164aa08c839f0720c8839e;
var viewWidth = parseInt(window.innerWidth || document.documentElement.clientWidth);
var viewHeight = parseInt(window.innerHeight || document.documentElement.clientHeight);

function showBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(s) {
    if (document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e)) {
        return false;
    }
    var clickTag = encodeURIComponent(getClickTagYomedia_26ae6e3c7c164aa08c839f0720c8839e());

    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get('b');

    if(bannerURL){
        var mainContain;
        if (positionInsert_26ae6e3c7c164aa08c839f0720c8839e === '') {
            positionInsert_26ae6e3c7c164aa08c839f0720c8839e = 'after';
        }
        if (positionType_26ae6e3c7c164aa08c839f0720c8839e === '') {
            positionType_26ae6e3c7c164aa08c839f0720c8839e = 'id';
        }
        if (positionType_26ae6e3c7c164aa08c839f0720c8839e === 'class') {
            if (positionIndex_26ae6e3c7c164aa08c839f0720c8839e === '') {
                positionIndex_26ae6e3c7c164aa08c839f0720c8839e = 0;
            } else {
                positionIndex_26ae6e3c7c164aa08c839f0720c8839e = parseInt(positionIndex_26ae6e3c7c164aa08c839f0720c8839e);
            }
            mainContain = document.getElementsByClassName(positionName_26ae6e3c7c164aa08c839f0720c8839e)[positionIndex_26ae6e3c7c164aa08c839f0720c8839e];        
        } else {
            mainContain = document.getElementById(positionName_26ae6e3c7c164aa08c839f0720c8839e);
        }
        if (!mainContain) {
            positionInsert_26ae6e3c7c164aa08c839f0720c8839e = 'after';
            mainContain =  document.currentScript || (function() {
                var script = null;
                Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(a) {
                    null === script && 0 <= a.src.indexOf("delivery.yomedia.vn") && 0 <= a.src.indexOf("pid=26ae6e3c7c164aa08c839f0720c8839e") && (script = a)
                });
                return script;
            })();
        }

        viewHeight = parseInt(window.innerHeight || document.documentElement.clientHeight);

        wrapper_26ae6e3c7c164aa08c839f0720c8839e = document.createElement("div");
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.id = yomediaId_26ae6e3c7c164aa08c839f0720c8839e;
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.position = "relative";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.minWidth = "0px";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.width = "inherit";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.maxHeight = viewHeight + "px";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + "px";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.overflow = "hidden";


        switch (positionInsert_26ae6e3c7c164aa08c839f0720c8839e) {
            case 'before':
                mainContain.parentNode.insertBefore(wrapper_26ae6e3c7c164aa08c839f0720c8839e, mainContain);
                break;
            case 'first_child':
                var firstChild = mainContain.firstChild;
                if (firstChild) {
                    mainContain.insertBefore(wrapper_26ae6e3c7c164aa08c839f0720c8839e, firstChild);
                } else {
                    mainContain.appendChild(wrapper_26ae6e3c7c164aa08c839f0720c8839e);
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
                            mainContain.childNodes[eleToInsert].parentNode.insertBefore(wrapper_26ae6e3c7c164aa08c839f0720c8839e, mainContain.childNodes[eleToInsert].nextSibling);
                            break;
                        }
                    }
                    if (!document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e)) {
                        mainContain.childNodes[Math.ceil(childNodes.length/2)].parentNode.insertBefore(wrapper_26ae6e3c7c164aa08c839f0720c8839e, mainContain.childNodes[Math.ceil(childNodes.length/2)].nextSibling);
                    }
                } else {
                    mainContain.appendChild(wrapper_26ae6e3c7c164aa08c839f0720c8839e);
                }
                break;
            case 'last_child':
                mainContain.appendChild(wrapper_26ae6e3c7c164aa08c839f0720c8839e);
                break;
            case 'after':
                var nextNode = mainContain.nextSibling;
                if (nextNode) {
                    nextNode.parentNode.insertBefore(wrapper_26ae6e3c7c164aa08c839f0720c8839e, nextNode);
                } else {
                    mainContain.parentNode.appendChild(wrapper_26ae6e3c7c164aa08c839f0720c8839e);
                }
                break;
            case 'random':
                var childNodes = mainContain.childNodes;
                if ( childNodes.length > 0) {
                    var randomIndex= Math.floor(Math.random() * childNodes.length);
                    mainContain.insertBefore(wrapper_26ae6e3c7c164aa08c839f0720c8839e, mainContain.childNodes[randomIndex]);
                } else {
                    mainContain.appendChild(wrapper_26ae6e3c7c164aa08c839f0720c8839e);
                }
                break;
            default:
                document.body.appendChild(wrapper_26ae6e3c7c164aa08c839f0720c8839e);
                break;
        }  

        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.marginLeft = "auto";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.marginRight = "auto";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.left = "0px";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.right = "0px";

        inner_26ae6e3c7c164aa08c839f0720c8839e = document.createElement("div");
        inner_26ae6e3c7c164aa08c839f0720c8839e.id = "yomedia-interscroller-inner-layer-26ae6e3c7c164aa08c839f0720c8839e";
        inner_26ae6e3c7c164aa08c839f0720c8839e.style.overflow = "hidden";
        inner_26ae6e3c7c164aa08c839f0720c8839e.style.display = "block";
        inner_26ae6e3c7c164aa08c839f0720c8839e.style.position = "absolute";
        inner_26ae6e3c7c164aa08c839f0720c8839e.style.width = "100%";
        inner_26ae6e3c7c164aa08c839f0720c8839e.style.height = "100%";
        inner_26ae6e3c7c164aa08c839f0720c8839e.style.backgroundColor = "transparent";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.appendChild(inner_26ae6e3c7c164aa08c839f0720c8839e);

        // var header_26ae6e3c7c164aa08c839f0720c8839e = document.createElement("div");
        // header_26ae6e3c7c164aa08c839f0720c8839e.id = "yomedia-interscroller-header-text-26ae6e3c7c164aa08c839f0720c8839e";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.backgroundColor = "#cdcdcd";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.color = "#ffffff";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.opacity = "0.75";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.position = "absolute";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.padding = "3px";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.zIndex = "5";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.textAlign = "center";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.width = "100%";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.fontSize = "11px";
        // header_26ae6e3c7c164aa08c839f0720c8839e.style.transform = "translateZ(0)";
        // header_26ae6e3c7c164aa08c839f0720c8839e.innerHTML = "QUẢNG CÁO";
        // inner_26ae6e3c7c164aa08c839f0720c8839e.appendChild(header_26ae6e3c7c164aa08c839f0720c8839e);

        holder_26ae6e3c7c164aa08c839f0720c8839e = document.createElement("div");
        holder_26ae6e3c7c164aa08c839f0720c8839e.id = "yomedia-interscroller-ad-holder-26ae6e3c7c164aa08c839f0720c8839e";
        holder_26ae6e3c7c164aa08c839f0720c8839e.style.position = "absolute";
        holder_26ae6e3c7c164aa08c839f0720c8839e.style.width = "100%";
        holder_26ae6e3c7c164aa08c839f0720c8839e.style.height = "100%";
        holder_26ae6e3c7c164aa08c839f0720c8839e.style.clip = "rect(auto, auto, auto, auto)";
        holder_26ae6e3c7c164aa08c839f0720c8839e.style.zIndex = "3";
        holder_26ae6e3c7c164aa08c839f0720c8839e.style.marginLeft = "0px";
        inner_26ae6e3c7c164aa08c839f0720c8839e.appendChild(holder_26ae6e3c7c164aa08c839f0720c8839e);

        frameHolder_26ae6e3c7c164aa08c839f0720c8839e = document.createElement("div");
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.id = "yomedia-interscroller-frame-holder-26ae6e3c7c164aa08c839f0720c8839e";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.position = "fixed";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.width = document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e).clientWidth + "px";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.height = "100%";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.margin = "0px";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.padding = "0px";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.top = "0px";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.left = "initial";
        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.transform = "translateZ(0px)";
        holder_26ae6e3c7c164aa08c839f0720c8839e.appendChild(frameHolder_26ae6e3c7c164aa08c839f0720c8839e);

        content_26ae6e3c7c164aa08c839f0720c8839e = document.createElement('div');
        content_26ae6e3c7c164aa08c839f0720c8839e.id = 'yomedia-interscroller-content-26ae6e3c7c164aa08c839f0720c8839e';
        content_26ae6e3c7c164aa08c839f0720c8839e.style.position = 'relative';
        content_26ae6e3c7c164aa08c839f0720c8839e.style.width = screen.width + "px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + "px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.maxWidth = document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e).clientWidth + 'px';
        content_26ae6e3c7c164aa08c839f0720c8839e.style.maxHeight = document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e).clientHeight + 'px';

        content_26ae6e3c7c164aa08c839f0720c8839e.style.overflow = "hidden";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.padding = "0px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.setProperty("box-sizing", "content-box", "important");
        content_26ae6e3c7c164aa08c839f0720c8839e.style.top = "50vh";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.lef = "0px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.transformOrigin = "left top 0px";

        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.appendChild(content_26ae6e3c7c164aa08c839f0720c8839e);

        creative_src = `https://demo.yomedia.vn/${bannerURL}?pid=26ae6e3c7c164aa08c839f0720c8839e&aid=eec540016aa9422f91cd4e1add329a2e&fid=3d378f7d1ddb4e7d9563ab585d20431e&advId=5814c24020f6496d86d486d9ba2323bd&campId=4886170abcf2452993f34a1ee83e71d2&pubId=5565e302fb2e489cae28103f6c66db12&chanId=3d58e13cbef3493682fe6107ac13e262&clk=${clickTag}`;
        banner_26ae6e3c7c164aa08c839f0720c8839e = document.createElement('iframe');
        banner_26ae6e3c7c164aa08c839f0720c8839e.src = creative_src;
        banner_26ae6e3c7c164aa08c839f0720c8839e.id = yomediaBannerId_26ae6e3c7c164aa08c839f0720c8839e;

        banner_26ae6e3c7c164aa08c839f0720c8839e.setAttribute('allowfullscreen', 'true');
        banner_26ae6e3c7c164aa08c839f0720c8839e.setAttribute('webkitallowfullscreen', 'true');
        banner_26ae6e3c7c164aa08c839f0720c8839e.setAttribute('mozallowfullscreen', 'true');

        banner_26ae6e3c7c164aa08c839f0720c8839e.frameBorder = 0;
        banner_26ae6e3c7c164aa08c839f0720c8839e.scrolling = 'no';
        banner_26ae6e3c7c164aa08c839f0720c8839e.seamless = 'seamless';
        banner_26ae6e3c7c164aa08c839f0720c8839e.height = screen.height;
        banner_26ae6e3c7c164aa08c839f0720c8839e.width = screen.width;
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + 'px';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.width = screen.width + 'px';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.maxWidth = document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e).clientWidth + 'px';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.maxHeight = viewHeight+'px';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.overflow = 'hidden';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.position = 'relative';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.transition = 'width 300ms ease-in-out 0s, height 300ms ease-in-out 0s';

        var scaleCalc = getScaleValue_26ae6e3c7c164aa08c839f0720c8839e();
        var scaleVal = "scale(" + scaleCalc + ")";

        content_26ae6e3c7c164aa08c839f0720c8839e.style.WebkitTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.MozTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.MsTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.OTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.transform = scaleVal;

        content_26ae6e3c7c164aa08c839f0720c8839e.appendChild(banner_26ae6e3c7c164aa08c839f0720c8839e);

        content_26ae6e3c7c164aa08c839f0720c8839e.style.top = "0px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.margin = "0px auto 0px 0px";

        // var footer_26ae6e3c7c164aa08c839f0720c8839e = document.createElement("div");
        // footer_26ae6e3c7c164aa08c839f0720c8839e.id ="yomedia_interscroller_footer_text";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.backgroundColor = "#cdcdcd";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.color = "#ffffff";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.opacity = "0.75";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.position = "absolute";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.padding = "3px";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.zIndex = "4";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.textAlign = "center";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.width = "100%";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.bottom = "0px";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.fontSize = "11px";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.style.transform = "translateZ(0)";
        // footer_26ae6e3c7c164aa08c839f0720c8839e.innerHTML = "KÉO XUỐNG ĐỂ XEM TIẾP BÀI VIẾT";
        // inner_26ae6e3c7c164aa08c839f0720c8839e.appendChild(footer_26ae6e3c7c164aa08c839f0720c8839e);

        /*document.addEventListener('scroll', function(){
            viewHeight = parseInt(window.innerHeight || document.documentElement.clientHeight);
            wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + "px";
        });*/

        window.addEventListener('resize', function(){
            resize();
        });

        viewBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e();
        impressionTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e();
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.addEventListener("load", viewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e.bind(wrapper_26ae6e3c7c164aa08c839f0720c8839e), false);
        if (window!=window.top) {
            parent.document.addEventListener("touchmove", viewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e.bind(wrapper_26ae6e3c7c164aa08c839f0720c8839e), false);
            parent.document.addEventListener("scroll", viewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e.bind(wrapper_26ae6e3c7c164aa08c839f0720c8839e), false);
            parent.document.addEventListener("touchmove", resize, false);
            parent.document.addEventListener("scroll", resize, false);
        } else {
            document.addEventListener("touchmove", viewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e.bind(wrapper_26ae6e3c7c164aa08c839f0720c8839e), false);
            document.addEventListener("scroll", viewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e.bind(wrapper_26ae6e3c7c164aa08c839f0720c8839e), false);
            document.addEventListener("touchmove", resize, false);
            document.addEventListener("scroll", resize, false);
        }    
    }else {
        console.log('Empty banner, please add one!');

    }
}

function setPreviousElement(obj) {
    var previousElement = obj.previousElementSibling;
    if (!previousElement) {
        return;
    }
    if (previousElement.nodeName == 'STYLE' || previousElement.nodeName == 'SCRIPT') {
        setPreviousElement(previousElement);
    } else {
        previousElement.style.position = 'relative';
        previousElement.style.zIndex = 998;
        return;
    }
}

function setNextElement(obj) {
    var nextElement = obj.nextElementSibling;
    if (!nextElement) {
        return;
    }
    if (nextElement.nodeName == 'STYLE' || nextElement.nodeName == 'SCRIPT') {
        setNextElement(nextElement);
    } else {
        nextElement.style.position = 'relative';
        nextElement.style.zIndex = 998;
        return;
    }
}

function viewBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
    var wrapper_26ae6e3c7c164aa08c839f0720c8839e = document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e);
    if (viewFullBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(wrapper_26ae6e3c7c164aa08c839f0720c8839e)) {
        // wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.visibility = 'visible';
        sendMessageToIframe_26ae6e3c7c164aa08c839f0720c8839e('yomedia_in_banner_26ae6e3c7c164aa08c839f0720c8839e');
    } else {
        // wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.visibility = 'hidden';
        sendMessageToIframe_26ae6e3c7c164aa08c839f0720c8839e('yomedia_out_banner_26ae6e3c7c164aa08c839f0720c8839e');
    }
    if (viewHalfBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(wrapper_26ae6e3c7c164aa08c839f0720c8839e)) {
        sendMessageToIframe_26ae6e3c7c164aa08c839f0720c8839e('yomedia_in_half_banner_26ae6e3c7c164aa08c839f0720c8839e');
    } else {
        sendMessageToIframe_26ae6e3c7c164aa08c839f0720c8839e('yomedia_out_half_banner_26ae6e3c7c164aa08c839f0720c8839e');
    }
}

function resize(){
    if(viewWidth != holder_26ae6e3c7c164aa08c839f0720c8839e.clientWidth){
        viewWidth = holder_26ae6e3c7c164aa08c839f0720c8839e.clientWidth;
        viewHeight = parseInt(window.innerHeight || document.documentElement.clientHeight);
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + "px";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.marginLeft = "auto";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.marginRight = "auto";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.left = "0px";
        wrapper_26ae6e3c7c164aa08c839f0720c8839e.style.right = "0px";

        frameHolder_26ae6e3c7c164aa08c839f0720c8839e.style.width = document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e).clientWidth + "px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.width = screen.width + "px";
        content_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + "px";
        
        banner_26ae6e3c7c164aa08c839f0720c8839e.height = screen.height;
        banner_26ae6e3c7c164aa08c839f0720c8839e.width = screen.width;
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.height = screen.height + 'px';
        banner_26ae6e3c7c164aa08c839f0720c8839e.style.width = screen.width + 'px';

        var scaleCalc = getScaleValue_26ae6e3c7c164aa08c839f0720c8839e();
        var scaleVal = "scale(" + scaleCalc + ")";

        content_26ae6e3c7c164aa08c839f0720c8839e.style.WebkitTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.MozTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.MsTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.OTransform = scaleVal;
        content_26ae6e3c7c164aa08c839f0720c8839e.style.transform = scaleVal;
    }
}

function sendMessageToIframe_26ae6e3c7c164aa08c839f0720c8839e($message) {
    var banner = document.getElementById(yomediaBannerId_26ae6e3c7c164aa08c839f0720c8839e);
    banner.contentWindow.postMessage($message, '*'); 
}

function getScaleValue_26ae6e3c7c164aa08c839f0720c8839e(){
    return parseInt(document.getElementById('yomedia-interscroller-ad-holder-26ae6e3c7c164aa08c839f0720c8839e').clientWidth) / document.getElementById(yomediaId_26ae6e3c7c164aa08c839f0720c8839e).clientWidth;
}
function videoStart_26ae6e3c7c164aa08c839f0720c8839e(){
    sendMessageToIframe_26ae6e3c7c164aa08c839f0720c8839e('yomedia_in_banner_26ae6e3c7c164aa08c839f0720c8839e');
}

var trackingViewable_26ae6e3c7c164aa08c839f0720c8839e = false, interval_26ae6e3c7c164aa08c839f0720c8839e = null, timeTrackingViewable_26ae6e3c7c164aa08c839f0720c8839e = 2000;

function viewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(event) {
    if (!trackingViewable_26ae6e3c7c164aa08c839f0720c8839e) {
        if (viewHalfBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(this)) {
            if (interval_26ae6e3c7c164aa08c839f0720c8839e === null) {
                var time = 0;
                interval_26ae6e3c7c164aa08c839f0720c8839e = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_26ae6e3c7c164aa08c839f0720c8839e) {
                        if (!trackingViewable_26ae6e3c7c164aa08c839f0720c8839e) {
                            viewableTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e();
                            trackingViewable_26ae6e3c7c164aa08c839f0720c8839e = true;
                            clearInterval(interval_26ae6e3c7c164aa08c839f0720c8839e);
                            interval_26ae6e3c7c164aa08c839f0720c8839e = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e()
        }
    }
}

function viewableBySzieBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj, width, height) {
    if (!obj) {
        return false;
    }
    if (!trackingViewable_26ae6e3c7c164aa08c839f0720c8839e) {
        var rect = getClientRectBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj);
        var check = true;
        if (rect && (rect.width < width || rect.height < height)) {
            check = false;
        }
        if (check && obj.offsetHeight >= height && obj.style.display != 'none' && obj.style.visibility != 'hidden') {
            if (interval_26ae6e3c7c164aa08c839f0720c8839e === null) {
                var time = 0;
                interval_26ae6e3c7c164aa08c839f0720c8839e = setInterval(function() {
                    time += 10;
                    if (time >= timeTrackingViewable_26ae6e3c7c164aa08c839f0720c8839e) {
                        if (!trackingViewable_26ae6e3c7c164aa08c839f0720c8839e) {
                            viewableTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e();
                            trackingViewable_26ae6e3c7c164aa08c839f0720c8839e = true;
                            clearInterval(interval_26ae6e3c7c164aa08c839f0720c8839e);
                            interval_26ae6e3c7c164aa08c839f0720c8839e = null;
                        }
                    }
                }, 10);
            }
        } else {
            destroyViewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e()
        }
    }
}

function destroyViewableBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
    if (interval_26ae6e3c7c164aa08c839f0720c8839e !== null) {
        clearInterval(interval_26ae6e3c7c164aa08c839f0720c8839e);
        interval_26ae6e3c7c164aa08c839f0720c8839e = null;
    }
}

function viewHalfBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj) {
    if (!obj) {
        return false;
    }
    var elementHeight = obj.clientHeight;
    var vpH = getViewPortHeightYomedia_26ae6e3c7c164aa08c839f0720c8839e(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj) + elementHeight/2;
    ybottom = elementY + elementHeight/8;
    endViewPort = vpH + windowY;
    return !(elementY > endViewPort || ybottom < windowY);
}

function viewFullBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj) {
    if (!obj) {
        return false;
    }
    var vpH = getViewPortHeightYomedia_26ae6e3c7c164aa08c839f0720c8839e(),
        windowY = window.scroller().y, // Scroll Top
        elementY = getOffsetYYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj);
    elementHeight = obj.clientHeight;
    ybottom = elementY + elementHeight;
    endViewPort = vpH + windowY;
    
    return !(elementY > endViewPort || ybottom < windowY);
}

function getViewPortHeightYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
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

function getOffsetYYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj) {
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

function getClientRectBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(obj) {
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
showBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e(1);

if (window!=window.top) {
    parent.document.addEventListener("touchmove", viewBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e, false);
    parent.document.addEventListener("scroll", viewBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e, false);
}else{
    document.addEventListener("touchmove", viewBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e, false);
    document.addEventListener("scroll", viewBannerYomedia_26ae6e3c7c164aa08c839f0720c8839e, false);
}
if (!iOS_26ae6e3c7c164aa08c839f0720c8839e){
    var iframe_banner = document.getElementById(yomediaBannerId_26ae6e3c7c164aa08c839f0720c8839e);
    if(iframe_banner){
        iframe_banner.addEventListener("touchstart", videoStart_26ae6e3c7c164aa08c839f0720c8839e, false);
    }
} 
var portraitBanner = document.getElementById(yomediaBannerId_26ae6e3c7c164aa08c839f0720c8839e);
if(portraitBanner){
    portraitBanner.addEventListener("touchstart", videoStart_26ae6e3c7c164aa08c839f0720c8839e, false);
}
function impressionTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
}

function viewableTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
}

function clickTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
    var landingPage = 'https://yomedia.vn';
    var isMac = /Mac|iPhone|iPod|iPad/.test(navigator.userAgent) && /\sSafari\//.test(navigator.userAgent);
    if (!isMac) {
        window.open(landingPage, '_blank');
    }
}

function clickTracking3rdYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
    if (typeof _YoClick != 'undefined' && avlHelperModule.validateUrl(_YoClick)) {
        getTrackingYomedia(_YoClick);
    }
}

function startTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e(){
}

function firstQuartileTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e(){
}

function midpointTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e(){
}

function thirdQuartileTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e(){
}

function completeTrackingYomedia_26ae6e3c7c164aa08c839f0720c8839e(){
    getTrackingYomedia('https://tracking.yomedia.vn/mobile?evt=007&token=a4ea0a9289c5e3c7cccf0b38dba249c9881483fab3&ord=1565776044486' + Date.now());
}

function getClickTagYomedia_26ae6e3c7c164aa08c839f0720c8839e() {
    var landingPage = '';
    landingPage = 'https://yomedia.vn';
    return landingPage;
}

function addAnEventListener_26ae6e3c7c164aa08c839f0720c8839e(obj,evt,func){
    if ('addEventListener' in obj){
        obj.addEventListener(evt,func, false);
    } else if ('attachEvent' in obj){//IE
        obj.attachEvent('on'+evt,func);
    }
}

function iFrameListener_26ae6e3c7c164aa08c839f0720c8839e(event){
    try {
        fn_26ae6e3c7c164aa08c839f0720c8839e = event.data;
        if ('string' == typeof fn_26ae6e3c7c164aa08c839f0720c8839e &&  fn_26ae6e3c7c164aa08c839f0720c8839e.toLowerCase().indexOf('yomedia') >= 0 && fn_26ae6e3c7c164aa08c839f0720c8839e.indexOf('_26ae6e3c7c164aa08c839f0720c8839e();') >= 0 ) {
            eval(fn_26ae6e3c7c164aa08c839f0720c8839e);
        }
    }
    catch(err) {}
}

var fn_26ae6e3c7c164aa08c839f0720c8839e='';
addAnEventListener_26ae6e3c7c164aa08c839f0720c8839e(window,'message',iFrameListener_26ae6e3c7c164aa08c839f0720c8839e);
// http

