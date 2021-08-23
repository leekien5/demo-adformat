var urlParams = new URLSearchParams(window.location.search);
var bannerURL = urlParams.get('b');
var formatURL = urlParams.get('f');
var domainURL = urlParams.get('c');

var fileDirectory;
var adPlacement = null;

if(domainURL == null || domainURL == 'null') {
	domainURL = 'demo';
}

function removeClass (placementBalloon, placementBottomUp) {
	placementBalloon = document.getElementById('ads-balloon');
	placementBalloon.remove();
	placementBottomUp = document.getElementById('ads-bottom-up');
	placementBottomUp.remove();
	placementBottomUp = document.getElementById('ads-big-balloon');
	placementBottomUp.remove();
}

if(bannerURL && formatURL) {
	//Get fireDirectory name from file directories
	const fileName = {
		masthead: '../../form/deliveries/pc_masthead.js',
		balloon: '../../form/deliveries/pc_balloon.js',
		balloonPopUp: '../../form/deliveries/pc_balloon_popup.js',
		bigBalloon: '../../form/deliveries/pc_big_balloon.js',
		bottomUp: '../../form/deliveries/pc_bottom_up.js',
		threeDPostCarousel: '../../form/deliveries/pc_mb_3d_post_carousel.js',
		inImageTakeover: '../../form/deliveries/pc_mb_in_image_takeover.js',
		inImageWithInread: '../../form/deliveries/pc_mb_in_image_inread.js',
		inImageCarousel: '../../form/deliveries/pc_mb_in_image_carousel.js',
		onImagePc: '../../form/deliveries/pc_mb_on_image.js',
		iab300x250: '../../form/deliveries/pc_mb_iab_300x250.js',
		iab300x600: '../../form/deliveries/pc_mb_iab_300x600.js',
	}

	//Switching cases
	switch(formatURL) {
		case 'masthead-pc':
			document.title = "Display Masthead (Billboard)";
			fileDirectory = fileName.masthead;
			removeClass();
			adPlacement = document.getElementById('ads-billboard');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);		
			break;

		case 'balloon-pc':
			console.log("Banner: ", bannerURL);
			document.title = "Display Balloon";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-balloon').src = `https://${domainURL}.yomedia.vn/` + `${bannerURL}?pid=104`;
			//Get file javascript
			fileDirectory = fileName.balloon;
			placementBalloonPopUp = document.getElementById('ads-balloon-popup');
			placementBalloonPopUp.remove();	
			placementBottomUp = document.getElementById('ads-bottom-up');
			placementBottomUp.remove();		
			placementBigBalloon = document.getElementById('ads-big-balloon');
			placementBigBalloon.remove();		
			adPlacement = document.getElementById('yomedia-destination-197');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;

		case 'balloon-popup-pc':
			console.log("Banner: ", bannerURL);
			document.title = "Display Balloon Popup Expandable";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-balloon-popup').src = `https://${domainURL}.yomedia.vn/` + `${bannerURL}?pid=104`;
			//Get file javascript
			fileDirectory = fileName.balloonPopUp;
			placementBalloon = document.getElementById('ads-balloon');
			placementBalloon.remove();	
			placementBottomUp = document.getElementById('ads-bottom-up');
			placementBottomUp.remove();		
			placementBigBalloon = document.getElementById('ads-big-balloon');
			placementBigBalloon.remove();		
			adPlacement = document.getElementById('yomedia-destination-197');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
		
		case 'big-balloon-pc':
			console.log("Banner: ", bannerURL);
			document.title = "Big Display Balloon";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-big-balloon').src = `https://${domainURL}.yomedia.vn/` + `${bannerURL}?pid=104`;
			//Get file javascript
			fileDirectory = fileName.bigBalloon;
			placementBalloonPopUp = document.getElementById('ads-balloon-popup');
			placementBalloonPopUp.remove();	
			placementBottomUp = document.getElementById('ads-bottom-up');
			placementBottomUp.remove();		
			placementBalloon = document.getElementById('ads-balloon');
			placementBalloon.remove();		
			adPlacement = document.getElementById('yomedia-destination-197');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
		
		case 'bottom-up-pc':
			console.log("Banner: ", bannerURL);
			document.title = "Display Bottom Up";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-bottom-up').src = `https://${domainURL}.yomedia.vn/` + `${bannerURL}?pid=104&ord=12`;
			//Get file javascript
			fileDirectory = fileName.bottomUp;
			adPlacement = document.getElementById('yomedia-destination-197');
			placementBalloon = document.getElementById('ads-balloon');
			placementBalloon.remove();		
			placementBigBalloon = document.getElementById('ads-big-balloon');
			placementBigBalloon.remove();		
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
			
		case '3d-post-carousel-pc':
			document.title = "Display 3D Post Carousel";
			fileDirectory = fileName.threeDPostCarousel;
			removeClass();
			adPlacement = document.getElementById('ads-3d-post-carousel');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;

		case 'in-native-pc':
			document.title = "Display In Image Native";
			fileDirectory = fileName.inImageTakeover;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-takeover-pc':
			document.title = "Display In Image Takeover";
			fileDirectory = fileName.inImageTakeover;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'in-inread-pc':
			document.title = "Display In Image With Video Inread";
			fileDirectory = fileName.inImageWithInread;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-carousel-pc':
			document.title = "Display In Image Carousel";
			fileDirectory = fileName.inImageCarousel;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'on-image-pc':
			document.title = "Display On Image";
			fileDirectory = fileName.onImagePc;
			removeClass();
			adPlacement = document.getElementById('ads-on-image');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;
		
		case 'medium-rectangle-pc':
			document.title = "Medium Rectangle (300x250)";
			fileDirectory = fileName.iab300x250;
			removeClass();
			adPlacement = document.getElementById('ads-iab');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;
		
		case 'half-page-pc':
			document.title = "Half Page (300x600)";
			fileDirectory = fileName.iab300x600;
			removeClass();
			adPlacement = document.getElementById('ads-iab');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;
	}
}