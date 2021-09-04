class Circle{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            'restitution':0.3,
          'friction':0.5,
          'density':0.8,
        }
        this.image = loadImage("paper.png")
        this.radius = radius;
    this.body = Bodies.circle(x,y,30,options);
World.add(world, this.body);
}
display(){
var pos = this.body.position;
push()
translate(pos.x,pos.y)
console.log("hello")
imageMode(RADIUS)
image(this.image,0,0,this.radius,this.radius);
pop()
}
}