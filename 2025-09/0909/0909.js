function solution(s) {
  let answer = s.length // 최소 길이

  let minimumLengthS = s // 비교할 최소 길이 문자열
  for (let pressCnt = 1; pressCnt <= s.length; pressCnt += 1) {
    // 1개부터 s개까지 압축 시도
    let copiedS = s // 복사본
    let pressedS = "" // 압축된 문자열

    let char = copiedS.slice(0, pressCnt) // 비교할 문자
    let cnt = 0 // 압축 횟수

    while (copiedS.length > 0) {
      // 복사본이 남아있을 때까지
      if (char === copiedS.slice(0, pressCnt)) {
        // 같으면
        cnt += 1 // 압축 횟수 증가
        copiedS = copiedS.slice(pressCnt) // 복사본에서 자르기
      } else {
        // 다르면
        pressedS += (cnt > 1 ? cnt.toString() : "") + char // 압축된 문자열에 추가
        char = copiedS.slice(0, pressCnt) // 비교할 문자 변경
        cnt = 0 // 압축 횟수 초기화
      }

      if (copiedS.length == 0) {
        // 복사본이 없으면
        pressedS += (cnt > 1 ? cnt.toString() : "") + char // 압축된 문자열에 추가
      }
    }

    if (pressedS.length < minimumLengthS.length) {
      // 더 짧아졌으면
      answer = pressedS.length // 최소 길이 갱신
      minimumLengthS = pressedS // 비교할 최소 길이 문자열 갱신
    }
  }

  return answer
}
