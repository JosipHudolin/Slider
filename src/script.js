function changeImageLeft(imageName) {
    document.querySelector('.slider-button-left').src = `Assets/${imageName}`;
}

function changeImageBackLeft() {
    document.querySelector('.slider-button-left').src = 'Assets/arrow-blue-left.png';
}

function changeImageRight(imageName) {
    document.querySelector('.slider-button-right').src = `Assets/${imageName}`;
}

function changeImageBackRight() {
    document.querySelector('.slider-button-right').src = 'Assets/arrow-blue-right.png';
}

document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapperTop = document.querySelector('.slider-row-top');
    const sliderWrapperBottom = document.querySelector('.slider-row-bottom');
    const prevBtn = document.querySelector('.top-button');
    const nextBtn = document.querySelector('.bottom-button');

    document.querySelectorAll('.top-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.borderColor = '#DDDDDD';
        });
        button.addEventListener('mouseleave', () => {
            button.style.borderColor = '#134880';
        });
    });

    document.querySelectorAll('.bottom-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.borderColor = '#DDDDDD';
        });
        button.addEventListener('mouseleave', () => {
            button.style.borderColor = '#134880';
        });
    });

    nextBtn.addEventListener('click', () => {
        const lastImageTop = sliderWrapperTop.querySelector('img:last-child');
        const imageWidthTop = lastImageTop.clientWidth;
        const cloneLastImageTop = lastImageTop.cloneNode(true);
        sliderWrapperTop.insertBefore(cloneLastImageTop, sliderWrapperTop.firstChild);
        sliderWrapperTop.scrollLeft += imageWidthTop;
        sliderWrapperTop.removeChild(lastImageTop);

        const lastImageBottom = sliderWrapperBottom.querySelector('img:last-child');
        const imageWidthBottom = lastImageBottom.clientWidth;
        const cloneLastImageBottom = lastImageBottom.cloneNode(true);
        sliderWrapperBottom.insertBefore(cloneLastImageBottom, sliderWrapperBottom.firstChild);
        sliderWrapperBottom.scrollLeft += imageWidthBottom;
        sliderWrapperBottom.removeChild(lastImageBottom);
    });

    prevBtn.addEventListener('click', () => {
        const firstImageTop = sliderWrapperTop.querySelector('img:first-child');
        const imageWidthTop = firstImageTop.clientWidth;
        const cloneFirstImageTop = firstImageTop.cloneNode(true);
        sliderWrapperTop.appendChild(cloneFirstImageTop);
        sliderWrapperTop.scrollLeft -= imageWidthTop;
        sliderWrapperTop.removeChild(firstImageTop);

        const firstImageBottom = sliderWrapperBottom.querySelector('img:first-child');
        const imageWidthBottom = firstImageBottom.clientWidth;
        const cloneFirstImageBottom = firstImageBottom.cloneNode(true);
        sliderWrapperBottom.appendChild(cloneFirstImageBottom);
        sliderWrapperBottom.scrollLeft -= imageWidthBottom;
        sliderWrapperBottom.removeChild(firstImageBottom);
    });
});
