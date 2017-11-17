$(document).ready(function() {
  // Run search
  $("#search-button").click(function() {
    //Get search parameter
    var searchQuery = $("#search").val();
    // Build API URL
    var hotLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchQuery +"&format=json";
    // Build Ajax call
    $.ajax ( {
      type: 'GET',
      url: hotLink,
      async: false,
      dataType: 'json',
      data: {
        origin: "*"
      },
      success: function(data) {
        $('#the-return').html('');
        for(var i=0; i < data[1].length; i++) {
          $('#the-return').prepend('<div class="col-sm-12 search-return"><a href="'+data[3][i]+'" target="_blank"><h2 class="h3">'+data[1][i]+'</h2></a><p>'+data[2][i]+'</p></div>');

          $('#search').val('');
        }
      },
      error: function(yourWrong) {
        alert("Something went wrong");
      }
    });
    // Keeps search results displayed on screen
    event.preventDefault();
  });
});
