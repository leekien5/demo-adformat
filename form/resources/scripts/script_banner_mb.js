let urlParams = new URLSearchParams(window.location.search);
let bannerURL = urlParams.get('b');
let formatURL = urlParams.get('f');
let fileDirectory;
let adPlacement = null;
if(bannerURL && formatURL) {
	//Get fireDirectory name from file directories
	const fileName = {
		masthead: '../../../form/deliveries/mb_masthead.js',
		inpage: '../../../form/deliveries/mb_inpage.js',
		firstview: '../../../form/deliveries/mb_firstview.js',
		footer: '../../../form/deliveries/mb_footer.js',
		wheel: '../../../form/deliveries/mb_footer_wheel.js',
		bottomUpMb: '../../../form/deliveries/mb_bottom_up.js',
		threeDPostCarousel: '../../../form/deliveries/pc_mb_3d_post_carousel.js',
		inImageTakeover: '../../../form/deliveries/pc_mb_in_image_takeover.js',
		inImageWithInread: '../../../form/deliveries/pc_mb_in_image_inread.js',
		inImageCarousel: '../../../form/deliveries/pc_mb_in_image_carousel.js',
		onImageMb: '../../../form/deliveries/pc_mb_on_image.js',
		iab300x250: '../../../form/deliveries/pc_mb_iab_300x250.js',
		iab300x600: '../../../form/deliveries/pc_mb_iab_300x600.js',
	}
	//Switching cases
	switch(formatURL) {
		case 'masthead-mb':
			document.title = "Mobile Masthead";
			fileDirectory = fileName.masthead;
			adPlacement = document.getElementById('ads-billboard');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);		
			break;

		case 'inpage-mb':
			document.title = "Mobile Interscroller (Inpage)";
			fileDirectory = fileName.inpage;
			adPlacement = document.getElementById('ads-inpage');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;

		case 'firstview-mb':
			document.title = "Mobile Interstitial (Firstview)";
			fileDirectory = fileName.firstview;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'footer-mb':
			document.title = "Mobile Footer";
			fileDirectory = fileName.footer;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case '3d-footer-mb':
			document.title = "Mobile 3D Footer";
			fileDirectory = fileName.footer;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'card-mb':
			document.title = "Mobile Card";
			fileDirectory = fileName.footer;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'wheel-mb':
			document.title = "Mobile Footer Wheel";
			fileDirectory = fileName.wheel;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'teris-mb':
			document.title = "Mobile Teris Footer";
			fileDirectory = fileName.footer;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
			
		case 'bottom-up-mb':
			document.title = "Mobile Bottom Up";
			fileDirectory = fileName.bottomUpMb;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case '3d-post-carousel-mb':
			document.title = "Mobile 3D Post Carousel";
			fileDirectory = fileName.threeDPostCarousel;
			adPlacement = document.getElementById('ads-3d-post-carousel');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;

		case 'in-native-mb':
			document.title = "Mobile In Image Native";
			fileDirectory = fileName.inImageTakeover;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-takeover-mb':
			document.title = "Mobile In Image Takeover";
			fileDirectory = fileName.inImageTakeover;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'in-inread-mb':
			document.title = "Mobile In Image With Video Inread";
			fileDirectory = fileName.inImageWithInread;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-carousel-mb':
			document.title = "Mobile In Image Carousel";
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
		
		case 'medium-rectangle-mb':
			document.title = "Mobile Medium Rectangle (300x250)";
			fileDirectory = fileName.iab300x250;
			adPlacement = document.getElementById('ads-iab');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);	
			break;
		
		case 'half-page-mb':
			document.title = "Mobile Half Page (300x600)";
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