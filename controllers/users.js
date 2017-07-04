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
                    // console.log('the tacos infom ->', location.data.results)
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
          res.render('users/favorites')
     })

 
  






// router.post(
//     '/favorites',
//     (req, res) => {
//        User
//        .saveFavs(req.body.tacos)
//        .then(data => {
//         // console.log(data.name)
//          res.json(data);
//        });
//     }
// );

router.post(
    '/favorites',
    (req, res) => {
      // console.log("this is your data", req.body.tacos);
      // const name = req.body.tacos.name
      // const address = req.body.tacos.vicinity
      // req.body.tacos.id = req.user.id
      let favData = { 
      } 
     const favoritePlace = req.body.favObj
       User
       // 
       .saveFavs(favoritePlace)
       .then(fav => {
        // console.log("HEY BITCH", fav)
       favData.name = fav.name
       favData.address = fav.vicinity
        // console.log(req.body.tacos);
         res.json(favData);
       })
       .catch(err => {
                    console.log('error', err);
                });
    }
);




module.exports = router;
