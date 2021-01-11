class Particles{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction: 1
         }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.color = color(random(225,225),random(0,225),random(0,225));
        World.add(world,this.body);
    }    

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10, 10);
    }


    }