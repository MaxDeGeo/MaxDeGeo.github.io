//For mobile navigation.
function openNav() {
    document.querySelector("#responsive-nav nav").style.width = "250px";

}

function closeNav() {
    document.querySelector("#responsive-nav nav").style.width = "0px";
}

//For displaying content about each level.
function display(x) {

    let elements = document.querySelectorAll("#information .info")
    let element = elements[x];
    let close = document.querySelectorAll(".close");


    for(let z = 0; z < elements.length; z++)
    {

        //console.log(elements[x].children[1].children[elements[x].children[1].children.length - 2]);
        //console.log(elements[x].children[1].children[elements[x].children[1].children.length - 2].style.display);
        //if(elements[x].children[1].children[elements[x].children[1].children.length - 2].style.display !== "none")
        //if(elements[x].children[1].children[7].style.display !== "none")
    
        console.log(close[z].style.display);

        if(close[z].style.display === "block")
        {
            console.log("Entered");
            elements[z].style.display = "none";
        }
    }

    element.children[0].style.display = "none";

    for(let y = 0; y < element.children[1].children.length - 3; y++)
    {
        element.children[1].children[y].style.display = "none";
    }

    element.children[1].children[element.children[1].children.length - 1].style.display = "none";

    element.style.display = "block";
    
    close[x].style.display = "block";
    element.style.WebkitTransition = "all 2s";
    element.style.transition = "all 2s";
    

}

//For removing content 
function disable(x) {
    
    let elements = document.querySelectorAll("#information .info");
    let element = elements[x];

    element.style.display = "none";
}