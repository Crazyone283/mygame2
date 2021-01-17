var playable_character
var npc

function setup() {
  createCanvas(500, 500);
playable_character = createSprite(250, 450, 20, 60);

}

function draw() {
  background("lime");  
  hitman()
  createEdgeSprites()
  borders()
  player_legs()
  bullet()
  obstacles()
  drawSprites();
}

function player_legs()
{
// this is for left arrow
if (keyWentUp("left")) {
  playable_character.velocityX = 0
}

if (keyWentDown("left")) {
  playable_character.velocityX = -4
}
// this is for right arrow
if (keyWentDown("right")) {
  playable_character.velocityX = 4
  console.log("message")
}

if (keyWentUp("right")) {
  playable_character.velocityX = 0
  console.log("message")
}
}



function hitman()
{
  if (frameCount % 100 === 0) {
    npc = createSprite(250,-5,20,60);
    npc.x = Math.round(random(50,450));
    // npc.addImage(cloudImage);
    // npc.scale = 0.5;
    npc.velocityY = 3;
}
}
function borders() {
  if (playable_character.x < 10) {
    playable_character.velocityX = 4
    console.log("working")
  }
  
  else if (playable_character.x > 490){
    playable_character.velocityX = -4
  }
}

function bullet() {
  if (keyCode === 32) {
    if (frameCount % 10 === 0) {
      bullet1 = createSprite(playable_character.x, playable_character.y, 9, 25)
      bullet1.velocityY = -6
  
    }
    }
}
function obstacles()
{
  if (frameCount % 600 === 0) {
    barrier = createSprite(250,-5,50,60);
    barrier.x = Math.round(random(50,450));
    // npc.addImage(cloudImage);
    // npc.scale = 0.5;
    barrier.velocityY = 2;
}
}