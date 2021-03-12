var canvas;
var music;
var surface_1, surface_2, surface_3, surface_4;
var box;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface_1 = createSprite(50, 300, 100, 10);
    surface_1.shapeColor = "blue";

    surface_2 = createSprite(200, 300, 100, 10);
    surface_2.shapeColor = "red";

    surface_3 = createSprite(370, 300, 100, 10);
    surface_3.shapeColor = "orange";

    surface_4 = createSprite(540, 300, 100, 10);
    surface_4.shapeColor = "green";
    
    //create box sprite and give velocity
    box = createSprite(random(20, 750), 150, 10, 10);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 3;

}

function draw() {
    background("black");
    
    //create edgeSprite
    var edges = createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if (surface_1.isTouching(box) && box.bounceOff(surface_1)){
        box.shapeColor = "blue";
        box.loadSound(music);
    }

    if (surface_2.isTouching(box) && box.bounceOff(surface_2)){
        box.shapeColor = "red";
        box.loadSound(music);
    }

    if (surface_3.isTouching(box) && box.bounceOff(surface_3)){
        box.shapeColor = "orange";
        box.loadSound(music);
    }

    if (surface_4.isTouching(box) && box.bounceOff(surface_4)){
        box.shapeColor = "green";
        box.loadSound(music);
    }

    surface_1.display();
    surface_2.display();
    surface_3.display();
    surface_4.display();

    box.display();

    ball.bounceOff(edges);

    drawSprites();

}
