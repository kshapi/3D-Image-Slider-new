const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')
const container = document.querySelector('.container');
const images = document.querySelectorAll('.img');


let rotation = 0, currentImage;
let index = 8, defaultRotation;

//Load first Image 
window.onload = () => {
  imageCounter();
  defaultRotation = setInterval(nextImage, 2000);
};


//Next Button
const nextImage = () => {
  defaultStyle();
  rotation += 45;
  container.style.transform = `perspective(145px) rotateY(${rotation}deg)`;
  
  index <= 1 ? index = 8 : index--;
  imageCounter();
};

nextBtn.addEventListener('click', nextImage);


//back Button
const prevImage = () => {
  clearInterval(defaultRotation);
  defaultStyle();
  rotation -= 45;
  container.style.transform = `perspective(145px) rotateY(${rotation}deg)`;
  
  index >= 8 ? index = 1 : index++;
  imageCounter();
};

prevBtn.addEventListener('click', prevImage);


//Back to Orignal Style
const defaultStyle = () => {
  container.style.height = null;
  currentImage.style.width = null;
  currentImage.style.height = null;
};


//Get Current Image 
const imageCounter = () => {
  
  for(let i=0;i<images.length;i++) {
    if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
      break;
    } else if (i + 1 === index) {
      currentImage = images[i];
    };
    
  };
  
  //Listener for Current Image
  currentImage.onclick = () => {
    container.style.height = '400px';
    currentImage.style.width = '108px';
    currentImage.style.height = '125px';
    clearInterval(defaultRotation);
  };

};

//Kshapi