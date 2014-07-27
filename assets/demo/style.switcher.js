// Style Switcher Open/Close
$("#style-switcher .panel-button").click(function() {
    $("#style-switcher").toggleClass("close-style-switcher", "open-style-switcher", 1000);
    $("#style-switcher").toggleClass("open-style-switcher", "close-style-switcher", 1000);
    return false;
});

// Color Skins
$('.switcher').click(function() {
    var title = jQuery(this).attr('title');
    jQuery('#changeable-colors').attr('href', 'assets/css/' + title + '.css');
    return false;
});
