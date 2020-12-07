class BlockClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':100,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
       stroke(0)
        rect(0, 0, this.width, this.height);
        pop();
      }
}