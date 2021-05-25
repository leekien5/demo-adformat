let urlParams = new URLSearchParams(window.location.search);
let bannerURL = urlParams.get('b');
let formatURL = urlParams.get('f');

let fileDirectory;
let adPlacement = null;

function removeClass (placementBalloon, placementBottomUp) {
	placementBalloon = document.getElementById('ads-balloon');
	placementBalloon.remove();
	placementBottomUp = document.getElementById('ads-bottom-up');
	placementBottomUp.remove();
}

if(bannerURL && formatURL) {
	//Get fireDirectory name from file directories
	const fileName = {
		masthead: '../../form/deliveries/masthead.js',
		billboard: '../../form/deliveries/billboard.js',
		balloon: '../../form/deliveries/balloon.js',
		bottomUp: '../../form/deliveries/bottomUp.js',
		inpage: '../../form/deliveries/inpage.js',
		firstview: '../../form/deliveries/firstview.js',
		footer: '../../form/deliveries/footer.js',
		threeDPostCarousel: '../../form/deliveries/3dPostCarousel.js',
		inImageTakeover: '../../form/deliveries/inImageTakeover.js',
		inImageWithInread: '../../form/deliveries/inImageInread.js',
		inImageCarousel: '../../form/deliveries/inImageCarousel.js',
		onImagePc: '../../form/deliveries/onImage.js',
		onImageMb: '../../form/deliveries/onImage.js',
		iab300x250: '../../form/deliveries/iab300x250.js',
		iab300x600: '../../form/deliveries/iab300x600.js',
	}

	//Switching cases
	switch(formatURL) {
		case 'masthead-mb':
			document.title = "Mobile Masthead";
			fileDirectory = fileName.masthead;
			removeClass();
			adPlacement = document.getElementById('ads-billboard');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);		
			break;
		
		case 'billboard':
			document.title = "Display Masthead (Billboard)";
			fileDirectory = fileName.billboard;
			removeClass();
			adPlacement = document.getElementById('ads-billboard');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);		
			break;

		case 'balloon':
			document.title = "Display Balloon";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-balloon').src = `https://demo.yomedia.vn/` + `${bannerURL}?pid=104`;
			//Get file javascript
			fileDirectory = fileName.balloon;
			placementBottomUp = document.getElementById('ads-bottom-up');
			placementBottomUp.remove();		
			adPlacement = document.getElementById('yomedia-destination-197');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
		
		case 'bottom-up':
			document.title = "Display Bottom Up";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-bottom-up').src = `https://demo.yomedia.vn/` + `${bannerURL}?pid=104&ord=12`;
			//Get file javascript
			fileDirectory = fileName.bottomUp;
			adPlacement = document.getElementById('yomedia-destination-197');
			placementBalloon = document.getElementById('ads-balloon');
			placementBalloon.remove();		
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
			
		case 'inpage':
			document.title = "Mobile Interscroller (Inpage)";
			fileDirectory = fileName.inpage;
			removeClass();
			adPlacement = document.getElementById('ads-inpage');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;

		case 'firstview':
			document.title = "Mobile Interstitial (Firstview)";
			fileDirectory = fileName.firstview;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'footer':
			document.title = "Mobile Footer";
			fileDirectory = fileName.footer;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case '3d-post-carousel':
			document.title = "3D Post Carousel";
			fileDirectory = fileName.threeDPostCarousel;
			removeClass();
			adPlacement = document.getElementById('ads-3d-post-carousel');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;

		case 'in-native':
			document.title = "In Image Native";
			fileDirectory = fileName.inImageTakeover;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-takeover':
			document.title = "In Image Takeover";
			fileDirectory = fileName.inImageTakeover;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'in-inread':
			document.title = "In Image With Video Inread";
			fileDirectory = fileName.inImageWithInread;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-carousel':
			document.title = "In Image Carousel";
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
			
		case 'on-image-mb':
			document.title = "Mobile On Image";
			fileDirectory = fileName.onImageMb;
			removeClass();
			adPlacement = document.getElementById('ads-on-image');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
		
		case 'iab-medium-rectangle':
			document.title = "IAB Medium Rectangle (300x250)";
			fileDirectory = fileName.iab300x250;
			removeClass();
			adPlacement = document.getElementById('ads-iab');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;
		
		case 'iab-half-page':
			document.title = "IAB Half Page (300x600)";
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