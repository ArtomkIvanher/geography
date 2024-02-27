let i = 0;
let x = 0;

document.querySelector("#romdome").onclick = function(){
    
    for (let num = 0; num < 100; num++) {
        console.log(num);
        i = Math.floor(Math.random() * 4)
        if (i != x){
            num = 101
        }
    }

    if(i == 0){
        list1.linstRender(DATA1, "el1", "Australia");
    }
    else if(i == 1){
        list1.linstRender(DATA2, "el2", "Austria");
    }
    else if(i == 2){
        list1.linstRender(DATA100, "el100", "Ukraine");
    }
    else if(i == 3){
        list1.linstRender(DATA256, "el256", "Japan");
    }

    x = i;
}
