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
                
                // console.log(data.restaurants);
                console.log(data);
                getRestaurants(data);
                // data.restaurants.forEach(function(tacos) {
                //     // let $list = $('<dl>')
                //     let $shops = $('<dt>');
                //     let $address = $('<dd>');
                //     // $shops.addClass(tacos.name);
                //     // $address.addClass(tacos.vicinity);
                //     let $taco = $('<button>');
                //     $taco.attr('id', 'tacmoji').on('click', function (e) {
                //     	e.preventDefault();
                //     	tacoData.name = tacos.name
                //     	tacoData.address = tacos.address
                //     	addFavorite(tacos);
                //     });
                //     $taco.text(data.emoji + 'Add To Favs');
                //     $shops.text(tacos.name);
                //     $address.text(tacos.vicinity);
                //     $address.append($taco);
                //     // $results.append($list);
                //     $results.append($shops);
                //     $results.append($address);


                        // tacos.preventDefault();
              //           const $favbutton = $(e.currentTarget);

          				// const favObj = {
            		// 	restaurant_name: $favbutton.attr("name"),
            		// 	address: $favbutton.attr("address")
            		// };
                        

                        
                        // addFavorite();
                    // })
                    // $taco.text(data.emoji + 'Add To Favs');
                    // $shops.text(tacos.name);
                    // $address.text(tacos.vicinity);
                    // $address.append($taco);
                    // $results.append($list);
                    // $results.append($shops);
                    // $results.append($address);
                }

            })
        
    }

    const favObj = {}

    function getRestaurants(data){
    	const $results = $('#results');
                $results.empty();
    	data.restaurants.forEach(function(tacos) {
                    let $shops = $('<dt>');
                    let $address = $('<dd>');
                    let $taco = $('<button>');
                    $taco.attr('id', 'tacmoji').on('click', function (e) {
                    	e.preventDefault();
                    	const $favbutton = $(e.currentTarget);
            			favObj.name = $favbutton.attr("name")
            			favObj.address = $favbutton.attr("address")
                    	addFavorite(favObj);
                    });
                    $taco.text(data.emoji + 'Add To Favs');
                    $shops.text(tacos.name);
                    $address.text(tacos.vicinity);
                    $address.append($taco);
                    $results.append($shops);
                    $results.append($address);
    })
    }
    				// const 

					function addFavorite(tacos){
						
                            $.ajax({
                                method: 'POST',
                                url: '/users/tacos/favorites',
                                data: favObj,
                                success: res => 
                                    window.location.replace('/users/tacos/favorites')
                                })
                                // error: err => {
                                //     console.log(err);
                                // }
                            }














    //end of code

});
