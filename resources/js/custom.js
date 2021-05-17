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
      
      case 'billboard':
        var info = "Display Masthead (Billboard)";
        document.title = info;
        break;

      case 'bottom-up':
        var info = "Display Bottom Up";
        document.title = info;
        break;
  
      case 'balloon':
        var info = "Display Balloon";
        document.title = info;
        break;
        
      case 'inpage':
        var info = "Mobile Interscroller (Inpage)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'firstview':
        var info = "Mobile Interstitial (Firstview)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
      
      case 'footer':
        var info = "Mobile Footer";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case '3d-post-carousel':
        var info = "3D Post Carousel";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'in-native':
        var info =  "In Image Native";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'in-takeover':
        var info = "In Image Takeover";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
      
      case 'in-inread':
        var info = "In Image With Video Inread";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
  
      case 'in-carousel':
        var info = "In Image Carousel";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
      
      case 'on-image-pc':
        document.title = "Display On Image";
        break;
        
      case 'on-image-mb':
        var info = "Mobile On Image";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'iab-medium-rectangle':
        var info = "IAB Medium Rectangle (300x250)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'iab-half-page':
        var info = "IAB Half Page (300x600)";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;

      case 'bottom-up-mb':
        var info = "Mobile Bottom Up";
        document.title = info;
        document.getElementById('format-info').innerHTML = info;
        break;
    }
  }
}
getBannerURL();
