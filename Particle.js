class Particle {
	constructor(param = {}) {
		this.position = new Vector(param.x ?? 0, param.y ?? 0);
		this.speed = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);

		this.forces = [];

		this.drawSpeed = param.drawSpeed ?? true;
		this.drawForce = param.drawForce ?? true;

		this.mass = param.mass ?? 1;
	}

	get force() {
		return Vector.get().add(...this.forces);
	}

	get r() {
		return (this.mass / (Math.PI * P)) ** 0.5;
	}

	draw(canvas) {
		canvas.drawCircle({
			x: this.position.x,
			y: this.position.y,
			r: this.r,
			fillStyle: "black",
		});

		if (this.drawSpeed) {
			canvas.drawLine({
				x1: this.position.x,
				y1: this.position.y,
				x2: this.position.x + this.speed.x,
				y2: this.position.y + this.speed.y,
				lineWidth: 1,
				strokeStyle: "blue",
			});
		}

		if (this.drawForce) {
			const force = this.force;

			canvas.drawLine({
				x1: this.position.x,
				y1: this.position.y,
				x2: this.position.x + force.x,
				y2: this.position.y + force.y,
				lineWidth: 1,
				strokeStyle: "red",
			});
		}
	}
}
