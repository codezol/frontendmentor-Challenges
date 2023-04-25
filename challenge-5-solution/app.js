//get all of the question section div
let arrows = Array.from(document.querySelectorAll('.questions .question svg'));
//get all of the quesitons divs
let divs = Array.from(document.querySelectorAll('.questions .question div'))
//get  the paragraphs
let paragraphs = Array.from(document.querySelectorAll(".questions .question p"));
//get the close arrow
let closeArrow = document.querySelector(".close")

arrows.forEach((arrow, index) => {
    
        arrow.addEventListener('click', () => {
                arrow.remove()
                paragraphs[index].style.display = "block";
                closeArrow.style.display = "inline-block"
                divs[index].appendChild(closeArrow)
                closeArrow.addEventListener('click', () => {
                    paragraphs[index].style.display = "none";
                    closeArrow.remove()
                    divs[index].appendChild(arrow)
                })

        })
    
    
})
//email validation
//get the value of the input field when the submit button is clicked
let userInput = document.forms[0]["email"];
let error = document.querySelector("form .error");


document.forms[0].onsubmit = function (e)  {
    let letters = Array.from(userInput.value);
    

    if( isValid(letters) === false){

        e.preventDefault();
        error.style.display = "block"
        userInput.style.border = "4px solid red"
    }

}
//disply menu
const menu          = document.querySelector(".menu");
const closeWithMenu = document.querySelectorAll(".close-with-menu");
const closemenu     = document.querySelector(".close-menu")
const openwithmenu  = document.querySelectorAll(".open-with-menu");
const body          = document.querySelector("body");
const media         = document.querySelector(".media")
const html          = document.querySelector("html");
const container     = document.querySelector(".container")


menu.addEventListener("click",() => {
    closeWithMenu.forEach((item) => {
        item.style.display = "none"
    })

    openwithmenu.forEach((item) => {
        item.style.display = "block"
    })
    media.style.display    = "flex"
    container.style.background = "rgba(0,0,0,0.9)";
    [html,body].forEach((item) => {
        item.style.overflow = "hidden"
    })

})
closemenu.addEventListener("click", () => {
    closeWithMenu.forEach((item) => {
        item.style.display = "block"
    })
    openwithmenu.forEach((item) => {
        item.style.display = "none"
    })
    container.style.background = "local";
    [html,body].forEach((item) => {
        item.style.overflow = "scroll"
    })

})


function isValid(arr){
    let thelastfourElements =arr.reverse().slice(0,4).reverse().join("") ;
    arr.reverse()
    let theDomainName =arr.reverse().slice(4,10).reverse().join("") ;
     if(thelastfourElements=== ".com" && theDomainName === "@gmail" ){
        return true
     }
    else{
        return false
        
    }
}
