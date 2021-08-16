// This is a customization for page name title
function getBannerURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var bannerURL = urlParams.get("b");
    var formatURL = urlParams.get("f");
    var domainURL = urlParams.get("c");
    var widthURL = urlParams.get("w");
    var heightURL = urlParams.get("h");
    var source = `mobile/index.html?f=${formatURL}&b=${bannerURL}`

    if (bannerURL && formatURL || domainURL) {
        document.getElementById("iframe_content").src = source;
    }
    if (domainURL) {
        document.getElementById("iframe_content").src = source + `&c=${domainURL}`;
    }
    if (widthURL || heightURL) {
        document.getElementById("iframe_content").src = source + `&w=${widthURL}&h=${heightURL}`;
    }

    if (formatURL) {
        switch (formatURL) {
            case 'masthead-mb':
                var info = "Mobile Masthead";
                break;

            case 'bottom-up-mb':
                var info = "Mobile Bottom Up";
                break;

            case 'inpage-mb':
                var info = "Mobile Interscroller (Inpage)";
                break;

            case 'firstview-mb':
                var info = "Mobile Interstitial (Firstview)";
                break;

            case 'footer-mb':
                var info = "Mobile Footer";
                break;

            case 'footer-expand-mb':
                var info = "Mobile Footer Expandable";
                break;

            case 'wheel-mb':
                var info = "Mobile Wheel";
                break;

            case 'windmill-mb':
                var info = "Mobile Windmill";
                break;

            case 'pull-mb':
                var info = "Mobile Pull Ads";
                break;

            case '3d-footer-mb':
                var info = "Mobile 3D Footer";
                break;

            case 'card-mb':
                var info = "Mobile Card";
                break;

            case 'tetris-mb':
                var info = "Mobile Tetris";
                break;

            case 'scratcher-mb':
                var info = "Mobile Scratcher";
                break;

            case '3d-post-carousel-mb':
                var info = "Mobile 3D Post Carousel";
                break;

            case 'in-native-mb':
                var info = "Mobile In Image Native";
                break;

            case 'in-takeover-mb':
                var info = "Mobile In Image Takeover";
                break;

            case 'in-inread-mb':
                var info = "Mobile In Image With Video Inread";
                break;

            case 'in-carousel-mb':
                var info = "Mobile In Image Carousel";
                break;

            case 'on-image-mb':
                var info = "Mobile On Image";
                break;

            case 'medium-rectangle-mb':
                var info = "Mobile Medium Rectangle (300x250)";
                break;

            case 'half-page-mb':
                var info = "Mobile Half Page (300x600)";
                break;
        }
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
    }
}
getBannerURL();