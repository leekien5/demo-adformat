let urlParams = new URLSearchParams(window.location.search);
let bannerURL = urlParams.get('b');
let formatURL = urlParams.get('f');
let fileDirectory;
let adPlacement = null;
if (bannerURL && formatURL) {
    //Get fireDirectory name from file directories
    const fileName = {
        masthead: '../../../form/deliveries/mobile/mobile_masthead.js',
        interscroller: '../../../form/deliveries/mobile/mobile_interscroller.js',
        firstview: '../../../form/deliveries/mobile/mobile_interstitial.js',
        footer: '../../../form/deliveries/mobile/mobile_footer_expand.js',
        footer3dBox: '../../../form/deliveries/mobile/mobile_footer_3d_box.js',
        card: '../../../form/deliveries/mobile/mobile_footer_card.js',
        wheel: '../../../form/deliveries/mobile/mobile_footer_wheel.js',
        tetris: '../../../form/deliveries/mobile/mobbile_footer_tetris.js',
        windmill: '../../../form/deliveries/mobile/mobile_footer_windmill.js',
        pull: '../../../form/deliveries/mobile/mobile_footer_pull.js',
        scratcher: '../../../form/deliveries/mobile/mobile_footer_scratcher.js',
        // bottomUpMb: '../../../form/deliveries/mb_bottom_up.js',
        // threeDPostCarousel: '../../../form/deliveries/pc_mb_3d_post_carousel.js',
        inImageTakeover: '../../../form/deliveries/mobile/mobile_in_image_takeover.js',
        // inImageWithInread: '../../../form/deliveries/pc_mb_in_image_inread.js',
        // inImageCarousel: '../../../form/deliveries/pc_mb_in_image_carousel.js',
        onImageMb: '../../../form/deliveries/mobile/mobile_on_image.js',
        // iab300x250: '../../../form/deliveries/pc_mb_iab_300x250.js',
        // iab300x600: '../../../form/deliveries/pc_mb_iab_300x600.js',
    }
    //Switching cases
    let scriptPlacement = document.createElement('script');
    switch (formatURL) {
        case 'masthead-mb':
            document.title = "Mobile Masthead";
            fileDirectory = fileName.masthead;
            adPlacement = document.getElementById('ads-billboard');
            break;

        case 'inpage-mb':
            document.title = "Mobile Interscroller (Inpage)";
            fileDirectory = fileName.interscroller;
            adPlacement = document.getElementById('ads-inpage');
            break;

        case 'firstview-mb':
            document.title = "Mobile Interstitial (Firstview)";
            fileDirectory = fileName.firstview;
            break;

        case 'footer-mb':
            document.title = "Mobile Footer Expandable";
            fileDirectory = fileName.footer;
            break;

        case '3d-footer-mb':
            document.title = "Mobile Footer 3D Box Carousel";
            fileDirectory = fileName.footer3dBox;
            break;

        case 'card-mb':
            document.title = "Mobile Card";
            fileDirectory = fileName.card;
            break;

        case 'wheel-mb':
            document.title = "Mobile Wheel";
            fileDirectory = fileName.wheel;
            break;

        case 'tetris-mb':
            document.title = "Mobile Tetris";
            fileDirectory = fileName.tetris;
            break;

        case 'scratcher-mb':
            document.title = "Mobile Scratcher";
            fileDirectory = fileName.scratcher;
            break;

        case 'windmill-mb':
            document.title = "Mobile Windmill";
            fileDirectory = fileName.windmill;
            break;

        case 'pull-mb':
            document.title = "Mobile Pull Ads";
            fileDirectory = fileName.pull;
            break;

        case 'bottom-up-mb':
            document.title = "Mobile Bottom Up";
            fileDirectory = fileName.bottomUpMb;
            break;

        case '3d-post-carousel-mb':
            document.title = "Mobile 3D Post Carousel";
            fileDirectory = fileName.threeDPostCarousel;
            adPlacement = document.getElementById('ads-3d-post-carousel');
            break;

        case 'in-native-mb':
            document.title = "Mobile In Image Native";
            fileDirectory = fileName.inImageTakeover;
            break;

        case 'in-takeover-mb':
            document.title = "Mobile In Image Takeover";
            fileDirectory = fileName.inImageTakeover;
            break;

        case 'in-inread-mb':
            document.title = "Mobile In Image With Video Inread";
            fileDirectory = fileName.inImageWithInread;
            break;

        case 'in-carousel-mb':
            document.title = "Mobile In Image Carousel";
            fileDirectory = fileName.inImageCarousel;
            break;

        case 'on-image-mb':
            document.title = "Mobile On Image";
            fileDirectory = fileName.onImageMb;
            adPlacement = document.getElementById('ads-on-image');
            break;

        case 'medium-rectangle-mb':
            document.title = "Mobile Medium Rectangle (300x250)";
            fileDirectory = fileName.iab300x250;
            adPlacement = document.getElementById('ads-iab');
            break;

        case 'half-page-mb':
            document.title = "Mobile Half Page (300x600)";
            fileDirectory = fileName.iab300x600;
            adPlacement = document.getElementById('ads-iab');
            break;
    }
     //Replace div id with script source
     scriptPlacement.src = fileDirectory;
     //Append script to body
     document.body.appendChild(scriptPlacement);
}