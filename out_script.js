var pics_for_words = {
  'walk':'http://images.clipartpanda.com/walking-clipart-qcBAyKpXi.svg',
  'shopping':'http://images.clipartpanda.com/shopping-bag-clipart-di6659yi9.png',
  'wii': "http://worldartsme.com/images/wii-clipart-1.jpg",
  'basketball': "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/170px-Basketball.png",
  'soccer': 'http://www.lijsoccer.com/images/soccerBall.png',
  'football': 'https://kwso.org/wp-content/uploads/2017/07/football.png',
  'swimming': 'https://clipartion.com/wp-content/uploads/2015/11/swimming-clip-art-clipart-free-clipart.png',
  'tennis': 'http://clipartix.com/wp-content/uploads/2016/05/Tennis-clip-art-at-clker-vector-clip-art.png',
  'baseball': 'http://clipartix.com/wp-content/uploads/2016/12/Small-baseball-clipart-clipartfest-2.png',
};


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

  };

  $( document ).ready(function() {
    console.log( "ready!" );
  //  console.log(data["two_one"]);

    var new_word = GetURLParameter("word");
    // var wordString = word.toString();
    $("h2#replace").text(new_word);
    var image_name = pics_for_words[new_word];
    $("#pic").attr("src",image_name);
    //$("h2#replace").attr("css", {font-family, "Indie Flower"});

    console.log("i did it");


    // var audio = new Audio();
    // audio.src ='http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=Hello%20World.';
    // audio.play(


  });
