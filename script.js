
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
        
                        animation-name: ${id};
                        animation-duration: 0.75s;
                        animation-iteration-count: 1;
                        animation-fill-mode: forwards;
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

        

    }
}

const country = new Country();
country.render();



function btn(){
    document.querySelector("#el1").onclick = function(){
        list1.linstRender(DATA1, "el1", "Australia");
    }
    
    document.querySelector("#el2").onclick = function(){
        list1.linstRender(DATA2, "el2", "Austria");
    }

    document.querySelector("#el3").onclick = function(){
        list1.linstRender(DATA3, "el3", "Germany");
    }
    
    document.querySelector("#el100").onclick = function(){
        list1.linstRender(DATA100, "el100", "Ukraine");
    }
    document.querySelector("#el256").onclick = function(){
        list1.linstRender(DATA256, "el256", "Japan");
    }
}

function renderCountry(){
    
}

function prapor(id, name) {
    let krainaImgPrapor = "";

    krainaImgPrapor += `
        <img src="img/${id}.png" alt="">
        <div id="krainaImgDiv" class="active"></div>     
        <div class="anim-p">
        <p>${name}</p>
        </div>
    `;

    ROOT_KRAINA_IMG.innerHTML = krainaImgPrapor;
}


