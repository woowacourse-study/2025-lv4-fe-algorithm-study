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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (node, min, max) => {
    if (!node) return true; // null이면 유효

    // 현재 노드가 범위를 벗어나면 false
    if (node.val <= min || node.val >= max) return false;

    // 왼쪽은 max를 제한, 오른쪽은 min을 제한
    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };

  return helper(root, -Infinity, Infinity);
};
