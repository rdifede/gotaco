const User = require('../models/users');
const router = require('express').Router();
const passport = require('passport');
const tacmoji = require('emoji-taco');


router.post('/', (req, res) => {
    let tacoObj = {

    }
    const address = req.body.input
    User.getAddress(address)
        .then((geo) => {
            return User.getTacos(geo.data.results[0].geometry.location)
                .then((location) => {
                    console.log('the tacos infom ->', location.data.results)
                    tacoObj.restaurants = location.data.results
                    tacoObj.emoji = tacmoji;
                    res.json(tacoObj);

                })
                .catch(err => {
                    console.log('error', err);
                });

        })
        .catch(err => {
            console.log('error ', err);
        })

})

router.get('/favorites', (req, res) => {
    res.render('users/favorites');
})





// router.post(
//     '/favorites',
//     (req, res) => {
//        User
//        .saveFavs(req.body.shop)
//        .then(data => {
//          res.send(data);
//        });
//     }
// );

router.post(
    '/favorites',
    (req, res) => {
        
       User
       .saveFavs(shop)
       .then(data => {
         res.json(data.shop);
       });
    }
);




module.exports = router;
