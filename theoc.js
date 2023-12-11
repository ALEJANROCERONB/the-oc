(function(){
const sliders =  document.querySelectorAll(`.slider__body`)


let arrowafter = document.querySelector(`#after`)
let arrowbefore = document.querySelector(`#before`)
let value;
arrowafter.addEventListener(`click`, ()=> changeposition(1))
arrowbefore.addEventListener(`click`, ()=> changeposition(-1))



function changeposition(change){

    const currentelement = Number (document.querySelector(`.slider__body--show`).dataset.id);

    value = currentelement + change;

    if(value === 0 || value == sliders.length+1){
        value = value === 0 ? sliders.length : 1;
    }

    sliders[currentelement-1].classList.toggle(`slider__body--show`)
    sliders[value-1].classList.toggle(`slider__body--show`)
   

}

function callperiodically () {
    setTimeout(()=>{
        changeposition(1)
        callperiodically()
    }, 5000)
}

callperiodically()


}
)()

const aboutUsLink = document.getElementById("aboutus");
const submenu = document.getElementById("submenu");

let isSubMenuHovered = false;

aboutUsLink.addEventListener("mouseover", () => {
    submenu.style.display = "block";
    submenu.style.opacity = 1;
    submenu.style.transform = "translateY(0)";
});

submenu.addEventListener("mouseover", () => {
    isSubMenuHovered = true;
});

submenu.addEventListener("mouseout", () => {
    isSubMenuHovered = false;
    hideSubMenu();
});

aboutUsLink.addEventListener("mouseout", () => {
    setTimeout(() => {
        if (!isSubMenuHovered) {
            hideSubMenu();
        }
    }, 300);
});

function hideSubMenu() {
    submenu.style.opacity = 0;
    submenu.style.transform = "translateY(-20px)";
    setTimeout(() => {
        submenu.style.display = "none";
    }, 300);
}