import cube from "./objects/cube";
import { randInt } from "./utils/helper";

class world {
	constructor() {
		this.init = false;
		this.paused = true;
		this.objects = [
			new cube(
				randInt(10,200), 
				randInt(10,200),
				randInt(20,100),
				0
			)]
	}

	doInit() {
		this.canvas = document.getElementById('myCanvas');
		this.ctx = this.canvas.getContext('2d');
	};

	tick() {
		this.objects.forEach(item => item.tick())
	}

	clearCanvas = () => {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	plot() {
		this.clearCanvas();
		this.objects.forEach(item => item.plot(this.ctx))
	}
	toggleState() {
		if(!this.init) {this.doInit();}
		this.paused = !this.paused;
		this.animationLoop();
	}
	animationLoop = () => {
		if(!this.paused) {
			this.tick();
			this.plot();
			window.requestAnimationFrame(this.animationLoop);
		}
	}
};

export default world;