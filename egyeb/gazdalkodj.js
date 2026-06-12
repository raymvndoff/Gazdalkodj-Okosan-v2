"use strict";
//#region Változók
var jatekosszam = parseInt(localStorage.getItem("jatekosszam_mentes")) || 0;

var vilagosmod = localStorage.getItem("vilagosmod_mentes") || false;

var elsoNev = localStorage.getItem(`elsonev_mentes`) || "";
var elsoOsszeg = localStorage.getItem(`elsoosszeg_mentes`) || 0;
var elsoSzin = localStorage.getItem(`elsoszin_mentes`) || "";

var masodikNev = localStorage.getItem(`masodiknev_mentes`) || "";
var masodikOsszeg = localStorage.getItem(`masodikosszeg_mentes`) || 0;
var masodikSzin = localStorage.getItem(`masodikszin_mentes`) || "";

var harmadikNev = localStorage.getItem(`harmadiknev_mentes`) || "";
var harmadikOsszeg = localStorage.getItem(`harmadikosszeg_mentes`) || 0;
var harmadikSzin = localStorage.getItem(`harmadikszin_mentes`) || "";

var negyedikNev = localStorage.getItem(`negyediknev_mentes`) || "";
var negyedikOsszeg = localStorage.getItem(`negyedikosszeg_mentes`) || 0;
var negyedikSzin = localStorage.getItem(`negyedikszin_mentes`) || "";

var otodikNev = localStorage.getItem(`otodiknev_mentes`) || "";
var otodikOsszeg = localStorage.getItem(`otodikosszeg_mentes`) || 0;
var otodikSzin = localStorage.getItem(`otodikszin_mentes`) || "";

var hatodikNev = localStorage.getItem(`hatodiknev_mentes`) || "";
var hatodikOsszeg = localStorage.getItem(`hatodikosszeg_mentes`) || 0;
var hatodikSzin = localStorage.getItem(`hatodikszin_mentes`) || "";

var kovetkezoJatekosNeve = localStorage.getItem(`kovetkezojatekos_mentes`) || elsoNev;

var dobasbolKetszerKimaradoNeve = localStorage.getItem("dobasbolKetszerKimaradoneve_mentes") || "";
var dobasbolKetszerKimaradSzamolo = parseInt(localStorage.getItem("dobasbolKetszerKimaradszamolo_mentes")) || 0;

var jatekFolyamatban = localStorage.getItem("jatekfolyamatban_mentes") || false;

var alaposszeg = 0;
var ujosszeg = 0;

var beirtNev = "";
var beirtOsszeg = "";

var jelenlegiNev = "";

var mezo = 0;
var randomSzam = 0;

//Logikai változók
var logikaiListboxAnimation = true;
var hideunhideAnimation = true;

var feketeVan = false;
var feherVan = false;
var sargaVan = false;
var zoldVan = false;
var pirosVan = false;
var kekVan = false;

var akciosTv = false;

//Szín változók
var valasztottSzin = "";
var backgroundSzin = "";
var filterSzin = "";
var borderSzin = "";
//#endregion

window.onload = function () {
    //Világos mód betöltése
    if(vilagosmod == "true" || vilagosmod == true){
        document.querySelector(".navigations > button > img").style.transform = "rotate(180deg)";
        document.querySelector(".navigations > button > img").style.filter = "invert(100%) sepia(9%) saturate(7463%) hue-rotate(192deg) brightness(103%) contrast(111%)";

        document.querySelector(".navigations-mobile > button:last-child > img").style.transform = "rotate(180deg)";
        document.querySelector(".navigations-mobile > button:last-child > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
        document.querySelector(".navigations-mobile > button > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
        document.querySelector(".navchoose-mobile > a > span").style.filter = "invert(1)";
        document.querySelector(".navchoose-mobile > a:nth-child(2) > span").style.filter = "invert(1)";
        document.querySelector(".navchoose-mobile > a:nth-child(3) > span").style.filter = "invert(1)";
        
        document.querySelector("body").style.background = "white";
        document.querySelector(".navigations").style.filter = "invert(1)";

        document.querySelector(".navigations-mobile").style.borderTop = "2px solid black";
        document.querySelector(".navigations-mobile").style.borderTop = "2px solid black";

        if(document.URL.includes("index.php") || document.URL.endsWith("/")){
            document.querySelector(".leiras > h1").style.color = "black";
            document.querySelector(".leiras > p").style.color = "black";
            document.querySelector(".leiras > a > button").style.color = "#5837DF";

            document.querySelector(".leiras > a > button").addEventListener("mouseover", function(){
                document.querySelector(".leiras > a > button").style.color = "white";
            })

            document.querySelector(".leiras > a > button").addEventListener("mouseout", function(){
                document.querySelector(".leiras > a > button").style.color = "#5837DF";
            })
        }
        if(document.URL.includes("szabalyok.php")){
            document.querySelector(".szabalyok-container").style.filter = "invert(1)";
        }

        if(document.URL.includes("jatek.php")){
            //Játékos felvétel
            document.querySelector(".inputs > h1").style.color = "black";

            document.querySelector(".nevbox > span").style.color = "black";
            document.querySelector(".osszegbox > span").style.color = "black";
            document.querySelector('input[name="jatekos-neve"]').style.border = "3px solid black";
            document.querySelector('input[name="jatekos-neve"]').style.color = "black";
            document.querySelector('input[name="kezdo-osszeg"]').style.border = "3px solid black";
            document.querySelector('input[name="kezdo-osszeg"]').style.color = "black";

            document.querySelector(".szinbox > span").style.color = "black";
            document.querySelector(".select").style.border = "3px solid black";
            document.querySelector(".select > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
            document.querySelector(".options").style.filter = "invert(1)";
            document.querySelector(".options").style.border = "3px solid #ada22f";
            document.querySelector(".options").style.borderTop = "none";
            document.querySelector(".select > span").style.filter = "invert(1)";

            document.querySelector(".addgombdiv > button > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
            document.querySelector(".jatekgombdiv > button").style.color = "#5837DF";
            document.querySelector(".jatekosokgombdiv > button").style.color = "#525DD0";

            document.querySelector(".jatekgombdiv > button").addEventListener("mouseover", function(){
                document.querySelector(".jatekgombdiv > button").style.color = "white";
            })

            document.querySelector(".jatekgombdiv > button").addEventListener("mouseout", function(){
                document.querySelector(".jatekgombdiv > button").style.color = "#5837DF";
            })

            document.querySelector(".jatekosokgombdiv > button").addEventListener("mouseover", function(){
                document.querySelector(".jatekosokgombdiv > button").style.color = "white";
            })

            document.querySelector(".jatekosokgombdiv > button").addEventListener("mouseout", function(){
                document.querySelector(".jatekosokgombdiv > button").style.color = "#525DD0";
            })

            document.querySelector(".jatekosokheader > div > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";

            document.querySelector(".alertbox").style.background = "white";
            document.querySelector(".alertbox").style.color = "black";
            document.querySelector(".alertbox > div > button").style.border = "2px solid black";
            document.querySelector(".alertbox > div > button").style.color = "black";
            document.querySelector(".alertbox > div > button:nth-child(2)").style.border = "2px solid black";
            document.querySelector(".alertbox > div > button:nth-child(2)").style.color = "black";

            //Játékmenet
            document.querySelector(".navigations > #jatekbefejez").style.color = "#1db3b3";

            const faces = document.querySelectorAll(".face");
            for (let i = 0; i < faces.length; i++) {
              faces[i].style.border = "5px solid black";
            }

            document.querySelector(".jatekban > span").style.color = "black";
            document.querySelector(".szovegbox > span").style.color = "black";
            document.querySelector(".szovegbox > span").style.borderBottom = "3px solid black";
            document.querySelector(".szovegbox").style.borderRight = "3px solid black";
            document.querySelector(".iconokbox").style.backgroundColor = "white";
            document.querySelector(".iconokbox > img:nth-child(1)").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";

            document.querySelector(".alert").style.borderBottom = "1px solid black";
            document.querySelector(".alert").style.borderTop = "1px solid black";
            document.querySelector(".alert").style.color = "black";


        }
    }
    
    //Világos/sötét mód gomb
    document.querySelector(".navigations > button > img").onclick = function(){
        if(vilagosmod == "true" || vilagosmod == true){
            vilagosmod = false;
            localStorage.setItem("vilagosmod_mentes", vilagosmod);

            location.reload();
            return;
        }
        vilagosmod = true;
        localStorage.setItem("vilagosmod_mentes", vilagosmod);

        location.reload();
    }
    document.querySelector(".navigations-mobile > button:last-child > img").onclick = function(){
        if(vilagosmod == "true" || vilagosmod == true){
            vilagosmod = false;
            localStorage.setItem("vilagosmod_mentes", vilagosmod);

            location.reload();
            return;
        }
        vilagosmod = true;
        localStorage.setItem("vilagosmod_mentes", vilagosmod);

        location.reload();
    }

    if (document.URL.includes("index.php")) {
        document.querySelector('.navigations > a:nth-child(3)').style.color = "white";
        document.querySelector('.navigations > a:nth-child(3) > span').style.borderBottom = "2px solid white";

        document.querySelector(".navchoose-mobile > a:nth-child(2)").style.color = "white";
    }
    if (document.URL.endsWith("/")) {
        document.querySelector('.navigations > a:nth-child(3)').style.color = "white";
        document.querySelector('.navigations > a:nth-child(3) > span').style.borderBottom = "2px solid white";

        document.querySelector(".navchoose-mobile > a:nth-child(2)").style.color = "white";
    }

    document.querySelector(".navigations-mobile > button:nth-child(2)").onclick = function(){
        document.querySelector(".navchoose-mobile > a:nth-child(1)").style.display = "none";
        document.querySelector(".navchoose-mobile > a:nth-child(2)").style.display = "none";
        document.querySelector(".navchoose-mobile > a:nth-child(3)").style.display = "none";
        document.querySelector(".navchoose-mobile > span").style.opacity = "0%";

        document.querySelector(".navchoose-mobile").style.display = "flex";
        
        setTimeout(() => {
            document.querySelector(".navchoose-mobile").style.height = "200px";
        }, 50);

        setTimeout(() => {
            document.querySelector(".navchoose-mobile > a:nth-child(1)").style.display = "flex";
            document.querySelector(".navchoose-mobile > a:nth-child(2)").style.display = "flex";
            document.querySelector(".navchoose-mobile > a:nth-child(3)").style.display = "flex";
            document.querySelector(".navchoose-mobile > span").style.opacity = "100%";
        }, 100);

        document.querySelector(".navchoose-mobile > span").onclick = function(){
            document.querySelector(".navchoose-mobile").style.display = "none";
        }
    }

    if (document.URL.includes("szabalyok.php")) {
        document.querySelector('.navigations > a:nth-child(4)').style.color = "white";
        document.querySelector('.navigations > a:nth-child(4) > span').style.borderBottom = "2px solid white";

        document.querySelector(".navchoose-mobile > a:nth-child(3)").style.color = "white";

        document.querySelector(".szabalyok-gombok > button:nth-child(1)").addEventListener('click', function () {
            document.querySelector(".valasszondiv").style.display = "none";
            document.querySelector(".lakasdiv").style.display = "flex";
            document.querySelector(".lakasdiv").style.animationName = "onload";
            document.querySelector(".autodiv").style.display = "none";
            document.querySelector(".targyakdiv").style.display = "none";
            document.querySelector(".biztositasokdiv").style.display = "none";
            document.querySelector(".altalanosdiv").style.display = "none";
        })
        document.querySelector(".szabalyok-gombok > button:nth-child(2)").addEventListener('click', function () {
            document.querySelector(".autodiv").style.animationName = "onload";
            document.querySelector(".valasszondiv").style.display = "none";
    
            document.querySelector(".lakasdiv").style.display = "none";
            document.querySelector(".autodiv").style.display = "flex";
            document.querySelector(".targyakdiv").style.display = "none";
            document.querySelector(".biztositasokdiv").style.display = "none";
            document.querySelector(".altalanosdiv").style.display = "none";
        })
        document.querySelector(".szabalyok-gombok > button:nth-child(3)").addEventListener('click', function () {
            document.querySelector(".targyakdiv").style.animationName = "onload";
            document.querySelector(".valasszondiv").style.display = "none";
    
            document.querySelector(".lakasdiv").style.display = "none";
            document.querySelector(".autodiv").style.display = "none";
            document.querySelector(".targyakdiv").style.display = "flex";
            document.querySelector(".biztositasokdiv").style.display = "none";
            document.querySelector(".altalanosdiv").style.display = "none";
        })
        document.querySelector(".szabalyok-gombok > button:nth-child(4)").addEventListener('click', function () {
            document.querySelector(".biztositasokdiv").style.animationName = "onload";
            document.querySelector(".valasszondiv").style.display = "none";
    
            document.querySelector(".lakasdiv").style.display = "none";
            document.querySelector(".autodiv").style.display = "none";
            document.querySelector(".targyakdiv").style.display = "none";
            document.querySelector(".biztositasokdiv").style.display = "flex";
            document.querySelector(".altalanosdiv").style.display = "none";
        })
        document.querySelector(".szabalyok-gombok > button:nth-child(5)").addEventListener('click', function () {
            document.querySelector(".altalanosdiv").style.animationName = "onload";
            document.querySelector(".valasszondiv").style.display = "none";
    
            document.querySelector(".lakasdiv").style.display = "none";
            document.querySelector(".autodiv").style.display = "none";
            document.querySelector(".targyakdiv").style.display = "none";
            document.querySelector(".biztositasokdiv").style.display = "none";
            document.querySelector(".altalanosdiv").style.display = "flex";
        })
    }
    if (document.URL.includes("jatek.php")) {
        document.querySelector('.navigations > a:nth-child(2)').style.color = "white";
        document.querySelector('.navigations > a:nth-child(2) > span').style.borderBottom = "2px solid white";

        document.querySelector(".navchoose-mobile > a:nth-child(1)").style.color = "white";

        inputsDesign();
        jatekosokBetoltese();

        //#region Színválasztó
        document.querySelector(".options").addEventListener('click', function (x) {
            valasztottSzin = x.target.id;
            switch (valasztottSzin) {
                case "fekete":
                    document.querySelector(".select > span").textContent = "Fekete";
                    break;
                case "feher":
                    document.querySelector(".select > span").textContent = "Fehér";
                    break;
                case "sarga":
                    document.querySelector(".select > span").textContent = "Sárga";
                    break;
                case "zold":
                    document.querySelector(".select > span").textContent = "Zöld";
                    break;
                case "piros":
                    document.querySelector(".select > span").textContent = "Piros";
                    break;
                case "kek":
                    document.querySelector(".select > span").textContent = "Kék";
                    break;
            }
        })
        //#endregion

        //#region Játékosok tábla
        document.querySelector(".jatekosokgombdiv > button").addEventListener('click', function () {
            document.querySelector(".jatekosok").style.display = "none";
            document.querySelector(".jatekosokgombdiv > button").style.backgroundColor = "#525DD0";
            document.querySelector(".jatekosok-tab").style.display = "flex";
            setTimeout(function(){
                document.querySelector(".jatekosok-tab").style.height = "100%";
                document.querySelector(".jatekosok-tab").style.width = "100%";
                setTimeout(function(){
                    vaneJatekos();
                    document.querySelector(".jatekosokheader").style.display = "flex";
                    if(jatekosszam > 0){
                        document.querySelector(".jatekosok").style.display = "grid";
                    }
                },200)
            },25)
        })

        document.querySelector(".jatekosokheader > div > img").addEventListener('click', function () {
            setTimeout(function(){
                document.querySelector(".jatekosok-tab").style.height = "1px";
                document.querySelector(".jatekosok-tab").style.width = "2000px";
                document.querySelector(".jatekosok-tab > h2").style.display = "none";
                document.querySelector(".jatekosokheader").style.display = "none";
                document.querySelector(".jatekosok").style.display = "none";
                setTimeout(function(){
                    document.querySelector(".jatekosok-tab").style.display = "none";
                    document.querySelector(".jatekosokgombdiv > button").style.background = "none";
                },500)
            },25)
        })


        //#endregion

        //#region Törlésgomb
        torloGomb('elso');
        torloGomb('masodik');
        torloGomb('harmadik');
        torloGomb('negyedik');
        torloGomb('otodik');
        torloGomb('hatodik');
        //#endregion

        document.querySelector(".jatekgombdiv > button").addEventListener('click', function () {
            if(jatekosszam < 2){
                alertBox("Legalább 2 játékos szükséges!");
            }
            if (jatekosszam > 1) {
                document.querySelector(".alertbox > span:nth-child(2)").textContent = `A játékosok száma: ${jatekosszam}`;
                document.querySelector(".alertbox").style.display = "flex";
                // if(vilagosmod == true || vilagosmod == "true"){
                //     document.querySelector(".alertbox").style.background = "white";
                //     document.querySelector(".alertbox").style.color = "black";
                // }
                document.querySelector(".inputs").style.display = "none";
                document.querySelector(".alertbox > div > button:nth-child(1)").addEventListener('click', function(){
                    document.querySelector(".alertbox").style.display = "none";
                    document.querySelector(".inputs").style.display = "flex";
                })
                document.querySelector(".alertbox > div > button:nth-child(2)").addEventListener('click', function(){
                    document.querySelector(".alertbox").style.display = "none";
                    document.querySelector(".jatekban").style.display = "flex";
                    jatekFolyamatban = true;
                    localStorage.setItem("jatekfolyamatban_mentes", jatekFolyamatban);

                    document.querySelector(".alertbox").style.display = "none";
                    document.querySelector(".jatekban").style.display = "flex";
        
                    document.querySelector(".navigations > #jatekbefejez").style.display = "block";
                    document.querySelector(".navchoose-mobile > #jatekbefejez").style.display = "block";

                    kovetkezoJatekosNeve = elsoNev;
                    jatekosokBetoltese();
                    kovetkezoJatekosBetoltese();
                    tablaATMGombokBeallitasa();

                    alertBox("A kockára nyomva dobhatsz!");
                    setTimeout(() => {
                        alertBox("Jó játékot!");
                    }, 3500);
                })
            }
        })

        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            document.querySelector(".inputs ").style.display = "none";
            document.querySelector(".jatekban").style.display = "flex";

            document.querySelector(".navigations > #jatekbefejez").style.display = "block";
            document.querySelector(".navchoose-mobile > #jatekbefejez").style.display = "block";

            kovetkezoJatekosBetoltese();
            tablaATMGombokBeallitasa();
        }

        document.onclick = function(buttonpressed){
            if(buttonpressed.target.id == "jatekbefejez" || buttonpressed.target.id == "helyezetbefejezgomb"){
                document.querySelector(".jatekbefejez-tab").style.display = "flex";
                setTimeout(() => {
                    document.querySelector(".jatekbefejez-tab").style.height = "100%";
                    document.querySelector(".jatekbefejez-tab").style.backdropFilter = "blur(30px)";
                    document.querySelector(".jatekbefejez-tab > div").style.display = "flex";
                }, 10);
            }
        }

        //Mégsem gomb
        document.querySelector(".jatekbefejez-tab > div > div > button:nth-child(2)").onclick = function(){
            document.querySelector(".jatekbefejez-tab").style.height = "1px";
            document.querySelector(".jatekbefejez-tab").style.backdropFilter = "none";
            document.querySelector(".jatekbefejez-tab > div").style.display = "none";
            setTimeout(() => {
                document.querySelector(".jatekbefejez-tab").style.display = "none";
            }, 200);
        }

        //Játék befejezése gomb
        document.querySelector(".jatekbefejez-tab > div > div > button:nth-child(1)").onclick = function(){
            document.querySelector(".jatekbefejez-tab").style.height = "1px";
            document.querySelector(".jatekbefejez-tab").style.backdropFilter = "none";
            document.querySelector(".jatekbefejez-tab > div").style.display = "none";
            setTimeout(() => {
                document.querySelector(".jatekbefejez-tab").style.display = "none";
                jatekTorles();
            }, 200);
        }

        //Játék befejezése gomb
        document.querySelector(".helyezet-tab > div > div > button:nth-child(1)").onclick = function(){
            document.querySelector(".helyezet-tab").style.height = "1px";
            document.querySelector(".helyezet-tab").style.backdropFilter = "none";
            document.querySelector(".helyezet-tab > div").style.display = "none";

            setTimeout(() => {
                document.querySelector(".helyezet-tab").style.display = "flex";
            }, 200);
        }

        //Játék folytatása gomb
        document.querySelector(".helyezet-tab > div > div > button:nth-child(2)").onclick = function(){
            document.querySelector(".helyezet-tab").style.height = "1px";
            document.querySelector(".helyezet-tab").style.backdropFilter = "none";
            document.querySelector(".helyezet-tab > div").style.display = "none";

            setTimeout(() => {
                document.querySelector(".helyezet-tab").style.display = "flex";
            }, 200);
        }

        document.addEventListener('click', function(lenyomottgomb){
            if(lenyomottgomb.target.id == "kovetkezojatekos"){
                mezoDivElrejt();
            }
        })

        //Pörgetés
        document.querySelector(".kocka").addEventListener('click', function(){
            mezo = 0;
            var kocka = document.querySelector(".kocka");
            randomSzam = Math.floor(Math.random() * 6) + 1;
            kocka.style.pointerEvents = "none";
            switch(randomSzam){
                case 1:
                    kocka.style.animationName = "egyestPorget";
                    setTimeout(function(){
                        kocka.style.transform = "rotateX(180deg) rotateY(180deg)";
                        kocka.style.animationName = "none";
                    },2900)
                    break;
                case 2:
                    kocka.style.animationName = "kettestPorget";
                    setTimeout(function(){
                        kocka.style.transform = "rotateX(-90deg) rotateY(180deg)";
                        kocka.style.animationName = "none";
                    },2900)
                    break;
                case 3:
                    kocka.style.animationName = "harmastPorget";
                    setTimeout(function(){
                        kocka.style.transform = "rotateX(-180deg) rotateY(-90deg)";
                        kocka.style.animationName = "none";
                    },2900)
                    break;
                case 4:
                    kocka.style.animationName = "negyestPorget";
                    setTimeout(function(){
                        kocka.style.transform = "rotateX(180deg) rotateY(90deg)";
                        kocka.style.animationName = "none";
                    },2900)
                    break;
                case 5:
                    kocka.style.animationName = "otostPorget";
                    setTimeout(function(){
                        kocka.style.transform = "rotateX(90deg) rotateY(180deg)";
                        kocka.style.animationName = "none";
                    },2900)
                    break;
                case 6:
                    kocka.style.animationName = "hatostPorget";
                    setTimeout(function(){
                        kocka.style.transform = "rotateX(0deg) rotateY(180deg)";
                        kocka.style.animationName = "none";
                    },2900)
                    break;
            }
            
            setTimeout(function(){
                kocka.style.transform = "rotateX(-20deg) rotateY(45deg)";
                kocka.style.pointerEvents = "auto";

                jatekmenetBeallitasa();
                mezoDivMutat();
            },5000)
        })

        //#region Kocka és Tárgyak animáció
        document.querySelector(".iconokbox").addEventListener('mouseover', function () {
            document.querySelector(".kellekek").style.transform = "translateX(0px)";
        })

        document.querySelector(".iconokbox").addEventListener('mouseout', function () {
            document.querySelector(".kellekek").style.transform = "translateX(300px)";
        })

        document.querySelector(".kocka").addEventListener('mouseover', function () {
            document.querySelector(".kocka").style.transform = "rotateX(-10deg) rotateY(130deg)";
        })

        document.querySelector(".kocka").addEventListener('mouseout', function () {
            document.querySelector(".kocka").style.transform = "rotateX(-20deg) rotateY(45deg)";
        })
        //#endregion
    }
}

//#region Design
function inputsDesign() {
    // inputok
    document.querySelector("input[name='jatekos-neve']").addEventListener('focus', function () {
        document.querySelector("input[name='jatekos-neve']").style.border = "3px solid #525DD0";
        document.querySelector(".nevbox > span").style.color = "#525DD0";
    })

    document.querySelector("input[name='jatekos-neve']").addEventListener('focusout', function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector("input[name='jatekos-neve']").style.border = "3px solid black";
            document.querySelector(".nevbox > span").style.color = "black";
        }else{
            document.querySelector("input[name='jatekos-neve']").style.border = "3px solid white";
            document.querySelector(".nevbox > span").style.color = "white";
        }
    })

    document.querySelector("input[name='kezdo-osszeg']").addEventListener('focus', function () {
        document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid #525DD0";
        document.querySelector(".osszegbox > span").style.color = "#525DD0";
    })

    document.querySelector("input[name='kezdo-osszeg']").addEventListener('focusout', function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid black";
            document.querySelector(".osszegbox > span").style.color = "black";
        }else{
            document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid white";
            document.querySelector(".osszegbox > span").style.color = "white";
        }
    })

    // listbox
    document.querySelector(".select").addEventListener('click', function () {
        if (logikaiListboxAnimation == false) {
            optionsElrejt();
            logikaiListboxAnimation = true;
            return;
        }

        optionsMutat();
        logikaiListboxAnimation = false;
    })

    //hozzáad gomb
    document.querySelector(".addgombdiv > button").addEventListener('click', function () {
        document.querySelector(".addgombdiv > button").style.pointerEvents = "none";
        setTimeout(function(){
            document.querySelector(".addgombdiv > button").style.pointerEvents = "auto";
        },1000)

        if (jatekosszam == 6) {
            document.querySelector("input[name='jatekos-neve']").value = "";
            document.querySelector("input[name='kezdo-osszeg']").value = "3000000";
            document.querySelector(".select > span").innerHTML = "Válassz...";
            if(vilagosmod == true || vilagosmod == "true"){
                document.querySelector(".select > span").style.color = "#0f0566";
            }else{
                document.querySelector(".select > span").style.color = "#E6F0FA99";
            }
            
            nevInvalid();
            osszegInvalid();
            addbuttonInvalid();
            selectInvalid();

            return;
        }

        if(document.querySelector("input[name='jatekos-neve']").value == "Nyert" || document.querySelector("input[name='jatekos-neve']").value.length == 0){
            nevInvalid();
            addbuttonInvalid();
            alertBox("Ezzel a névvel nem játszhatsz!");
            return;
        }
        if(document.querySelector("input[name='jatekos-neve']").value == elsoNev ||
        document.querySelector("input[name='jatekos-neve']").value == masodikNev ||
        document.querySelector("input[name='jatekos-neve']").value == harmadikNev ||
        document.querySelector("input[name='jatekos-neve']").value == negyedikNev ||
        document.querySelector("input[name='jatekos-neve']").value == otodikNev){
            nevInvalid();
            addbuttonInvalid();
            alertBox("Ilyen nevű játékos már van!");
            return;
        }

        //csak az összeg jó
        if (document.querySelector("input[name='jatekos-neve']").value.length == 0 && document.querySelector("input[name='kezdo-osszeg']").value.length > 0 && document.querySelector(".select > span").innerHTML == "Válassz...") {
            nevInvalid();
            selectInvalid();
            addbuttonInvalid();
        }

        //csak a név jó
        if (document.querySelector("input[name='jatekos-neve']").value.length > 0 && document.querySelector("input[name='kezdo-osszeg']").value.length == 0 && document.querySelector(".select > span").innerHTML == "Válassz...") {
            osszegInvalid();
            selectInvalid();
            addbuttonInvalid();
        }

        //csak a select a jó
        if (document.querySelector("input[name='jatekos-neve']").value.length == 0 && document.querySelector("input[name='kezdo-osszeg']").value.length == 0 && document.querySelector(".select > span").innerHTML != "Válassz...") {
            osszegInvalid();
            addbuttonInvalid();
        }

        //csak a név és az összeg jó
        if (document.querySelector("input[name='jatekos-neve']").value.length > 0 && document.querySelector("input[name='kezdo-osszeg']").value.length > 0 && document.querySelector(".select > span").innerHTML == "Válassz...") {
            selectInvalid();
            addbuttonInvalid();
        }

        //csak a név és a select jó
        if (document.querySelector("input[name='jatekos-neve']").value.length > 0 && document.querySelector("input[name='kezdo-osszeg']").value.length == 0 && document.querySelector(".select > span").innerHTML != "Válassz...") {
            osszegInvalid();
            addbuttonInvalid();
        }

        //csak az összeg és a select jó
        if (document.querySelector("input[name='jatekos-neve']").value.length == 0 && document.querySelector("input[name='kezdo-osszeg']").value.length > 0 && document.querySelector(".select > span").innerHTML != "Válassz...") {
            nevInvalid();
            addbuttonInvalid();
        }

        //Egyik sem jó
        if (document.querySelector("input[name='jatekos-neve']").value.length == 0 && document.querySelector("input[name='kezdo-osszeg']").value.length == 0 && document.querySelector(".select > span").innerHTML == "Válassz...") {
            nevInvalid();
            osszegInvalid();
            selectInvalid();
            addbuttonInvalid();
        }

        //Mindegyik jó
        if (document.querySelector("input[name='jatekos-neve']").value.length > 0 && document.querySelector("input[name='kezdo-osszeg']").value.length > 0 && document.querySelector(".select > span").innerHTML != "Válassz...") {
            beirtNev = document.querySelector(".nevbox > input").value;
            beirtOsszeg = parseInt(document.querySelector(".osszegbox > input").value);

            jatekosHozzaadas();

            nevValid();
            osszegValid();
            selectValid();
            addbuttonValid();
        }
    })
}

function nevValid() {
    document.querySelector("input[name='jatekos-neve']").style.border = "3px solid #7FE57B";
    document.querySelector(".nevbox > span").style.color = "#7FE57B";
    document.querySelector("input[name='jatekos-neve']").style.color = "#7FE57B";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector("input[name='jatekos-neve']").style.border = "3px solid black";
            document.querySelector(".nevbox > span").style.color = "black";
            document.querySelector("input[name='jatekos-neve']").style.color = "black"
        }else{
            document.querySelector("input[name='jatekos-neve']").style.border = "3px solid white";
            document.querySelector(".nevbox > span").style.color = "white";
            document.querySelector("input[name='jatekos-neve']").style.color = "white";
        }
        document.querySelector("input[name='jatekos-neve']").value = "";

    }, 1000)
}

function nevInvalid() {
    document.querySelector("input[name='jatekos-neve']").style.border = "3px solid #E24C4C";
    document.querySelector(".nevbox > span").style.color = "#E24C4C";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector("input[name='jatekos-neve']").style.border = "3px solid black";
            document.querySelector(".nevbox > span").style.color = "black";
            document.querySelector("input[name='jatekos-neve']").style.color = "black"
        }else{
            document.querySelector("input[name='jatekos-neve']").style.border = "3px solid white";
            document.querySelector(".nevbox > span").style.color = "white";
            document.querySelector("input[name='jatekos-neve']").style.color = "white";
        }
    }, 1000)
}

function osszegValid() {
    document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid #7FE57B";
    document.querySelector(".osszegbox > span").style.color = "#7FE57B";
    document.querySelector("input[name='kezdo-osszeg']").style.color = "#7FE57B";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid black";
            document.querySelector(".osszegbox > span").style.color = "black";
            document.querySelector("input[name='kezdo-osszeg']").style.color = "black";
        }else{
            document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid white";
            document.querySelector(".osszegbox > span").style.color = "white";
            document.querySelector("input[name='kezdo-osszeg']").style.color = "white";
        }
    }, 1000)
}

function osszegInvalid() {
    document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid #E24C4C";
    document.querySelector(".osszegbox > span").style.color = "#E24C4C";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid black";
            document.querySelector(".osszegbox > span").style.color = "black";
            document.querySelector("input[name='kezdo-osszeg']").style.color = "black";
        }else{
            document.querySelector("input[name='kezdo-osszeg']").style.border = "3px solid white";
            document.querySelector(".osszegbox > span").style.color = "white";
            document.querySelector("input[name='kezdo-osszeg']").style.color = "white";
        }
    }, 1000)
}

function selectValid() {
    document.querySelector(".select").style.border = "3px solid #7FE57B";
    document.querySelector(".szinbox > span").style.color = "#7FE57B";
    document.querySelector(".select > img").style.filter = "invert(90%) sepia(6%) saturate(3375%) hue-rotate(58deg) brightness(93%) contrast(92%)";
    if(vilagosmod == true || vilagosmod == "true"){
        document.querySelector(".select > span").style.color = "#801a84";
    }else{
        document.querySelector(".select > span").style.color = "#7FE57B";
    }
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector(".select").style.border = "3px solid black";
            document.querySelector(".szinbox > span").style.color = "black";
            document.querySelector(".select > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
            document.querySelector(".select > span").style.color = "#E6F0FA99";
        }else{
            document.querySelector(".select").style.border = "3px solid white";
            document.querySelector(".szinbox > span").style.color = "white";
            document.querySelector(".select > img").style.filter = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
            document.querySelector(".select > span").style.color = "#E6F0FA99";
        }
        document.querySelector(".select > span").textContent = "Válassz...";
    }, 1000)
}

function selectInvalid() {
    document.querySelector(".select").style.border = "3px solid #E24C4C";
    document.querySelector(".szinbox > span").style.color = "#E24C4C";
    document.querySelector(".select > img").style.filter = "invert(76%) sepia(84%) saturate(5205%) hue-rotate(327deg) brightness(89%) contrast(96%)";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector(".select").style.border = "3px solid black";
            document.querySelector(".szinbox > span").style.color = "black";
            document.querySelector(".select > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
        }else{
            document.querySelector(".select").style.border = "3px solid white";
            document.querySelector(".szinbox > span").style.color = "white";
            document.querySelector(".select > img").style.filter = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
        }
    }, 1000)
}

function addbuttonValid() {
    document.querySelector(".addgombdiv > button > img").style.filter = "invert(100%) sepia(16%) saturate(7163%) hue-rotate(48deg) brightness(102%) contrast(75%)";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector(".addgombdiv > button > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
        }else{
            document.querySelector(".addgombdiv > button > img").style.filter = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
        }
    }, 1000)
}

function addbuttonInvalid() {
    document.querySelector(".addgombdiv > button > img").style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
    setTimeout(function () {
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector(".addgombdiv > button > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
        }else{
            document.querySelector(".addgombdiv > button > img").style.filter = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
        }
    }, 1000)
}

function optionsMutat() {
    document.querySelector(".szinbox > span").style.color = "#525DD0";
    document.querySelector(".select").style.border = "3px solid #525DD0";
    document.querySelector(".select").style.borderBottomRightRadius = "0";
    document.querySelector(".select").style.borderBottomLeftRadius = "0";
    document.querySelector(".select > img").style.filter = "invert(36%) sepia(79%) saturate(2887%) hue-rotate(224deg) brightness(87%) contrast(86%)";
    document.querySelector(".select > img").style.transform = "rotate(180deg)";

    document.querySelector(".options").style.display = "flex";
    document.querySelector(".options").style.height = "1px";

    setTimeout(function () {
        document.querySelector(".options").style.height = "287px";
        setTimeout(function () {
            document.querySelector("#fekete").style.display = "block";
            document.querySelector("#feher").style.display = "block";
            document.querySelector("#sarga").style.display = "block";
            document.querySelector("#zold").style.display = "block";
            document.querySelector("#piros").style.display = "block";
            document.querySelector("#kek").style.display = "block";

            szinVizsgalat(elsoSzin);
            szinVizsgalat(masodikSzin);
            szinVizsgalat(harmadikSzin);
            szinVizsgalat(negyedikSzin);
            szinVizsgalat(otodikSzin);
            szinVizsgalat(hatodikSzin);

            if(feketeVan){
                document.querySelector("#fekete").style.pointerEvents = "none";
                document.querySelector("#fekete").style.color = "#E6F0FA99";
            }
            else{
                document.querySelector("#fekete").style.pointerEvents = "auto";
                document.querySelector("#fekete").style.color = "white";
            }
        
            if(feherVan){
                document.querySelector("#feher").style.pointerEvents = "none";
                document.querySelector("#feher").style.color = "#E6F0FA99";
            }
            else{
                document.querySelector("#feher").style.pointerEvents = "auto";
                document.querySelector("#feher").style.color = "white";
            }
        
            if(sargaVan){
                document.querySelector("#sarga").style.pointerEvents = "none";
                document.querySelector("#sarga").style.color = "#E6F0FA99";
            }
            else{
                document.querySelector("#sarga").style.pointerEvents = "auto";
                document.querySelector("#sarga").style.color = "white";
            }
        
            if(zoldVan){
                document.querySelector("#zold").style.pointerEvents = "none";
                document.querySelector("#zold").style.color = "#E6F0FA99";
            }
            else{
                document.querySelector("#zold").style.pointerEvents = "auto";
                document.querySelector("#zold").style.color = "white";
            }
        
            if(pirosVan){
                document.querySelector("#piros").style.pointerEvents = "none";
                document.querySelector("#piros").style.color = "#E6F0FA99";
            }
            else{
                document.querySelector("#piros").style.pointerEvents = "auto";
                document.querySelector("#piros").style.color = "white";
            }
        
            if(kekVan){
                document.querySelector("#kek").style.pointerEvents = "none";
                document.querySelector("#kek").style.color = "#E6F0FA99";
            }
            else{
                document.querySelector("#kek").style.pointerEvents = "auto";
                document.querySelector("#kek").style.color = "white";
            }
        }, 200);
    }, 20)
}

function optionsElrejt() {
    document.querySelector(".options").style.height = "1px";
    document.querySelector("#fekete").style.display = "none";
    document.querySelector("#feher").style.display = "none";
    document.querySelector("#sarga").style.display = "none";
    document.querySelector("#zold").style.display = "none";
    document.querySelector("#piros").style.display = "none";
    document.querySelector("#kek").style.display = "none";
    setTimeout(function () {
        document.querySelector(".options").style.display = "none";
        if(vilagosmod == true || vilagosmod == "true"){
            document.querySelector(".szinbox > span").style.color = "black";
            document.querySelector(".select").style.border = "3px solid black";
            document.querySelector(".select > img").style.filter = "invert(0%) sepia(0%) saturate(7473%) hue-rotate(162deg) brightness(106%) contrast(106%)";
        }
        else{
            document.querySelector(".szinbox > span").style.color = "white";
            document.querySelector(".select").style.border = "3px solid white";
            document.querySelector(".select > img").style.filter = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
        }
        document.querySelector(".select").style.borderBottomRightRadius = "10px";
        document.querySelector(".select").style.borderBottomLeftRadius = "10px";
        document.querySelector(".select > img").style.transform = "rotate(360deg)";
    }, 230)
}

function szinValaszt() {
    logikaiListboxAnimation = true;
    optionsElrejt();

    setTimeout(function () {
        document.querySelector(".select > span").style.color = "white";
    }, 100)
}

function mezoDivMutat(){
    document.querySelector(".mezomutato").style.display = "flex";
    setTimeout(function(){
        document.querySelector(".mezomutato").style.height = "100%";
        document.querySelector(".mezomutato").style.width = "100%";
        setTimeout(function(){
            document.querySelector(".mezomutato > div").style.display = "flex";
            document.querySelector(".mezomutato > div > span").textContent = `${mezo}.Mező`;

            document.getElementById("mosogepcheck").checked = false;
            document.getElementById("hutoszekrenycheck").checked = false;
            document.getElementById("tuzhelycheck").checked = false;

            document.getElementById("eletbiztositascheck").checked = false;
            document.getElementById("lakasbiztositascheck").checked = false;
            document.getElementById("autobiztositascheck").checked = false;
        },100)
    },25) 
}

function mezoDivElrejt(){
    document.cookie = "alert_nev = " + jelenlegiNev;
    fetch("esemenyek_PHP/alert.php", {
        method: "GET",
    })
    .then(data => data.text())
    .then(data => {
        ujosszeg = data;
        var kulonbseg = parseInt(ujosszeg) - parseInt(alaposszeg);
        if(kulonbseg > 0){
            alertBox(`+${parseInt(kulonbseg).toLocaleString()} Ft ${jelenlegiNev} számára`);
        }
        if(kulonbseg < 0){
            alertBox(`${parseInt(kulonbseg).toLocaleString()} Ft ${jelenlegiNev} számára`);
        }
    })

    if(jelenlegiNev == elsoNev){
        egyenlegLekeres(elsoNev, elsoOsszeg);
        setTimeout(() => {
            nyeresMegnezese(elsoNev, elsoOsszeg);
        }, 500);
    }
    if(jelenlegiNev == masodikNev){
        egyenlegLekeres(masodikNev, masodikOsszeg);
        setTimeout(() => {
            nyeresMegnezese(masodikNev, masodikOsszeg);
        }, 500);
    }
    if(jelenlegiNev == harmadikNev){
        egyenlegLekeres(harmadikNev, harmadikOsszeg);
        setTimeout(() => {
            nyeresMegnezese(harmadikNev, harmadikOsszeg);
        }, 500);
    }
    if(jelenlegiNev == negyedikNev){
        egyenlegLekeres(negyedikNev, negyedikOsszeg);
        setTimeout(() => {
            nyeresMegnezese(negyedikNev, negyedikOsszeg);
        }, 500);
    }
    if(jelenlegiNev == otodikNev){
        egyenlegLekeres(otodikNev, otodikOsszeg);
        setTimeout(() => {
            nyeresMegnezese(otodikNev, otodikOsszeg);
        }, 500);
    }
    if(jelenlegiNev == hatodikNev){
        egyenlegLekeres(hatodikNev, hatodikOsszeg);
        setTimeout(() => {
            nyeresMegnezese(hatodikNev, hatodikOsszeg);
        }, 500);
    }

    mezo = 0;
    document.querySelector(".mezomutato > div").style.display = "flex";
    setTimeout(function(){
        document.querySelector(".mezomutato").style.height = "1px";
        document.querySelector(".mezomutato").style.width = "2000px";
        setTimeout(function(){
            document.querySelector(".mezomutato").style.display = "none";
            document.querySelector(".mezomutato > div").style.transform = "rotateY(0deg)";

            kovetkezoJatekosBetoltese();
        },200)
    },25)
}

function atmMutat(nev, osszeg){
    document.getElementById("tablazat").style.display = "none";
    document.getElementById("atm").style.display = "flex";
    document.querySelector(".jatekosadatok > span").textContent = `ATM (${nev})`;
    document.getElementById("hideunhide").style.opacity = "0%";
    document.getElementById("hideunhide").style.pointerEvents = "none";
    
    //Befizet
    document.querySelector("#atm > div > button:nth-child(1)").onclick = function(){
        var beirtosszeg = document.querySelector("#atm > input").value;
        if(beirtosszeg.length == 0 || beirtosszeg == 0){
            document.getElementById("atm").style.borderRight = "2px solid #E24C4C";
            document.getElementById("atm").style.borderLeft = "2px solid #E24C4C";
            document.querySelector(".jatekosadatok > span").style.color = "#E24C4C";
            document.querySelector("#atm > input").style.border = "2px solid #E24C4C";
                setTimeout(() => {
                    document.getElementById("atm").style.borderRight = "2px solid white";
                    document.getElementById("atm").style.borderLeft = "2px solid white";
                    document.querySelector(".jatekosadatok > span").style.color = "white";
                    document.querySelector("#atm > input").style.border = "2px solid #525DD0";
                }, 1500);
            return;
        }

        document.cookie = "nev = " + nev;
        document.cookie = "osszeg = " + beirtosszeg * -1;
        fetch("esemenyek_PHP/fizetes.php", {
            method: "POST",
        })
        .then(data => data.text())
        .then(data => {
            document.querySelector("#atm > input").value = "";
            document.getElementById("atm").style.borderRight = "2px solid #7FE57B";
            document.getElementById("atm").style.borderLeft = "2px solid #7FE57B";
            document.querySelector(".jatekosadatok > span").style.color = "#7FE57B";
            setTimeout(() => {
                document.getElementById("atm").style.borderRight = "2px solid white";
                document.getElementById("atm").style.borderLeft = "2px solid white";
                document.querySelector(".jatekosadatok > span").style.color = "white";
            }, 1500);

            egyenlegLekeres(nev, osszeg);
        })
    }

    //Levon
    document.querySelector("#atm > div > button:nth-child(2)").onclick = function(){
        var beirtosszeg = document.querySelector("#atm > input").value;
        if(beirtosszeg.length == 0 || beirtosszeg == 0){
            document.getElementById("atm").style.borderRight = "2px solid #E24C4C";
            document.getElementById("atm").style.borderLeft = "2px solid #E24C4C";
            document.querySelector(".jatekosadatok > span").style.color = "#E24C4C";
            document.querySelector("#atm > input").style.border = "2px solid #E24C4C";
                setTimeout(() => {
                    document.getElementById("atm").style.borderRight = "2px solid white";
                    document.getElementById("atm").style.borderLeft = "2px solid white";
                    document.querySelector(".jatekosadatok > span").style.color = "white";
                    document.querySelector("#atm > input").style.border = "2px solid #525DD0";
                }, 1500);
            return;
        }

        document.cookie = "nev = " + nev;
        document.cookie = "osszeg = " + beirtosszeg;
        fetch("esemenyek_PHP/fizetes.php", {
            method: "POST",
        })
        .then(data => data.text())
        .then(data => {
            if(data == "false"){
                document.getElementById("atm").style.borderRight = "2px solid #E24C4C";
                document.getElementById("atm").style.borderLeft = "2px solid #E24C4C";
                document.querySelector(".jatekosadatok > span").style.color = "#E24C4C";
                setTimeout(() => {
                    document.getElementById("atm").style.borderRight = "2px solid white";
                    document.getElementById("atm").style.borderLeft = "2px solid white";
                    document.querySelector(".jatekosadatok > span").style.color = "white";
                }, 1500);
            }
            else{
                document.querySelector("#atm > input").value = "";
                document.getElementById("atm").style.borderRight = "2px solid #7FE57B";
                document.getElementById("atm").style.borderLeft = "2px solid #7FE57B";
                document.querySelector(".jatekosadatok > span").style.color = "#7FE57B";
                setTimeout(() => {
                    document.getElementById("atm").style.borderRight = "2px solid white";
                    document.getElementById("atm").style.borderLeft = "2px solid white";
                    document.querySelector(".jatekosadatok > span").style.color = "white";
                }, 1500);

                egyenlegLekeres(nev, osszeg);
            }
        })
    }
}
//#endregion

function vaneJatekos() {
    if (jatekosszam > 0) {
        document.querySelector(".jatekosok-tab > h2").style.display = "none";
    }
    else {
        document.querySelector(".jatekosok-tab > h2").style.display = "flex";
    }
}

function jatekosHozzaadas() {
    if (elsoNev.length == 0) {
        elsoNev = beirtNev;
        elsoOsszeg = beirtOsszeg;
        elsoSzin = valasztottSzin;

        jatekosszam++;
        jatekosDivje(elsoNev, elsoOsszeg, elsoSzin, 'elso');
        return;
    }
    if (masodikNev.length == 0) {
        masodikNev = beirtNev;
        masodikOsszeg = beirtOsszeg;
        masodikSzin = valasztottSzin;

        jatekosszam++;
        jatekosDivje(masodikNev, masodikOsszeg, masodikSzin, 'masodik');
        return;
    }
    if (harmadikNev.length == 0) {
        harmadikNev = beirtNev;
        harmadikOsszeg = beirtOsszeg;
        harmadikSzin = valasztottSzin;

        jatekosszam++;
        jatekosDivje(harmadikNev, harmadikOsszeg, harmadikSzin, 'harmadik');
        return;
    }
    if (negyedikNev.length == 0) {
        negyedikNev = beirtNev;
        negyedikOsszeg = beirtOsszeg;
        negyedikSzin = valasztottSzin;

        jatekosszam++;
        jatekosDivje(negyedikNev, negyedikOsszeg, negyedikSzin, 'negyedik');
        return;
    }
    if (otodikNev.length == 0) {
        otodikNev = beirtNev;
        otodikOsszeg = beirtOsszeg;
        otodikSzin = valasztottSzin;

        jatekosszam++;
        jatekosDivje(otodikNev, otodikOsszeg, otodikSzin, 'otodik');
        return;
    }
    if (hatodikNev.length == 0) {
        hatodikNev = beirtNev;
        hatodikOsszeg = beirtOsszeg;
        hatodikSzin = valasztottSzin;

        jatekosszam++;
        jatekosDivje(hatodikNev, hatodikOsszeg, hatodikSzin, 'hatodik');
        return;
    }
}

function torloGomb(hanyadik) {
    document.querySelector(`.${hanyadik}jatekos > button`).addEventListener('click', function() {
        document.querySelector(`.${hanyadik}jatekos`).style.display = "none";
        jatekosszam--;

        feketeVan = false;
        feherVan = false;
        sargaVan = false;
        zoldVan = false;
        pirosVan = false;
        kekVan = false;

        switch(hanyadik){
            case "elso":
                elsoNev = "";
                elsoOsszeg = 0;
                elsoSzin = 0;
                
                localStorage.setItem(`elsonev_mentes`, elsoNev);
                localStorage.setItem(`elsoosszeg_mentes`, elsoOsszeg);
                localStorage.setItem(`elsoszin_mentes`, elsoSzin);
                break;
            case "masodik":
                masodikNev = "";
                masodikOsszeg = 0;
                masodikSzin = 0;
                
                localStorage.setItem(`masodiknev_mentes`, masodikNev);
                localStorage.setItem(`masodikosszeg_mentes`, masodikOsszeg);
                localStorage.setItem(`masodikszin_mentes`, masodikSzin);
                break;
            case "harmadik":
                harmadikNev = "";
                harmadikOsszeg = 0;
                harmadikSzin = 0;
                
                localStorage.setItem(`harmadiknev_mentes`, harmadikNev);
                localStorage.setItem(`harmadikosszeg_mentes`, harmadikOsszeg);
                localStorage.setItem(`harmadikszin_mentes`, harmadikSzin);
                break;
            case "negyedik":
                negyedikNev = "";
                negyedikOsszeg = 0;
                negyedikSzin = 0;
                
                localStorage.setItem(`negyediknev_mentes`, negyedikNev);
                localStorage.setItem(`negyedikosszeg_mentes`, negyedikOsszeg);
                localStorage.setItem(`negyedikszin_mentes`, negyedikSzin);
                break;
            case "otodik":
                otodikNev = "";
                otodikOsszeg = 0;
                otodikSzin = 0;
                
                localStorage.setItem(`otodiknev_mentes`, otodikNev);
                localStorage.setItem(`otodikosszeg_mentes`, otodikOsszeg);
                localStorage.setItem(`otodikszin_mentes`, otodikSzin);
                break;
            case "hatodik":
                hatodikNev = "";
                hatodikOsszeg = 0;
                hatodikSzin = 0;
                
                localStorage.setItem(`hatodiknev_mentes`, hatodikNev);
                localStorage.setItem(`hatodikosszeg_mentes`, hatodikOsszeg);
                localStorage.setItem(`hatodikszin_mentes`, hatodikSzin);
                break;
        }

        setTimeout(function () {
            localStorage.setItem("jatekosszam_mentes", jatekosszam);

            vaneJatekos();
        }, 100);
    })
}

function jatekosDivje(nev, osszeg, szin, hanyadik) {
    szinVizsgalat(szin);

    document.querySelector(`.${hanyadik}jatekos`).style.display = "flex";
    document.querySelector(`.${hanyadik}jatekos > div`).style.border = `1px solid ${borderSzin}`;
    document.querySelector(`.${hanyadik}jatekos > div`).style.backgroundColor = backgroundSzin;
    document.querySelector(`.${hanyadik}jatekos > div > img`).style.filter = filterSzin;
    document.querySelector(`.${hanyadik}jatekos > span`).textContent = `${nev} (${parseInt(osszeg).toLocaleString()}Ft)`;

    document.querySelector(`.${hanyadik}jatekos`).style.borderBottomLeftRadius = "30px";
    document.querySelector(`.${hanyadik}jatekos`).style.borderBottomRightRadius = "30px";

    localStorage.setItem(`${hanyadik}nev_mentes`, nev);
    localStorage.setItem(`${hanyadik}osszeg_mentes`, osszeg);
    localStorage.setItem(`${hanyadik}szin_mentes`, szin);
    localStorage.setItem("jatekosszam_mentes", jatekosszam);
}

function szinVizsgalat(szin) {
    switch (szin) {
        case "fekete":
            backgroundSzin = "black";
            borderSzin = "white";
            filterSzin = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
            feketeVan = true;
            break;
        case "feher":
            backgroundSzin = "white";
            borderSzin = "black";
            filterSzin = "";
            feherVan = true;
            break;
        case "sarga":
            backgroundSzin = "yellow";
            borderSzin = "black";
            filterSzin = "";
            sargaVan = true;
            break;
        case "zold":
            backgroundSzin = "green";
            borderSzin = "white";
            filterSzin = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
            zoldVan = true;
            break;
        case "piros":
            backgroundSzin = "red";
            borderSzin = "white";
            filterSzin = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
            pirosVan = true;
            break;
        case "kek":
            backgroundSzin = "#525DD0";
            borderSzin = "white";
            filterSzin = "invert(100%) sepia(0%) saturate(7393%) hue-rotate(355deg) brightness(101%) contrast(95%)";
            kekVan = true;
            break;
    }
}

function jatekosokBetoltese() {
    if (elsoNev.length > 0) {
        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            ujSorTablahoz(elsoNev, elsoOsszeg);
        }else{
            jatekosDivje(elsoNev, elsoOsszeg, elsoSzin, 'elso');
        }
    }
    if (masodikNev.length > 0) {
        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            ujSorTablahoz(masodikNev, masodikOsszeg);
        }else{
            jatekosDivje(masodikNev, masodikOsszeg, masodikSzin, 'masodik');
        }
    }
    if (harmadikNev.length > 0) {
        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            ujSorTablahoz(harmadikNev, harmadikOsszeg);
        }else{
            jatekosDivje(harmadikNev, harmadikOsszeg, harmadikSzin, 'harmadik');
        }
    }
    if (negyedikNev.length > 0) {
        
        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            ujSorTablahoz(negyedikNev, negyedikOsszeg);
        }else{
            jatekosDivje(negyedikNev, negyedikOsszeg, negyedikSzin, 'negyedik');
        }
    }
    if (otodikNev.length > 0) {
        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            ujSorTablahoz(otodikNev, otodikOsszeg);
        }else{
            jatekosDivje(otodikNev, otodikOsszeg, otodikSzin, 'otodik');
        }
    }
    if (hatodikNev.length > 0) {
        if(jatekFolyamatban == 'true' || jatekFolyamatban == true){
            ujSorTablahoz(hatodikNev, hatodikOsszeg);
        }else{
            jatekosDivje(hatodikNev, hatodikOsszeg, hatodikSzin, 'hatodik');
        }
    }
}

function kovetkezoJatekosBetoltese(){
    //Kétszer kimarad a dobásból
    if(dobasbolKetszerKimaradSzamolo > 2){
        dobasbolKetszerKimaradoNeve = "";
        localStorage.setItem("dobasbolKetszerKimaradoneve_mentes", dobasbolKetszerKimaradoNeve);

        dobasbolKetszerKimaradSzamolo = 0;
        localStorage.setItem("dobasbolKetszerKimaradszamolo_mentes", dobasbolKetszerKimaradSzamolo);
    }
    if(dobasbolKetszerKimaradoNeve == elsoNev && kovetkezoJatekosNeve == elsoNev){
        kovetkezoJatekosNeve = masodikNev;
        dobasbolKetszerKimaradSzamolo++;
    }
    if(dobasbolKetszerKimaradoNeve == masodikNev && kovetkezoJatekosNeve == masodikNev){
        kovetkezoJatekosNeve = harmadikNev;
        dobasbolKetszerKimaradSzamolo++;
    }
    if(dobasbolKetszerKimaradoNeve == harmadikNev && kovetkezoJatekosNeve == harmadikNev){
        kovetkezoJatekosNeve = negyedikNev;
        dobasbolKetszerKimaradSzamolo++;
    }
    if(dobasbolKetszerKimaradoNeve == negyedikNev && kovetkezoJatekosNeve == negyedikNev){
        kovetkezoJatekosNeve = otodikNev;
        dobasbolKetszerKimaradSzamolo++;
    }
    if(dobasbolKetszerKimaradoNeve == otodikNev && kovetkezoJatekosNeve == otodikNev){
        kovetkezoJatekosNeve = hatodikNev;
        dobasbolKetszerKimaradSzamolo++;
    }
    if(dobasbolKetszerKimaradoNeve == hatodikNev && kovetkezoJatekosNeve == hatodikNev){
        kovetkezoJatekosNeve = elsoNev;
        dobasbolKetszerKimaradSzamolo++;
    }
    localStorage.setItem("dobasbolKetszerKimaradszamolo_mentes", dobasbolKetszerKimaradSzamolo);

    switch(kovetkezoJatekosNeve){
        case elsoNev:
            jatekosHUDMutat(elsoNev, elsoOsszeg);
            setTimeout(() => {
                egyenlegLekeres(elsoNev, elsoOsszeg);
                berendezesIconBeallitas(elsoNev);
            }, 500);
            break;
        case masodikNev:
            jatekosHUDMutat(masodikNev, masodikOsszeg);
            setTimeout(() => {
                egyenlegLekeres(masodikNev, masodikOsszeg);
                berendezesIconBeallitas(masodikNev);
            }, 500);
            break;
        case harmadikNev:
            jatekosHUDMutat(harmadikNev, harmadikOsszeg);
            setTimeout(() => {
                egyenlegLekeres(harmadikNev, harmadikOsszeg);
                berendezesIconBeallitas(harmadikNev);
            }, 500);
            break;
        case negyedikNev:
            jatekosHUDMutat(negyedikNev, negyedikOsszeg);
            setTimeout(() => {
                egyenlegLekeres(negyedikNev, negyedikOsszeg);
                berendezesIconBeallitas(negyedikNev);
            }, 500);
            break;
        case otodikNev:
            jatekosHUDMutat(otodikNev, otodikOsszeg);
            setTimeout(() => {
                egyenlegLekeres(otodikNev, otodikOsszeg);
                berendezesIconBeallitas(otodikNev);
            }, 500);
            break;
        case hatodikNev:
            jatekosHUDMutat(hatodikNev, hatodikOsszeg);
            setTimeout(() => {
                egyenlegLekeres(hatodikNev, hatodikOsszeg);
                berendezesIconBeallitas(hatodikNev);
            }, 500);
            break;
    }
}

function jatekosHUDMutat(nev, osszeg){
    document.querySelector(".jatekban > span").textContent = `${nev} köre`;
    document.querySelector(".szovegbox > span").textContent = `${parseInt(osszeg).toLocaleString()}Ft`;

    document.cookie = "nev = " + nev;
    document.cookie = "egyenleg = " + osszeg;

    fetch("esemenyek_PHP/jatekosFeltoltes.php",{
        method: "POST",
    })
}

function ujSorTablahoz(nev, osszeg){
    var tabla = document.querySelector("table");

    var sor = tabla.insertRow(-1);
    var elsoMezo = sor.insertCell(0);
    var masodikMezo = sor.insertCell(1);
    var harmadikMezo = sor.insertCell(2);

    elsoMezo.innerHTML = nev;
    masodikMezo.innerHTML = parseInt(osszeg).toLocaleString();
    harmadikMezo.innerHTML = '<button id="atmgomb"><img src="iconok/atm_icon.png"></button>';
}

function jatekmenetBeallitasa(){
    switch(jatekosszam){
        case 2:
            switch(kovetkezoJatekosNeve){
                case elsoNev:
                    mezoLekeres(elsoNev);
                    kovetkezoJatekosNeve = masodikNev;
                    if(masodikNev == "Nyert"){
                        jatekTorles();
                        alertBox("Egyedül nem játszhatsz!");
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case masodikNev:
                    mezoLekeres(masodikNev);
                    kovetkezoJatekosNeve = elsoNev;
                    if(elsoNev == "Nyert"){
                        jatekTorles();
                        alertBox("Egyedül nem játszhatsz!");
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
            }
            break;
        case 3:
            switch(kovetkezoJatekosNeve){
                case elsoNev:
                    mezoLekeres(elsoNev);
                    kovetkezoJatekosNeve = masodikNev;
                    if(masodikNev == "Nyert"){
                        kovetkezoJatekosNeve = harmadikNev;
                        if(harmadikNev == "Nyert"){
                            jatekTorles();
                            alertBox("Egyedül nem játszhatsz!");
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case masodikNev:
                    mezoLekeres(masodikNev);
                    kovetkezoJatekosNeve = harmadikNev;
                    if(harmadikNev == "Nyert"){
                        kovetkezoJatekosNeve = elsoNev;
                        if(elsoNev == "Nyert"){
                            jatekTorles();
                            alertBox("Egyedül nem játszhatsz!");
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case harmadikNev:
                    mezoLekeres(harmadikNev);
                    kovetkezoJatekosNeve = elsoNev;
                    if(elsoNev == "Nyert"){
                        kovetkezoJatekosNeve = masodikNev;
                        if(masodikNev == "Nyert"){
                            jatekTorles();
                            alertBox("Egyedül nem játszhatsz!");
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
            }
            break;
        case 4:
            switch(kovetkezoJatekosNeve){
                case elsoNev:
                    mezoLekeres(elsoNev);
                    kovetkezoJatekosNeve = masodikNev;
                    if(masodikNev == "Nyert"){
                        kovetkezoJatekosNeve = harmadikNev;
                        if(harmadikNev == "Nyert"){
                            kovetkezoJatekosNeve = negyedikNev;
                            if(negyedikNev == "Nyert"){
                                jatekTorles();
                                alertBox("Egyedül nem játszhatsz!");
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case masodikNev:
                    mezoLekeres(masodikNev);
                    kovetkezoJatekosNeve = harmadikNev;
                    if(harmadikNev == "Nyert"){
                        kovetkezoJatekosNeve = negyedikNev;
                        if(negyedikNev == "Nyert"){
                            kovetkezoJatekosNeve = elsoNev;
                            if(elsoNev == "Nyert"){
                                jatekTorles();
                                alertBox("Egyedül nem játszhatsz!");
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case harmadikNev:
                    mezoLekeres(harmadikNev);
                    kovetkezoJatekosNeve = negyedikNev;
                    if(negyedikNev == "Nyert"){
                        kovetkezoJatekosNeve = elsoNev;
                        if(elsoNev == "Nyert"){
                            kovetkezoJatekosNeve = masodikNev;
                            if(masodikNev == "Nyert"){
                                jatekTorles();
                                alertBox("Egyedül nem játszhatsz!");
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case negyedikNev:
                    mezoLekeres(negyedikNev);
                    kovetkezoJatekosNeve = elsoNev;
                    if(elsoNev == "Nyert"){
                        kovetkezoJatekosNeve = masodikNev;
                        if(masodikNev == "Nyert"){
                            kovetkezoJatekosNeve = harmadikNev;
                            if(harmadikNev == "Nyert"){
                                jatekTorles();
                                alertBox("Egyedül nem játszhatsz!");
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
            }
            break;
        case 5:
            switch(kovetkezoJatekosNeve){
                case elsoNev:
                    mezoLekeres(elsoNev);
                    kovetkezoJatekosNeve = masodikNev;
                    if(masodikNev == "Nyert"){
                        kovetkezoJatekosNeve = harmadikNev;
                        if(harmadikNev == "Nyert"){
                            kovetkezoJatekosNeve = negyedikNev;
                            if(negyedikNev == "Nyert"){
                                kovetkezoJatekosNeve = otodikNev;
                                if(otodikNev == "Nyert"){
                                    jatekTorles();
                                    alertBox("Egyedül nem játszhatsz!");
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case masodikNev:
                    mezoLekeres(masodikNev);
                    kovetkezoJatekosNeve = harmadikNev;
                    if(harmadikNev == "Nyert"){
                        kovetkezoJatekosNeve = negyedikNev;
                        if(negyedikNev == "Nyert"){
                            kovetkezoJatekosNeve = otodikNev;
                            if(otodikNev == "Nyert"){
                                kovetkezoJatekosNeve = elsoNev;
                                if(elsoNev == "Nyert"){
                                    jatekTorles();
                                    alertBox("Egyedül nem játszhatsz!");
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case harmadikNev:
                    mezoLekeres(harmadikNev);
                    kovetkezoJatekosNeve = negyedikNev;
                    if(negyedikNev == "Nyert"){
                        kovetkezoJatekosNeve = otodikNev;
                        if(otodikNev == "Nyert"){
                            kovetkezoJatekosNeve = elsoNev;
                            if(elsoNev == "Nyert"){
                                kovetkezoJatekosNeve = masodikNev;
                                if(masodikNev == "Nyert"){
                                    jatekTorles();
                                    alertBox("Egyedül nem játszhatsz!");
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case negyedikNev:
                    mezoLekeres(negyedikNev);
                    kovetkezoJatekosNeve = otodikNev;
                    if(otodikNev == "Nyert"){
                        kovetkezoJatekosNeve = elsoNev;
                        if(elsoNev == "Nyert"){
                            kovetkezoJatekosNeve = masodikNev;
                            if(masodikNev == "Nyert"){
                                kovetkezoJatekosNeve = harmadikNev;
                                if(harmadikNev == "Nyert"){
                                    jatekTorles();
                                    alertBox("Egyedül nem játszhatsz!");
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case otodikNev:
                    mezoLekeres(otodikNev);
                    kovetkezoJatekosNeve = elsoNev;
                    if(elsoNev == "Nyert"){
                        kovetkezoJatekosNeve = masodikNev;
                        if(masodikNev == "Nyert"){
                            kovetkezoJatekosNeve = harmadikNev;
                            if(harmadikNev == "Nyert"){
                                kovetkezoJatekosNeve = negyedikNev;
                                if(negyedikNev == "Nyert"){
                                    jatekTorles();
                                    alertBox("Egyedül nem játszhatsz!");
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
            }
            break;
        case 6:
            switch(kovetkezoJatekosNeve){
                case elsoNev:
                    mezoLekeres(elsoNev);
                    kovetkezoJatekosNeve = masodikNev;
                    if(masodikNev == "Nyert"){
                        kovetkezoJatekosNeve = harmadikNev;
                        if(harmadikNev == "Nyert"){
                            kovetkezoJatekosNeve = negyedikNev;
                            if(negyedikNev == "Nyert"){
                                kovetkezoJatekosNeve = otodikNev;
                                if(otodikNev == "Nyert"){
                                    kovetkezoJatekosNeve = hatodikNev;
                                    if(hatodikNev == "Nyert"){
                                        jatekTorles();
                                        alertBox("Egyedül nem játszhatsz!");
                                    }
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case masodikNev:
                    mezoLekeres(masodikNev);
                    kovetkezoJatekosNeve = harmadikNev;
                    if(harmadikNev == "Nyert"){
                        kovetkezoJatekosNeve = negyedikNev;
                        if(negyedikNev == "Nyert"){
                            kovetkezoJatekosNeve = otodikNev;
                            if(otodikNev == "Nyert"){
                                kovetkezoJatekosNeve = hatodikNev;
                                if(hatodikNev == "Nyert"){
                                    kovetkezoJatekosNeve = elsoNev;
                                    if(elsoNev == "Nyert"){
                                        jatekTorles();
                                        alertBox("Egyedül nem játszhatsz!");
                                    }
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case harmadikNev:
                    mezoLekeres(harmadikNev);
                    kovetkezoJatekosNeve = negyedikNev;
                    if(negyedikNev == "Nyert"){
                        kovetkezoJatekosNeve = otodikNev;
                        if(otodikNev == "Nyert"){
                            kovetkezoJatekosNeve = hatodikNev;
                            if(hatodikNev == "Nyert"){
                                kovetkezoJatekosNeve = elsoNev;
                                if(elsoNev == "Nyert"){
                                    kovetkezoJatekosNeve = masodikNev;
                                    if(masodikNev == "Nyert"){
                                        jatekTorles();
                                        alertBox("Egyedül nem játszhatsz!");
                                    }
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case negyedikNev:
                    mezoLekeres(negyedikNev);
                    kovetkezoJatekosNeve = otodikNev;
                    if(otodikNev == "Nyert"){
                        kovetkezoJatekosNeve = hatodikNev;
                        if(hatodikNev == "Nyert"){
                            kovetkezoJatekosNeve = elsoNev;
                            if(elsoNev == "Nyert"){
                                kovetkezoJatekosNeve = masodikNev;
                                if(masodikNev == "Nyert"){
                                    kovetkezoJatekosNeve = harmadikNev;
                                    if(harmadikNev == "Nyert"){
                                        jatekTorles();
                                        alertBox("Egyedül nem játszhatsz!");
                                    }
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case otodikNev:
                    mezoLekeres(otodikNev);
                    kovetkezoJatekosNeve = hatodikNev;
                    if(hatodikNev == "Nyert"){
                        kovetkezoJatekosNeve = elsoNev;
                        if(elsoNev == "Nyert"){
                            kovetkezoJatekosNeve = masodikNev;
                            if(masodikNev == "Nyert"){
                                kovetkezoJatekosNeve = harmadikNev;
                                if(harmadikNev == "Nyert"){
                                    kovetkezoJatekosNeve = negyedikNev;
                                    if(negyedikNev == "Nyert"){
                                        jatekTorles();
                                        alertBox("Egyedül nem játszhatsz!");
                                    }
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
                case hatodikNev:
                    mezoLekeres(hatodikNev);
                    kovetkezoJatekosNeve = elsoNev;
                    if(elsoNev == "Nyert"){
                        kovetkezoJatekosNeve = masodikNev;
                        if(masodikNev == "Nyert"){
                            kovetkezoJatekosNeve = harmadikNev;
                            if(harmadikNev == "Nyert"){
                                kovetkezoJatekosNeve = negyedikNev;
                                if(negyedikNev == "Nyert"){
                                    kovetkezoJatekosNeve = otodikNev;
                                    if(otodikNev == "Nyert"){
                                        jatekTorles();
                                        alertBox("Egyedül nem játszhatsz!");
                                    }
                                }
                            }
                        }
                    }
                    localStorage.setItem("kovetkezojatekos_mentes", kovetkezoJatekosNeve);
                    break;
            }
            break;
    }
}

function mezoLekeres(nev){
    document.getElementById("lehetFizetes").style.display = "none";
    document.getElementById("nincsFizetes").style.display = "none";
    document.getElementById("vanFizetes").style.display = "none";
    document.getElementById("biztositasok").style.display = "none";
    document.getElementById("berendezesek").style.display = "none";
    document.getElementById("vasarlaserror").style.display = "none";
    document.getElementById("vasarlaserrorVanFiz").style.display = "none";
    document.getElementById("szerencsekerek").style.display = "none";
    document.querySelector("#lehetFizetes > span:nth-child(2)").style.display = "flex";
    document.querySelector("#vasarlaserror > p").textContent = "Valamely elem(ek) vásárlása nem lehetséges!";

    document.cookie = "nev = " + nev;
    document.cookie = "dobasertek = " + randomSzam;
    jelenlegiNev = nev;
    fetch("esemenyek_PHP/egyenlegLeker.php", {
        method: "GET",
    })
    .then(data => data.text())
    .then(data => {
        alaposszeg = data;
    })

    fetch("mezok_PHP/mezoLeker.php", {
        method: "POST",
    })
    .then(lekertmezo => lekertmezo.text())
    .then(lekertmezo => {
        if(lekertmezo == "ujradob"){
            mezo = 13;
            document.querySelector(".mezomutato > div > p").textContent = "A következő dobással továbbjuthatsz!";
            document.getElementById("ujradob").style.display = "flex";
            document.getElementById("ujradob").onclick = function(){
                kovetkezoJatekosNeve = nev;
                localStorage.setItem(`kovetkezojatekos_mentes`, kovetkezoJatekosNeve);
                document.getElementById("ujradob").style.display = "none";
                mezoDivElrejt();
            }
            return;
        }
        if(lekertmezo == "kimarad"){
            mezoDivElrejt();
            return;
        }
        
        mezo = parseInt(lekertmezo);
        mezoLeirasLekeres();
        mezoMegjelenites();
    })
}

function mezoLeirasLekeres(){
    document.getElementById("szerencsekerek").style.display = "none";

    document.cookie = "vizsgaltmezo = " + mezo;

    fetch("mezok_PHP/leirasLeker.php", {
        method: "GET",
    })
    .then(mezoleiras => mezoleiras.text())
    .then(mezoleiras => {
        document.querySelector(".mezomutato > div > p").textContent = mezoleiras;
    })
}

function mezoMegjelenites(){
    document.cookie = "vizsgaltmezo = " + mezo;

    fetch("esemenyek_PHP/osszegLeker.php", {
        method: "GET",
    })
    .then(mezoosszeg => mezoosszeg.text())
    .then(mezoosszeg => {
        if(mezo == 3 || mezo == 10 || mezo == 16 || mezo == 23 || mezo == 28 || mezo == 32 || mezo == 37){
            document.getElementById("szerencsekerek").style.display = "flex";
            document.querySelector("#szerencsekerek > button:nth-child(1)").onclick = function(){
                document.querySelector(".mezomutato > div").style.transform = "rotateY(360deg)";
                document.querySelector("#szerencsekerek > button:nth-child(1)").style.display = "none";
                document.querySelector("#szerencsekerek > button:nth-child(2)").style.display = "flex";
                szerencseKartya(jelenlegiNev);
            };
            return;
        }
        if(mezo == 20){
            document.getElementById("vanFizetes").style.display = "flex";
            document.querySelector("#vanFizetes > span:nth-child(1)").textContent = `${parseInt(mezoosszeg).toLocaleString()}Ft`;
            document.querySelector("#vanFizetes > div > button:nth-child(1)").onclick = function(){
                document.getElementById("vanFizetes").style.display = "none";
                document.getElementById("szerencsekerek").style.display = "flex";
                document.querySelector(".mezomutato > div > p").textContent = "Kövesd a szerencsekerék kártya utasításait!";
                document.querySelector("#szerencsekerek > button:nth-child(1)").onclick = function(){
                    document.querySelector(".mezomutato > div").style.transform = "rotateY(360deg)";
                    document.querySelector("#szerencsekerek > button:nth-child(1)").style.display = "none";
                    document.querySelector("#szerencsekerek > button:nth-child(2)").style.display = "flex";
                    szerencseKartya(jelenlegiNev);
                };
            }

            document.querySelector("#vanFizetes > div > button:nth-child(2)").onclick = function(){
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "osszeg = " + mezoosszeg;
            
                fetch("esemenyek_PHP/fizetes.php", {
                    method: "POST",
                })
                .then(data => data.text())
                .then(data => {
                    if(data == "false"){
                        document.getElementById("vasarlaserrorVanFiz").style.display = "flex";
                        document.querySelector("#vasarlaserrorVanFiz > p").textContent = "Fizetés megtagadva, nincs elég fedezeted!";
                    }
                    else{
                        document.getElementById("vanFizetes").style.display = "none";
                        document.getElementById("szerencsekerek").style.display = "flex";
                        document.querySelector(".mezomutato > div > p").textContent = "Kövesd a szerencsekerék kártya utasításait!";
                        document.querySelector("#szerencsekerek > button:nth-child(1)").onclick = function(){
                        document.querySelector(".mezomutato > div").style.transform = "rotateY(360deg)";
                            document.querySelector("#szerencsekerek > button:nth-child(1)").style.display = "none";
                            document.querySelector("#szerencsekerek > button:nth-child(2)").style.display = "flex";
                            szerencseKartya(jelenlegiNev);
                        };
                    }
                })
            }
            return;
        }
        if(mezo == 2 || mezo == 5 || mezo == 11 || mezo == 38 || mezo == 40){
            var termek = "";
            document.getElementById("lehetFizetes").style.display = "flex";
            document.querySelector("#lehetFizetes > span:nth-child(2)").textContent = `${parseInt(mezoosszeg).toLocaleString()}Ft`;
            if(mezo == 40 && akciosTv == true){
                document.querySelector("#lehetFizetes > span:nth-child(2)").textContent = `70 000Ft helyett 60 000Ft`;
            }

            document.querySelector("#fizetesgombok > button:nth-child(2)").onclick = function(){
                switch (mezo) {
                    case 2:
                        termek = "berlet";
                        break;
                    case 5:
                        termek = "auto";
                        break;
                    case 11:
                        termek = "konyhabutor";
                        break;
                    case 38:
                        termek = "szobabutor";
                        break;
                    case 40:
                        termek = "televizio";
                        break;
                }

                if(akciosTv == true && termek == "televizio"){
                    document.cookie = "nev = " + jelenlegiNev;
                    document.cookie = "osszeg = " + 60000;
                    document.cookie = "termek = " + termek;
        
                    fetch("esemenyek_PHP/vasarlas.php", {
                        method: "POST",
                    })
                    .then(y => y.text())
                    .then(y => {
                        if(y == "osszegfalse"){
                            document.getElementById("vasarlaserror").style.display = "flex";
                            document.querySelector("#vasarlaserror > p").textContent = "Fizetés megtagadva, nincs elég fedezeted!";
                        }
                        else if(y == "termekfalse"){
                            document.getElementById("vasarlaserror").style.display = "flex";
                        }
                        else{
                            mezoDivElrejt();
                        }
                    })
                    return;
                }

                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "osszeg = " + parseInt(mezoosszeg);
                document.cookie = "termek = " + termek;
    
                fetch("esemenyek_PHP/vasarlas.php", {
                    method: "POST",
                })
                .then(y => y.text())
                .then(y => {
                    if(y == "osszegfalse"){
                        document.getElementById("vasarlaserror").style.display = "flex";
                        document.querySelector("#vasarlaserror > p").textContent = "Fizetés megtagadva, nincs elég fedezeted!";
                    }
                    else if(y == "termekfalse"){
                        document.getElementById("vasarlaserror").style.display = "flex";
                    }
                    else{
                        mezoDivElrejt();
                    }
                })
            }

            document.querySelector("#fizetesgombok > button:nth-child(1)").onclick = function(){
                switch (mezo) {
                    case 2:
                        termek = "berlet";
                        break;
                    case 5:
                        termek = "auto";
                        break;
                    case 11:
                        termek = "konyhabutor";
                        break;
                    case 38:
                        termek = "szobabutor";
                        break;
                    case 40:
                        termek = "televizio";
                        break;
                }
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "osszeg = " + 0;
                document.cookie = "termek = " + termek;
    
                fetch("esemenyek_PHP/vasarlas.php", {
                    method: "POST",
                })
                .then(y => y.text())
                .then(y => {
                    if(y == "termekfalse"){
                        document.getElementById("vasarlaserror").style.display = "flex";
                    }
                    else{
                        mezoDivElrejt();
                    }
                })
            }
            return;
        }
        if(mezo == 15 || mezo == 27){
            document.cookie = "nev = " + jelenlegiNev;

            fetch("mezok_PHP/buntetes.php", {
                method: "POST",
            })
            .then(data => data.text())
            .then(data => {
                if(data == "true"){
                    alertBox("Büntetés levonva! (6 000Ft)");
                }
            })
            if(mezo == 27){
                document.getElementById("szerencsekerek").style.display = "flex";
                document.querySelector("#szerencsekerek > button:nth-child(1)").onclick = function(){
                    document.querySelector(".mezomutato > div").style.transform = "rotateY(360deg)";
                    document.querySelector("#szerencsekerek > button:nth-child(1)").style.display = "none";
                    document.querySelector("#szerencsekerek > button:nth-child(2)").style.display = "flex";
                    szerencseKartya(jelenlegiNev);
                };
                return;
            }
        }
        if(mezo == 19 || mezo == 39){
            document.getElementById("lehetFizetes").style.display = "flex";
            document.querySelector("#lehetFizetes > span:nth-child(2)").textContent = `9 500 000Ft`;
            document.querySelector("#fizetesgombok > button:nth-child(2)").onclick = function(){
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "osszeg = " + 9500000;
                document.cookie = "termek = " + "lakas";
    
                fetch("esemenyek_PHP/vasarlas.php", {
                    method: "POST",
                })
                .then(y => y.text())
                .then(y => {
                    if(y == "osszegfalse"){
                        document.getElementById("vasarlaserror").style.display = "flex";
                        document.querySelector("#vasarlaserror > p").textContent = "Fizetés megtagadva, nincs elég fedezeted!";
                    }
                    else if(y == "termekfalse"){
                        document.getElementById("vasarlaserror").style.display = "flex";
                    }
                    else{
                        mezoDivElrejt();
                    }
                })
            }
            document.querySelector("#fizetesgombok > button:nth-child(1)").onclick = function(){
                mezoDivElrejt();
            }
            return;
        }
        if(mezo == 33){
            document.querySelector("#lehetFizetes > span:nth-child(2)").style.display = "none";
            document.getElementById("lehetFizetes").style.display = "flex";
            document.getElementById("berendezesek").style.display = "flex";

            var mosogep = document.getElementById("mosogepcheck");
            var huto = document.getElementById("hutoszekrenycheck");
            var tuzhely = document.getElementById("tuzhelycheck");

            var mosogepLogikai = false;
            var hutoLogikai = false;
            var tuzhelyLogikai = false;

            var osszeg = 0;

            mosogep.onclick = function(){
                if (mosogep.checked) {
                    osszeg = osszeg + 90000;
                    mosogepLogikai = true;
                }
                if (!mosogep.checked) {
                    osszeg = osszeg - 90000;
                    mosogepLogikai = false;
                }
            }
            huto.onclick = function(){
                if (huto.checked) {
                    osszeg = osszeg + 80000;
                    hutoLogikai = true;
                }
                if (!huto.checked) {
                    osszeg = osszeg - 80000;
                    hutoLogikai = false;
                }
            }
            tuzhely.onclick = function(){
                if (tuzhely.checked) {
                    osszeg = osszeg + 70000;
                    tuzhelyLogikai = true;
                }
                if (!tuzhely.checked) {
                    osszeg = osszeg - 70000;
                    tuzhelyLogikai = false;
                }
            }

            document.querySelector("#fizetesgombok > button:nth-child(2)").onclick = function(){
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "osszeg = " + osszeg;
                document.cookie = "mosogep = " + mosogepLogikai;
                document.cookie = "huto = " + hutoLogikai;
                document.cookie = "tuzhely = " + tuzhelyLogikai;
                fetch("mezok_PHP/berendezesek.php", {
                    method: "POST",
                })
                    .then(data => data.text())
                    .then(data => {
                        if (data.includes("0") || data == "") {
                            document.getElementById("vasarlaserror").style.display = "flex";
                        }
                        else if(data.includes("osszegfalse")){
                            document.getElementById("vasarlaserror").style.display = "flex";
                            document.querySelector("#vasarlaserror > p").textContent = "Fizetés megtagadva, nincs elég fedezeted!";
                        }
                        else {
                            document.getElementById("vasarlaserror").style.display = "none";
                            mezoDivElrejt();
                        }
                    })
            }

            document.querySelector("#fizetesgombok > button:nth-child(1)").onclick = function(){
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "osszeg = " + 0;
                document.cookie = "mosogep = " + mosogepLogikai;
                document.cookie = "huto = " + hutoLogikai;
                document.cookie = "tuzhely = " + tuzhelyLogikai;
                fetch("mezok_PHP/berendezesek.php", {
                    method: "POST",
                })
                    .then(data => data.text())
                    .then(data => {
                        if (data.includes("0") || data == "") {
                            document.getElementById("vasarlaserror").style.display = "flex";
                        }
                        else {
                            document.getElementById("vasarlaserror").style.display = "none";
                            mezoDivElrejt();
                        }
                    })
            }
            return;
        }
        if(mezo == 42){
            document.getElementById("nincsFizetes").style.display = "flex";
            document.querySelector(".mezomutato > div > span").textContent = `Start mező`;
            document.querySelector(".mezomutato > div > p").textContent = "1 000 000Ft -ban részesülsz, amiért ráléptél a Start mezőre!";
            document.getElementById("nincsFizetes").style.display = "flex";
            return;
        }
        if(mezo == 8){
            fetch("esemenyek_PHP/egyenlegLeker.php", {
                method: "GET",
            })
            .then(c => c.text())
            .then(c => {
                var lekertegyenleg = parseInt(c);
                var ujegyenleg = lekertegyenleg * 1.07;
                document.cookie = "egyenleg = " + parseInt(ujegyenleg);

                fetch("esemenyek_PHP/egyenlegFeltolt.php", {
                    method: "POST",
                })
            })
            document.getElementById("nincsFizetes").style.display = "flex";
            return;
        }
        if(mezo == 9){
            document.querySelector("#lehetFizetes > span:nth-child(2)").style.display = "none";
            document.getElementById("lehetFizetes").style.display = "flex";
            document.getElementById("biztositasok").style.display = "flex";

            var elet = document.getElementById("eletbiztositascheck");
            var lakas = document.getElementById("lakasbiztositascheck");
            var auto = document.getElementById("autobiztositascheck");

            var eletLogikai = false;
            var lakasLogikai = false;
            var autoLogikai = false;

            var osszeg = 0;

            elet.onclick = function(){
                if (elet.checked) {
                    osszeg = osszeg + 60000;
                    eletLogikai = true;
                }
                if (!elet.checked) {
                    osszeg = osszeg - 60000;
                    eletLogikai = false;
                }
            }
            lakas.onclick = function(){
                if (lakas.checked) {
                    osszeg = osszeg + 40000;
                    lakasLogikai = true;
                }
                if (!lakas.checked) {
                    osszeg = osszeg - 40000;
                    lakasLogikai = false;
                }
            }
            auto.onclick = function(){
                if (auto.checked) {
                    osszeg = osszeg + 30000;
                    autoLogikai = true;
                }
                if (!auto.checked) {
                    osszeg = osszeg - 30000;
                    autoLogikai = false;
                }
            }

            document.querySelector("#fizetesgombok > button:nth-child(2)").onclick = function(){
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "elet = " + eletLogikai;
                document.cookie = "lakas = " + lakasLogikai;
                document.cookie = "auto = " + autoLogikai;
                fetch("mezok_PHP/biztositas.php", {
                    method: "POST",
                })
                    .then(data => data.text())
                    .then(data => {
                        if (data.includes("0") || data == "") {
                            document.getElementById("vasarlaserror").style.display = "flex";
                        }
                        else {
                            if(data.includes("elet")){
                                targyatNyer(jelenlegiNev, "eletbiztositas", 0);
                            }
                            if(data.includes("lakas")){
                                targyatNyer(jelenlegiNev, "lakasbiztositas", 0);
                            }
                            if(data.includes("auto")){
                                targyatNyer(jelenlegiNev, "lakasbiztositas", 0);
                            }
                            document.getElementById("vasarlaserror").style.display = "none";
                            fizetes(jelenlegiNev, osszeg);
                        }
                    })
            }

            document.querySelector("#fizetesgombok > button:nth-child(1)").onclick = function(){
                document.cookie = "nev = " + jelenlegiNev;
                document.cookie = "elet = " + eletLogikai;
                document.cookie = "lakas = " + lakasLogikai;
                document.cookie = "auto = " + autoLogikai;
                fetch("mezok_PHP/biztositas.php", {
                    method: "POST",
                })
                    .then(data => data.text())
                    .then(data => {
                        if (data.includes("0") || data == "") {
                            document.getElementById("vasarlaserror").style.display = "flex";
                        }
                        else {
                            if(data.includes("elet")){
                                targyatNyer(jelenlegiNev, "eletbiztositas", 0);
                            }
                            if(data.includes("lakas")){
                                targyatNyer(jelenlegiNev, "lakasbiztositas", 0);
                            }
                            if(data.includes("auto")){
                                targyatNyer(jelenlegiNev, "lakasbiztositas", 0);
                            }
                            document.getElementById("vasarlaserror").style.display = "none";
                            fizetes(jelenlegiNev, 0);
                        }
                    })
            }
            return;
        }
        if(mezoosszeg == 0){
            document.getElementById("nincsFizetes").style.display = "flex";
        }
        else{
            document.getElementById("vanFizetes").style.display = "flex";
            document.querySelector("#vanFizetes > span:nth-child(1)").textContent = `${parseInt(mezoosszeg).toLocaleString()}Ft`;
            document.querySelector("#vanFizetes > div > button:nth-child(1)").onclick = function(){
                mezoDivElrejt();
            }
            document.querySelector("#vanFizetes > div > button:nth-child(2)").onclick = function(){
                fizetes(jelenlegiNev, parseInt(mezoosszeg));
            }
        }
    })
}

function fizetes(nev, osszeg){
    document.cookie = "nev = " + nev;
    document.cookie = "osszeg = " + osszeg;

    fetch("esemenyek_PHP/fizetes.php", {
        method: "POST",
    })
    .then(data => data.text())
    .then(data => {
        if(data == "false"){
            document.getElementById("vasarlaserrorVanFiz").style.display = "flex";
            document.querySelector("#vasarlaserrorVanFiz > p").textContent = "Fizetés megtagadva, nincs elég fedezeted!";
        }
        else{
            mezoDivElrejt();
        }
    })
}

function egyenlegLekeres(nev){
    document.cookie = "nev = " + nev;
    fetch("esemenyek_PHP/egyenlegLeker.php", {
        method: "GET",
    })
    .then(amount => amount.text())
    .then(amount => {
        var tabla = document.querySelector("table");
        if(nev == elsoNev){
            elsoOsszeg = amount;
            tabla.rows[1].cells.item(1).innerHTML = parseInt(elsoOsszeg).toLocaleString();
            localStorage.setItem(`elsoosszeg_mentes`, elsoOsszeg);
        }
        if(nev == masodikNev){
            masodikOsszeg = amount;
            tabla.rows[2].cells.item(1).innerHTML = parseInt(masodikOsszeg).toLocaleString();
            localStorage.setItem(`masodikosszeg_mentes`, masodikOsszeg);
        }

        if(jatekosszam == 3){
            if(nev == harmadikNev){
                harmadikOsszeg = amount;
                tabla.rows[3].cells.item(1).innerHTML = parseInt(harmadikOsszeg).toLocaleString();
                localStorage.setItem(`harmadikosszeg_mentes`, harmadikOsszeg);
            }
        }

        if(jatekosszam == 4){
            if(nev == harmadikNev){
                harmadikOsszeg = amount;
                tabla.rows[3].cells.item(1).innerHTML = parseInt(harmadikOsszeg).toLocaleString();
                localStorage.setItem(`harmadikosszeg_mentes`, harmadikOsszeg);
            }
            if(nev == negyedikNev){
                negyedikOsszeg = amount;
                tabla.rows[4].cells.item(1).innerHTML = parseInt(negyedikOsszeg).toLocaleString();
                localStorage.setItem(`negyedikosszeg_mentes`, negyedikOsszeg);
            }
        }

        if(jatekosszam == 5){
            if(nev == harmadikNev){
                harmadikOsszeg = amount;
                tabla.rows[3].cells.item(1).innerHTML = parseInt(harmadikOsszeg).toLocaleString();
                localStorage.setItem(`harmadikosszeg_mentes`, harmadikOsszeg);
            }
            if(nev == negyedikNev){
                negyedikOsszeg = amount;
                tabla.rows[4].cells.item(1).innerHTML = parseInt(negyedikOsszeg).toLocaleString();
                localStorage.setItem(`negyedikosszeg_mentes`, negyedikOsszeg);
            }
            if(nev == otodikNev){
                otodikOsszeg = amount;
                tabla.rows[5].cells.item(1).innerHTML = parseInt(otodikNev).toLocaleString();
                localStorage.setItem(`otodikosszeg_mentes`, otodikNev);
            }
        }

        if(jatekosszam == 6){
            if(nev == harmadikNev){
                harmadikOsszeg = amount;
                tabla.rows[3].cells.item(1).innerHTML = parseInt(harmadikOsszeg).toLocaleString();
                localStorage.setItem(`harmadikosszeg_mentes`, harmadikOsszeg);
            }
            if(nev == negyedikNev){
                negyedikOsszeg = amount;
                tabla.rows[4].cells.item(1).innerHTML = parseInt(negyedikOsszeg).toLocaleString();
                localStorage.setItem(`negyedikosszeg_mentes`, negyedikOsszeg);
            }
            if(nev == otodikNev){
                otodikOsszeg = amount;
                tabla.rows[5].cells.item(1).innerHTML = parseInt(otodikNev).toLocaleString();
                localStorage.setItem(`otodikosszeg_mentes`, otodikNev);
            }
            if(nev == hatodikNev){
                hatodikOsszeg = amount;
                tabla.rows[6].cells.item(1).innerHTML = parseInt(hatodikOsszeg).toLocaleString();
                localStorage.setItem(`hatodikosszeg_mentes`, hatodikOsszeg);
            }
        }
    })
}

function berendezesIconBeallitas(nev){
    document.cookie = "nev = " + nev;
    fetch("esemenyek_PHP/berendezesekLeker.php", {
        method: "GET",
    })
    .then(data => data.text())
    .then(data => {
        if(data.includes('berlet')){
            document.querySelector('.iconokbox > img:nth-child(2)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(1)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(2)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(1)').style.color = "#E24C4C";
        }

        if(data.includes('lakasbiztositas')){
            document.querySelector('.iconokbox > img:nth-child(3)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(2)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(3)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(2)').style.color = "#E24C4C";
        }

        if(data.includes('eletbiztositas')){
            document.querySelector('.iconokbox > img:nth-child(4)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(3)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(4)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(3)').style.color = "#E24C4C";
        }

        if(data.includes('autobiztositas')){
            document.querySelector('.iconokbox > img:nth-child(5)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(4)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(5)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(4)').style.color = "#E24C4C";
        }

        if(data.includes('kocsi')){
            document.querySelector('.iconokbox > img:nth-child(6)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(5)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(6)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(5)').style.color = "#E24C4C";
        }

        if(data.includes('konyhabutor')){
            document.querySelector('.iconokbox > img:nth-child(7)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(6)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(7)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(6)').style.color = "#E24C4C";
        }

        if(data.includes('szobabutor')){
            document.querySelector('.iconokbox > img:nth-child(8)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(9)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(8)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(9)').style.color = "#E24C4C";
        }

        if(data.includes('mosogep')){
            document.querySelector('.iconokbox > img:nth-child(9)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(8)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(9)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(8)').style.color = "#E24C4C";
        }

        if(data.includes('hutoszekreny')){
            document.querySelector('.iconokbox > img:nth-child(10)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(9)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(10)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(9)').style.color = "#E24C4C";
        }

        if(data.includes('tuzhely')){
            document.querySelector('.iconokbox > img:nth-child(11)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(10)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(11)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(10)').style.color = "#E24C4C";
        }

        if(data.includes('televizio')){
            document.querySelector('.iconokbox > img:nth-child(12)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(11)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(12)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(11)').style.color = "#E24C4C";
        }

        if(data.includes('lakas')){
            document.querySelector('.iconokbox > img:nth-child(13)').style.filter = "invert(46%) sepia(94%) saturate(457%) hue-rotate(68deg) brightness(97%) contrast(86%)";
            document.querySelector('.kellekek > span:nth-child(12)').style.color = "#2FAB25";
        }else{
            document.querySelector('.iconokbox > img:nth-child(13)').style.filter = "invert(38%) sepia(47%) saturate(4674%) hue-rotate(339deg) brightness(99%) contrast(80%)";
            document.querySelector('.kellekek > span:nth-child(12)').style.color = "#E24C4C";
        }
    })
}

function mezoreDob(nev, mezoszam){
    document.cookie = "nev_mezo = " + nev;
    document.cookie = "ujmezo = " + mezoszam;

    fetch("szerencsekartyak_PHP/mezoreDob.php", {
        method: "POST",
    })
    mezo = mezoszam;
    document.querySelector(".mezomutato > div > span").textContent = `${mezo}.Mező`;
    mezoLeirasLekeres();
    mezoMegjelenites();
}

function penztKap(nev, osszeg){
    document.cookie = "nev_nyeremeny = " + nev;
    document.cookie = "osszeg = " + osszeg;

    fetch("szerencsekartyak_PHP/nyeremeny.php", {
        method: "POST",
    })
}

function targyatNyer(nev, targy, osszeg){
    document.cookie = "nev_targyatnyer = " + nev;
    document.cookie = "termek = " + targy;
    document.cookie = "osszeg = " + osszeg;
    fetch("szerencsekartyak_PHP/targyatNyer.php", {
        method: "POST",
    })
}

function szerencseKartya(nev){
    fetch("szerencsekartyak_PHP/szerencsekartyaId.php", {
        method: "GET",
    })
    .then(szerencseid => szerencseid.text())
    .then(szerencseid => {
        document.cookie = "id = " + szerencseid;

        fetch("szerencsekartyak_PHP/szerencsekartyaLeiras.php", {
            method: "GET",
        })
        .then(leiras => leiras.text())
        .then(leiras => {
            document.querySelector(".mezomutato > div > p").textContent = leiras;
        })
        fetch("szerencsekartyak_PHP/szerencsekartyaOsszeg.php", {
            method: "GET",
        })
        .then(osszeg => osszeg.text())
        .then(osszeg => {
            document.querySelector("#szerencsekerek > button:nth-child(2)").onclick = function(){
                switch(szerencseid){
                    case "1":
                        dobasbolKetszerKimaradoNeve = nev;
                        localStorage.setItem("dobasbolKetszerKimaradoneve_mentes", dobasbolKetszerKimaradoNeve);
                        dobasbolKetszerKimaradSzamolo++;
                        localStorage.setItem("dobasbolKetszerKimaradszamolo_mentes", dobasbolKetszerKimaradSzamolo);
                        mezoDivElrejt();
                        break;
                    case "2":
                        mezoreDob(nev, 1);
                        break;
                    case "3":
                        mezoreDob(nev, 41);
                        break;
                    case "4":
                        document.cookie = "nev = " + nev;
                        fetch("szerencsekartyak_PHP/lakasLeeg.php", {
                            method: "GET",
                        })
                        .then(data_lakasleeg => data_lakasleeg.text())
                        .then(data_lakasleeg => {
                            if(data_lakasleeg == "biztositas"){
                                mezoreDob(nev, 9);
                            }
                            else{
                                mezoDivElrejt();
                            }
                        })
                        break;
                    case "5":
                        mezoreDob(nev, 26);
                        break;
                    case "6":
                        mezoreDob(nev, 30);
                        penztKap(nev, 150000);
                        break;
                    case "7":
                        akciosTv = true;
                        mezoreDob(nev, 40);
                        break;
                    case "8":
                        kovetkezoJatekosNeve = nev;
                        mezoreDob(nev, 21);
                        penztKap(nev, osszeg);
                        break;
                    case "9":
                        mezoreDob(nev, 4);
                        penztKap(nev, osszeg);
                        break;
                    case "10":
                        penztKap(nev, osszeg);
                        mezoDivElrejt();
                        break;
                    case "11":
                        document.cookie = "nev = " + nev;
                        fetch("esemenyek_PHP/egyenlegLeker.php", {
                            method: "GET",
                        })
                        .then(data_egyenleg => data_egyenleg.text())
                        .then(data_egyenleg => {
                            var lekertegyenleg = parseInt(data_egyenleg);
                            var ujegyenleg = lekertegyenleg * 1.15;
                            document.cookie = "egyenleg = " + parseInt(ujegyenleg);
            
                            fetch("esemenyek_PHP/egyenlegFeltolt.php", {
                                method: "POST",
                            })
                            alertBox(`+${parseInt(ujegyenleg - lekertegyenleg).toLocaleString()} Ft ${jelenlegiNev} számára`);
                        })
                        mezoDivElrejt();
                        break;
                    case "12":
                        mezoreDob(nev, 25);
                        break;
                    case "13":
                        var ujmezo = mezo + 1;
                        mezoreDob(nev, ujmezo);
                        break;
                    case "14":
                        targyatNyer(nev, "televizio", 70000);
                        mezoDivElrejt();
                        break;
                    case "15":
                        mezoreDob(nev, 42);
                        break;
                    case "16":
                        penztKap(nev, osszeg);
                        mezoDivElrejt();
                        break;
                    case "17":
                        mezoreDob(nev, 14);
                        break;
                    case "18":
                        penztKap(nev, osszeg);
                        mezoDivElrejt();
                        break;
                    case "19":
                        document.cookie = "nev = " + nev;
                        fetch("szerencsekartyak_PHP/szobabutortNyer.php", {
                            method: "POST",
                        })
                        mezoDivElrejt();
                        break;
                    case "20":
                        mezoreDob(nev, 31);
                        break;
                    case "21":
                        penztKap(nev, osszeg);
                        mezoDivElrejt();
                        break;
                    case "22":
                        penztKap(nev, osszeg);
                        mezoDivElrejt();
                        break;
                    case "23":
                        mezoreDob(nev, 8);
                        penztKap(nev, -15000);
                        break;
                    case "24":
                        document.cookie = "nev = " + nev;
                        fetch("esemenyek_PHP/egyenlegLeker.php", {
                            method: "GET",
                        })
                        .then(data_egyenleg => data_egyenleg.text())
                        .then(data_egyenleg => {
                            var lekertegyenleg = parseInt(data_egyenleg);
                            var ujegyenleg = lekertegyenleg * 1.07;
                            document.cookie = "egyenleg = " + parseInt(ujegyenleg);
            
                            fetch("esemenyek_PHP/egyenlegFeltolt.php", {
                                method: "POST",
                            })
                            alertBox(`+${parseInt(ujegyenleg - lekertegyenleg).toLocaleString()} Ft ${jelenlegiNev} számára`);
                        })
                        mezoDivElrejt();
                        break;
                    case "25":
                        mezoreDob(nev, 5);
                        break;
                    case "26":
                        mezoreDob(nev, 18);
                        penztKap(nev, osszeg);
                        break;
                    case "27":
                        mezoreDob(nev, 11);
                        break;
                    case "28":
                        targyatNyer(nev, "mosogep", 90000);
                        mezoDivElrejt();
                        break;
                    case "29":
                        mezoreDob(nev, 24);
                        break;
                    case "30":
                        mezoreDob(nev, 33);
                        break;
                    case "31":
                        document.cookie = "nev = " + nev;
                        fetch("szerencsekartyak_PHP/autoLopas.php", {
                            method: "GET",
                        })
                        setTimeout(() => {
                            mezoDivElrejt();
                        }, 500);
                        break;
                    case "32":
                        targyatNyer(nev, "hutoszekreny", 80000);
                        mezoDivElrejt();
                        break;
                    case "33":
                        mezoreDob(nev, 36);
                        break;
                    case "34":
                        var ujmezo = mezo - 3;
                        if(ujmezo == 0){
                            ujmezo = 42;
                        }
                        mezoreDob(nev, ujmezo);
                        break;
                    case "35":
                        targyatNyer(nev, "auto", 2500000);
                        mezoDivElrejt();
                        break;
                    case "36":
                        penztKap(nev, osszeg);
                        mezoDivElrejt();
                        break;
                    }
                setTimeout(function(){
                    document.querySelector("#szerencsekerek > button:nth-child(1)").style.display = "flex";
                    document.querySelector("#szerencsekerek > button:nth-child(2)").style.display = "none";
                },500)
            }
        })
    })
}

function nyeresMegnezese(nev, osszeg){
    document.cookie = "nev = " + nev;
    fetch("esemenyek_PHP/berendezesekLeker.php", {
        method: "GET",
    })
    .then(data => data.text())
    .then(data => {
        if(data.includes('berlet') &&
        data.includes('lakasbiztositas') &&
        data.includes('eletbiztositas') &&
        data.includes('autobiztositas') &&
        data.includes('kocsi') &&
        data.includes('konyhabutor') &&
        data.includes('szobabutor') &&
        data.includes('mosogep') &&
        data.includes('hutoszekreny') &&
        data.includes('tuzhely') &&
        data.includes('televizio') &&
        data.includes('lakas') &&
        parseInt(osszeg) >= 600000){
            document.querySelector(".helyezet-tab").style.display = "flex";
            setTimeout(() => {
                document.querySelector(".helyezet-tab").style.height = "100%";
                document.querySelector(".helyezet-tab").style.backdropFilter = "blur(30px)";
                document.querySelector(".helyezet-tab > div").style.display = "flex";
                document.querySelector(".helyezet-tab > div > span").textContent = `${nev} Nyert!`;
            }, 10);
            if(nev == elsoNev){
                elsoNev = "Nyert";
                tabla.rows[1].cells[0].innerHTML = elsoNev;
                localStorage.setItem("negyediknev_mentes", elsoNev);
            }
            if(nev == masodikNev){
                masodikNev = "Nyert";
                tabla.rows[2].cells[0].innerHTML = masodikNev;
                localStorage.setItem("negyediknev_mentes", masodikNev);
                return;
            }
            if(nev == harmadikNev){
                harmadikNev = "Nyert";
                tabla.rows[3].cells[0].innerHTML = harmadikNev;
                localStorage.setItem("harmadiknev_mentes", harmadikNev);
            }
            if(nev == negyedikNev){
                negyedikNev = "Nyert";
                tabla.rows[4].cells[0].innerHTML = negyedikNev;
                localStorage.setItem("negyediknev_mentes", negyedikNev);
            }
            if(nev == otodikNev){
                otodikNev = "Nyert";
                tabla.rows[5].cells[0].innerHTML = otodikNev;
                localStorage.setItem("otodiknev_mentes", otodikNev);
            }
            if(nev == hatodikNev){
                hatodikNev = "Nyert";
                tabla.rows[6].cells[0].innerHTML = hatodikNev;
                localStorage.setItem("hatodiknev_mentes", hatodikNev);
            }
        }
    })
}

function jatekTorles(){
    document.querySelector(".inputs").style.display = "flex";
    document.querySelector(".jatekban").style.display = "none";
    document.querySelector(".navigations > #jatekbefejez").style.display = "none";
    document.querySelector(".navchoose-mobile > #jatekbefejez").style.display = "none";
    fetch("esemenyek_PHP/jatekBefejez.php", {
        method: "POST",
    })
    jatekFolyamatban = false;
    window.localStorage.clear();
    location.reload();
}

function alertBox(szoveg){
    document.querySelector(".alert").style.display = "flex";
    setTimeout(() => {
        document.querySelector(".alert").style.width = "400px";
        document.querySelector(".alert > span").textContent = `${szoveg}`;
        document.querySelector(".alert > span").style.display = "flex";
        setTimeout(() => {
            document.querySelector(".alert").style.width = "1px";
            document.querySelector(".alert > span").style.display = "none";
            setTimeout(() => {
                document.querySelector(".alert").style.display = "none";
            }, 300);
        }, 3000);
    }, 50);
}

function tablaATMGombokBeallitasa(){
    document.querySelector('tr:nth-child(2) > td > button').onclick = function () {
        atmMutat(elsoNev, elsoOsszeg);
    }
    document.querySelector('tr:nth-child(3) > td > button').onclick = function () {
        atmMutat(masodikNev, masodikOsszeg);
    }
    if (jatekosszam == 3) {
        document.querySelector('tr:nth-child(4) > td > button').onclick = function () {
            atmMutat(harmadikNev, harmadikOsszeg);
        }
    }
    if (jatekosszam == 4) {
        document.querySelector('tr:nth-child(4) > td > button').onclick = function () {
            atmMutat(harmadikNev, harmadikOsszeg);
        }

        document.querySelector('tr:nth-child(5) > td > button').onclick = function () {
            atmMutat(negyedikNev, negyedikOsszeg);
        }
    }

    if (jatekosszam == 5) {
        document.querySelector('tr:nth-child(4) > td > button').onclick = function () {
            atmMutat(harmadikNev, harmadikOsszeg);
        }

        document.querySelector('tr:nth-child(5) > td > button').onclick = function () {
            atmMutat(negyedikNev, negyedikOsszeg);
        }

        document.querySelector('tr:nth-child(6) > td > button').onclick = function () {
            atmMutat(otodikNev, otodikOsszeg);
        }
    }

    if (jatekosszam == 6) {
        document.querySelector('tr:nth-child(4) > td > button').onclick = function () {
            atmMutat(harmadikNev, harmadikOsszeg);
        }

        document.querySelector('tr:nth-child(5) > td > button').onclick = function () {
            atmMutat(negyedikNev, negyedikOsszeg);
        }

        document.querySelector('tr:nth-child(6) > td > button').onclick = function () {
            atmMutat(otodikNev, otodikOsszeg);
        }

        document.querySelector('tr:nth-child(7) > td > button').onclick = function () {
            atmMutat(hatodikNev, hatodikOsszeg);
        }
    }

    document.querySelector("#atm > button").onclick = function () {
        document.getElementById("tablazat").style.display = "flex";
        document.getElementById("atm").style.display = "none";
        document.querySelector(".jatekosadatok > span").textContent = `Játékosok`;
        document.querySelector("#atm > input").value = "";
        document.getElementById("hideunhide").style.opacity = "100%";
        document.getElementById("hideunhide").style.pointerEvents = "auto";
    }

    document.getElementById("hideunhide").onclick = function () {
        if (hideunhideAnimation) {
            document.querySelector("#hideunhide > img").style.transform = "rotate(-90deg)";
            document.querySelector(".jatekosadatok").style.width = "1px";
            document.getElementById("hideunhide").style.pointerEvents = "none";
            setTimeout(() => {
                document.getElementById("tablazat").style.opacity = "0%";
                document.querySelector(".jatekosadatok > span").style.opacity = "0%";
            }, 50);
            setTimeout(() => {
                document.querySelector(".jatekosadatok").style.display = "none";
                document.getElementById("hideunhide").style.pointerEvents = "auto";
                hideunhideAnimation = false;
            }, 500);
            return;
        }
        if (!hideunhideAnimation) {
            document.querySelector("#hideunhide > img").style.transform = "rotate(90deg)";
            document.querySelector(".jatekosadatok").style.display = "flex";
            document.getElementById("hideunhide").style.pointerEvents = "none";
            setTimeout(() => {
                document.querySelector(".jatekosadatok").style.width = "500px";
            }, 10);
            setTimeout(() => {
                document.getElementById("tablazat").style.opacity = "100%";
                document.querySelector(".jatekosadatok > span").style.opacity = "100%";
                document.getElementById("hideunhide").style.pointerEvents = "auto";
                hideunhideAnimation = true;
            }, 125);
            return;
        }
    }
}