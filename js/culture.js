//define language reload achors
var dataReload = document.querySelectorAll("[data-reload]");
var GetHome = document.querySelector("#home");
var GetSystems_h2 = document.querySelector("#systemswebsites_h2");
var GetSystems_h3 = document.querySelector("#systemswebsites_h3");
var GetSystems_emac = document.querySelector(".systemswebsites_emac");

var GetMainModule = document.querySelector("#Systemainmodule");
var GetMainModule_l1 = document.querySelector("#Systemainmodule_l1");
var GetMainModule_l2 = document.querySelector("#Systemainmodule_l2");
var GetMainModule_l3 = document.querySelector("#Systemainmodule_l3");
var GetMainModule_l4 = document.querySelector("#Systemainmodule_l4");
var GetMainModule_l5 = document.querySelector("#Systemainmodule_l5");
var GetMainModule_l6 = document.querySelector("#Systemainmodule_l6");

var GetSystems_hcm = document.querySelector("#systemswebsites_hcm");
var GetSystems_hcm_text = document.querySelector(".systemswebsites_hcm_text");

var GetSystems_web = document.querySelector("#systemswebsites_web");
var GetSystems_web_text1 = document.querySelector(".systemswebsites_web_text1");
var GetSystems_web_text2 = document.querySelector(".systemswebsites_web_text2");

var GetSystems_sat_inter = document.querySelector("#internet_satelite");
var GetSystems_sat_inter_text = document.querySelector(".internet_satelite_text");
var GetSystems_sat_inter_l1 = document.querySelector("#internet_satelite_l1");
var GetSystems_sat_inter_l2 = document.querySelector("#internet_satelite_l2");
var GetSystems_sat_inter_l3 = document.querySelector("#internet_satelite_l3");
var GetSystems_sat_inter_l4 = document.querySelector("#internet_satelite_l4");

var GetSystem_solution = document.querySelector("#internet_satelite_solut");
var GetSystem_satelite_price = document.querySelector("#internet_satelite_price");
var GetSystem_price_eq = document.querySelector("#internet_satelite_price_enq");

var GetSystem_main_service = document.querySelector("#main_service");
var GetSystem_main_service_text = document.querySelector("#main_service_text");
var GetSystem_main_service_softDev = document.querySelector("#main_service_SofDev");
var GetSystem_main_service_softDev_text = document.querySelector(".main_service_SofDev_text");
var GetSystem_main_service_inter = document.querySelector("#main_service_inter");
var GetSystem_main_service_inter_text = document.querySelector(".main_service_inter_text");
var GetSystem_main_service_it = document.querySelector("#main_service_it");
var GetSystem_main_service_it_text = document.querySelector(".main_service_it_text");
var GetSystem_main_service_web = document.querySelector("#main_service_web");
var GetSystem_main_service_web_text = document.querySelector(".main_service_web_text");
var GetSystem_main_service_integrated = document.querySelector("#main_service_integrated");
var GetSystem_main_service_integrated_text = document.querySelector(".main_service_integrated_text");
var GetSystem_main_service_proj= document.querySelector("#main_service_proj");
var GetSystem_main_service_proj_l1= document.querySelector("#main_service_proj_l1");
var GetSystem_main_service_proj_l2= document.querySelector("#main_service_proj_l2");
var GetSystem_main_service_proj_l3= document.querySelector("#main_service_proj_l3");
var GetSystem_main_service_proj_l4= document.querySelector("#main_service_proj_l4");
var GetSystem_main_service_proj_l5= document.querySelector("#main_service_proj_l5");
var GetSystem_main_service_proj_l6= document.querySelector("#main_service_proj_l6");
var GetSystem_main_service_proj_l7= document.querySelector("#main_service_proj_l7");

var GetSystem_portifolio_awoards = document.querySelector("#portifolio_awoards");
var GetSystem_portifolio_awoards_text = document.querySelector(".portifolio_awoards_text");
var GetSystem_portifolio_work = document.querySelector("#portifolio_work");
var GetSystem_portifolio_work_text = document.querySelector(".portifolio_work_text");

var GestSystem_gallery = document.querySelector("#gallery")

var GetSystem_team = document.querySelector("#team");
var GetSystem_team_text = document.querySelector("#team_text");
var GetSystem_team_founder = document.querySelector("#team_founder");
var GetSystem_team_founder_text = document.querySelector("#team_founder_text");
var GetSystem_team_financial = document.querySelector("#team_financial");
var GetSystem_team_financial_text = document.querySelector("#team_financial_text");
var GetSystem_team_director = document.querySelector("#team_director");
var GetSystem_team_director_text = document.querySelector("#team_director_text");
var GetSystem_team_dev = document.querySelector("#team_dev");
var GetSystem_team_dev_text = document.querySelector("#team_dev_text");

var GetSystem_clients = document.querySelector("#clients");
var GetSystem_clients_text = document.querySelector("#clients_text");

var GetSystem_about = document.querySelector("#about");
var GetSystem_about_text1 = document.querySelector("#about_text1");
var GetSystem_about_text2= document.querySelector("#about_text2");

var GetSystem_adress = document.querySelector("#adress");
var GetSystem_adress_cont = document.querySelector("#adress_contact");
var GetSystem_message= document.querySelector("#message");



//language translation
var language = {
    eng: {
        
        hom: " Ologa Sistemas Informáticos Lda is a company that operates in the field of Information and Communication Technologies, focusing on technological solutions for social and economic development in Mozambique and abroad. The word Ologa is derived from the term “to speak” in Chuabo, a language spoken in Central Mozambique. The name arose from the idea of ​​establishing a link between the term “communication” and a national dialect.",
        systems_h2: "Systems and Websites",
        systems_h3: "OLOGA Sistemas Informáticos Lda, has a diversity of products in the areas of computer systems, check below:",
        systems_emac: "It is a software conceived to assist social or health projects that provide services at the household level. The System allows NGOs or governments that use the methodology of the Child Status Index (CSI) in their Orphaned and Vulnerable Children (OVC) programs improve Monitoring , Evaluation and Management of programs at the following levels:",
        Systemainmod: "Main Modules:",
        Systemainmod_l1: "Information about the Activist or Field Worke",
        Systemainmod_l2: "Household information",
        Systemainmod_l3: "Beneficiary information (child or adult)",
        Systemainmod_l4: "Individual Service Plan",
        Systemainmod_l5: "Follow-up visits",
        Systemainmod_l6: "References (made and complete)",
        systemswe_hcm: "Electronic Medical Record System and Patient Registration of the Maputo Central Hospital",
        systems_hcm_text: "This system uses open source solutions at all layers, the database is PostgreSQL, and the backend was made using Python's most advanced web application framework called Django. The frontend is based on React, which is a new frontend language based on JavaScript libraries, allowing for the best performance experience by minimizing requests to the backend by using these JavaScript libraries for most frontend features directly in the browser.",
        system_web: "Websites with Modern and Responsive Layout",
        system_web_text1: "Corporate websites for large renowned institutions such as GAPI a Development Finance Institution (IFD), registered with the Bank of Mozambique in the Investment Society (SI) category.",
        system_web_text2: "Websites for State Institutions such as Maputo Central Hospital and maintenance thereof.",
        Stellite_inter: "Satellite internet",
        Stellite_inter_text: "Ologa has a low cost Internet Access Service using Satellite communication technologies, with a variety of packages designed for individuals, SMEs and companies in remote regions where terrestrial alternatives are non-existent or unstable. See below our packages designed for private use or SMEs. Satellite Internet Solutions for Homes and SMEs Corporate Satellite Internet Solutions Installation, Repair and Maintenance of VSats nationwide coverage.",
        Stellite_inter_text_l1: "Satellite Internet Solutions for Homes and SMEs",
        Stellite_inter_text_l2: "Corporate Satellite Internet Solutions",
        Stellite_inter_text_l3: "Installation, Repair and Maintenance of VSats",
        Stellite_inter_text_l4: "Nationwide coverage",
        Stellite_solut: "For corporate solutions contact us.",
        Stellite_price: "Satellite Internet pricing",
        Stellite_p_eq: "Equipment cost: MDM 2210 Modem + 1m antenna at $750. Note Containment fee of 30 and cost does not involve installation.",
        main_serv:  "Main Services",
        main_serv_text: "OLOGA Sistemas Informaticos Lda is based on the following values for the provision of services: Innovation, Professionalism, Dynamism, Corporate Responsibility, Quality, Trust",
        main_serv_sofDev:"Software development",
        main_serv_sofDev_text: "OLOGA develops systems according to customers. Tailor-made software for your company in order to meet specific needs and add value to your product/service. Using state-of-the-art technology, OLOGA guarantees the quality of its systems. We work with excellence in the development of corporate systems in environments such as Microsoft using technologies such as .Net, C#, SQL Server and others.",
        main_serv_satInt: "Satellite internet",
        main_serv_satText: "Information and communication technologies for any part of the world, Ideal for places further away from urban centers, which facilitates the work of institutions in the most remote areas of the country.",
        main_serv_it: "IT Technical Assistance",
        main_serv_it_text: "On-site and remote computer technical assistance to anywhere in the world using the best technical support software such as Teamview. Technical assistance at home or office. The consultants will also provide training in the use of the system and will make an initial follow-up of the use of the system and solve possible doubts that the customer may have.",
        
        main_serv_web: "Websites and Social Media Marketing",
        main_serv_wen_text: "With talent, design and technology. We create websites thinking about the best way for your consumer to acquire your products and/or services. Currently, companies of all sizes are investing more in the relationship with their customers, whether on social networks (such as Twitter and Facebook) or on their website.",
        main_serv_int_sys: "Integrated Security Systems",
        main_serv_int_sys_text: "OLOGA provides access control service, video surveillance systems (Analog and Digital), Alarms, digital image recorders, Biometrics and Integration Software for the various security systems. Video surveillance solutions (CCTV) or security cameras in businesses or homes are an asset to crime reduction and provide valuable information and documentation for their owners.",
        main_serv_proj: "It Project Management",
        main_serv_proj_l1: "Electronic Medical Record",
        main_serv_proj_l2: "Case Management Software for Orphans and Vulnerable Children",
        main_serv_proj_l3: "Computer Systems in Micro Banks",
        main_serv_proj_l4: "Structured networks",
        main_serv_proj_l5: "Wireless Networks – Hot Spots, WANs, Point to Point, Point to Multi Point.",
        main_serv_proj_l6: "Voice Systems (PBX, VoIP).",
        main_serv_proj_l7: "Clean energy circuits",

        port_awords: "Examples of our awards",
        port_awords_text: "Ologa has been working with FHI360 Mozambique to develop and improve the SureTrack / eCSI (SureTrack) impact monitoring tool. The software received an award at the ITU World Awards 2018.OLOGA was awarded a contract in 2015 after a tender process to develop and implement an Electronic Medical Record and Patient Registration System for Maputo Central Hospital, the largest medical facility in the country. The project is ongoing, with patients being registered daily, and implementation is expected to be finalized by the end of 2019.",
        port_work: "Examples of our work",
        port_work_text: "Our technical staff is formed by technicians with several years of experience and ready to assist in whatever is necessary, from the development of solutions to the installation and activation of the contracted system.We are professionals committed to the performance of our customers and the good performance of the implemented solutions. SureTrack/eCSI (SureTrack) software offers the ability to create an individualized intervention plan for each beneficiary and provides aggregated data across all KPAs in a visual display or dashboard. Various reports can be extracted from the system. Following its success in 2017, FHI360 has officially implemented the software in the COVida Program, currently working with 70 Community Based Organizations across Mozambique, supporting over 300,000 children.",

        gall: "Gallery",

        team: "Meet the Team",
        team_text: "Our professionalism directly impacts the quality of your product or service. That's why we choose well who to walk alongside, meet our Strategic Partners.",
        team_foun: "Founder, General Manager",
        team_foun_text:"He directs, plans, organizes and controls the activities of various areas of the company.",
        team_final: "Administrative and Financial Director",
        team_final_text: "Performs planning, auditing, accounting and control of finances.",
        team_direct: "Technical Director",
        team_direct_text: "Administration of information systems and networks.",
        team_d: "Full Stack Developer- Head Developer",
        team_d_text: "Performs Coach and consulting.",
    
        clint: "Examples of our Customers",
        clint_text: "We are trusted by these popular companies",

        abou: "About",
        abou_text1: "For its capacity for innovation in the services it provides, OLOGA won the 100 Best SME in Mozambique, innovation category, in its 1st Edition on December 18, 2012.",
        abou_text2: "Ologa's majority partner is Gapi, Sociedade de Investimentos SA, a Public Private Partnership that focuses its main focus on rural development through the growth of emreendedorism and the expansion of the financial system to remote regions. Gapi SI has as one of its strategies the implementation of micro banks and Ologa was created with the objective of designing technological solutions to facilitate the management of this network of micro banks.",
     
        adres: "Address",
        adress_cont: "Connect with us",

        mesega: "Send us a message"
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
        GetMainModule_l1.textContent = language.eng.Systemainmod_l1;
        GetMainModule_l2.textContent = language.eng.Systemainmod_l2;
        GetMainModule_l3.textContent = language.eng.Systemainmod_l3;
        GetMainModule_l4.textContent = language.eng.Systemainmod_l4;
        GetMainModule_l5.textContent = language.eng.Systemainmod_l5;
        GetMainModule_l6.textContent = language.eng.Systemainmod_l6;

        GetSystems_hcm.textContent = language.eng.systemswe_hcm;
        GetSystems_hcm_text.textContent = language.eng.systems_hcm_text;

        GetSystems_web.textContent = language.eng.system_web;
        GetSystems_web_text1.textContent = language.eng.system_web_text1;
        GetSystems_web_text2.textContent = language.eng.system_web_text2;

        GetSystems_sat_inter.textContent = language.eng.Stellite_inter;
        GetSystems_sat_inter_text.textContent = language.eng.Stellite_inter_text;
        GetSystems_sat_inter_l1.textContent = language.eng.Stellite_inter_text_l1;
        GetSystems_sat_inter_l2.textContent = language.eng.Stellite_inter_text_l2;
        GetSystems_sat_inter_l3.textContent = language.eng.Stellite_inter_text_l3;
        GetSystems_sat_inter_l4.textContent = language.eng.Stellite_inter_text_l4;
        GetSystem_solution.textContent = language.eng.Stellite_solut;
        GetSystem_satelite_price.textContent = language.eng.Stellite_price;
        GetSystem_price_eq.textContent = language.eng.Stellite_p_eq;

        GetSystem_main_service.textContent = language.eng.main_serv;
        GetSystem_main_service_text.textContent = language.eng.main_serv_text;
        GetSystem_main_service_softDev.textContent = language.eng.main_serv_sofDev;
        GetSystem_main_service_softDev_text.textContent = language.eng.main_serv_sofDev_text;
        GetSystem_main_service_inter.textContent = language.eng.main_serv_satInt;
        GetSystem_main_service_inter_text.textContent = language.eng.main_serv_satText;
        GetSystem_main_service_it.textContent = language.eng.main_serv_it;
        GetSystem_main_service_it_text.textContent = language.eng.main_serv_it_text;
        GetSystem_main_service_web.textContent = language.eng.main_serv_web;
        GetSystem_main_service_web_text.textContent = language.eng.main_serv_wen_text;
        GetSystem_main_service_integrated.textContent = language.eng.main_serv_int_sys;
        GetSystem_main_service_integrated_text.textContent = language.eng.main_serv_int_sys_text;
        GetSystem_main_service_proj.textContent = language.eng.main_serv_proj;
        GetSystem_main_service_proj_l1.textContent = language.eng.main_serv_proj_l1;
        GetSystem_main_service_proj_l2.textContent = language.eng.main_serv_proj_l2;
        GetSystem_main_service_proj_l3.textContent = language.eng.main_serv_proj_l3;
        GetSystem_main_service_proj_l4.textContent = language.eng.main_serv_proj_l4;
        GetSystem_main_service_proj_l5.textContent = language.eng.main_serv_proj_l5;
        GetSystem_main_service_proj_l6.textContent = language.eng.main_serv_proj_l6;
        GetSystem_main_service_proj_l7.textContent = language.eng.main_serv_proj_l7;
       
        GetSystem_portifolio_awoards.textContent = language.eng.port_awords;
        GetSystem_portifolio_awoards_text.textContent = language.eng.port_awords_text;
        GetSystem_portifolio_work.textContent = language.eng.port_work;
        GetSystem_portifolio_work_text.textContent = language.eng.port_work_text;

        GestSystem_gallery.textContent = language.eng.gall;

        GetSystem_team.textContent = language.eng.team;
        GetSystem_team_text.textContent = language.eng.team_text;
        GetSystem_team_founder.textContent = language.eng.team_foun;
        GetSystem_team_founder_text.textContent = language.eng.team_foun_text;
        GetSystem_team_financial.textContent = language.eng.team_final;
        GetSystem_team_financial_text.textContent = language.eng.team_final_text;
        GetSystem_team_director.textContent = language.eng.team_direct;
        GetSystem_team_director_text.textContent = language.eng.team_direct_text
        GetSystem_team_dev.textContent = language.eng.team_d;
        GetSystem_team_dev_text.textContent = language.eng.team_d_text;

        
        GetSystem_clients.textContent = language.eng.clint;
        GetSystem_clients_text.textContent = language.eng.clint_text;

        GetSystem_about.textContent = language.eng.abou;
        GetSystem_about_text1.textContent = language.eng.abou_text1;
        GetSystem_about_text2.textContent = language.eng.abou_text2;
   
        
        GetSystem_adress.textContent = language.eng.adres;
        GetSystem_adress_cont.textContent = language.eng.adress_cont;
        GetSystem_message.textContent = language.eng.mesega;
   

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