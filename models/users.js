const bcrypt = require('bcryptjs');
const axios = require('axios');
const db = require('../models/setup');

function create(user) {
    const password = bcrypt.hashSync(user.password, 10);

    return db.oneOrNone(`
    INSERT INTO users
    (email, password_digest)
    VALUES
    ($1, $2)
    RETURNING *;`, [user.email, password]);
};

function findByUser(email) {
    return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE email = $1;`, [email]);
};


 function getAddress(location) {
	const inputAddress = axios({
		method: 'GET',
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + location + '&key=AIzaSyBzHS2lp_PLtApqPAqGBl3syvW-Fsk5u6c'
	})

	return inputAddress
}


function getTacos(location) {
	const tacoPlaces = axios({
		method: 'GET',
		url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + location.lat + ',' + location.lng + '&radius=5000&type=restaurant&keyword=tacos&key=AIzaSyBzHS2lp_PLtApqPAqGBl3syvW-Fsk5u6c'
	})
	return tacoPlaces
}

function saveFavs(shop) {
	return db.oneOrNone(`
	INSERT INTO favorites
	(restaurant_name, address)
	VALUES
	($1, $2)
	RETURNING *;`, [shop.restaurant_name, shop.address]);
};


module.exports = { create, findByUser, getTacos, getAddress, saveFavs };
