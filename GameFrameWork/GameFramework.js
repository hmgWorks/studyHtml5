window.addEventListener('load', onPageLoadComplete, false);

//test
var temp_text_x = 400;
var temp_text_y = 300;

function onPageLoadComplete () {
    var FPS = 30;
    setInterval(gameLoop, 1000 / FPS);
}

function Update () {
    if (inputSystem.isKeyDown(37)) {
        //left
        temp_text_x -= 5;
    }
    if (inputSystem.isKeyDown(39)) {
        //Right
        temp_text_x += 5;
    }
    if (inputSystem.isKeyDown(38)){
        //Top
        temp_text_y -= 5;
    }
    if (inputSystem.isKeyDown(40)){
        //Botton
        temp_text_y += 5;
    }
}

function Render () {
    var theCanvas = document.getElementById('GameCanvas');
    var Context = theCanvas.getContext('2d');

    Context.fillStyle = 'blue';
    Context.fillRect(0,0,800,600);

    //FPS 표시
    Context.fillStyle =     'white';
    Context.font =          '25px arial';
    Context.textBaseline =  'top';
    Context.fillText('fps :' + frameCounter.Lastfps, 10, 10);

//test
    Context.font = '40px arial';
    Context.fillText('★', temp_text_x, temp_text_y);
}   

function gameLoop () {
    Update();
    Render();

    frameCounter.countFrame();
}