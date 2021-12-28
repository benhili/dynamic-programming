function trap(height) {
    let left = Array(height.length)
    let leftMax = 0

    for (let i = 0; i < height.length; i++) {
        current = height[i]
        leftMax = Math.max(leftMax, height[i])
        left[i] = leftMax
    }

    let right = Array(height.length)
    let rightMax = 0

    for (let i = height.length - 1; i >= 0; i--) {
        current = height[i]
        rightMax = Math.max(rightMax, current)
        right[i] = rightMax
    }

    let water = Array(height.length)

    for (let i = 0; i < height.length; i++) {
        let l = left[i]
        let r = right[i]

        water[i] = Math.min(l, r) - height[i]
    }

    console.log(
        "\n",
        "left:  ", left, "\n",
        "right: ", left, "\n",
        "height:", left, "\n",
        "water: ", left, "\n")

    return water.reduce((a, b) => a + b)
}


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

console.log(trap(height)) // 6