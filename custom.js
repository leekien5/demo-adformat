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
        document.title = "Masthead Mobile";
        break;
      
      case 'billboard':
        document.title = "Billboard";
        break;
  
      case 'balloon':
        document.title = "Balloon";
        break;
        
      case 'inpage':
        document.title = "Mobile Inpage";
        break;
  
      case 'firstview':
        document.title = "Mobile Firstview";
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
        document.title = "On Image PC";
        break;
        
      case 'on-image-mb':
        document.title = "On Image Mobile";
        break;
    }
  }
}
getBannerURL();
