function validation() {

    if ($("#name").val() == ""
        || $("#firstname").val() == ""
        || $("#birth").val() == ""
        || $("#adresse").val() == ""
        || $("#mail").val() == "") {
        alert("veuillez remplir tous les champs")
    } else {
        $('#myModal').modal("show");
        $(".modal-body").html('vous etes '
            + $("#name").val() + ' '
            + $("#firstname ").val()
            + ' et vous etes nés le '
            + $("#birth").val()
            + ' et vous habitez à ' + '<a href=https://www.google.fr/maps/search/ target="_blank"> localisez moi </a>'
            + '<img src="map.png" width="330" height="300"/>' + '<br/>'
        );

        $('#myModal').modal("show");





    }
};