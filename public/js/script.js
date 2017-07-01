$(function(){

console.log('jquery up!');



$('#search').on('submit', (e)=>{
    e.preventDefault();
    const input = $('#location').val();
    console.log(input);
    serverCall(input);
  });

function serverCall (input) {
	$.ajax({
		method: 'POST',
		url: '/users/tacos',
		data: { input },
		success: data => {
		const $results = $('#results');
		$results.empty();
		// console.log(data.restaurants);
		console.log(data);
		data.restaurants.forEach(function(tacos){
			let $list = $('<dl>')
			let $shops = $('<dt>');
			let $address = $('<dd>');
			let $taco = $('<button>');
			$taco.attr('id', 'tacmoji');
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


	
// $('#favs').on('submit', (e) => {
// 	e.preventDefault();

// })













//end of code

});








