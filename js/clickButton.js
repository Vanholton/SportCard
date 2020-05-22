$(".ripple-btn").on('click', function (e) {

    // Remove any old one
    $(".ripple-wrap").remove();

    // Setup
    let posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight =  $(this).height();

    // Add the element
    $(this).prepend("<div class='ripple-wrap'><div class='ripple'></div></div>");


    // Make it round!
    if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    let x = e.pageX - posX - buttonWidth / 2;
    let y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
    }).addClass("rippleEffect");
});