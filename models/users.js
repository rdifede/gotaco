const bcrypt = require('bcryptjs');

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
	let input = $('#location').val();
	const inputAddress = axios({
		method: 'GET',
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + input + '&key=YOUR_API_KEY'
	})

	return inputAddress
}


function getTacos(location) {
	const tacoPlaces = axios({
		method: 'GET',
		url:'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + inputAddress + '&radius=500&type=restaurant&keyword=tacos&key=AIzaSyBzHS2lp_PLtApqPAqGBl3syvW-Fsk5u6c'
	})
	return tacoPlaces
}


module.exports = { create, findByUser, getTacos, getAddress };
