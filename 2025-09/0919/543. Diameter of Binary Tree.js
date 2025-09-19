/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0; // 트리의 지름(가장 긴 경로)을 저장

  function dfs(node) {
    if (!node) return 0;

    // 왼쪽/오른쪽 서브트리 깊이 구하기
    const left = dfs(node.left);
    const right = dfs(node.right);

    // 현재 노드를 "지나는" 경로 길이로 diameter 갱신
    diameter = Math.max(diameter, left + right);

    // 부모 노드에게는 더 깊은 쪽 + 1 반환
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return diameter;
};
