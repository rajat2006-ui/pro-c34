class Chain {
    constructor(body1,body2,offsetX,offsetY){
        this.xOffset=offsetX;
        this.yOffset=offsetY;
        var option={bodyA:body1,
            bodyB:body2,
            pointA:{x:this.xOffset,
                    y:this.yOffset},
           // pointA:{x:0,y:0},
            stiffness:0.7,
            lenght:25}

            this.chain=Constraint.create(option);
            World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        push();
        strokeWeight(5)
        line(pointA.x+this.xOffset,pointA.y,pointB.x,pointB.y);
        pop();
    }
}