window.addEventListener('load', onPageLoadComplete, false);

//test
var temp_text_x = 400;
var temp_text_y = 300;
var v = 3;

function cRect (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width  = width ;
    this.height = height;
}
cRect.prototype.drawTile = function (x, y)
{
    var canvas = document.getElementById('GameCanvas');
    var context = canvas.getContext('2d');

    for(i = 0; i < x; i++)
    {
        for(j = 0; j < y; j++)
        {
            var l, t;
            l = i * rt.width+50;
            t = j * rt.height+50;

            context.strokeStyle = 'white';
            context.strokeRect(l,t,rt.width,rt.height);
        }
    }
}
//var vRectPos = new vector2d(400,300);
var rt = new cRect(0,300, 50, 50);

function onPageLoadComplete () {
    var FPS = 30;
    setInterval(gameLoop, 1000 / FPS);
}

function Update () {
    if (inputSystem.isKeyDown(37)) {
        //left
        temp_text_x -= 5;
        rt.x -= 5;
    }
    if (inputSystem.isKeyDown(39)) {
        //Right
        temp_text_x += 5;
        rt.x += 5;
    }
    if (inputSystem.isKeyDown(38)){
        //Top
        temp_text_y -= 5;
        rt.y -= 5;
    }
    if (inputSystem.isKeyDown(40)){
        //Botton
        temp_text_y += 5;
        rt.y += 5;
    }
}

function MoveCharter()
{
    var canvas = document.getElementById('GameCanvas');
    //rt.x += v;
    if (rt.x+rt.width > canvas.width)
    {
        v = -v;
        rt.x = canvas.width - rt.width;
    }
    if(rt.x < 0)
    {
        v = -v;
        rt.x = 0;
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
    //Context.font = '40px arial';
    //Context.fillText('★', temp_text_x, temp_text_y);

    //Context.strokeStyle = 'white';
    //Context.strokeRect(vRectPos.x,vRectPos.y,50,50);
    rt.drawTile(10, 10);

    Context.fillStyle = 'white';
    Context.fillRect(rt.x,rt.y,rt.width,rt.height);

    Context.fillStyle = 'black';
    Context.font = '10px arial';
    Context.textBaseline = 'top';
    Context.fillText(rt.x, rt.x, rt.y);

}

function gameLoop () {
    Update();
    MoveCharter();
    Render();

    frameCounter.countFrame();
}