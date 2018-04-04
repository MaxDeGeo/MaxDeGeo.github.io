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

    //Removes any element that hasn't been removed by the user.
    for(let z = 0; z < elements.length; z++)
    {
        if(close[z].style.display === "block")
        {
            elements[z].style.display = "none";
        }
    }

    //Fades in the element for display
    if(element.style.display !== "block")
    {
        $(element).stop().fadeIn(250).css("display","block");
    }

    $(close[x]).stop().fadeIn(250).css("display","block");
}

//For removing content 
function disable(x) {
    
    let elements = document.querySelectorAll("#information .info");
    let element = elements[x];

    $(element).stop().fadeOut();
}