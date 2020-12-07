class JoinClass{
  constructor(bodyA,pointB){
var properties={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.007,
    length: 50
}
   this.pointB = pointB;
   this.join = Constraint.create(properties);
   World.add(world,this.join);
  }
  fly() {
    this.join.bodyA = null;
   }

 display(){
if(this.join.bodyA){

    var pointA = this.join.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(6);
   stroke(48,22,8);
   line(pointA.x, pointA.y-25, pointB.x, pointB.y);
//   pop();
}
pop();

 }



}