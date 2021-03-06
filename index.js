/**
 * Easing equations
 * @param t current time
 * @param b beginning value
 * @param c change in value
 * @param d duration
 * @returns {*}
 */

function linear(t, b, c, d) {
	return c * t / d + b;
}

function easeInQuad(t, b, c, d) {
	t /= d;
	return c * Math.pow(t, 2) + b;
}

function easeOutQuad(t, b, c, d) {
	t /= d;
	return - c * t * (t - 2) + b;
}

function easeInOutQuad(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(t, 2) + b;

	t--;
	return - c / 2 * (t * (t - 2) - 1) + b;
}

function easeInCubic(t, b, c, d) {
	t /= d;
	return c * Math.pow(t, 3) + b;
}

function easeOutCubic(t, b, c, d) {
	t /= d;
	t--;
	return c * (Math.pow(t, 3) + 1) + b;
}

function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(t, 3) + b;

	t -= 2;
	return c / 2 * (Math.pow(t, 3) + 2) + b;
}

function easeInQuart(t, b, c, d) {
	t /= d;

	return c * Math.pow(t, 4) + b;
}

function easeOutQuart(t, b, c, d) {
	t /= d;
	t--;
	return - c * (Math.pow(t, 4) - 1) + b;
}

function easeInOutQuart(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(t, 4) + b;

	t -= 2;
	return - c / 2 * (Math.pow(t, 4) - 2) + b;
}

function easeInQuint(t, b, c, d) {
	t /= d;
	return c * Math.pow(t, 5) + b;
}

function easeOutQuint(t, b, c, d) {
	t /= d;
	t--;

	return c * (Math.pow(t, 5) + 1) + b;
}

function easeInOutQuint(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(t, 5) + b;

	t -= 2;
	return c / 2 * (Math.pow(t, 5) + 2) + b;
}

function easeInSine(t, b, c, d) {
	return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

function easeOutSine(t, b, c, d) {
	return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

function easeInOutSine(t, b, c, d) {
	return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

function easeInExpo(t, b, c, d) {
	return c * Math.pow(2, 10 * (t / d - 1)) + b;
}

function easeOutExpo(t, b, c, d) {
	return c * (- Math.pow(2, - 10 * t / d) + 1) + b;
}

function easeInOutExpo(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;

	t--;
	return c / 2 * (- Math.pow(2, - 10 * t) + 2) + b;
}

function easeInCirc(t, b, c, d) {
	t /= d;
	return - c * (Math.sqrt(1 - Math.pow(t, 2)) - 1) + b;
}

function easeOutCirc(t, b, c, d) {
	t /= d;
	t--;
	return c * Math.sqrt(1 - Math.pow(t, 2)) + b;
}

function easeInOutCirc(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return - c / 2 * (Math.sqrt(1 - Math.pow(t, 2)) - 1) + b;

	t -= 2;
	return c / 2 * (Math.sqrt(1 - Math.pow(t, 2)) + 1) + b;
}

module.exports = {
	linear: linear,
	easeInQuad: easeInQuad,
	easeOutQuad: easeOutQuad,
	easeInOutQuad: easeInOutQuad,
	easeInCubic: easeInCubic,
	easeOutCubic: easeOutCubic,
	easeInOutCubic: easeInOutCubic,
	easeInQuart: easeInQuart,
	easeOutQuart: easeOutQuart,
	easeInOutQuart: easeInOutQuart,
	easeInQuint: easeInQuint,
	easeOutQuint: easeOutQuint,
	easeInOutQuint: easeInOutQuint,
	easeInSine: easeInSine,
	easeOutSine: easeOutSine,
	easeInOutSine: easeInOutSine,
	easeInExpo: easeInExpo,
	easeOutExpo: easeOutExpo,
	easeInOutExpo: easeInOutExpo,
	easeInCirc: easeInCirc,
	easeOutCirc: easeOutCirc,
	easeInOutCirc: easeInOutCirc
};
