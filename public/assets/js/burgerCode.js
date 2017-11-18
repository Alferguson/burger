$(function() {

    $("#createBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: true
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then (
            function() {
                .log("You made a new burger!");
                location.reload();
            }
        );
    });

    $("#devour").on("click", function(event) {

        event.preventDefault();
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        })
        .then (
            function() {
                console.log("Burger has been moved", id);
                location.reload();
            }
        );
    });
});
