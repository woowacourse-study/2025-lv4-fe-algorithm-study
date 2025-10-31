// 곡은 1만개
// 장르 종류는 100개 미만

function solution(genres, plays) {
  var answer = [];

  const gr = new Map();
  const grRate = new Map(); // 장르 줄세우기를 위한

  // 장르별로 묶고 index와 그때 plays 확인
  genres.map((genre, index) => {
    if (!gr.has(genre)) {
      // gr에 장르를 갖고 있지 않다면 set
      gr.set(genre, [[index, plays[index]]]);

      grRate.set(genre, plays[index]);
    } else {
      // gr에 장르를 갖고 있다면 추가
      const nest = gr.get(genre);
      nest.push([index, plays[index]]);

      const prev = grRate.get(genre) ?? 0;
      grRate.set(genre, prev + plays[index]);
    }
  });

  // 장르 높은 순으로 정렬
  const sortedGr = Array.from(grRate.entries())
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  // 장르별로 2개씩 뽑기
  for (const k of sortedGr) {
    const songs = gr.get(k);
    const sortedSongs = songs.sort((a, b) => b[1] - a[1]);
    if (sortedSongs[0]) answer.push(sortedSongs[0][0]);
    if (sortedSongs[1]) answer.push(sortedSongs[1][0]);
  }

  return answer;
}
