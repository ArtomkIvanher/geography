
class Country {

    render() {
        let htmllist = "";
        let htmlDATA = "";
        let krainaImgPrapor = "";

        DATA.forEach(({id, setting, color,  colorText, p1, p2}) => {
            htmlDATA += `
                <div onclick="window.scroll(0,0);" class="main-card" >
                    <div class="card ${id}" id="${id}">
                        <div class="img ${setting}">
                            <img src="img/${id}.png" alt="">
                        </div>
                        <div class="blob-btn">
                            <p class="p">${p1}</p>
                            <p class="p">|</p>
                            <p class="p">${p2}</p>
                        </div>
                    </div>
                </div>

                <style>
                    @keyframes ${id} {  

                        100%{
                            width: 400px;
                            color: #${colorText};
                            background-color: #${color};
                        }
                    
                    }

                    .${id}:hover{

                    }

                    @media (min-width: 48em){
                        .${id}:hover{
        
                            animation-name: ${id};
                            animation-duration: 0.75s;
                            animation-iteration-count: 1;
                            animation-fill-mode: forwards;
                        }
                    }
                </style>

                <script>
                    
                </script>
            `;

            

            
        })

        ROOT_DATA_LIST.innerHTML = htmllist;
        ROOT_DATA.innerHTML = htmlDATA;
        ROOT_KRAINA_IMG.innerHTML = krainaImgPrapor;
        
        

        btn();
        anima();

        

    }
}

const country = new Country();
country.render();



function btn(){
    document.querySelector("#el1").onclick = function(){
        list1.linstRender(DATA1, "el1", "Australia", "https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D1%96%D1%8F");
    }
    
    document.querySelector("#el2").onclick = function(){
        list1.linstRender(DATA2, "el2", "Austria", "https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D1%81%D1%82%D1%80%D1%96%D1%8F");
    }

    document.querySelector("#el61").onclick = function(){
        list1.linstRender(DATA61, "el61", "Greece", "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D1%86%D1%96%D1%8F");
    }

    document.querySelector("#el147").onclick = function(){
        list1.linstRender(DATA147, "el147", "Germany", "https://uk.wikipedia.org/wiki/%D0%9D%D1%96%D0%BC%D0%B5%D1%87%D1%87%D0%B8%D0%BD%D0%B0");
    }
    
    document.querySelector("#el100").onclick = function(){
        list1.linstRender(DATA100, "el100", "Ukraine", "https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0");
    }

    document.querySelector("#el214").onclick = function(){
        list1.linstRender(DATA214, "el214", "USA", "https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96_%D0%A8%D1%82%D0%B0%D1%82%D0%B8_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8");
    }

    document.querySelector("#el256").onclick = function(){
        list1.linstRender(DATA256, "el256", "Japan", "https://uk.wikipedia.org/wiki/%D0%AF%D0%BF%D0%BE%D0%BD%D1%96%D1%8F");
    }
}

function renderCountry(){
    
}

function prapor(id, name, site) {
    let krainaImgPrapor = "";

    krainaImgPrapor += `
        <img src="img/${id}.png" alt="">
        <div id="krainaImgDiv" class="active"></div>     
        <div class="anim-p">
            <a class="btn-linia" href="${site}">${name}</a>
        </div>
    `;

    ROOT_KRAINA_IMG.innerHTML = krainaImgPrapor;
}


