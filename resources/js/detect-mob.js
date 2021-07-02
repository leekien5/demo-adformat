function detectmob() {
    var url = window.location.href;
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get("b");
    var formatURL = urlParams.get("f");
    var domainURL = urlParams.get("c");
    var widthURL = urlParams.get("w");
    var heightURL = urlParams.get("h");
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
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