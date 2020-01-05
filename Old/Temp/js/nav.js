$(function(){
    $("#menu_bars").click(function() {
        let nav = document.querySelector('nav div');
        console.log(nav);
        nav.style.transition = "1s";

        nav.style.right = "0px";
    });
})

$(function(){
    $("#menu_close").click(function() {
        let nav = document.querySelector('nav div');
        console.log(nav);
        nav.style.transition = "1s";

        if ($(nav).width() === "100") {
            nav.style.right = "-100%";
        }
        else {
            nav.style.right = "-320px";
        }
    });
})