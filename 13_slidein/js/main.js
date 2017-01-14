function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in'); 

function checkSlide(e){
  sliderImages.forEach(image => {
    
    // Find scroll position that image should slide in at
    //  Half the images height above the scrolled position
    const slideInAt = ( window.scrollY + window.innerHeight ) - ( image.height / 2 );

    // Find bottom of image
    const imageBottom = image.offsetTop + image.height;
    
    // Is the 'slide in' position past the top of the image (is the image halfway visible) 
    const isHalfShown = slideInAt > image.offsetTop;

    const notScrolledPast = window.scrollY < imageBottom;
    
    if(isHalfShown && notScrolledPast){
      console.log(slideInAt);
      console.log(image.offsetTop);
      image.classList.add('active');
    }else{
      image.classList.remove('active');  
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));