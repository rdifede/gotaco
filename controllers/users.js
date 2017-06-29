const User = require('../models/users');
const router = require('express').Router();
const passport = require('passport');


router.post('/', (req, res) => {
    let tacoObj = {

    }
    const address = req.body.input
    User.getAddress(address)
        .then((geo) => {
            // console.log(geo.data.results);
            // console.log(geo.data.results[0].geometry.location);
            return User.getTacos(geo.data.results[0].geometry.location)
                .then((location) => {
                    console.log('the tacos infom ->', location.data.results)
                    tacoObj.restaurants = location.data.results
                    res.json(tacoObj);

                })
                .catch( err => {
                    console.log('error', err);
                });

            // console.log('taco information ---->', tacoObj.restaurants.results)                
            // res.render('users/tacos', tacoObj)

        })
        .catch(err => {
            console.log('error ', err);
        })





})







module.exports = router;
