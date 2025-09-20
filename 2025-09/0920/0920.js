function gridlandMetro(n, m, k, track) {
  const total = n * m;
  let count = 0n;
  let trackArray = {};

  for (const pont of track) {
    const [row, c1, c2] = pont;
    if (trackArray[row] === undefined) {
      trackArray[row] = [[c1, c2]];
    } else {
      trackArray[row].push([c1, c2]);
    }
  }

  for (let key of Object.keys(trackArray)) {
    const sortedTracks = trackArray[key].sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      return a[1] < b[1] ? -1 : 1;
    });

    let [start, end] = sortedTracks[0];
    for (let i = 1; i < sortedTracks.length; i++) {
      const [ss, ee] = sortedTracks[i];
      if (ss <= end + 1n) {
        end = end > ee ? end : ee;
      } else {
        count += end - start + 1n;
        start = ss;
        end = ee;
      }
    }
    count += end - start + 1n;
  }

  return (total - count).toString();
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().trim().split(" ");

  const n = BigInt(firstMultipleInput[0]); //여기랑
  const m = BigInt(firstMultipleInput[1]); //여기랑
  const k = parseInt(firstMultipleInput[2], 10);

  let track = Array(k);
  for (let i = 0; i < k; i++) {
    track[i] = readLine()
      .trim()
      .split(" ")
      .map((v) => BigInt(v)); //여기랑
  }

  const result = gridlandMetro(n, m, k, track);

  ws.write(result + "\n");
  ws.end();
}
