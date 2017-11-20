$(function() {

    $(".createBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
            devoured: true
        };

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

    $(".if-eaten").on("click", function(event) {

        event.preventDefault();
        var id = $(this).data("id");
        var justDevoured = $(this).data("devour");
        var justDevouredState = {
            devoured: justDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: justDevouredState
        })
        .then (
            function() {
                console.log("Burger has been eaten ", id);
                location.reload();
            }
        );
    });
});