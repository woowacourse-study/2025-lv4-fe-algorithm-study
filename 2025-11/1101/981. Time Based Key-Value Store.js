var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  this.map.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return '';

  const arr = this.map.get(key);
  let left = 0;
  let right = arr.length - 1;
  let res = '';

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid][0] <= timestamp) {
      res = arr[mid][1]; // 후보 값
      left = mid + 1; // 더 큰 timestamp를 찾아봄
    } else {
      right = mid - 1; // 작거나 같은 timestamp를 찾아봄
    }
  }

  return res;
};
