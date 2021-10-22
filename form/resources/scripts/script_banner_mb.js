function getBannerName() {
    const bannerName = {
        mobile_masthead: 'Mobile Masthead',
        mobile_interscroller: 'Mobile Interscroller (Inpage)',
        mobile_interstitial: 'Mobile Interstitial (Firstview)',
        mobile_footer_expand: 'Mobile Footer Expandable',
        mobile_footer_3d_box: 'Mobile Footer 3D Box Carousel',
        mobile_footer_card: 'Mobile Card',
        mobile_footer_wheel: 'Mobile Wheel',
        mobile_footer_tetris: 'Mobile Tetris',
        mobile_footer_windmill: 'Mobile Windmill',
        mobile_footer_pull: 'Mobile Pull Ads',
        mobile_footer_scratcher: 'Mobile Scratcher',
        mobile_bottom_up: 'Mobile Bottom Up',
        mobile_3d_post_carousel: 'Mobile 3D Post Carousel',
        mobile_in_image_native: 'Mobile In Image Native',
        mobile_in_image_takeover: 'Mobile In Image Takeover',
        mobile_in_image_with_video_inread: 'Mobile In Image With Video Inread',
        mobile_in_image_carousel: 'Mobile In Image Carousel',
        mobile_on_image: 'Mobile On Image',
        mobile_iab_medium_rectangle: 'Mobile Medium Rectangle (300x250)',
        mobile_iab_half_page: 'Mobile Half Page (300x600)',
    }
    return bannerName;
}

function getFilePath() {
    const filePath = {
        mobile_masthead: '../../../form/deliveries/mobile/mobile_masthead.js',
        mobile_interscroller: '../../../form/deliveries/mobile/mobile_interscroller.js',
        mobile_interstitial: '../../../form/deliveries/mobile/mobile_interstitial.js',
        mobile_footer_expand: '../../../form/deliveries/mobile/mobile_footer_expand.js',
        mobile_footer_3d_box: '../../../form/deliveries/mobile/mobile_footer_3d_box.js',
        mobile_footer_card: '../../../form/deliveries/mobile/mobile_footer_card.js',
        mobile_footer_wheel: '../../../form/deliveries/mobile/mobile_footer_wheel.js',
        mobile_footer_tetris: '../../../form/deliveries/mobile/mobile_footer_tetris.js',
        mobile_footer_windmill: '../../../form/deliveries/mobile/mobile_footer_windmill.js',
        mobile_footer_pull: '../../../form/deliveries/mobile/mobile_footer_pull.js',
        mobile_footer_scratcher: '../../../form/deliveries/mobile/mobile_footer_scratcher.js',
        mobile_bottom_up: '../../../form/deliveries/mobile/mobile_bottom_up.js',
        mobile_3d_post_carousel: '../../../form/deliveries/mobile/mobile_3d_post_carousel.js',
        mobile_in_image_native: '../../../form/deliveries/mobile/mobile_in_image_takeover.js',
        mobile_in_image_takeover: '../../../form/deliveries/mobile/mobile_in_image_takeover.js',
        mobile_in_image_with_video_inread: '../../../form/deliveries/mobile/mobile_in_image_with_video_inread.js',
        mobile_in_image_carousel: '../../../form/deliveries/mobile/mobile_in_image_carousel.js',
        mobile_on_image: '../../../form/deliveries/mobile/mobile_on_image.js',
        mobile_iab_medium_rectangle: '../../../form/deliveries/mobile/mobile_iab_medium_rectangle.js',
        mobile_iab_half_page: '../../../form/deliveries/mobile/mobile_iab_half_page.js',
    }
    return filePath;
}

function generateScript() {
    let urlParams = new URLSearchParams(window.location.search);
    let bannerURL = urlParams.get('b');
    let formatURL = urlParams.get('f');
    let adPlacement = null;

    if (bannerURL && formatURL) { 
        const bannerName = this.getBannerName();
        const filePath = this.getFilePath();
        let scriptPlacement = document.createElement('script');

        switch (formatURL) {
            case 'masthead-mb':
                document.title = bannerName.mobile_masthead;
                scriptPlacement.src = filePath.mobile_masthead;
                document.getElementById('ads-billboard').appendChild(scriptPlacement);		
                break;
    
            case 'inpage-mb':
                document.title = bannerName.mobile_interscroller;
                scriptPlacement.src = filePath.mobile_interscroller;
                document.getElementById('ads-inpage').appendChild(scriptPlacement);		
                break;
    
            case 'firstview-mb':
                document.title = bannerName.mobile_interstitial;
                scriptPlacement.src = filePath.mobile_interstitial;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'footer-mb':
                document.title = bannerName.mobile_footer_expand;
                scriptPlacement.src = filePath.mobile_footer_expand;
                document.body.appendChild(scriptPlacement);
                break;
    
            case '3d-footer-mb':
                document.title = bannerName.mobile_footer_3d_box;
                scriptPlacement.src = filePath.mobile_footer_3d_box;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'card-mb':
                document.title = bannerName.mobile_footer_card;
                scriptPlacement.src = filePath.mobile_footer_card;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'wheel-mb':
                document.title = bannerName.mobile_footer_wheel;
                scriptPlacement.src = filePath.mobile_footer_wheel;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'tetris-mb':
                document.title = bannerName.mobile_footer_tetris;
                scriptPlacement.src = filePath.mobile_footer_tetris;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'scratcher-mb':
                document.title = bannerName.mobile_footer_scratcher;
                scriptPlacement.src = filePath.mobile_footer_scratcher;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'windmill-mb':
                document.title = bannerName.mobile_footer_windmill;
                scriptPlacement.src = filePath.mobile_footer_windmill;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'pull-mb':
                document.title = bannerName.mobile_footer_pull;
                scriptPlacement.src = filePath.mobile_footer_pull;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'bottom-up-mb':
                document.title = bannerName.mobile_bottom_up;
                scriptPlacement.src = filePath.mobile_bottom_up;
                document.body.appendChild(scriptPlacement);
                break;
    
            case '3d-post-carousel-mb':
                document.title = bannerName.mobile_3d_post_carousel;
                scriptPlacement.src = filePath.mobile_3d_post_carousel;
                document.getElementById('ads-3d-post-carousel').appendChild(scriptPlacement);		
                break;
    
            case 'in-native-mb':
                document.title = bannerName.mobile_in_image_native;
                scriptPlacement.src = filePath.mobile_in_image_native;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'in-takeover-mb':
                document.title = bannerName.mobile_in_image_takeover;
                scriptPlacement.src = filePath.mobile_in_image_takeover;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'in-inread-mb':
                document.title = bannerName.mobile_in_image_with_video_inread;
                scriptPlacement.src = filePath.mobile_in_image_with_video_inread;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'in-carousel-mb':
                document.title = bannerName.mobile_in_image_carousel;
                scriptPlacement.src = filePath.mobile_in_image_carousel;
                document.body.appendChild(scriptPlacement);
                break;
    
            case 'on-image-mb':
                document.title = bannerName.mobile_on_image;
                scriptPlacement.src = filePath.mobile_on_image;
                document.getElementById('ads-on-image').appendChild(scriptPlacement);		
                break;
    
            case 'medium-rectangle-mb':
                document.title = bannerName.mobile_iab_medium_rectangle;
                scriptPlacement.src = filePath.mobile_iab_medium_rectangle;
                document.getElementById('ads-iab').appendChild(scriptPlacement);		
                break;
    
            case 'half-page-mb':
                document.title = bannerName.mobile_iab_half_page;
                scriptPlacement.src = filePath.mobile_iab_half_page;
                document.getElementById('ads-iab').appendChild(scriptPlacement);		
                break;
        }
    }
}
generateScript();
