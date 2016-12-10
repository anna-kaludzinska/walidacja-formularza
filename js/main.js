"use strict";

/*document.getElementById("wyslij").addEventListener("click",
	function validateForm() {
		alert("test");
	});*/

function zaznaczanieZgody () {
	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
	var zgoda2 = document.getElementById("zgoda-marketingowa-2");
	var wszystkieZgody = document.getElementById("wszytskie-zgody");
	
	if (wszystkieZgody.checked) {
		zgoda1.checked = true;
		zgoda1.disabled = true;
		zgoda2.checked = true;
		zgoda2.disabled = true;
	} else {
		zgoda1.checked = false;
		zgoda1.disabled = false;
		zgoda2.checked = false;
		zgoda2.disabled = false;
	}
}

/*document.getElementById("wszytskie-zgody").addEventListener("change", zaznaczanieZgody);*/

document.getElementById("wszytskie-zgody").onchange = zaznaczanieZgody;

function validateForm(e) {
	var imieNazwisko = document.getElementById("name").value;
	var adresEmail = document.getElementById("email").value;
	var zgoda1 = document.getElementById("zgoda-marketingowa-1");
	
	if (imieNazwisko == "" || imieNazwisko == null) {
		e.preventDefault();
		
		//pojawia sie paragraf z czerwonym tekstem, po wpisaniu czegos w pole i kliknieciu wyslij paragraf znika
	}
	
	if (adresEmail == "" || adresEmail == null) {
		e.preventDefault();
	
	}
	
	if (zgoda1.checked==false) {
		e.preventDefault();
		
	}
}

document.getElementById("wyslij").onclick = validateForm;