var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var imageObj = new Image();
imageObj.onload = function() {
    canvas.width = imageObj.width;
    canvas.height = imageObj.height;
    context.drawImage(imageObj, 0, 0);
    context.globalCompositeOperation = 'source-over';
    Circle(388,196);
};
imageObj.src = "http://i2c-clix.tiss.edu/media/0/1/c/600948c4543fa7d557ec53e5aa3036c599f5dc86f99cc62ca7ebb643ee285.png";

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

function Circle(x,y){
    this.x = x;
    this.y = y;
    this.radius = 5;

    this.draw = function(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        context.fillStyle = '#FF0000';
        context.fill();
        context.stroke();
        console.log('Shape');
    }
    this.draw();
}
