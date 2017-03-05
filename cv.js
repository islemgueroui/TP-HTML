function afficher(id_div){
	$("#"+ id_div).toggle();
}

function validation(){
  var email = $(form_mail).val();
  var numero = $(form_numero).val();
  
  valider_email(email);
  valider_numero(numero);
}

function valider_email(email){
	if(!email.includes("@")){
		window.alert("L'adresse mail que vous avez saisie n'est pas valide !!!");
	}
}

function valider_numero(numero){
	if(numero.length != 10 || numero.replace(/^[0-9]*$/,"") != ""){
		window.alert("Le numero que vous avez saisi n'est pas valide !!!");
	}
}