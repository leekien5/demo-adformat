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
		masthead: '../../deliveries/masthead.js',
		 billboard: '../../deliveries/billboard.js',
			 balloon: '../../deliveries/balloon.js',
			 bottomUp: '../../deliveries/bottomUp.js',
				inpage: '../../deliveries/inpage.js',
			   firstview: '../../deliveries/firstview.js',
					footer: '../../deliveries/footer.js',
	 	threeDPostCarousel: '../../deliveries/3dPostCarousel.js',
				 takeover: '../../deliveries/inImageTakeover.js',
			  withInread: '../../deliveries/inImageInread.js',
		   withCarousel: '../../deliveries/inImageCarousel.js',
			 onImagePc: '../../deliveries/onImagePc.js',
			onImageMb: '../../deliveries/onImagePc.js',
	}

	//Switching cases
	switch(formatURL) {
		case 'masthead-mb':
			document.title = "Masthead Mobile";
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
			document.title = "Billboard";
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
			document.title = "Balloon";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-balloon').src = `${bannerURL}?pid=104`;
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
			document.title = "Bottom Up";
			//Replace div id with link banner source
			adBalloon = document.getElementById('ads-bottom-up').src = `${bannerURL}?pid=104&ord=12`;
			//Get file javascript
			fileDirectory = fileName.bottomUp;
			// removeClass();
			adPlacement = document.getElementById('yomedia-destination-197');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
			
		case 'inpage':
			document.title = "Mobile Inpage";
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
			document.title = "Mobile Firstview";
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
			fileDirectory = fileName.takeover;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-takeover':
			document.title = "In Image Takeover";
			fileDirectory = fileName.takeover;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'in-inread':
			document.title = "In Image With Video Inread";
			fileDirectory = fileName.withInread;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-carousel':
			document.title = "In Image Carousel";
			fileDirectory = fileName.withCarousel;
			removeClass();
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'on-image-pc':
			document.title = "On Image PC";
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
			document.title = "On Image Mobile";
			fileDirectory = fileName.onImageMb;
			// removeClass();
			adPlacement = document.getElementById('ads-on-image');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
	}
}