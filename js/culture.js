//define language reload achors
var dataReload = document.querySelectorAll("[data-reload]");
var GetHome = document.querySelector("#home");
var GetSystems_h2 = document.querySelector("#systemswebsites_h2");
var GetSystems_h3 = document.querySelector("#systemswebsites_h3");

//language translation
var language = {
    eng: {
        hom: " Ologa Sistemas Informáticos Lda is a company that operates in the field of Information and Communication Technologies, focusing on technological solutions for social and economic development in Mozambique and abroad. The word Ologa is derived from the term “to speak” in Chuabo, a language spoken in Central Mozambique. The name arose from the idea of ​​establishing a link between the term “communication” and a national dialect.",
        systems_h2: "Systems and Websites",
        systems_h3: "OLOGA Sistemas Informáticos Lda, has a diversity of products in the areas of computer systems, check below.",
        
    }
}

//Define language via window hash

if(window.location.hash) {

    if(window.location.hash === "#eng") {

        GetHome.textContent = language.eng.hom;
        GetSystems_h2.textContent = language.eng.systems_h2;
        GetSystems_h3.textContent = language.eng.systems_h3;
         
    }

}


//Define language reload onclick iliteration
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        setTimeout(function () {
        location.reload();
    }, 100);
    };
    
}