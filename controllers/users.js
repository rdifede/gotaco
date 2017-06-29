const User = require('../models/users');
const router = require('express').Router();
const passport = require('passport');


router.get('/', (req, res) => {
    let tacoObj = {

    }

    users.getAddress()
        .then(() => {
            return users.getTacos()
                .then((location) => {
                    tacoObj.restaurant_name = location.results.name
                    res.render('users/tacos', tacoObj);
                })


        })





})







module.exports = router;
