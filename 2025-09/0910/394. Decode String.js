/**
 * @param {string} s
 * @return {string}
 */
// 숫자 stack, 문자열 stack을 따로 나누지 않음 
//"[" , "]" 괄호까지 다 stack에 넣기! 
var decodeString = function (s) {
  let stack = []
  for (const char of s) {
      if (char !== "]") {
          stack.push(char)
          continue
      }
      // char이 "]" 일때 stack 하나씩 꺼내서 확인
      //일단 문자열 확보

      let str = '';
      let cur = stack.pop()
      while (cur !== '[') {
          str = cur + str;
          cur = stack.pop()
      }

      let num = '';
      cur = stack.pop()
      while (!isNaN(Number(cur))) {
          num = cur + num
          cur = stack.pop()
      }
      stack.push(cur)
      let middleStr = str.repeat(Number(num))
      console.log(middleStr)
      stack.push(middleStr)
  }
  return stack.join('')
};