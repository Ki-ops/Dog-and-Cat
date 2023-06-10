img=""

function preload(){
img=loadImage("dog_cat.jpg")
}

function setup (){
    canvas=createCanvas(640,420)
    canvas.center()

}

function draw(){
    image(img,0,0,640,420)
    fill("black");
    textSize(13)
    text("Dog",45,75)
noFill()
stroke("black")

    rect(30,60,450,350)

    fill("cyan");
    textSize(13)
    text("cat",575,75)
noFill()
stroke("cyan")

    rect(300,60,300,350)
}