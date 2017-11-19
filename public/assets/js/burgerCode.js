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
                console.log("You made a new burger!");
                location.reload();
            }
        );
    });

    $("#devour").on("click", function(event) {

        event.preventDefault();
        var id = $(this).data("id");
        var justDevoured = $(this).data("devour");
        var justDevouredState = {
            devoured: justDevoured
        };

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: justDevouredState
        })
        .then (
            function() {
                console.log("Burger has been moved ", id);
                location.reload();
            }
        );
    });
});
