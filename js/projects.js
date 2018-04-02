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
    console.log("in");
    this.children[0].style.display = "block";
    this.children[0].style.position = "absolute";
}

function remove() {
    console.log("out");
    this.children[0].style.display = "none";
}
