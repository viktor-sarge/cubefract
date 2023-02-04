export default class cube {
	constructor(x=500, y=100, side=200, height=200, rotation=0) {
		this.x = x;
		this.y = y;
		this.side = side;
		this.rotation = rotation;
	}

	tick() {
		this.rotation += 1;
	}

	plot(ctx) {
		ctx.save()
		ctx.translate(this.x + this.side / 2, this.y + this.side / 2);
		ctx.rotate(this.rotation * Math.PI / 180);
		ctx.translate(-(this.x + this.side / 2), -(this.y + this.side / 2));
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.side, this.side);
		ctx.fillStyle = this.colour;
		ctx.fillRect(this.x+1, this.y+1, this.side-2, this.side-2);
		ctx.restore();
	}
}