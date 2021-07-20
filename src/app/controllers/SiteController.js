const Course = require('../models/Course');

class SiteController {
    // [get] /site
    index(req, res) {
        // res.render('home');
        Course.find({}, function (err, courses) {
            if(!err) {
                res.json(courses);
            } else {
                res.status(400).json({error: 'EErrr'});
            }
        });
    }
    // [get] /site/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;