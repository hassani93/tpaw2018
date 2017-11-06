
  function validation(){
    var nom = document.getElementById('Nom').value;
if(nom.length <5){

alert('le nom doit contenir au moins 5 caratères');
document.getElementById("error").innerHTML =  "le nom doit contenir au moins 5 caractéres";}
else
{
document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Nom").value;
}
}