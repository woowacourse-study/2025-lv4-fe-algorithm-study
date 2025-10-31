function solution(arr) {
  var answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const front = arr[i - 1];
    // console.log(answer)
    // console.log("i",i, "front",front)
    if (front !== arr[i]) answer.push(arr[i]);
  }

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')

  return answer;
}
