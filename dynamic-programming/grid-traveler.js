const gridTraveller = (width, height, mem = new Map()) => {
	if (width === 1 && height === 1) return 1
	if (width === 0 || height === 0) return 0

	let key = [width, height].sort().join(",")
	if (mem.has(key)) return mem.get(key)

	mem.set(key,
		gridTraveller(width - 1, height, mem) +
		gridTraveller(width, height - 1, mem))

	return mem.get(key)
}

console.log(gridTraveller(380, 380))