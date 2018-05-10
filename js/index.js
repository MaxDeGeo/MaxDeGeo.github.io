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

function pdfOpen() {
    window.open("files/DeGeorge_Max.pdf",'_blank')
}

function displayLineNumbers() {

    //Gets the size of the content section and how many lines should be displayed.
    
    let content = document.querySelector("#content");
    let height = $(content).height();
    let lineSection = document.querySelector("#line-number");
    let lineCount = height / 16;

    //Displays those lines.
    for(let x = 1; x <= lineCount; x++)
    {
        $(lineSection).append("<p>" + x + "</p>");
    }
}

function mediaHeight() {
    let mediaBar = document.querySelector("#social-media");
    mediaBar.style.height = "100%";
}