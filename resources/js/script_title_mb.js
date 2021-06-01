// This is a customization for page name title
function getBannerURL() {
  let urlParams = new URLSearchParams(window.location.search);
  let bannerURL = urlParams.get("b");
  let formatURL = urlParams.get("f");
  let addBannerURL = urlParams.get("c");

  if (bannerURL && formatURL || addBannerURL) {
    document.getElementById("iframe_content").src = `mobile/index.html?f=${formatURL}&b=${bannerURL}&c=${addBannerURL}`;
  }
  
  if (formatURL) {
    switch(formatURL) {
      case 'masthead-mb':
        var info = "Mobile Masthead";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'bottom-up-mb':
        var info = "Mobile Bottom Up";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
        
      case 'inpage-mb':
        var info = "Mobile Interscroller (Inpage)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'firstview-mb':
        var info = "Mobile Interstitial (Firstview)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
      
      case 'footer-mb':
        var info = "Mobile Footer";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'wheel-mb':
        var info = "Mobile Footer Wheel";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case '3d-footer-mb':
        var info = "Mobile 3D Footer";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'card-mb':
        var info = "Mobile Card";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'teris-mb':
        var info = "Mobile Teris";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case '3d-post-carousel-mb':
        var info = "Mobile 3D Post Carousel";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'in-native-mb':
        var info =  "Mobile In Image Native";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'in-takeover-mb':
        var info = "Mobile In Image Takeover";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
      
      case 'in-inread-mb':
        var info = "Mobile In Image With Video Inread";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'in-carousel-mb':
        var info = "Mobile In Image Carousel";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
        
      case 'on-image-mb':
        var info = "Mobile On Image";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'medium-rectangle-mb':
        var info = "Mobile Medium Rectangle (300x250)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'half-page-mb':
        var info = "Mobile Half Page (300x600)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
    }
  }
}
getBannerURL();
