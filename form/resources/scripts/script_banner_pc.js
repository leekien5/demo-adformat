var a = document.getElementById('ads-balloon');
var b = document.getElementById('ads-bottom-up');
var c = document.getElementById('ads-big-balloon');
var d = document.getElementById('ads-balloon-popup');

function removeAllIframes () {
	a.remove(); b.remove(); c.remove(); d.remove();
}

function removeIframesForBalloon () {
	b.remove(); c.remove(); d.remove();
}

function removeIframesForBigBalloon () {
	a.remove(); b.remove(); d.remove();
}

function removeIframesForBottomUp () {
	a.remove(); c.remove(); d.remove();
}

function removeIframesForBalloonPopUp () {
	a.remove(); b.remove(); c.remove();
}
	
function getFilePath() {
	const filePath = {
		display_masthead: '../../form/deliveries/display/display_masthead.js',
		display_balloon: '../../form/deliveries/display/display_balloon.js',
		display_balloon_popup: '../../form/deliveries/display/display_balloon_popup.js',
		display_big_balloon: '../../form/deliveries/display/display_big_balloon.js',
		display_bottom_up: '../../form/deliveries/display/display_bottom_up.js',
		display_3d_post_carousel: '../../form/deliveries/display/display_3d_post_carousel.js',
		display_in_image_native: '../../form/deliveries/display/display_in_image_native.js',
		display_in_image_takeover: '../../form/deliveries/display/display_in_image_takeover.js',
		display_in_image_with_video_inread: '../../form/deliveries/display/display_in_image_with_video_inread.js',
		display_in_image_carousel: '../../form/deliveries/display/display_in_image_carousel.js',
		display_on_image: '../../form/deliveries/display/display_on_image.js',
		display_iab_medium_rectangle: '../../form/deliveries/display/display_iab_medium_rectangle.js',
		display_iab_half_page: '../../form/deliveries/display/display_iab_half_page.js',
	}
	return filePath;
}

function getBannerName() {
	const bannerName = {
		display_masthead: "Display Masthead (Billboard)",
		display_balloon: "Display Balloon",
		display_balloon: "Display Balloon Popup Expandable",
		display_big_balloon: "Display Big Balloon",
		display_bottom_up: "Display Bottom Up",
		display_3d_post_carousel: "Display 3D Post Carousel",
		display_in_image_native: "Display In Image Native",
		display_in_image_takeover: "Display In Image Takeover",
		display_in_image_with_video_inread: "Display In Image With Video Inread",
		display_in_image_carousel: "Display In Image Carousel",
		display_on_image: "Display On Image",
		display_iab_medium_rectangle: "Display IAB Medium Rectangle (300x250)",
		display_iab_half_page: "Display IAB Half Page (300x600)",
	}
	return bannerName;
}

function generateScript() {
	let urlParams = new URLSearchParams(window.location.search);
	let bannerURL = urlParams.get('b');
	let formatURL = urlParams.get('f');
	let domainURL = urlParams.get('c');
		
	if (domainURL == null || domainURL == 'null') {
		domainURL = 'demo';
	}

	if (bannerURL && formatURL) {
		const filePath = this.getFilePath();
		const bannerName = this.getBannerName();
		//Switching cases
		let scriptPlacement = document.createElement('script');
		switch(formatURL) {
			case 'masthead-pc':
				document.title = bannerName.display_masthead;
				scriptPlacement.src = filePath.display_masthead;
				document.getElementById('ads-billboard').appendChild(scriptPlacement);		
				removeAllIframes();
				break;
	
			case 'balloon-pc':
				document.title = bannerName.display_balloon;
				scriptPlacement.src = filePath.display_balloon;
				document.getElementById('yomedia-destination-197').appendChild(scriptPlacement);
				removeIframesForBalloon();
				break;

			case 'balloon-popup-pc':
				document.title = bannerName.display_balloon_popup;
				scriptPlacement.src = filePath.display_balloon_popup;
				document.getElementById('yomedia-destination-197').appendChild(scriptPlacement);
				removeIframesForBalloonPopUp();
				break;
			
			case 'big-balloon-pc':
				document.title = bannerName.display_big_balloon;
				scriptPlacement.src = filePath.display_big_balloon;
				document.getElementById('yomedia-destination-197').appendChild(scriptPlacement);
				removeIframesForBigBalloon();
				break;
			
			case 'bottom-up-pc':
				document.title = bannerName.display_bottom_up;
				scriptPlacement.src = filePath.display_bottom_up;
				document.getElementById('yomedia-destination-197').appendChild(scriptPlacement);
				removeIframesForBottomUp();	
				break;
				
			case '3d-post-carousel-pc':
				document.title = bannerName.display_3d_post_carousel;
				scriptPlacement.src = filePath.display_3d_post_carousel;
				document.getElementById('ads-3d-post-carousel').appendChild(scriptPlacement);
				removeAllIframes();
				break;
	
			case 'in-native-pc':
				document.title = bannerName.display_in_image_native;
				scriptPlacement.src = filePath.display_in_image_native;
				document.body.appendChild(scriptPlacement);
				removeAllIframes();
				break;
	
			case 'in-takeover-pc':
				document.title = bannerName.display_in_image_takeover;
				scriptPlacement.src = filePath.display_in_image_takeover;
				document.body.appendChild(scriptPlacement);
				removeAllIframes();
				break;
			
			case 'in-inread-pc':
				document.title = bannerName.display_in_image_with_video_inread;
				scriptPlacement.src = filePath.display_in_image_with_video_inread;
				document.body.appendChild(scriptPlacement);
				removeAllIframes();
				break;
	
			case 'in-carousel-pc':
				document.title = bannerName.display_in_image_carousel;
				scriptPlacement.src = filePath.display_in_image_carousel;
				document.body.appendChild(scriptPlacement);
				removeAllIframes();
				break;
			
			case 'on-image-pc':
				document.title = bannerName.display_on_image;
				scriptPlacement.src = filePath.display_on_image;
				document.getElementById('ads-on-image').appendChild(scriptPlacement);	
				removeAllIframes();
				break;
			
			case 'medium-rectangle-pc':
				document.title = bannerName.display_iab_medium_rectangle;
				scriptPlacement.src = filePath.display_iab_medium_rectangle;
				document.getElementById('ads-iab').appendChild(scriptPlacement);	
				removeAllIframes();
				break;
			
			case 'half-page-pc':
				document.title = bannerName.display_iab_half_page;
				scriptPlacement.src = filePath.display_iab_half_page;
				document.getElementById('ads-iab').appendChild(scriptPlacement);	
				removeAllIframes();
				break;
		}
	}
}
generateScript();