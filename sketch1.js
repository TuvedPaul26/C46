var wall1, wall2, arrow, Thund3r, ledge1, ledge2, disappLedge1, disappLedge2, groupOfArrow, invisibleWall1, invisibleWall2;


function setup (){
createCanvas(1200,500);
ledge1 = createSprite(650,250,100,65);
ledge2 = createSprite(500,530,60,20);
disappLedge1 = createSprite(500,-30,60,20);
disappLedge2 = createSprite(500,530,60,20);
Thund3r = createSprite(60,250,50,50);
Thund3r.shapeColor = "black";
wall1 = createSprite(500,220,60,235);
wall1.shapeColor = "orange";
wall1.velocityY = 3;
wall2 = createSprite(500,280,60,235);
wall2.shapeColor = "red";
wall2.velocityY = -3;
invisibleWall1 = createSprite(500,-30,60,20);
invisibleWall2 = createSprite(500,530,60,20);
ledge1 = createSprite(650,250,100,65);
ledge2 = createSprite(500,530,60,20);
disappLedge1 = createSprite(500,-30,60,20);
disappLedge2 = createSprite(500,530,60,20);

groupOfArrow = createGroup();
}

function draw (){
    background("blue");
    fill("black");
    textSize(30);
if(keyDown ("w")){
        Thund3r.x = Thund3r.x + 8
        }  
if(keyDown ("s")){
        Thund3r.x = Thund3r.x - 8
        }
if (Thund3r.isTouching(groupOfArrow)){
text("Game Over You Died", 300, 240);
groupOfArrow.setVelocityYEach(0);
}
wall1.bounceOff(invisibleWall2);
wall2.bounceOff(invisibleWall1);
wall2.bounceOff(invisibleWall2);
wall1.bounceOff(invisibleWall1);
    BrittanySpears();
Thund3r.depth = ledge1.depth + 3
    drawSprites();
}

function BrittanySpears (){
    if (World.frameCount % 40 === 0){
var ramboArrow = Math.round(random(200,300))
arrow = createSprite(ramboArrow, -50, 10, 20);
arrow.velocityY = 10;
groupOfArrow.add(arrow);
}
}