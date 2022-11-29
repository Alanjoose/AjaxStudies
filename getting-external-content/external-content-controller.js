$(function() {
    
    //------------SECTION-ONE------------
    $("#section-one-trigger").click(function() {
        $.ajax({url: "external.html", success: function(response) {
            $("#section-one-target").html(response);
        }});
    });

    //------------SECTION-TWO------------
    $("#section-two-trigger").click(function() {
        $.ajax({url: "plain-text.txt", success: function(response) {
            $("#section-two-target").html(response)
        }});
    });

    //------------SECTION-THREE------------
    $("#section-three-trigger").click(function() {
        $("#section-three-image").attr('src', "image.png");
    });

})