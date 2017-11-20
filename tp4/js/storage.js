function stor(){

           // Check browser support
if (typeof(Storage) !== "undefined") {

        localStorage.setItem("nom", $("#name").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("nom");

        localStorage.setItem("prenom", $("#firstname").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("prenom");

        localStorage.setItem("date", $("#birth").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("date");

        localStorage.setItem("adresse", $("#adresse").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("adresse");

        localStorage.setItem("mail", $("#mail").val());
        document.getElementById("ici").innerHTML = localStorage.getItem("mail");
 } else {
        document.getElementById("ici").innerHTML = "Sorry, your browser does not support Web Storage...";

 }};