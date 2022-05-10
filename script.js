   function move(event){
                var keyPressed = event.originalEvent.code;
              if(keyPressed == 'KeyZ'){
                  location.replace("https://classroom.google.com");
              }
                if(keyPressed == 'ArrowRight'){
           
                    var rightCSS = {
                        'left': '+=15px'
                    }
                    $("#player").css(rightCSS);
                }
                if (keyPressed == 'rightcontrol'){
                    var leftCSS = {
                        'left': '-=15px'
                    }
                    $("#player").css(leftCSS);
                }
                if (keyPressed == 'ArrowDown'){
                    var bottomCSS = {
                        'top': '+=15px'
                    }
                    $("#player").css(bottomCSS);
                }
                if (keyPressed == 'ArrowUp'){
                    var topCSS = {
                        'top': '-=15px'
                    }
                    $("#player").css(topCSS);
                }
            }

            $(document).keydown(move);
          
  function addCoin() {
            $('.game').append("<img class='coin' src='coin.png'>");
            var randomPosition = {
              'top':Math.random()*400,
              'left':Math.random()*900
            };
          $('.coin').css(randomPosition);
          
          }
           
	  
	 //these lines of code.
	  //these damn lines of code, if i remove them, everything stops working
	  //I could probably figure out why it doesn't work if I tried
	  //But I don't have the patience or will to figure it out
	  //I'ma just say it's magic.
          addCoin();
          function checkCollision() {
            var collided = collision($('.coin'), $('#player'));
          if(collided){
            $(collided).remove();
            $('.enemy').stop();
            gameOver();
             var score = score + 1
             
            document.getElementById('scoretext').innerText = score;

           }
          }
          setInterval(checkCollision, 200);
          
          function gameOver() {
            
          }
          /****
          Exercise 1: Create a function to add a coin.
          
          Exercise 2: Give random position to coin added in previous exercise.
          
          Exercise 3: Add collision detection between player and the coin.
          
          Exercise 4: Create a game over function
          
          Exercise 5: Add enemy and call gameOver() when it reaches the coin

          *****/ 
          
          $('.audioclass')[0].play();
          $('.audioclass')[0].pause();
var elem = document.getElementById("mygame");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
