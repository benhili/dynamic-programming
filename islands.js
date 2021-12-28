/**
 * @param {character[][]} grid
 * @return {number}
 */
const genNeighbours = (i, j, width, height) => {
    let neighbours = []

    let left = j - 1 >= 0
    let up = i - 1 >= 0
    let down = i + 1 < height
    let right = j + 1 < width

    if (left) {
        neighbours.push([i, j - 1])
    }

    if (right) {
        neighbours.push([i, j + 1])
    }

    if (down) {
        neighbours.push([i + 1, j])
    }

    if (up) {
        neighbours.push([i - 1, j])
    }


    return neighbours
}

const walk = (i, j, grid, visited) => {
    visited[i][j] = true
    let neighbours = genNeighbours(i, j, grid[0].length, grid.length)

    for (let neighbour of neighbours) {
        let [y, x] = neighbour
        if (grid[y][x] === "1" && !visited[y][x]) {
            walk(y, x, grid, visited)
        }
    }
}

const numIslands = function (grid) {
    let visited = Array(grid.length).fill().map(_ => Array(grid[0].length).fill(false))
    let islands = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let point = grid[i][j]
            if (!visited[i][j] && point === "1") {
                walk(i, j, grid, visited)
                islands += 1
            }
        }
    }

    return islands
};


let input = [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]
console.table(input)
console.log(numIslands(input))