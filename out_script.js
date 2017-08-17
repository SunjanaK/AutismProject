
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
    // var wordString = word.toString();
    $("h2#replace").text(word);
    //$("h2#replace").attr("css", {font-family, "Indie Flower"});

    console.log("i did it");

    // var audio = new Audio();
    // audio.src ='http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=Hello%20World.';
    // audio.play();

});
