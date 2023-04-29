//menu elements 
const FeaturesArrow = document.querySelector(".Features div");
const ArrowUP       = Array.from(document.querySelectorAll(".Arrow-up"));
const ArrowDown     = Array.from(document.querySelectorAll(".Arrow-down"));
const CompanyArrow  = document.querySelector(".Company div");
const FeaturesMenu  = document.querySelector(".Features ul");
const CompanyMenu   = document.querySelector(".Company ul");
//add click events
FeaturesArrow.addEventListener("click", () => {
    if(FeaturesMenu.style.display == "none"){
        FeaturesMenu.style.display = "block";
        ArrowUP[0].style.display = "block";
        ArrowDown[0].style.display = "none";
    }else{
        FeaturesMenu.style.display = "none";
        ArrowUP[0].style.display = "none";
        ArrowDown[0].style.display = "block";
    }
   
    
})
CompanyArrow.addEventListener("click", () => {
   if(CompanyMenu.style.display == "none"){
    CompanyMenu.style.display = "block";
    ArrowUP[1].style.display = "block";
    ArrowDown[1].style.display = "none";
    }else{
    CompanyMenu.style.display = "none";
    ArrowUP[1].style.display = "none";
    ArrowDown[1].style.display = "block";
    }
})

function displaymenu( menu, index, ArrowUP, ArrowDown) {
    if(menu.style.display == "none"){
        CompanyMenu.style.display = "block";
        ArrowUP[1].style.display = "block";
        ArrowDown[1].style.display = "none";
        }else{
        CompanyMenu.style.display = "none";
        ArrowUP[1].style.display = "none";
        ArrowDown[1].style.display = "block";
        }
}
//responsive menu
const showMenu    = document.querySelector(".show-menu");
const closeMenu   = document.querySelector(".close-menu");
console.log(closeMenu)
const displaynone = document.querySelectorAll(".display-none")
showMenu.addEventListener('click', () => {
    displaynone.forEach((element) => {
        element.style.display = 'block'
    })
})
closeMenu.addEventListener('click', () => {
    displaynone.forEach((element) => {
        element.style.display = 'none'
    })
})