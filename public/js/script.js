$(function() {

    console.log('jquery up!');



    $('#search').on('submit', (e) => {
        e.preventDefault();
        const input = $('#location').val();
        console.log(input);
        serverCall(input);
    });

    function serverCall(input) {
        $.ajax({
            method: 'POST',
            url: '/users/tacos',
            data: { input },
            success: data => {
                const $results = $('#results');
                $results.empty();
                // console.log(data.restaurants);
                console.log(data);
                data.restaurants.forEach(function(tacos) {
                    let $list = $('<dl>')
                    let $shops = $('<dt>');
                    let $address = $('<dd>');
                    let $taco = $('<button>');
                    $taco.attr('id', 'tacmoji').on('click', (e) => {
                        e.preventDefault();
                        console.log("clicked favs!");
                        const addFavorite = (shop) => {
                            $.ajax({
                                method: 'POST',
                                url: '/users/tacos/favorites',
                                data: data.restaurants,
                                success: res => {
                                    window.location.replace('/users/tacos/favorites');
                                },
                                error: err => {
                                    console.log(err);
                                }
                            })

                        }
                        addFavorite();
                    })
                    $taco.text(data.emoji + 'Add To Favs');
                    $shops.text(tacos.name);
                    $address.text(tacos.vicinity);
                    $address.append($taco);
                    $results.append($list);
                    $results.append($shops);
                    $results.append($address);
                })

            }
        })
    }



    // $('#tacmoji').on('click', (e) => {
    // 	e.preventDefault();
    // 	console.log("clicked favs!");
    // 	const addFavorite = (shop) => {
    // 	$.ajax({
    // 		method: 'POST',
    // 		url: '/users/tacos/favorites',
    // 		data: { shop },
    // 		success: res => {
    //         window.location.replace("users/tacos/favorites", res.shop);
    //       },
    //       error: err => {
    //         console.log(err);
    //       }
    // 	})

    // 	}

    // })












    //end of code

});
