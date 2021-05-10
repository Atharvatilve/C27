class Slingshot{
constructor(b1,b2){
    var options = {
        bodyA:b1,
        bodyB:b2,
        length:20,
        stiffness:0.04
    }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
}
display(){

    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;
    strokeWeight(3);
    line(pointA.x, pointA.y,pointB.x,pointB.y);

}
}