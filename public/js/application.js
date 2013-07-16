$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $("#talk-to-grandma").submit(function(e){
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/grandma",
      data: $("#talk-to-grandma").serialize(),
      success: function(data){
        // console.log(data);
        console.log($(data).find("#return"));

        // $("#return").html($(data).find("#return"));
        $("body").html(data);
      },
      error: function(){
        $("#message").html("Not Successful");
      }
    });
  });

});

// .html
// .text

