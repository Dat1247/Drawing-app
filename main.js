const canvas = document.querySelector("#canvas");
const decrease = document.querySelector("#decrease");
const sizeBtn = document.querySelector("#size");
const increase = document.querySelector("#increase");
const colorBtn = document.querySelector("#color");
const clearAll = document.querySelector("#clearAll");
const ctx = canvas.getContext("2d");

let size = 10;
let color = colorBtn.value;
let isPressed = false;
let x = undefined;
let y = undefined;

sizeBtn.innerText = size;

const drawCircle = (x, y) => {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI);

	ctx.fillStyle = color;
	ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;
		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);
		x = x2;
		y = y2;
	}
});

clearAll.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
decrease.addEventListener("click", () => {
	size -= 1;
	if (size < 5) {
		size = 5;
	}
	sizeBtn.innerText = size;
});
increase.addEventListener("click", () => {
	size += 1;
	if (size > 30) {
		size = 30;
	}
	sizeBtn.innerText = size;
});
colorBtn.addEventListener("change", (e) => {
	color = e.target.value;
});
