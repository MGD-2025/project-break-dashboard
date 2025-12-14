
const imagenes = ["img/background/alex-jackman-_Bk2NVFx7q4-unsplash.jpg",
    "img/background/alexander-grey-7EK5WABscqw-unsplash.jpg", 
    "img/background/alexander-grey-epRlEd6oTmE-unsplash.jpg", 
    "img/background/alexander-grey-Ur_NzyKfCo4-unsplash.jpg", 
    "img/background/daniel-olah-pCcGpVsOHoo-unsplash.jpg", 
    "img/background/denise-chan-pXmbsF70ulM-unsplash.jpg", 
    "img/background/dieu-7-W4UZ4AcU8-unsplash.jpg", 
    "img/background/guy-stevens-dEGu-oCuB1Y-unsplash.jpg", 
    "img/background/joyce-hankins-gpiKdZmDQig-unsplash.jpg", 
    "img/background/katie-rainbow-DjGHuzUh_84-unsplash.jpg", 
    "img/background/luca-upper-Z-4kOr93RCI-unsplash.jpg", 
    "img/background/markus-spiske-k0rVudBoB4c-unsplash.jpg", 
    "img/background/max-di-capua-7pmdVjyv2ac-unsplash.jpg", 
    "img/background/maxim-berg-ENIaPZytqzE-unsplash.jpg", 
    "img/background/pawel-czerwinski-3k9PGKWt7ik-unsplash.jpg", 
    "img/background/simon-twukN12EN7c-unsplash.jpg"
 ]

 let indice = 0;

 function cambioFondo () {
    document.body.style.backgroundImage= `url(${imagenes[indice]})`
    indice++

    if (indice>=imagenes.length){
        indice=0
    }
 }

 cambioFondo()

 setInterval(cambioFondo,20000)