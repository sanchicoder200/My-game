var player;
var box1, box2, box3, box4, box5, box6;
var chance=3;
var gameState= "play";
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);
player= createSprite(100, 100, 50, 50)
	player.shapeColor="yellow";

	box1= createSprite(displayWidth/2, 100, 100, 100)
	box1.shapeColor="brown";
	
	box2= createSprite(1000, 100, 100, 100)
	box2.shapeColor="red";

	box3= createSprite(displayWidth/2, 400,100, 100)
	box3.shapeColor="pink";

	box4= createSprite(1000, 400,100, 100)
	box4.shapeColor="green";
	
	box5= createSprite(displayWidth/2, 700,100, 100)
	box5.shapeColor="blue";

	box6= createSprite(1000, 700,100, 100)
	box6.shapeColor="white";

edges= createEdgeSprites();
}


function draw() {
  background(0);
fill("white");
textSize(20)
text("You have only 3 chances to do win the game!", 100, 50);


text("CHANCE: "+chance, 950, 30)

if (keyDown(UP_ARROW)){
	player.y-=10;
}
if (keyDown(DOWN_ARROW)){
	player.y+=10;
}
if (keyDown(LEFT_ARROW)){
	player.x-=10;
}
if (keyDown(RIGHT_ARROW)){
	player.x+=10;
}

if (player.isTouching(box2)){
    chance-=1;
	box2.destroy()
}

if (player.isTouching(box3)){
    chance-=1;
	box3.destroy()
}

if (player.isTouching(box5)){
    chance-=1;
	box5.destroy()
}

if (chance==0){

}

  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  player.collide(edges[3]);
  drawSprites();

}



