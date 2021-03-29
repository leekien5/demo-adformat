function getBannerURL() {
  let urlParams = new URLSearchParams(window.location.search);
  let bannerURL = urlParams.get("b");
  let formatURL = urlParams.get("f");
  let addBannerURL = urlParams.get("c");

  if (bannerURL && formatURL || addBannerURL) {
    document.getElementById(
      "iframe_content"
    ).src = `mobile/index.html?f=${formatURL}&b=${bannerURL}&c=${addBannerURL}`;
  }
  
  if (formatURL) {
    switch(formatURL) {
      case 'masthead-mb':
        document.title = "Mobile Masthead";
        break;
      
      case 'billboard':
        document.title = "Display Masthead (Billboard)";
        break;

      case 'bottom-up':
        document.title = "Display Bottom Up";
        break;
  
      case 'balloon':
        document.title = "Display Balloon";
        break;
        
      case 'inpage':
        document.title = "Mobile Interscroller (Inpage)";
        break;
  
      case 'firstview':
        document.title = "Mobile Interstitial (Firstview)";
        break;
      
      case 'footer':
        document.title = "Mobile Footer";
        break;
  
      case '3d-post-carousel':
        document.title = "3D Post Carousel";
        break;
  
      case 'in-native':
        document.title = "In Image Native";
        break;
  
      case 'in-takeover':
        document.title = "In Image Takeover";
        break;
      
      case 'in-inread':
        document.title = "In Image With Video Inread";
        break;
  
      case 'in-carousel':
        document.title = "In Image Carousel";
        break;
      
      case 'on-image-pc':
        document.title = "Displat On Image";
        break;
        
      case 'on-image-mb':
        document.title = "Mobile On Image";
        break;

      case 'iab-medium-rectangle':
          document.title = "IAB Medium Rectangle (300x250)";
          break;

      case 'iab-half-page':
        document.title = "IAB Half Page (300x600)";
        break;
    }
  }
}
getBannerURL();
