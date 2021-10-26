// This is a customization for page name title
function getBannerURL() {
    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get("b");
    let formatURL = urlParams.get("f");
    let domainURL = urlParams.get("c");
    let widthURL = urlParams.get("w");
    let heightURL = urlParams.get("h");
    let source = `mobile/index.html?f=${formatURL}&b=${bannerURL}`

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
        let info = null;
        switch (formatURL) {
            case 'masthead-mb':
                info = "Mobile Masthead";
                break;

            case 'bottom-up-mb':
                info = "Mobile Bottom Up";
                break;

            case 'inpage-mb':
                info = "Mobile Interscroller (Inpage)";
                break;

            case 'firstview-mb':
                info = "Mobile Interstitial (Firstview)";
                break;

            case 'footer-mb':
                info = "Mobile Footer Expandable";
                break;

            case '3d-footer-mb':
                info = "Mobile Footer 3D Box Carousel";
                break;

            case 'wheel-mb':
                info = "Mobile Wheel";
                break;

            case 'windmill-mb':
                info = "Mobile Windmill";
                break;

            case 'pull-mb':
                info = "Mobile Pull Ads";
                break;

            case 'card-mb':
                info = "Mobile Card";
                break;

            case 'tetris-mb':
                info = "Mobile Tetris";
                break;

            case 'scratcher-mb':
                info = "Mobile Scratcher";
                break;

            case '3d-post-carousel-mb':
                info = "Mobile 3D Post Carousel";
                break;

            case 'in-native-mb':
                info = "Mobile In Image Native";
                break;

            case 'in-takeover-mb':
                info = "Mobile In Image Takeover";
                break;

            case 'in-inread-mb':
                info = "Mobile In Image With Video Inread";
                break;

            case 'in-carousel-mb':
                info = "Mobile In Image Carousel";
                break;

            case 'on-image-mb':
                info = "Mobile On Image";
                break;

            case 'medium-rectangle-mb':
                info = "Mobile Medium Rectangle (300x250)";
                break;

            case 'half-page-mb':
                info = "Mobile Half Page (300x600)";
                break;
        }
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
    }
}
getBannerURL();