// /**
//  * Canvas objects: Rectangles, lines, arcs (circles), Bezier curves, Images, Texts
//  */


// var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // c = context
// var c = canvas.getContext('2d') // returning a drawing object

// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100,100,100,100);
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(400,100,100,100);
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(300,300,100,100);

// // Lines
// c.beginPath(); // separates two lines from connecting to each other
// c.moveTo(100,300);
// c.lineTo(350,150);
// c.strokeStyle = "rgba(255,0,0,0.5)";
// c.stroke();

// c.beginPath();
// c.moveTo(200,300);
// c.lineTo(800,150);
// c.strokeStyle = "rgba(255,0,255,0.5)";
// c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(300,300,30,Math.PI/4,Math.PI, false);
// c.stroke();

// c.beginPath();
// c.arc(400,400,30,0,Math.PI*2, false);
// c.strokeStyle = 'rgba(0,255,0,1)';
// c.stroke();

// for (var i = 0; i < 100; i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2, false);
//     c.strokeStyle = 'rgba(0,0,255,1)';
//     c.stroke();
// }

// // Bezier Curves
// c.beginPath();
// c.moveTo(30,30);
// c.bezierCurveTo(30,50,100,50,100,30);
// c.strokeStyle = 'rgba(255,0,0,1)';
// c.stroke();

// // text
// c.font = "30px Arial";
// c.fillText("Hello World!",10,50);

// // text - center
// c.font = "30px Arial";
// c.fillStyle = "red";
// c.textAlign = "center";
// c.fillText("Hello World!",canvas.width/2, canvas.height/2);

// // image
// // c.drawImage(img, 10, 10);


// Animation

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

colorArray = [
    '#000F3D',
    '#D13239',
    '#717073',
    '#1B3664'
]

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.dx = (Math.random() - 0.5) * dx;
    this.dy = (Math.random() - 0.5) * dy;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y +=this.dy;

        // interactivity with mouse (Enlarging circles)
        if(mouse.x - this.x < 50 && mouse.x-this.x > -50
            && mouse.y -this.y < 50 && mouse.y -this.y > -50){
                if(this.radius < 50){
                    this.radius += 1;
                }
        }else if(this.radius > 2){
            this.radius -= 1;
        }

        // if(mouse.x - this.x < 50 && mouse.x - this.x > 0){
        //     if(this.x > this.radius){
        //         this.x -= 1;
        //     }
        //     if(mouse.y - this.y < 50 && mouse.y - this.y >0){
        //         if(this.y > this.radius){
        //             this.y -=1;
        //         }
        //     }else if(this.y < innerHeight - this.radius){
        //         this.y +=1;
        //     }
        // }else if(this.x - mouse.x < 50 && this.x - mouse.x > 0){
        //     if(this.x < innerWidth - this.radius){
        //         this.x += 1;
        //     }
        //     if(this.y - mouse.y < 50 && this.y < innerHeight - radius){
        //         this.y += 1;
        //     }else if(mouse.y - this.y < 50 &&  mouse.y - this.y > 0 && this.y > 0){
        //         this.y -= 1;
        //     }
        // }

        
        this.draw();
    }
}

var circleArray = [];

function init(){
    circleArray = [];
    for(var i=0;i<1000;i++){
        radius = 30;
        x = Math.random() * (innerWidth - radius * 2) + radius;
        y = Math.random() * (innerHeight - radius * 2) + radius;
        dx = (Math.random() - 0.5) * 10;
        dy = (Math.random() - 0.5) * 10;
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
}


function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
init();
animate();