const canvas = Id('canvas')
const ctx = canvas.getContext('2d');

function Resize(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

Resize()

var Lines = []

for (let i=0;i<30;i++){

    Lines.push(new Line(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*400+100, Math.random()*3+2, Math.random()*0.4+0.05))
}

const loop = () => {

    Resize()

    ctx.fillStyle = '#C70000';
    ctx.fillRect(0,0,canvas.width, canvas.height);

    ctx.lineCap = "round";

    for (let i=0; i<Lines.length; i++){

        var line = Lines[i]
        line.draw()

        if (line.y > canvas.height+line.le/Math.sqrt(2)){

            line.y = 0
        }

        if (line.x < -line.le/Math.sqrt(2)){

            line.x = canvas.width
        }

    }

    if (window.innerWidth < 800){
        Class('navbar')[0].style.transform =  nav? 'translateX(0vw)' : 'translateX(-105vw)'
    }else{
        Class('navbar')[0].style.transform = 'translateX(0vw)'
    }

}

function Line(x,y,length, speed, alpha){

    this.x = x
    this.y = y
    this.le = length
    this.speed = speed
    this.alpha = alpha
    this.up = Math.random()>0.5?true:false

    this.draw = function(){

        ctx.globalAlpha = this.alpha
        ctx.strokeStyle = '#FF7C00'
        ctx.lineWidth = this.alpha * 80
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x+this.le/Math.sqrt(2), this.y-this.le/Math.sqrt(2))
        ctx.stroke()
        ctx.globalAlpha = 1

        this.x -= this.speed
        this.y += this.speed

        if (this.le > 500){

            this.up = false
        }else if (this.le < 100){

            this.up = true
        }

        if (this.up){

            this.le += 2
        }else{

            this.le -= 2
        }
    }
}

setInterval(loop, 1000/60)

var nav = false;

Id('navfab').onclick = () => {

    nav = !nav;


}