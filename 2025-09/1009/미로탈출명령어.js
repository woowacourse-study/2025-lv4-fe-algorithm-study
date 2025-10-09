const DIRECTION = [
  [1, 0, "d"],
  [0, -1, "l"],
  [0, 1, "r"],
  [-1, 0, "u"],
]

function solution(n, m, x, y, r, c, k) {
  var answer = ""

  function dfs(path, cx, cy) {
    if (answer !== "") return
    if (!getDist(k - path.length, cx, cy)) return

    if (path.length === k) {
      if (cx === r - 1 && cy === c - 1 && answer === "") {
        answer = path
      }
      return
    }

    for (let i = 0; i < 4; i += 1) {
      const [dx, dy, dir] = DIRECTION[i]
      const nx = cx + dx
      const ny = cy + dy

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        dfs(path + dir, nx, ny)
      }
    }
  }

  const targetDist = k - (Math.abs(r - x) + Math.abs(c - y))
  if (targetDist < 0 || targetDist % 2 !== 0) {
    return "impossible"
  }

  dfs("", x - 1, y - 1)

  function getDist(rest, x, y) {
    const targetDist = rest - (Math.abs(r - 1 - x) + Math.abs(c - 1 - y))
    if (targetDist < 0 || targetDist % 2 !== 0) {
      return false
    }
    return true
  }

  return answer
}
