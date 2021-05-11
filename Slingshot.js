class Slingshot
{
     constructor(bodyA,pointB)
     {
         var option = 
         {
             bodyA:bodyA,pointB:pointB,length:5,stiffness:0.1
         }
            
         this.sling = Matter.Constraint.create(option) 
         World.add(world,this.sling)
     }

     fly()
     {
         this.sling.bodyA = null;
     }

     display()
     {
         if(this.sling.bodyA !== null)
         {
         stroke("black")
         strokeWeight(4)
         line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
         }
     }

     

    
}