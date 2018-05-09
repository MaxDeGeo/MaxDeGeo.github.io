window.onload = function() {
    let projects = document.querySelectorAll(".project");

    for(let x = 0; x < projects.length; x++)
    {
        projects[x].onmouseover = display;
        projects[x].onmouseout = remove;
    }
    
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