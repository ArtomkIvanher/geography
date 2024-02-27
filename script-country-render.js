
class listDATA{

    linstRender(DATAL, p, name) {
        let htmlDATA = "";
        let htmllist = "";

        prapor(p, name);
        DATAL.forEach(({img, year1, year2, h1, h2, text1, text2}) => {
            if(year1){
                htmllist += `
                    <div class="country"> 
            
                        <div class="country-main" id="year1">
                            <div class="h-zagolovok">
                                <h2 class="anim-items h-prosto-zagolovok">${year1}</h2>
                            </div>
                            <div class="country-flex">
                                <div>
                                    <h2 class="anim-items h-prosto">${h1}</h2>
                                    <div>
                                        <p class="anim-items p-prosto">
                                            ${text1}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img class="anim-items img-prosto" src="img/${img}img1.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            if(year2){
                htmllist += `
                    <div class="country"> 
                        <div class="country-main-revers" id="year2">
                            <div class="h-zagolovok">
                                <h2 class="anim-items h-revers-zagolovok">${year2}</h2>
                            </div>
                            <div class="country-flex">
                                <div>
                                    <h2 class="anim-items h-revers">${h2}</h2>
                                    <div>
                                        <p class="anim-items p-revers">
                                            ${text2}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img class="anim-items  img-revers" src="img/${img}img2.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            if(!year1 && !year2){
                htmllist = `
                    <div class="pomilka">
                        <h2 id="pomilkaID">Помилка:(</h2>
        
                        <style>
                            .pomilka {
                                display: none;
                            }
                        </style>
                    </div>
                `;
            }
        
        })

        ROOT_DATA.innerHTML = htmlDATA;
        ROOT_DATA_LIST.innerHTML = htmllist;
        
        anima();

    }
}


let list1 = new listDATA();

document.querySelector("#home").onclick = function(){
    country.render();
}

