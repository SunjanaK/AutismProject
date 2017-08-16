var data = {
  one_one: "walk",
  one_two: "mall",
  one_three: "wii",
  two_one: "basketball",
  two_two: "soccer",
  two_three: "football",
  three_one: "swimming",
  three_two: "badminton"

};


$( document ).ready(function() {

function check(param) {
    var word = data[param]; // change here
    if (word != "") {
      alert(word);
        window.location.href = "output.html?word=" + word;
    } else {
          alert('Oops.!!');
        }
};

$("#two_one").click(function() {
  console.log("clicked!");
  check("two_one");
});


function check1(param) {
  var word = data[param];
  if (word != ""){
    alert(word);
      window.location.href = "output.html?word=" + word;
    } else {
       alert("Oops!!");
    }
  };

  $("#two_two").click(function() {
    console.log("clicked!");
    check1("two_two");
  });


  function check2(param) {
    var word = data[param];
    if (word != ""){
      alert(word);
        window.location.href = "output.html?word=" + word;
      } else {
         alert("Oops!!");
      }
    };

    $("#two_three").click(function() {
      console.log("clicked!");
      check2("two_three");
    });


});
