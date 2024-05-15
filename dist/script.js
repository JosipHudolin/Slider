const changeImageLeft = imageName => document.querySelector('.slider-button-left').src = `Assets/${imageName}`;
const changeImageBackLeft = () => document.querySelector('.slider-button-left').src = 'Assets/arrow-blue-left.png';
const changeImageRight = imageName => document.querySelector('.slider-button-right').src = `Assets/${imageName}`;
const changeImageBackRight = () => document.querySelector('.slider-button-right').src = 'Assets/arrow-blue-right.png';

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapperTop = document.querySelector('.slider-row-top');
  const sliderWrapperBottom = document.querySelector('.slider-row-bottom');
  const handleButtonHover = (button, color) => {
    button.addEventListener('mouseenter', () => button.style.borderColor = color);
    button.addEventListener('mouseleave', () => button.style.borderColor = '#134880');
  };

  document.querySelectorAll('.top-button').forEach(button => handleButtonHover(button, '#DDDDDD'));
  document.querySelectorAll('.bottom-button').forEach(button => handleButtonHover(button, '#DDDDDD'));

  const handleButtonClick = (wrapper, isNext) => {
    const direction = isNext ? 1 : -1;
    const image = wrapper.querySelector(isNext ? 'img:last-child' : 'img:first-child');
    const imageWidth = image.clientWidth;
    const cloneImage = image.cloneNode(true);
    
    wrapper.insertBefore(cloneImage, isNext ? wrapper.firstChild : null);
    wrapper.scrollLeft += direction * imageWidth;
    wrapper.removeChild(image);
  };

  document.querySelector('.bottom-button').addEventListener('click', () => {
    handleButtonClick(sliderWrapperTop, true);
    handleButtonClick(sliderWrapperBottom, true);
  });

  document.querySelector('.top-button').addEventListener('click', () => {
    handleButtonClick(sliderWrapperTop, false);
    handleButtonClick(sliderWrapperBottom, false);
  });
});
