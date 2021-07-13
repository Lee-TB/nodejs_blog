class SiteController {
    // [get] /site
    index(req, res) {
        res.render('home');
    }
    // [get] /site/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;