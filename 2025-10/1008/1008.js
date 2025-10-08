function solution(cap, n, deliveries, pickups) {
  var answer = 0;
  let deliverySum = 0;
  let pickupSum = 0;

  for (let i = n - 1; i >= 0; i--) {
    deliverySum += deliveries[i];
    pickupSum += pickups[i];
    let cnt = 0;
    while (deliverySum > 0 || pickupSum > 0) {
      deliverySum -= cap;
      pickupSum -= cap;
      cnt++;
    }
    answer += cnt * (i + 1) * 2;
  }

  return answer;
}
