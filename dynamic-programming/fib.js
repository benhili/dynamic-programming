function fib(n) {
    let table = Array(n + 1).fill(0)

    table[1] = 1
    for (let i = 0; i < n; i++) {
        let current = table[i]
        table[i + 1] += current
        table[i + 2] += current
        console.log(table)
    }

    return table[n]
}

console.log(fib(8))