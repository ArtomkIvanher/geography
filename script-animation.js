function anima(){
    

    let animItems = document.querySelectorAll(".anim-items");

    if (animItems.length > 0) {
        window.addEventListener("scroll", animOnScroll);
        function animOnScroll(params){
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 100;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add("active");
                }
                else {
                    animItem.classList.remove("active");
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollLeft;
            return { top: rect.top + scrollTop, left: rect.left +scrollLeft}
        }

        animOnScroll();
    }
}