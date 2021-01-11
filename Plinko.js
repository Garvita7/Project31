class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
         }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
    }    

    display(){
        push();
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10, 10);
        pop();
    }

    }