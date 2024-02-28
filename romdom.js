let i = 0;
let x = 0;

document.querySelector("#romdome").onclick = function(){
    
    for (let num = 0; num < 100; num++) {
        i = Math.floor(Math.random() * 7 + 1)
        if (i != x){
            num = 101
        }
    }

    if(i == 1){
        list1.linstRender(DATA1, "el1", "Australia", "https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D1%96%D1%8F");
    }
    else if(i == 2){
        list1.linstRender(DATA2, "el2", "Austria", "https://uk.wikipedia.org/wiki/%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D1%96%D1%8F");
    }
    else if(i == 3){
        list1.linstRender(DATA100, "el100", "Ukraine", "https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0");
    }
    else if(i == 4){
        list1.linstRender(DATA256, "el256", "Japan", "https://uk.wikipedia.org/wiki/%D0%AF%D0%BF%D0%BE%D0%BD%D1%96%D1%8F");
    }
    else if(i == 5){
        list1.linstRender(DATA147, "el147", "Germany", "https://uk.wikipedia.org/wiki/%D0%9D%D1%96%D0%BC%D0%B5%D1%87%D1%87%D0%B8%D0%BD%D0%B0");
    }
    else if(i == 6){
        list1.linstRender(DATA214, "el214", "USA", "https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96_%D0%A8%D1%82%D0%B0%D1%82%D0%B8_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8");
    }
    else if(i == 7){
        list1.linstRender(DATA61, "el61", "Greece", "https://uk.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D1%86%D1%96%D1%8F");
    }

    x = i;
}
