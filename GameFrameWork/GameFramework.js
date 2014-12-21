window.addEventListener('load', onPageLoadComplete, false);

function onPageLoadComplete () {
    var FPS = 30;
    setInterval(gameLoop, 1000 / FPS);
}

function Update () {

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
}

function gameLoop () {
    Update();
    Render();

    frameCounter.countFrame();
}