function detectmob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        let url = window.location.href;
        let urlParams = new URLSearchParams(window.location.search);
        let bannerURL = urlParams.get("b");
        let formatURL = urlParams.get("f");
        let p = url.search("index.html?f=");
        url = url.substring(0, p);

        if (bannerURL && formatURL) {
            window.location = `${url}mobile/index.html?f=${formatURL}&b=` + encodeURIComponent(`${bannerURL}`);
        } else {
            window.location = `${url}mobile/index.html`;
        }
    }
}
detectmob();