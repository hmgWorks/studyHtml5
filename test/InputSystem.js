window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

function InputSystem () {
	this.MouseX = 0;
	this.MouseY = 0;
	//키 입력 정보 배열
	this.isKeyPressed = [];
	return this;
}

InputSystem.prototype.isKeyDown = function(keyCode) {
	if (this.isKeyPressed[keyCode] == true) 
		return true;
	else
		return false;
}

InputSystem.prototype.getMousePositionX = function() {
	return this.MouseX;
}

InputSystem.prototype.getMousePositionY = function() {
	return this.MouseY;
}

function onMouseMove (e) {
	var theCanvas = document.getElementById('GameCanvas');
	
	inputSystem.MouseX = e.clientX - theCanvas.offsetLeft;
	inputSystem.MouseY = e.clientY - theCanvas.offsetTop;
}

function onKeyDown (e) {
	inputSystem.isKeyPressed[e.keyCode] = true;
}

function onKeyUp (e) {
	inputSystem.isKeyPressed[e.keyCode] = false;	
}

var inputSystem = new InputSystem();