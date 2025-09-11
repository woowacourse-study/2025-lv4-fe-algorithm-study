// 균형잡힌 괄호 문자열 : ( 와 )의 개수가 같음
// 올바른 괄호 문자열 : ( 와 )의 괄호의 짝도 모두 맞을 경우

function isCorrect(str) {
  let stack = [];
  for (let ch of str) {
    if (ch === '(') {
      stack.push(ch);
    } else {
      if (!stack.length) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

function solution(w) {
  // 1: 빈 문자열인 경우
  if (!w) return w;

  // 2: 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리
  // 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있음.
  let count = 0;
  let u = '';
  let v = '';

  for (let i = 0; i < w.length; i++) {
    if (w[i] === '(') count++;
    else count--;
    if (count === 0) {
      u = w.slice(0, i + 1);
      v = w.slice(i + 1);
      break;
    }
  }

  // 3: 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행
  // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
  if (isCorrect(u)) {
    return u + solution(v);
  }

  // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
  // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
  let emptyString = '(';
  // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
  emptyString += solution(v);
  // 4-3. ')'를 다시 붙입니다.
  emptyString += ')';
  // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
  emptyString += [...u.slice(1, -1)].map((char) => (char === '(' ? ')' : '(')).join('');
  // 4-5. 생성된 문자열을 반환합니다.
  return emptyString;
}

console.log(solution('(()())()') === '(()())()');
console.log(solution(')(') === '()');
console.log(solution('()))((()') === '()(())()');
