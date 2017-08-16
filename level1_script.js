var data = {
  one_one: "walk",
  one_two: "mall",
  one_three: "wii",
  two_one: "basketball",
  two_two: "soccer",
  two_three: "football",
  three_one: "swimming",
  three_two: "tennis",
  three_three: "baseball"

};


$( document ).ready(function() {

function check3(param) {
    var word = data[param]; // change here
    if (word != "") {
      alert(word);
        window.location.href = "output.html?word=" + word;
    } else {
          alert('Oops.!!');
        }
};

$("#one_one").click(function() {
  console.log("clicked!");
  check3("one_one");
});


function check4(param) {
  var word = data[param];
  if (word != ""){
    alert(word);
      window.location.href = "output.html?word=" + word;
    } else {
       alert("Oops!!");
    }
  };

  $("#one_two").click(function() {
    console.log("clicked!");
    check4("one_two");
  });


  function check5(param) {
    var word = data[param];
    if (word != ""){
      alert(word);
        window.location.href = "output.html?word=" + word;
      } else {
         alert("Oops!!");
      }
    };

    $("#one_three").click(function() {
      console.log("clicked!");
      check5("one_three");
    });


});
