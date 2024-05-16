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
    const imageWidth = wrapper.querySelector('img').clientWidth;
  
    // Apply the transition
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.transform = `translateX(${direction * -imageWidth}px)`;
  
    // Listen for the end of the transition
    const onTransitionEnd = () => {
      // Remove the transition end listener
      wrapper.removeEventListener('transitionend', onTransitionEnd);
  
      // Reset the transition property
      wrapper.style.transition = 'none';
      wrapper.style.transform = 'none';
  
      // Move the image in the DOM
      if (isNext) {
        const firstImage = wrapper.querySelector('img:first-child');
        wrapper.appendChild(firstImage);
      } else {
        const lastImage = wrapper.querySelector('img:last-child');
        wrapper.insertBefore(lastImage, wrapper.firstChild);
      }
  
      // Force reflow to apply changes
      wrapper.offsetHeight; // This line forces the reflow
  
      // Re-enable the transition for future interactions
      wrapper.style.transition = 'transform 0.5s ease';
    };
  
    wrapper.addEventListener('transitionend', onTransitionEnd);
  };
  
  document.querySelector('.bottom-button').addEventListener('click', () => {
    handleButtonClick(sliderWrapperTop, false);
    handleButtonClick(sliderWrapperBottom, false);
  });
  
  document.querySelector('.top-button').addEventListener('click', () => {
    handleButtonClick(sliderWrapperTop, true);
    handleButtonClick(sliderWrapperBottom, true);
  });
  
});
