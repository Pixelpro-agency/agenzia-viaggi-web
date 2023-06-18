AOS.init();
//header

// slider images array

const sliderImgs = ["../images/img1.png", "../images/img2.png", "../images/img3.png", "../images/img4.png", "../images/img5.png", "../images/img6.png"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');
            
            setTimeout(() => {
                
                if(index == sliderGrids.length - 1){
                    if(currentImage >= sliderImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }
    
                    sliderImage.src = `img/${sliderImgs[currentImage]}`;
    
                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })
    
                }

            }, 100);

        }, index * 100);
    })
}

// nav

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})