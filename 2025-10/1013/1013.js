/**
 * 1번째 풀이
 * 테스트 케이스 통과
 * 효율성 실패
 */
function solution(participant, completion) {
  let failedToFinishPeople = [...participant];

  completion.forEach((person) => {
    const findPersonIndex = failedToFinishPeople.findIndex(
      (el) => person === el
    );
    failedToFinishPeople.splice(findPersonIndex, 1);
  });

  return failedToFinishPeople[0];
}

/**
 * 2번째 풀이
 * 테스트 케이스 통과
 * 효율성 통과
 */
function solution(participant, completion) {
  const dist = new Map();

  participant.forEach((person) => {
    dist.set(person, (dist.get(person) || 0) + 1);
  });

  completion.forEach((person) => {
    dist.set(person, (dist.get(person) || 0) - 1);
  });

  let result = "";
  dist.forEach((count, person) => {
    console.log(count, person);
    if (count === 1) {
      result = person;
      return;
    }
  });
  return result;
}
