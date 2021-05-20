class SlingShot {
    constructor (bodyX,pointY) {
         var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.04,
            length : 10
        }
        
        this.slingShot = new Constraint.create (options);
        World.add(myWorld,this.slingShot);
    }

    display () {

        if(this.slingShot.bodyA != null){
            var point1 = this.slingShot.bodyA.position;
            var point2 =  this.slingShot.pointB;
          if(point1.x < 220){
            
            push();
            strokeWeight(7);
            stroke(42,28,8);
            //line(point1.x,point1.y,point2.x,point2.y);
            line(point1.x-20,point1.y,point2.x-10,point2.y);
            line(point1.x-20,point1.y,point2.x+30,point2.y-3);
            image(this.sling3, point1.x-30, point1.y-10, 15, 30);
            pop();

          }else{
            push();
            strokeWeight(5);
            stroke(42,28,8);
            //line(point1.x,point1.y,point2.x,point2.y);
            line(point1.x-25,point1.y,point2.x-10,point2.y);
            line(point1.x+20,point1.y,point2.x+30,point2.y-3);
            image(this.sling3, point1.x+25, point1.y-10, 15, 30);
            pop();

          }
        }
        
    }

    fly()  {

     this.slingShot.bodyA = null;

    }


}