function getDropDownMenu() {
    let element = document.querySelector("header nav.hidden-menu");
    let icon = document.querySelector("nav.dropdown-menu > span");

    if(element.style.display == "block") {
        element.style.display = "none";
        icon.textContent = "☰";
    } else {
        element.style.display = "block";
        icon.textContent = "⛌";
    } 
}

window.addEventListener("resize", () => { //arrow function
    if(window.innerWidth > 680) {
        let element = document.querySelector("header nav.hidden-menu");
        let icon = document.querySelector("nav.dropdown-menu > span");
        element.style.display = "none";
        icon.textContent = "☰";
    }
});