class Paper{
    constructor(x, y){
        var options_paper = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2  
        }
        this.body = Bodies.circle(x, y, 20,options_paper);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("DarkCyan")
        ellipse(pos.x, pos.y, 20, 20);
    }
}