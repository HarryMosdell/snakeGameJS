<script> 


var snakebBoard = document.getElementById('snake-board');
  for(var i=0; i<400; i++  ) {

    snakebBoard.innerHTML += "<div class='snake-grid-column'></div>";
  }
  
var blockSize=20;
var rows =20; 
var cols =20; 
var snake= document.getElementById('snake');
var apple= document.getElementById('apple');
var snakeBoard= document.getElementById('snake-board');
var gameScore = 0;
var applePositionX= applePositionX;
var applePositionY= applePositionY;
var SnakePositionX = SnakePositionX;
var SnakePositionY= SnakePositionY;
var xSpeed = 20;
var ySpeed= 20;
var snakeDirection=snakeDirection;
// call the move functions 


document.addEventListener('keydown', function(event) {
   
    if(event.keyCode == 39) {
    clearInterval(snakeDirection);
    snakeDirection=setInterval(moveRight,1000);
    }
    
    if(event.keyCode == 37) {
    clearInterval(snakeDirection);
    snakeDirection=setInterval(moveLeft,1000);   
    }

    if(event.keyCode == 40) {
    clearInterval(snakeDirection);
    snakeDirection=setInterval(moveDown,1000);
    }

    if(event.keyCode == 38) {
    clearInterval(snakeDirection);
    snakeDirection=setInterval(moveUp,1000);
    }
});


// this function will move the snake in the right direction
function moveRight () {
snake.style.transform ='rotate('+360+'deg)'; 
SnakePositionX = snake.offsetLeft + xSpeed;
snake.style.left = SnakePositionX + 'px';
//console.log(SnakePositionX);
    
 if (SnakePositionX >= 450) {
    console.log("game over");
    gameOver();
 } 
     
}

// this function will move the snake in the left direction
function moveLeft () { 
    snake.style.transform ='rotate('+180+'deg)';  
    SnakePositionX = snake.offsetLeft - xSpeed;
    snake.style.left = SnakePositionX + 'px';
    //console.log(SnakePositionX);
        
     if (SnakePositionX <0) {
        console.log("game over");
        gameOver();
     } 
         
    }


    function moveDown () {
    snake.style.transform ='rotate('+90+'deg)';  
    SnakePositionY = snake.offsetTop + ySpeed;
    snake.style.top = SnakePositionY + 'px';
    //console.log(SnakePositionY);
        
     if (SnakePositionY >500) {
        console.log("game over");
        gameOver();
     } 
         
    }

    function moveUp () {
    snake.style.transform ='rotate('+270+'deg)';  
    SnakePositionY = snake.offsetTop - ySpeed;
    snake.style.top = SnakePositionY + 'px';
    //console.log(SnakePositionY);
        
     if (SnakePositionY <0) {
        console.log("game over");
        gameOver();
     } 
         
    }

   function drawApple() {
     applePositionX=   Math.floor(Math.random ()* cols) * blockSize; 
     applePositionY= Math.floor(Math.random ()* rows) *blockSize;
     apple.style.left= applePositionX +"px" ;
     apple.style.top= applePositionY +"px" ;
     console.log(applePositionX);
   
   } 
    drawApple();
    
    //this function will check for collision between the snake and the apple
    function checkCollison() {
        var applePostionRoundedX= Math.round(applePositionX);
        var SnakePostionRoundedX= Math.round(SnakePositionX);
        var applePostionRoundedY= Math.round(applePositionY);
        var SnakePostionRoundedY= Math.round(SnakePositionY);
        
      if( applePostionRoundedX ==  SnakePostionRoundedX && applePostionRoundedY ==  SnakePostionRoundedY  ) {
         console.log("collison!");
         drawApple();
         gameScore++;
       var score =  document.getElementById("game-score");
       score.innerHTML="SCORE " + gameScore;
      }
      else {
   
       console.log(" SNAKE  POSITION X IS"  + SnakePostionRoundedX);
       console.log(" SNAKE  POSITION Y IS"  + SnakePostionRoundedY);
       console.log( " APPLE  POSITION X IS"  +applePostionRoundedX);
       console.log( " APPLE  POSITION Y IS"  + applePostionRoundedY);
      }
    }

   

var gamePlaying= setInterval(checkCollison,1000);


 //this function ends the game
function gameOver() {
  clearInterval(snakeDirection);
  clearInterval(gamePlaying);
         
  var screen = document.getElementById('game-over');
  screen.classList.toggle("d-none");

}


</script>
