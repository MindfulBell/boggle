export const getRandom = (min, max) => {
	const random = Math.floor((Math.random() * max) + min);
	return random;
}