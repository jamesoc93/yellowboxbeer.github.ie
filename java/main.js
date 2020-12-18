localStorage.setItem("Total", 0);

function beerOne(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 2.65
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Box Breaker";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
			
			
}

function beerTwo(){
	
		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 1.85
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Knock Off";
			celTwo.innerHTML = "€"+ price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
	
	document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			

}

function beerThree(){
	

	var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 2.85
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Yellow Box";
			celTwo.innerHTML ="€"+ price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function beerFour(){
	

	var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 2.25
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Around the lines";
			celTwo.innerHTML ="€"+ price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			

}

function packOne(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 14.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Six Box Breaker";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
			
			
			
}

function packTwo(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 8.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Six knock Off";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
			
			
}

function packThree(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 16.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Six Yellow Noise";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function packFour(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 12.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Six Around the world";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function boxOne(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 12.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "Gift Box";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function boxTwo(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 19.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "BIG Gift Box";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function boxThree(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(1);
			
			var price = 29.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "HUGE Gift Box";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function boxFour(){
	

		var table = document.getElementById("cartList");
			
			var newRow = table.insertRow(0);
			
			var price = 34.99
			
	
			var celOne = newRow.insertCell(0);
			var celTwo = newRow.insertCell(1);
			
			celOne.innerHTML = "MEGA Gift Box";
			celTwo.innerHTML = "€"+price;
			
			var currentTotal = parseFloat( localStorage.getItem("Total"));
			
			localStorage.setItem("Total",currentTotal + price );
			
			var newTotal = localStorage.getItem("Total");
			
			document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
			
}

function paynow(){
	localStorage.setItem("Total",0 );
	
	var newTotal = localStorage.getItem("Total");
			
	document.querySelector('.dropdown-content span').textContent = Math.round(newTotal*100)/100.0;
	
	var table = document.getElementById("cartList");
	
	var rows = table.getElementsByTagName("tr");
	
	alert("Payment succesful")		

	for(i = 1; i = rows.length; i++){
	var delRow = table.deleteRow(1);
	
	}
	}