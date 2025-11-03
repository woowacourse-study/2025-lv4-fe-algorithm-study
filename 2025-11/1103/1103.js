function solution(sizes) {
  var answer = 0;
  let w = 0;
  let h = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      const temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
    w = Math.max(w, sizes[i][0]);
    h = Math.max(h, sizes[i][1]);
  }
  answer = w * h;
  return answer;
}
