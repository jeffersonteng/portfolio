/**
 * Created by jteng on 1/12/16.
 */
/**
 * Since this site has multiple pages that share a footer, but has no server
 * side code, we use this script to inject the footer into the HTML.
 */
(function() {
    document.write('\
        <footer class="footer center">\
            <span class="footer-nav-btn-container">\
                <a class="img-link" href="https://github.com/jeffersonteng">\
                    <img src="img/Octocat.png" class="icon github-icon">\
                </a>\
        \
                <a class="img-link" href="https://www.linkedin.com/in/jefferson-teng-b698b959">\
                    <img src="img/Logo-2C-89px-R.png" class="icon linkedin-icon"/>\
                </a>\
            </span>\
        </footer>\
    ');
})();