canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c = canvas.getContext("2d");

colorArray = [
    '#447F70',
    '#65A380',
    '#9CC2AF',
    '#C5DFC5'
]

function Triangle(x1,y1,x2,y2,x3,y3,dx1,dy1,dx2,dy2,dx3,dy3){
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.y1 = y1;
    this.y2 = y2;
    this.y3 = y3;
    this.dx1 = (Math.random() - 0.5) * dx1;
    this.dx2 = (Math.random() - 0.5) * dx2;
    this.dx3 = (Math.random() - 0.5) * dx3;
    this.dy1 = (Math.random() - 0.5) * dy1;
    this.dy2 = (Math.random() - 0.5) * dy2;
    this.dy3 = (Math.random() - 0.5) * dy3;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.moveTo(this.x1,this.y1);
        c.lineTo(this.x2,this.y2);
        c.lineTo(this.x3,this.y3);
        c.lineTo(this.x1,this.y1);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function(){
        if(this.x1 < 0 || this.x1 > innerWidth){
            this.dx1 = -this.dx1;
        }
        if(this.x2 < 0 || this.x2 > innerWidth){
            this.dx2 = -this.dx2;
        }
        if(this.x3 < 0 || this.x3 > innerWidth){
            this.dx3 = -this.dx3;
        }
        if(this.y1 < 0 || this.y1 > innerHeight){
            this.dy1 = -this.dy1;
        }
        if(this.y2 < 0 || this.y2 > innerHeight){
            this.dy2 = -this.dy2;
        }
        if(this.y3 < 0 || this.y3 > innerHeight){
            this.dy3 = -this.dy3;
        }
        this.x1 = this.x1 + this.dx1;
        this.x2 = this.x2 + this.dx2;
        this.x3 = this.x3 + this.dx3;
        this.y1 = this.y1 + this.dy1;
        this.y2 = this.y2 + this.dy2;
        this.y3 = this.y3 + this.dy3;
        this.draw();
    }
}

var traingleArray = [];
for(var i=0;i<5;i++){
    var x1 = Math.random() * 50;
    var x2 = Math.random() * 50;
    var x3 = Math.random() * 50;
    var y1 = Math.random() * 50;
    var y2 = Math.random() * 50;
    var y3 = Math.random() * 50;
    var dx1 = Math.random() * 50;
    var dx2 = Math.random() * 50;
    var dx3 = Math.random() * 50;
    var dy1 = Math.random() * 50;
    var dy2 = Math.random() * 50;
    var dy3 = Math.random() * 50;
    traingleArray.push(new Triangle(x1,y1,x2,y2,x3,y3,dx1,dy1,dx2,dy2,dx3,dy3));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<traingleArray.length;i++){
        traingleArray[i].update();
    }
}


animate();