let images = ["1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"10.jpg",
"11.jpg",
"12.jpg",
"13.jpg",
"14.jpg",
"15.jpg",
"16.jpg",
"17.jpg",
"18.jpg",
"19.jpg",
"20.jpg",
"21.jpg",
"22.jpg",
"23.jpg",
"24.jpg",
"25.jpg",
"26.jpg",
"27.jpg",
"28.jpg",
];





function init(){
    renderFotos();
    imageCounter();
}

function renderFotos(){
    let gallery = document.getElementById("gallery_area");
    gallery.innerHTML = "";

    for(let index = 0; index < 28; index++){
        gallery.innerHTML += `<img  id="image_${index}" 
                                    class="gallery_image" 
                                    src="./assets/img/gallery/${images[index]}" 
                                    onclick="showImage(${index})"
                             >`;
    }

}

function showImage(index){
    const requested_dialog = document.getElementById("gallery_dialog");
    // const section_dialog = document.getElementById("section_dialog");
    // section_dialog.classList.remove("d_none");
    requested_dialog.innerHTML = "";
    requested_dialog.innerHTML += printDialog(index);
    requested_dialog.showModal();
    addEventDialogClose();
    addEventStopPropagation();
}

//if bedingungen um buttons anzuzeigen anstatt 3 große returnblöcke
function printDialog(index){
    if(index == 0){
        return `<div id="dialog_card" class="dialog_card">
                <img    class="dialog_image"
                    src="./assets/img/gallery/${images[index]}"
                >
                <div class="dialog_nav-buttons">
                    <button onclick="nextImage(${index})">
                        <img    class="nav-button" 
                                src="./assets/icons/arrow_forward.svg" 
                                alt="next image"
                                >
                    </button>
                    <span>${index+1}/28</span>
                    <button onclick="nextImage(${index})">
                        <img    class="nav-button" 
                                src="./assets/icons/arrow_forward.svg" 
                                alt="next image"
                                >
                    </button>
                </div>

                <button class="dialog_button_close" 
                onclick="dialogClose()">Schließen</button>
                </div>
                `
    }
    else if(index == 27){
        return `<div id="dialog_card" class="dialog_card">
                <img    class="dialog_image"
                    src="./assets/img/gallery/${images[index]}"
                >
                <div class="dialog_nav-buttons">
                    <button onclick="previousImage(${index})">
                        <img    class="nav-button" 
                                src="./assets/icons/arrow_backward.svg"
                                alt="previous image"
                                >
                    </button>
                    <span>${index+1}/28</span>
                    <button onclick="previousImage(${index})">
                        <img    class="nav-button" 
                                src="./assets/icons/arrow_backward.svg"
                                alt="previous image"
                                >
                    </button>
                </div>

                <button class="dialog_button_close" 
                onclick="dialogClose()">Schließen</button>
                </div>
                `
    }
    else{
        return `<div id="dialog_card" class="dialog_card">
                <img    class="dialog_image"
                        src="./assets/img/gallery/${images[index]}"
                >
                <div class="dialog_nav-buttons">
                    <button onclick="previousImage(${index})">
                        <img    class="nav-button" 
                                src="./assets/icons/arrow_backward.svg"
                                alt="previous image"
                                >
                    </button>
                    <span>${index+1}/28</span>
                    <button onclick="nextImage(${index})">
                        <img    class="nav-button" 
                                src="./assets/icons/arrow_forward.svg" 
                                alt="next image"
                                >
                    </button>
                </div>
                <button class="dialog_button_close" 
                onclick="dialogClose()">Schließen</button>
                </div>
                `
    }
}

function dialogClose(){
    const requested_dialog = document.getElementById("gallery_dialog");
    // const section_dialog = document.getElementById("section_dialog");
    // section_dialog.classList.add("d_none");
    requested_dialog.close();
}

function previousImage(index){
    let newIndex = index - 1;
    showImage(newIndex);
}

function nextImage(index){
    let newIndex = index + 1;
    showImage(newIndex);
}

function addOverlay(){
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.add("overlay");
}

function addDnone(){
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.add("d_none");
}

function addEventDialogClose(){
    const myDialog = document.getElementById('gallery_dialog');
    myDialog.addEventListener('click', () => myDialog.close());
}

function addEventStopPropagation(){
    const myDiv = document.getElementById('dialog_card');
    myDiv.addEventListener('click', (event) => event.stopPropagation());
}

function imageCounter(){
    let counterRef = document.getElementById("image_counter");
    if(images.length == null)
    {
        counterRef.innerHTML = `Keine Bilder vorhanden`;
    }
    else{
        counterRef.innerHTML = `${images.length} Objekte`;
    }
}