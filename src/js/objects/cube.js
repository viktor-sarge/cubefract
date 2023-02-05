export default class cube {
	constructor(x=500, y=100, side=200) {
		this.x = x;
		this.y = y;
		this.side = side;
	}

	plot(ctx) {
		ctx.fillStyle = '#EFF1F3';
		ctx.fillRect(this.x, this.y, this.side, this.side);
		ctx.fillStyle = this.colour;
		ctx.fillRect(this.x+1, this.y+1, this.side-2, this.side-2);
	}
}