

let score = 0;
const increment = function() {
score += 1;
return score;
};


$(document).ready(function () {

// prompt("What is your name?");
//
// alert("Pick your picture");

// $(".one").click(function(){
//   $("td:first").addClass("pic");

// const randomnum = Math.floor(Math.random() * 7);

// const tiles = ["#zero", "#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight"];
// let index = tiles.indexOf(tiles[randomnum]);
// if (index > -1) {
//   tiles.splice(index, 1);
// }
// console.log(tiles);


let playerOne = true;
let playerTwo = false;
let playerOneCombos = [];
let playerTwoCombos = [];

$('.box').one("click", function () {
if (playerOne) {
// const div = $(".move-area");
// console.log('div', div);
const eyeBox = $(this).append(`
<div class="move-area">
    <div class='eye'></div>
    <div class='eye'></div>
    <div class='mouth'></div>
    </div>
`);
// $('.move-area').appendTo(this);
//$(this).html($('.move-area'));
console.log($('.move-area'));
//console.log('.face1');
console.log(this);
// $(this).html(newdiv);
// $(this).html(newdiv);
moveeyes();
// })

  //console.log($(this).attr("id"));

  //this.offclick
playerOneCombos.push($(this).attr("id"));

// $('.box').text($(this).attr('id'));
  playerOne = false;
  playerTwo = true;
  console.log('playerOneCombos', playerOneCombos);



  //decideWinner(playerOneCombos)
} else {


  const eyeBoxes = $(this).append(`
    <div class="movingeyes">
  <div class="player2img">

    <div class='eye2'></div>
      <div class='eye2'></div>

  </div>
  `);
  // const img = $('<img id="img2">'); //Equivalent: $(document.createElement('img'))
  // img.attr('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpspo-w1z4Mpro3XaphOs6Xs8NZKf9SyzPdGWBW2p-alr2ID5oKg");
  // img.appendTo(this);

   playerTwoCombos.push($(this).attr("id"));
   console.log('playerTwoCombos', playerTwoCombos);
  playerOne = true;
  playerTwo = false;
  //console.log('playerTwoCombos', playerTwoCombos);
}

// if ((playerOneCombos.length === 3 && playerTwoCombos.length === 2 ) ||
// (playerOneCombos.length === 2 && playerTwoCombos.length === 3 ))
//  {
//   //.offclick

  const hedge = timetocheck(playerOneCombos);
  const dog = timetocheck(playerTwoCombos);

  //console.log("winner 1");
  if (hedge) {
    console.log("player 1 wins");
    $("h2").removeClass("player1");
    $(".container").addClass("animated flash delay-2s");
      $("table").addClass("tables");
    // $("h2").addClass("animated bounceInUp delay-1s");
    //counting points for winning

    //adding the points to the table
  //  $("#button").click(function() {
      const getIncreasedValue = increment();
      $("#teamhedge").text(getIncreasedValue)
        $("td").off("click");
  //  });
  }

  if (dog) {
    console.log("player 2 wins");
    $("h2").removeClass("player2");
    //$("table").addClass("animated hinge delay-2s");
    $("body").addClass("animated flash");
      $("table").addClass("tables");
//counting points for winning
const getIncreasedValues = increment();
$("#teamdoggo").text(getIncreasedValues)
$("td").off("click");
  }
// if (hedge && dog) {
//   console.log("draw");
//   $("h2").addClass("player1");
//   $("h2").addClass("player2");
//   $("h2").removeClass("draw");
// }
//
// } else if ((playerOneCombos.length === 4 && playerTwoCombos.length === 3 ) ||
// (playerOneCombos.length === 3 && playerTwoCombos.length === 3 )) {
//
//   if (hedge) {
//     console.log("player 1 wins");
//     $("h2").removeClass("player1");
//     $(".container").addClass("animated flash delay-2s");
//     $("h2").addClass("animated bounceInUp delay-1s");
//     //counting points for winning
//
//     //adding the points to the table
//   //  $("#button").click(function() {
//       var getIncreasedValue = increment();
//       $("#teamhedge").text(getIncreasedValue)
//   //  });
//   }
//
//   if (dog) {
//     console.log("player 2 wins");
//     $("h2").removeClass("player2");
//     //$("table").addClass("animated hinge delay-2s");
//     $("h2").addClass("animated bounceInUp delay-1s");
//   //counting points for winning
//   var getIncreasedValue = increment();
//   $("#teamdog").text(getIncreasedValue)
//   }
//
// }

// if (hedge && dog) {
//   console.log("draw");
//   $("h2").removeClass("draw");
//   $("h2").addClass("player1");   ///the code doesn't work with that line
//  $("h2").addClass("player2");     ////code doesnt work with that line
// }
//
//
//
if (playerOneCombos.length === 5 && playerTwoCombos.length === 4 ) {
  if (!hedge && !dog) {
    console.log("draw");
    $("h2").removeClass("draw");
    $("table").addClass("tables");
    $(".container").addClass("animated wobble");
  }
}




// $(".move-area").mousemove(function(event) {
//   var eye = $(".eye");
//   var x = (eye.offset().left) + (eye.width() / 2);
//   var y = (eye.offset().top) + (eye.height() / 2);
//   var rad = Math.atan2(event.pageX - x, event.pageY - y);
//   var rot = (rad * (180 / Math.PI) * -1) + 180;
//   eye.css({
//     '-webkit-transform': 'rotate(' + rot + 'deg)',
//     '-moz-transform': 'rotate(' + rot + 'deg)',
//     '-ms-transform': 'rotate(' + rot + 'deg)',
//     'transform': 'rotate(' + rot + 'deg)'
//   });
// });


$('#button').click(function() {
    location.reload();
});

});

// const timetocheck = function() {
// if ((playerOneCombos.length === 3) && (playerOneCombos === option1)) {
//   console.log("winner");
//
// }else {
// console.log("do not give up");
// }
// }
// timetocheck();

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



//update the score if player won
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
  }
}

moveeyes();




// Define a blank array for the effect positions. This will be populated based on width of the title.
   var bArray = [];
   // Define a size array, this will be used to vary bubble sizes
   var sArray = [4,6,12,16];

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





//BUTTON ready to add points if you click on reset
// $("#button").click(function() {
//   var getIncreasedValue = increment();
//   $("#teamhedge").text(getIncreasedValue)
// });
