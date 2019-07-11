



$(document).ready(function () {

let playerOne = true;
let playerTwo = false;
let playerOneCombos = [];
let playerTwoCombos = [];

$(".box").on("click", function() {
    const audio = $("#audio")[0];
    audio.play();
  });

$('.box').one("click", function () {

  // const bleep = new Audio("bleep.mp3");



if (playerOne) {
const eyeBox = $(this).append(`
<div class="move-area">
    <div class='eye'></div>
    <div class='eye'></div>
    <div class='mouth'></div>
    </div>`);
// $('.move-area').appendTo(this);





console.log('eyeBox', eyeBox);


moveeyes();

playerOneCombos.push($(this).attr("id"));


  playerOne = false;
  playerTwo = true;


} else {


  const eyeBoxes = $(this).append(`
    <div class="move2">
        <div class='eye2'></div>
        <div class='eye2'></div>
        <div class='mouth2'>X</div>
        </div>
  `);

  console.log('eyeBoxes', eyeBoxes);
  moveeyes2();

   playerTwoCombos.push($(this).attr("id"));
  playerOne = true;
  playerTwo = false;

}


let score = 0;
const increment = function() {
score += 1;
return score;
};

  const bub1 = timetocheck(playerOneCombos);
  const bub2 = timetocheck(playerTwoCombos);

  //console.log("winner 1");
  if (bub1) {
    console.log("player 1 wins");
    $("h2").removeClass("player1");
    $(".container").addClass("animated flash");
      $("table").addClass("tables");
    $(".move-area").addClass("animated flip infinite delay-2s")

;

      // const audio1 = $("#audio1")[0];
      // audio1.play();
    // $("h2").addClass("animated bounceInUp delay-1s");
    //counting points for winning

    //adding the points to the table
  //  $("#button").click(function() {
      const getIncreasedValue = increment();
      $("#teamplay1").text(getIncreasedValue)
        $("td").off("click");
        const audio1 = $("#audio1")[0];
        audio1.play();
  //  });
  }

  if (bub2) {
    console.log("player 2 wins");
    $("h2").removeClass("player2");
    //$("table").addClass("animated hinge delay-2s");
    $(".container").addClass("animated flash");
      $("table").addClass("tables");
$(".move2").addClass("animated flip infinite delay-2s")

//counting points for winning
const getIncreasedValues = increment();
$("#teamplay2").text(getIncreasedValues)
$("td").off("click");
  audio3.play();
  }


if (playerOneCombos.length === 5 && playerTwoCombos.length === 4 ) {
  if (!bub1 && !bub2) {
    console.log("draw");
    $("h2").removeClass("draw");
    $("table").addClass("tables");
    $(".container").addClass("animated wobble");
    $(".move2").addClass("animated rubberBand infinite delay-2s")
    $(".move-area").addClass("animated rubberBand infinite delay-2s")
    const audio2 = $("#audio2")[0];
    audio2.play();


  }
}






//reloading the page button
$('#button').click(function() {
    location.reload();
});

});

//all options to win
const timetocheck = function (array) {
  if ( (array.includes("one") && array.includes("two") && array.includes("three")) ||
  (array.includes("four") && array.includes("five") && array.includes("six")) ||
  (array.includes("seven") && array.includes("eight") && array.includes("nine")) ||
  (array.includes("one") && array.includes("four") && array.includes("seven")) ||
  (array.includes("two") && array.includes("five") && array.includes("eight")) ||
  (array.includes("three") && array.includes("six") && array.includes("nine")) ||
  (array.includes("one") && array.includes("five") && array.includes("nine")) ||
  (array.includes("three") && array.includes("five") && array.includes("seven")) ) {
    return true;
  }
};



//moveeyes1 function
function moveeyes () {
  const eyeBoxArray = $(".move-area");

  eyeBoxArray.each(moveEyes);

  function moveEyes () {

    $(this).mousemove(function(event) {
      var eye = $(".eye");
      var x = (eye.offset().left) + (eye.width() / 2);
      var y = (eye.offset().top) + (eye.height() / 2);
      var rad = Math.atan2(event.pageX - x, event.pageY - y);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  };

};

//moving eyes function

function moveeyes2 () {
  const eyeboxArray = $(".move2");

  eyeboxArray.each(moveEyesAgain);

  function moveEyesAgain () {

    $(this).mousemove(function(event) {
      var eye = $(".eye2");
      var x = (eye.offset().left) + (eye.width() / 2);
      var y = (eye.offset().top) + (eye.height() / 2);
      var rad = Math.atan2(event.pageX - x, event.pageY - y);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  };

};

//moveeyes();




// Define a blank array for the effect positions. This will be populated based on width of the title.
   var bArray = [];
   // Define a size array, this will be used to vary bubble sizes
   var sArray = [1,2,3,4,6,8,12,16,19,23];

   // Push the header width values to bArray
   for (var i = 0; i < $('.bubbles').width(); i++) {
       bArray.push(i);
   }

   // Function to select random array element
   // Used within the setInterval a few times
   function randomValue(arr) {
       return arr[Math.floor(Math.random() * arr.length)];
   }

   // setInterval function used to create new bubble every 350 milliseconds
   setInterval(function(){

       // Get a random size, defined as variable so it can be used for both width and height
       var size = randomValue(sArray);
       // New bubble appeneded to div with it's size and left position being set inline
       // Left value is set through getting a random value from bArray
       $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

       // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
       // Callback function used to remove finsihed animations from the page
       $('.individual-bubble').animate({
           'bottom': '100%',
           'opacity' : '-=0.7'
       }, 3000, function(){
           $(this).remove()
       }
       );


   }, 350);




});
