window.onload = function() {
    
    let submit = false;
    let firstName = document.querySelector("#firstName");
    let secondName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let email2 = document.querySelector("#email2");

}

function openNav() {
    document.querySelector("#responsive-nav nav").style.width = "250px";

}

function closeNav() {
    document.querySelector("#responsive-nav nav").style.width = "0px";
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