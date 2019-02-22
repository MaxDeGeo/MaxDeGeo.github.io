
$(document).ready(setCircle);
$(window).resize(setCircle);

function setCircle() {
    let imageCircle = document.querySelector('#dev_image');
    $(imageCircle).height($(imageCircle).css('width'));
}