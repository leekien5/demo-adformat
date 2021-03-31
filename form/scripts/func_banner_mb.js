let urlParams = new URLSearchParams(window.location.search);
let bannerURL = urlParams.get('b');
let formatURL = urlParams.get('f');
let fileDirectory;
let adPlacement = null;
if(bannerURL && formatURL) {
	//Get fireDirectory name from file directories
	const fileName = {
		masthead: '../../../form/deliveries/masthead.js',
		inpage: '../../../form/deliveries/inpage.js',
		firstview: '../../../form/deliveries/firstview.js',
		footer: '../../../form/deliveries/footer.js',
		threeDPostCarousel: '../../../form/deliveries/3dPostCarousel.js',
		inImageTakeover: '../../../form/deliveries/inImageTakeover.js',
		inImageWithInread: '../../../form/deliveries/inImageInread.js',
		inImageCarousel: '../../../form/deliveries/inImageCarousel.js',
		onImageMb: '../../../form/deliveries/onImage.js',
		iab300x250: '../../../form/deliveries/iab300x250.js',
		iab300x600: '../../../form/deliveries/iab300x600.js',
	}
	//Switching cases
	switch(formatURL) {
		case 'masthead-mb':
			document.title = "Masthead Mobile";
			fileDirectory = fileName.masthead;
			adPlacement = document.getElementById('ads-billboard');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);		
			break;

		case 'inpage':
			document.title = "Mobile Interscroller (Inpage)";
			fileDirectory = fileName.inpage;
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
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'footer':
			document.title = "Mobile Footer";
			fileDirectory = fileName.footer;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case '3d-post-carousel':
			document.title = "3D Post Carousel";
			fileDirectory = fileName.threeDPostCarousel;
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
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-takeover':
			document.title = "In Image Takeover";
			fileDirectory = fileName.inImageTakeover;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'in-inread':
			document.title = "In Image With Video Inread";
			fileDirectory = fileName.inImageWithInread;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-carousel':
			document.title = "In Image Carousel";
			fileDirectory = fileName.inImageCarousel;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
			
		case 'on-image-mb':
			document.title = "Mobile On Image";
			fileDirectory = fileName.onImageMb;
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
			adPlacement = document.getElementById('ads-iab');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;
	}
}