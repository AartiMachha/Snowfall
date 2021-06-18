class Snow{
    constructor(x,y){
        var options={
        isStatic:false,
    }
    this.x=x;
    this.y=y;
    this.width=75;
    this.height=75;
    this.image = loadImage("snow4.webp");
    this.body= Bodies.rectangle(this.x, this.y, this.width, this.height, options);
   
    World.add(world, this.body);
}
 display(){
     var pos = this.body.position;
     
     push();
     translate(pos.x, pos.y);
     imageMode(CENTER);
     image(this.image, 0, -this.width/2,this.width, this.height);
     pop();
 }
}