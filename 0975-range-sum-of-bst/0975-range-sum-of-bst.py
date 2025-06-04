class Solution(object):
    def rangeSumBST(self, root, low, high):
        return self.dfs(root, low, high)

    def dfs(self, node, low, high):
        if not node:
            return 0

        total = 0
        if low <= node.val <= high:
            total += node.val
        
        if node.val > low:
            total += self.dfs(node.left, low, high)
        
        if node.val < high:
            total += self.dfs(node.right, low, high)
        
        return total