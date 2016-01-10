$(function() {
    // Get Id of list
    var $list = $('ul');
    // Getting id of add item
    var $addItem = $('#addItem');
    // Getting input box of message
    var $message = $('#message'); // Click function on the button
    $addItem.on('click', function(event) {
        event.preventDefault();
            // Get information from input field
        $message = $('input:text').val();
        //  Checking if there is any input
        if ($(message).val() === '' || $(this).val() ===
            'undefined') {
            // Create pop up box with message
            $('.box-bg').fadeIn();
            $('.box').fadeIn().animate({
                top: "200px"
            }, 300);
            // closing box
            $('.box .fa, .box-bg').on('click', function() {
                // show box and bg on click of button
                $('.box').animate({
                    "top": "-100vh"
                }, 800);
                $('.box-bg').fadeOut();
            });
        } else {
            // When button is pressed
            // Add text from input field
            var $listHtml = "<li class ='newItem'><p>" +
                "<i class='fa fa-plus-square-o'>" + $message +
                "</i> <i class=' delete fa fa-times'></i>" +
                "</p></li>";
            // To bottom of list
            $list.append($listHtml);
            // Clear the input box out
            $("input[type=text], textarea").val("");
        }
    });
    // Cross next to message that allows message to be deleted.
    $("#container").on("click", "#list .delete", function() {
        $(this).closest("li").remove();
    });
    // copy item and display to page else where?
    // click new list item, copy the info and then display this info on the page.
    $list.on('click', 'i.fa.fa-plus-square-o', function() {
        var copyList = $(this).text();
        $('#saved').append('<li class ="important">' + copyList +
            "<i class=' delete fa fa-times'></i>" + '</li>'
        );
    });
    // remove important list item
    $("#saved").on("click", "i.fa.fa-times", function() {
        $(this).closest("li").remove();
    });
    // Log in box and bg appear
    $('#toggle-login').click(function() {
        $('#login').fadeIn();
        $('.box-bg').fadeIn();
    });
    // Log in box and bg fadeOut
    $('#login .fa').click(function() {
        $('#login').fadeOut();
        $('.box-bg').fadeOut();
    });
});