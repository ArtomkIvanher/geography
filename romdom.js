let i = 0;
let x = 0;

document.querySelector("#romdome").onclick = function(){
    
    for (let num = 0; num < 100; num++) {
        i = Math.floor(Math.random() * 6 + 1)
        if (i != x){
            num = 101
        }
    }

    if(i == 1){
        list1.linstRender(DATA1, "el1", "Australia");
    }
    else if(i == 2){
        list1.linstRender(DATA2, "el2", "Austria");
    }
    else if(i == 3){
        list1.linstRender(DATA100, "el100", "Ukraine");
    }
    else if(i == 4){
        list1.linstRender(DATA256, "el256", "Japan");
    }
    else if(i == 5){
        list1.linstRender(DATA147, "el147", "Germany");
    }
    else if(i == 6){
        list1.linstRender(DATA214, "el214", "USA");
    }

    x = i;
}
