// A $( document ).ready() block.
$(document).ready(function () {

    // DropCap.js
    var dropcaps = document.querySelectorAll(".dropcap");
    window.Dropcap.layout(dropcaps, 2);

    // Responsive-Nav
    var nav = responsiveNav(".nav-collapse");

    // Round Reading Time
    $(".time").text(function (index, value) {
        return Math.round(parseFloat(value));
    });

});

(function () {
    var param = 'fbclid';
    if (window.location.search.indexOf(param + '=') !== -1) {
        var replace = '';
        try {
            var url = new URL(window.location);
            url.searchParams.delete(param);
            replace = url.pathname + url.search + url.hash;
        } catch (ex) {
            var regExp = new RegExp('[?&]' + param + '=.*$');
            replace = window.location.search.replace(regExp, '');
            replace = window.location.pathname + replace + window.location.hash;
        }
        history.replaceState(null, '', replace);
    }
})();
