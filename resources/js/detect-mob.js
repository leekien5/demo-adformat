function detectmob() {
    var url = window.location.href;
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get("b");
    var formatURL = urlParams.get("f");
    var domainURL = urlParams.get("c");
    var widthURL = urlParams.get("w");
    var heightURL = urlParams.get("h");
    
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
        var p = url.search("index.html?f=");
        url = url.substring(0, p);
        if (bannerURL && formatURL) {
            sourceURL = `${url}mobile/index.html?f=${formatURL}&b=` + encodeURIComponent(`${bannerURL}`);
        }
        if (domainURL) {
            sourceURL = `${sourceURL}&c=${domainURL}`
        }
        if (widthURL) {
            sourceURL = `${sourceURL}&w=${widthURL}`
        }
        if (heightURL) {
            sourceURL = `${sourceURL}&h=${heightURL}`
        }
        window.location = sourceURL;
    } 
}
detectmob();