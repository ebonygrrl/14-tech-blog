$(function() {
    const path = location.pathname.split("/")[1];
    if (path.length === 0) {
        $('.home').addClass('active');
    } else {
        $('nav a[href^="/' + path + '"]').addClass('active');
    }
});