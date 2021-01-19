class ball {
    constructor(x, y, width, height) {
      var options = {
          'restitution':4,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      fill(255);
      ellipse(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  