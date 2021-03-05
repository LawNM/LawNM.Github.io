let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => { image.removeAttribute('data-src');};
};

if("IntersectionOberver" in window){
  const imgObserver = new IntersectionObserver((items,observer) => {
    items.forEach((item) => {
  });
  }, imgOptions);

imagesToLoad.forEach((img) => {
  loadImages(img);
});

}
