function imageTemplate(index){
    return `<img    id="image_${index}" 
                    class="gallery_image" 
                    src="./assets/img/gallery/${images[index]}"
                    alt="${imagesAlt[index]}"
                    onclick="showImage(${index})"
                    tabindex="0"
                    aria-haspopup="dialog"
             >`
}

function dialogTemplate(index){
    return `<img    class="dialog_image"
                    src="./assets/img/gallery/${images[index]}">
            <div class="dialog_nav-buttons">
                <button onclick="previousImage(${index})"
                        aria-controls="gallery_dialog">
                    <img    class="nav-button" 
                              src="./assets/icons/arrow_backward.svg"
                              alt="previous image"
                              aria-label="vorheriges bild">
                </button>
                   <span>${index+1}/28</span>
                 <button onclick="nextImage(${index})"
                         aria-controls="gallery_dialog"
                         aria-label="nächstes bild">
                     <img    class="nav-button" 
                               src="./assets/icons/arrow_forward.svg" 
                              alt="next image">
                </button>
            </div>
            <button class="dialog_close-button" 
                    onclick="dialogClose()"
                    aria-controls="gallery_dialog"
                    aria-label="dialog schließen">
                <img src="./assets/icons/return.svg" alt="schließen">
            </button>
            `
}