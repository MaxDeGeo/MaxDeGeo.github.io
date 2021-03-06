window.onload = function() {
    
    let submit = false;
    let firstName = document.querySelector("#firstName");
    let secondName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let email2 = document.querySelector("#email2");

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

function displayError(element) {
    $(element).parent().children().fadeIn().css("display", "inline-block");
    element.parentElement.children[0].children[0].style.cursor = "pointer";
    $(element.parentElement.children[0].children[0]).hover(function()
    {
        element.parentElement.children[1].style.visibility = "visible";
    }, function() 
    {
        element.parentElement.children[1].style.visibility = "hidden";
    });
} 

function customErrorMessage() {
    
    if(email.value === "")
    {
        displayError(email);
        email.parentElement.children[1].innerHTML = "Missing Email.";
    }

    if(email2.value === "")
    {
        displayError(email2);
        email2.parentElement.children[1].innerHTML = "Missing Email.";
    }

    if(email.value !== "" && email2.value !== "")
    {
        if(email.value !== email2.value)
        {
            displayError(email2);
            email2.parentElement.children[1].innerHTML = "Emails are not the same.";
        }
    }

    if(firstName.value === "")
    {
        displayError(firstName);
        firstName.parentElement.children[1].innerHTML = "Please enter your first name.";
    }

    if(lastName.value === "")
    {
        displayError(lastName);
        lastName.parentElement.children[1].innerHTML = "Please enter your last name.";
    }
}

function canSubmit() {
    
    submit = false;

    if($(firstName).val())
    {
        if($(lastName).val())
        {
            if($(email).val())
            {
                if($(email2).val())
                {
                    submit = true;
                }
            }
        }
    }

    if(email.value !== email2.value)
    {
        submit = false;
    }

    customErrorMessage();

    return submit;
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
    let lineCount = height / 16;

    //Displays those lines.
    for(let x = 1; x <= lineCount; x++)
    {
        $(lineSection).append("<p>" + x + "</p>");
    }
}