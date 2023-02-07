import cube from "./cube";
import { randInt } from "../utils/helper";
import { dockpoints } from "./dockpoints";
export default class fractal {
	constructor(x=500, y=100, side=200, rotation=0) {
		this.x = x;
		this.y = y;
		this.side = side;
		this.rotation = rotation;
		this.rotationSpeed = randInt(-10,10)/10+0.05;
		this.dockpoints = new dockpoints(this.x, this.y, this.side)
	}

	tick() {
		this.rotation += this.rotationSpeed;
	}

	plot(ctx) {
		ctx.save()
		ctx.translate(this.x + this.side / 2, this.y + this.side / 2);
		ctx.rotate(this.rotation * Math.PI / 180);
		ctx.translate(-(this.x + this.side / 2), -(this.y + this.side / 2));
		this.dockpoints.plot(ctx);
		ctx.restore();
	}
}