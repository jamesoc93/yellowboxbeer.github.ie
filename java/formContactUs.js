// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: 53.37498285619964, lng: -6.2698835134506234 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}


function submitForm(){
	//Checking Mandatory fields
	if(document.getElementById('fName').value==""){
		alert("please enter your First Name");
		return false;
	}if(document.getElementById('lName').value==""){
		alert("please enter your Last Name");
		return false;
	}if(document.getElementById('email').value==""){
		alert("please enter your Email");
		return false;
	}
}


/*
further javascrip code is to be developed to allow colection of "how did you hear about us" data for marketing development 


*/
