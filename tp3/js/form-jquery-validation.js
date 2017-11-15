$(document).ready(function () {
    console.log("DOM ready!");
    $("button").click(function (event) {
        event.preventDefault()
        if ($("#nom").val() == "" || $("#prenom").val() == "" || $("#mail").val() == "" || $("#adresse").val() == "") {
            $('#myModal').modal("show")
        }
        else {
           
            $(".modal-body").html('<img src="map.PNG"/>');
            $('#myModal').modal("show");
            $(".modal-body").html('vous etes '
            +$("#nom ").val()+' '
            +$("#prenom ").val()
            +' et Vous Etes nés le '
            +$("#date").val()
            +' et Vous Habitez au'+$("#adresse").val()+'<br/>'          
            +'<img src="map.png" width="330" height="300"/>'+'<br/>'
            +'<a href=https://www.google.fr/maps/@ target="_blank">localisez moi</a>'
          
            )}
       
    });
    $( function() {
        
        $("#date").datepicker()
           
        
} );
})