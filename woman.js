class Woman{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
        this.height=height;
        this.width = width;
		this.image=loadImage("woman.jpg")
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,this.width,this.height);
		pop()
 }
}