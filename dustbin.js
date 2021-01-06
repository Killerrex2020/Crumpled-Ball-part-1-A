class Dustbin
{
constructor(x,y)
{
   this.x=x;
   this.y=y;
   this.dusbinWidth=200;
   this.Height=100;
   this.wallThickness=20;
   this.angle=0;

   this.bottomBody = Bodies.rectangle(this.x,this.y,this.dusbinWidth,this.wallThickness,{isStatic:true});
   World.add(world,bottomBody);

   this.leftBody = Bodies.rectangle(this.x,this.y,this.Height,this.wallThickness,{isStatic:true});
   world.add(world,leftBody);

   this.rightBody = Bodies.rectangle(this.x,this.y,this.Height,this.wallThickness,{isStatic: true});
   world.add(world,rightBody);

   Matter.Body.setAngle(this.leftWallBody, this.angle);
   Matter.Body.setAngle(this.rightWallBody, this.angle);

   display()
   {
    var posBottom = this.BottomBody.position;
    var posLeft = this.leftWallBody.position;
    var posRight = this.rightWallBody.position;

    push()
    translate(posLeft.x, posLeft.y);
     rectMode(CENTER) 
     //strokeWeight(4); 
     angleMode(RADIANS) 
     fill(255) 
     stroke(255)
      rotate(this.angle)
       rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()
   }
}
}