/**
 * Created by jteng on 1/12/16.
 */
/**
 * Since this site has multiple pages that share a header, but has no server
 * side code, we use this script to inject the header into the HTML.
 */
(function() {
    document.write('\
        <header class="header">\
            <span class="name">Jefferson Teng</span>\
                <span class="nav-btn-container">\
                <a href="index.html"><span class="nav-btn">Home</span></a>\
                <a href="work.html"><span class="nav-btn">Work</span></a>\
                <a href="about.html"><span class="nav-btn">About</span></a>\
            </span>\
        </header>\
    ');
})();