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
    $(email2).parent().children().fadeIn().css("display", "inline-block");
    email2.parentElement.children[0].children[0].style.cursor = "pointer";
    $(email2.parentElement.children[0]).hover(function()
    {
        email2.parentElement.children[1].style.visibility = "visible";
    }, function() 
    {
        email2.parentElement.children[1].style.visibility = "hidden";
    });
} 

function customErrorMessage() {
    
    if(email.value !== email2.value)
    {
        displayError(email2)
        email2.parentElement.children[1].innerHTML = "Emails are not the same.";
    }

    if($(firstName).val())
    {
        displayError(firstName)
        firstName.parentElement.children[1].innerHTML = "Please enter your first name.";
    }

    if($(lastName).val())
    {
        displayError(lastName)
        lastName.parentElement.children[1].innerHTML = "Please enter your last name.";
    }
}

function canSubmit() {
    
    submit = false;

    if(firstName.value !== null)
    {
        if(lastName.value !== null)
        {
            if(email.value !== null)
            {
                if(email2.value !== null)
                {
                    submit = true;
                }
            }
        }
    }

    if(email.value !== email2.value)
    {
        submit = false;
        customErrorMessage();
    }

    return submit;
}