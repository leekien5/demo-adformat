let urlParams = new URLSearchParams(window.location.search);
let bannerURL = urlParams.get('b');
let formatURL = urlParams.get('f');
let fileDirectory;
let adPlacement = null;
if(bannerURL && formatURL) {
	//Get fireDirectory name from file directories
	const fileName = {
			masthead: '../../../deliveries/masthead.js',
				 inpage: '../../../deliveries/inpage.js',
				firstview: '../../../deliveries/firstview.js',
					 footer: '../../../deliveries/footer.js',
		   threeDPostCarousel: '../../../deliveries/3dPostCarousel.js',
					   takeover: '../../../deliveries/inImageTakeover.js',
					   withInread: '../../../deliveries/inImageInread.js',
					   withCarousel: '../../../deliveries/inImageCarousel.js',
						    onImageMb: '../../../deliveries/onImagePc.js',
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
			document.title = "Mobile Inpage";
			fileDirectory = fileName.inpage;
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
			fileDirectory = fileName.takeover;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-takeover':
			document.title = "In Image Takeover";
			fileDirectory = fileName.takeover;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
		
		case 'in-inread':
			document.title = "In Image With Video Inread";
			fileDirectory = fileName.withInread;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;

		case 'in-carousel':
			document.title = "In Image Carousel";
			fileDirectory = fileName.withCarousel;
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to body
			document.body.appendChild(scriptPlacement);
			break;
			
		case 'on-image-mb':
			document.title = "On Image Mobile";
			fileDirectory = fileName.onImageMb;
			adPlacement = document.getElementById('ads-on-image');
			//Replace div id with script source
			var scriptPlacement = document.createElement('script');
			scriptPlacement.src = fileDirectory;
			//Append script to div id
			adPlacement.appendChild(scriptPlacement);
			break;
	}
}