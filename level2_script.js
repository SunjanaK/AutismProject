var data = {
  one_one: "walk",
  one_two: "mall",
  one_three: "wii",
  two_one: "soccer",
  two_two: "basketball",
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
  check("two_two");
});

});
