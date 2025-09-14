function solution(str1, str2) {
  var answer = '';
  const str1arr = str1.split('');
  const str2arr = str2.split('');

  for (let i = 0; i < str1arr.length; i++) {
    str1arr[i] += str2arr[i];
  }
  return str1arr.join('');
}
