window.onload = function() {
    let projects = document.querySelectorAll(".project");

    for(let x = 0; x < projects.length; x++)
    {
        projects[x].onmouseover = display;
        projects[x].onmouseout = remove;
    }

}

function openNav() {
    document.querySelector("#responsive-nav nav").style.width = "250px";

}

function closeNav() {
    document.querySelector("#responsive-nav nav").style.width = "0px";
}

function display() {
    //console.log("in");
    //Presents Text
    this.children[0].style.display = "block";
    this.children[0].style.position = "absolute";
    
    //Blurs out image and lowers brightness
    this.children[1].style.filter = "blur(1px) brightness(.4)";
    this.children[1].style.transition = "1s ease-in-out";
}

function remove() {
    //console.log("out");
    //Removes text
    this.children[0].style.display = "none";
    
    //Removes blur and brightness
    this.children[1].style.filter = "blur(0) brightness(1)";
    this.children[1].style.transition = "1s ease-in-out";    
}
