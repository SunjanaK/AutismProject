

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }

  }

  $( document ).ready(function() {
    console.log( "ready!" );
  //  console.log(data["two_one"]);

    var word = GetURLParameter("word");
    $("h2#replace").replaceWith(word);



});
