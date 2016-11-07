export const getRandom = (min, max) => {
	const random = Math.random() * (max - min) + min;
	console.log(random);
	return random;
}