window.onload = function() {
    displayLineNumbers();
}

function navController(element) {

    if($(element).hasClass("mds_navIcon"))
    {
        $(element).parent().addClass("mds_navOpen");
    }
    else
    {
        $(element).parent().parent().removeClass("mds_navOpen");
    }
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

function mediaHeight() {
    let mediaBar = document.querySelector("#social-media");
    mediaBar.style.height = "100%";
}

function displayLineNumbers() {

    //Gets the size of the content section and how many lines should be displayed.
    
    let content = document.querySelector("#content");
    let height = $(content).height();
    let lineSection = document.querySelector("#line-number");
    let lineCount = height / 18;

    //Displays those lines.
    for(let x = 1; x <= lineCount; x++)
    {
        $(lineSection).append("<p>" + x + "</p>");
    }
}