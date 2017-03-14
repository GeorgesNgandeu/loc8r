/* Get the homeList page*/
module.exports.homeList = function(req, res){
    res.render('locations-list', { title: 'Home' });
};

/* Get the locationInfo page*/
module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'Location Info' });
};

/* Get the addReview page*/
module.exports.addReview = function(req, res){
    res.render('location-review-form', { title: 'Add Review' });
};