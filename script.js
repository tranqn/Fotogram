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

let images_alt = ["junger mann.jpg",
"lesendes mädchen.jpg",
"wolken und mann.jpg",
"paar am stand.jpg",
"mädchen auf einer Allee.jpg",
"mädchen am gleis.jpg",
"schnee berge.jpg",
"steinhaus.jpg",
"kirche von innen.jpg",
"wald mit sonnenschein.jpg",
"zug auf einer brücke.jpg",
"zaun mit brücke.jpg",
"kirche von innen.jpg",
"strand bei sonnenuntergang.jpg",
"eisplatten.jpg",
"marmor gebäude.jpg",
"moschee.jpg",
"straßengasse.jpg",
"riesenrad.jpg",
"straße.jpg",
"belichtetes gebäude bei nacht.jpg",
"strand bei sonnenuntergang.jpg",
"mädchen im sonnenblumendfeld.jpg",
"wolken.jpg",
"man an der küste.jpg",
"riesenrad mit rote waggons",
"frau am stand.jpg",
"lesende frau.jpg",
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
                                    alt="${images_alt[index]}"
                                    onclick="showImage(${index})"
                                    tabindex="0"
                                    aria-haspopup="dialog"
                             >`;
    }

}

function showImage(index){
    const requested_dialog = document.getElementById("gallery_dialog");
    // const section_dialog = document.getElementById("section_dialog");
    // section_dialog.classList.remove("d_none");
    const requested_dialog_card = document.getElementById("dialog_card");
    requested_dialog_card.innerHTML = "";
    requested_dialog_card.innerHTML += printDialog(index);
    requested_dialog.showModal();
    addEventDialogClose();
    addEventStopPropagation();
}

//if bedingungen um buttons anzuzeigen anstatt 3 große returnblöcke
function printDialog(index){
    if(index < 0){
        index = images.length - 1;
    }
    else if(index > images.length - 1){
        index = 0;
    }
        
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
            <button class="dialog_button_close" 
                    onclick="dialogClose()"
                    aria-controls="gallery_dialog"
                    aria-label="dialog schließen">
                Schließen
            </button>
            `

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