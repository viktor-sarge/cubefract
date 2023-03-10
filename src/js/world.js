import fractal from "./objects/fractal";
import { randInt } from "./utils/helper";

class world {
	constructor() {
		this.init = false;
		this.paused = true;
		this.objects = [];
		this.nrOfFractals = 1;
		this.fractalSizeMin = 200;
		this.fractalSizeMax = 300;
	}

	doInit() {
		this.canvas = document.getElementById('myCanvas');
		this.ctx = this.canvas.getContext('2d');
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		for (let i = 0; i < randInt(1,this.nrOfFractals); i++) {
			this.populate();
		};
		this.init = true;
	};

	populate() {
		const size = randInt(this.fractalSizeMin, this.fractalSizeMax);
		// Use the two rows below for random positions instead of a centered position
		// const x = randInt(size * 1.5, this.canvas.width - size * 1.5);
		// const y = randInt(size * 1.5, this.canvas.height - size * 1.5);
		const x = this.canvas.width / 2 - size/2;
		const y = this.canvas.height / 2 - size/2;
		this.objects.push(new fractal(x,y,size,0))
	}

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