
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

const img = $('<img id="img1">'); //Equivalent: $(document.createElement('img'))
img.attr('src', "https://media1.giphy.com/media/3xz2BCohVTd7h2Kvfi/200.webp?cid=790b76115d22c46545414a44552b6e55&rid=200.webp");
img.appendTo(this);


  //console.log($(this).attr("id"));

  //this.offclick
playerOneCombos.push($(this).attr("id"));

// $('.box').text($(this).attr('id'));
  playerOne = false;
  playerTwo = true;
  console.log('playerOneCombos', playerOneCombos);
  //decideWinner(playerOneCombos)
} else {

  const img = $('<img id="img2">'); //Equivalent: $(document.createElement('img'))
  img.attr('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpspo-w1z4Mpro3XaphOs6Xs8NZKf9SyzPdGWBW2p-alr2ID5oKg");
  img.appendTo(this);

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
    $("h2").addClass("animated bounceInUp delay-1s");
    //counting points for winning

    //adding the points to the table
  //  $("#button").click(function() {
      const getIncreasedValue = increment();
      $("#teamhedge").text(getIncreasedValue)
  //  });
  }

  if (dog) {
    console.log("player 2 wins");
    $("h2").removeClass("player2");
    //$("table").addClass("animated hinge delay-2s");
    $("h2").addClass("animated bounceInUp delay-1s");
//counting points for winning
const getIncreasedValues = increment();
$("#teamdoggo").text(getIncreasedValues)
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
    $(".container").addClass("animated wobble");
  }
}






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





});





//BUTTON ready to add points if you click on reset
// $("#button").click(function() {
//   var getIncreasedValue = increment();
//   $("#teamhedge").text(getIncreasedValue)
// });
