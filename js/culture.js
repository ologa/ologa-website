//define language reload achors
var dataReload = document.querySelectorAll("[data-reload]");
var GetHome = document.querySelector("#home");
var GetSystems_h2 = document.querySelector("#systemswebsites_h2");
var GetSystems_h3 = document.querySelector("#systemswebsites_h3");
var GetSystems_emac = document.querySelector(".systemswebsites_emac");

var GetMainModule = document.querySelector("#Systemainmodule");

var GetSystems_hcm = document.querySelector("#systemswebsites_hcm");
var GetSystems_hcm_text = document.querySelector(".systemswebsites_hcm_text");

var GetSystems_web_text1 = document.querySelector(".systemswebsites_web_text1");
var GetSystems_web_text2 = document.querySelector(".systemswebsites_web_text2");

var GetSystems_sat_inter = document.querySelector("#internet_satelite");
var GetSystems_sat_inter_text = document.querySelector(".internet_satelite_text");

var GetSystem_solution = document.querySelector("#internet_satelite_solut");
var GetSystem_satelite_price = document.querySelector("#internet_satelite_price");

var GetSystem_main_service = document.querySelector("#main_service");



//language translation
var language = {
    eng: {
        hom: " Ologa Sistemas Informáticos Lda is a company that operates in the field of Information and Communication Technologies, focusing on technological solutions for social and economic development in Mozambique and abroad. The word Ologa is derived from the term “to speak” in Chuabo, a language spoken in Central Mozambique. The name arose from the idea of ​​establishing a link between the term “communication” and a national dialect.",
        systems_h2: "Systems and Websites",
        systems_h3: "OLOGA Sistemas Informáticos Lda, has a diversity of products in the areas of computer systems, check below:",
        systems_emac: "It is a software conceived to assist social or health projects that provide services at the household level. The System allows NGOs or governments that use the methodology of the Child Status Index (CSI) in their Orphaned and Vulnerable Children (OVC) programs improve Monitoring , Evaluation and Management of programs at the following levels:",
        Systemainmod: "Main Modules",
        systemswe_hcm: "Electronic Medical Record System and Patient Registration of the Maputo Central Hospital",
        systems_hcm_text: "This system uses open source solutions at all layers, the database is PostgreSQL, and the backend was made using Python's most advanced web application framework called Django. The frontend is based on React, which is a new frontend language based on JavaScript libraries, allowing for the best performance experience by minimizing requests to the backend by using these JavaScript libraries for most frontend features directly in the browser.",
        system_web_text1: "Corporate websites for large renowned institutions such as GAPI a Development Finance Institution (IFD), registered with the Bank of Mozambique in the Investment Society (SI) category.",
        system_web_text2: "Websites for State Institutions such as Maputo Central Hospital and maintenance thereof.",
        Stellite_inter: "Satellite internet",
        Stellite_inter_text: "Ologa has a low cost Internet Access Service using Satellite communication technologies, with a variety of packages designed for individuals, SMEs and companies in remote regions where terrestrial alternatives are non-existent or unstable. See below our packages designed for private use or SMEs. Satellite Internet Solutions for Homes and SMEs Corporate Satellite Internet Solutions Installation, Repair and Maintenance of VSats nationwide coverage",
        Stellite_solut: "For corporate solutions contact us.",
        Stellite_price: "Satellite Internet pricing",
        Stellite_p_eq: "Equipment cost: MDM 2210 Modem + 1m antenna at $750. Note Containment fee of 30 and cost does not involve installation.",
        main_serv:  "Main Services",
        
         
    }
}

//Define language via window hash

if(window.location.hash) {

    if(window.location.hash === "#eng") {

        GetHome.textContent = language.eng.hom;
        GetSystems_h2.textContent = language.eng.systems_h2;
        GetSystems_h3.textContent = language.eng.systems_h3;

        GetSystems_emac.textContent = language.eng.systems_emac;

        GetMainModule.textContent = language.eng.Systemainmod;

        GetSystems_hcm.textContent = language.eng.systemswe_hcm;
        GetSystems_hcm_text.textContent = language.eng.systems_hcm_text;

        GetSystems_web_text1.textContent = language.eng.system_web_text1;
        GetSystems_web_text2.textContent = language.eng.system_web_text2;

        GetSystems_sat_inter.textContent = language.eng.Stellite_inter;
        GetSystems_sat_inter_text.textContent = language.eng.Stellite_inter_text;
        GetSystem_solution.textContent = language.eng.Stellite_solut;
        GetSystem_satelite_price.textContent = language.eng.Stellite_price;
        GetSystem_price_eq.textContent = language.eng.Stellite_p_eq;
        GetSystem_main_service.textContent = language.eng.main_service;
       
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