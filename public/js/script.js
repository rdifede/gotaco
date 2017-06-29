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
		console.log(data.restaurants);
		data.restaurants.forEach(function(tacos){
			let $list = $('<dl>')
			let $shops = $('<dt>');
			let $address = $('<dd>');
			 $shops.text(tacos.name);
			 $address.text(tacos.vicinity);
			 $results.append($list);
			 $results.append($shops);
			 $results.append($address);
		})
       
		}
	})
}


// function tacos(list) {
// 	const container = $('#results');
// 	list.forEach(function (){

// 	})
// 	container.append(list);
// }













//end of code

});








