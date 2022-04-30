$(document).ready(function(){
  let $start = $('#start'),
      $game = $('#game'),
      $timeHeader = $("#time-header"),
      $resultHeader = $("#result-header"),
      $time = parseFloat($("#time").text()),
      $input = $("#game-time"),
      score,
      isGameStarted = false,
      box;
  $start.on('click', startGame);
  $game.on('click', () => {
    if(event.target.classList.contains("data-box")) {
      boxClick();
    }    
  });
  $input.on('input', changeGameTime);
  
  function startGame() {
    let time = parseFloat($time);
    isGameStarted = true,
    score = 0,

    $game.css("backgroundColor", "#fff");
    $start.addClass('hide');

    $timeHeader.removeClass('hide');
    $resultHeader.addClass('hide');
    $(".input").addClass('hide');
    
   
    let interval = setInterval(function() {
      if(time <= 0) {
        clearInterval(interval);
        endGame();
      } else {
        time = time - 0.01;
        $('#time').text(Math.abs(time.toFixed(1)));
      }
      
    }, 10);


    renderBox();
  }
  
  function renderBox() {
    let boxSize = getRandom(30,100),
        maxTop = parseInt($game.css('max-height')) - boxSize,
        maxLeft = parseInt($game.css('max-width')) - boxSize;

    $game.html("");
    box = $("<div></div>");
    box.css({"position": "absolute", 'backgroundColor': getRandomColor(),
     "width": boxSize+"px", "height": boxSize+"px", "top": getRandom(0, maxTop) + "px", 
     "left": getRandom(0, maxLeft) + "px", "cursor":"pointer", "border-radius": "15px"})
      .addClass("data-box");
     $game.append(box);

  }
  function boxClick() {
    if (isGameStarted) {
      score++;
      renderBox();
    }    
  }

  function endGame() {
    isGameStarted = false;
    $start.removeClass('hide');
    $game.html("")
    .css("backgroundColor", "#ccc");
    $timeHeader.addClass('hide');
    $resultHeader.removeClass('hide');
    $("#result").text(score);    
    $(".input").removeClass('hide');
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function changeGameTime() {
    $time = parseFloat($input.val());
  }

  function getRandomColor() {
    let x = Math.random().toFixed(1)*10,
        color;
    switch (Math.random().toFixed(1)*10) {
      case 1:
        color = "red";
        break;
      case 2:
        color = "yellow";
        break;
      case 3:
        color = "green";
        break;
      case 4:
        color = "blue";
        break;
      case 5:
        color = "DeepPink";
        break;
      case 6:
        color = "Indigo";
        break;
      case 7:
        color = "Lime";
        break;
      case 8:
        color = "Silver";
        break;
      case 9:
        color = "Aqua";
        break;
      default:
        color = "Fuchsia";
    }

    return color;
  }


});
