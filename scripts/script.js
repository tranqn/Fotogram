let images = [       "1.jpg",
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

let imagesAlt = [  "junger mann",
                    "lesendes mädchen",
                    "wolken und mann",
                    "paar am stand",
                    "mädchen auf einer Allee",
                    "mädchen am gleis",
                    "schnee berge",
                    "steinhaus",
                    "kirche von innen",
                    "wald mit sonnenschein",
                    "zug auf einer brücke",
                    "zaun mit brücke",
                    "kirche von innen",
                    "strand bei sonnenuntergang",
                    "eisplatten",
                    "marmor gebäude",
                    "moschee",
                    "straßengasse",
                    "riesenrad",
                    "straße",
                    "belichtetes gebäude bei nacht",
                    "strand bei sonnenuntergang",
                    "mädchen im sonnenblumendfeld",
                    "wolken",
                    "man an der küste",
                    "riesenrad mit rote waggons",
                    "frau am stand",
                    "lesende frau",
                  ];

function init(){
    renderPhotos();
    imageCounter();
}

function renderPhotos(){
    let gallery = document.getElementById("gallery_area");
    gallery.innerHTML = "";

    for(let index = 0; index < 28; index++){
        gallery.innerHTML += imageTemplate(index);
    }
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

function showImage(index){
    const requestedDialog = document.getElementById("gallery_dialog");
    const requestedDialogCard = document.getElementById("dialog_card");

    requestedDialogCard.innerHTML = "";
    requestedDialogCard.innerHTML += printDialog(index);
    requestedDialog.showModal();
    addEventDialogClose();
    addEventStopPropagation();
}

function printDialog(index){
    if(index < 0){
        index = images.length - 1;
    }
    else if(index > images.length - 1){
        index = 0;
    }
    return dialogTemplate(index);
}

function dialogClose(){
    const requestedDialog = document.getElementById("gallery_dialog");
    requestedDialog.close();
}

function previousImage(index){
    let newIndex = index - 1;
    showImage(newIndex);
}

function nextImage(index){
    let newIndex = index + 1;
    showImage(newIndex);
}

function addEventDialogClose(){
    const myDialog = document.getElementById('gallery_dialog');
    myDialog.addEventListener('click', () => myDialog.close());
}

function addEventStopPropagation(){
    const myDiv = document.getElementById('dialog_card');
    myDiv.addEventListener('click', (event) => event.stopPropagation());
}